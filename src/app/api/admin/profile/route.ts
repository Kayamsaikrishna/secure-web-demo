import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User, Role, Gender, MaritalStatus } from "@prisma/client";

interface SessionUser extends Omit<User, 'role'> {
  role: Role;
  id: string;
}

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Check if user is admin
    const sessionUser = session.user as SessionUser;
    if (sessionUser.role !== Role.ADMIN) {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    const userId = sessionUser.id;

    // Fetch admin user data with profile
    const adminUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
      },
    });

    if (!adminUser) {
      return NextResponse.json(
        { error: "Admin user not found" },
        { status: 404 }
      );
    }

    // Structure admin profile data
    const adminProfile = {
      id: adminUser.id,
      fullName: adminUser.profile?.fullName || adminUser.email?.split('@')[0] || "Admin User",
      firstName: adminUser.profile?.firstName || "Admin",
      lastName: adminUser.profile?.lastName || "User",
      email: adminUser.email,
      role: adminUser.role,
      adminLevel: "SUPER_ADMIN", // This could be stored in profile or separate admin table
      permissions: [
        "USER_MANAGEMENT",
        "APPLICATION_MANAGEMENT", 
        "SYSTEM_CONFIG",
        "REPORTS",
        "ANALYTICS"
      ],
      primaryPhone: adminUser.profile?.primaryPhone || "+91-0000000000",
      alternateEmail: adminUser.profile?.alternateEmail,
      lastLogin: new Date().toISOString(), // This could be tracked in a sessions table
      accountCreated: adminUser.createdAt.toISOString(),
      sessionsCount: 142, // This would come from a sessions tracking table
      gender: adminUser.profile?.gender || Gender.PREFER_NOT_TO_SAY,
      dateOfBirth: adminUser.profile?.dateOfBirth || new Date("1985-01-01"),
      nationality: adminUser.profile?.nationality || "Indian"
    };

    return NextResponse.json({
      success: true,
      profile: adminProfile
    });

  } catch (error) {
    console.error("Admin profile fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

interface ProfileUpdateBody {
  firstName: string;
  lastName: string;
  primaryPhone: string;
  alternateEmail: string;
  gender: Gender;
  dateOfBirth: string;
  nationality: string;
}

export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Check if user is admin
    const sessionUser = session.user as SessionUser;
    if (sessionUser.role !== Role.ADMIN) {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    const userId = sessionUser.id;
    const body: ProfileUpdateBody = await req.json();

    // Update admin profile
    const updatedProfile = await prisma.userProfile.upsert({
      where: { userId },
      update: {
        firstName: body.firstName,
        lastName: body.lastName,
        fullName: `${body.firstName} ${body.lastName}`,
        primaryPhone: body.primaryPhone,
        alternateEmail: body.alternateEmail,
        gender: body.gender,
        dateOfBirth: new Date(body.dateOfBirth),
        nationality: body.nationality,
      },
      create: {
        userId,
        firstName: body.firstName,
        lastName: body.lastName,
        fullName: `${body.firstName} ${body.lastName}`,
        primaryPhone: body.primaryPhone,
        alternateEmail: body.alternateEmail,
        gender: body.gender || Gender.PREFER_NOT_TO_SAY,
        dateOfBirth: new Date(body.dateOfBirth || "1985-01-01"),
        nationality: body.nationality || "Indian",
        maritalStatus: MaritalStatus.SINGLE, // Using SINGLE as default since PREFER_NOT_TO_SAY is not available
        fatherName: "Admin User",
        motherName: "Admin User",
        dependents: 0,
        preferredLanguage: "English",
        communicationMode: "Email"
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin profile updated successfully",
      profile: updatedProfile
    });

  } catch (error) {
    console.error("Admin profile update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
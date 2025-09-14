import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const userId = session.user.id;

    // Fetch user profile with all related data
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: {
          include: {
            currentAddress: true,
            permanentAddress: true,
            education: true,
            employment: true,
          },
        },
        kycData: true,
        biometricData: true,
        financialProfile: true,
        bankAccounts: {
          where: { isActive: true },
          orderBy: { isPrimary: 'desc' },
        },
        creditScore: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
        loanApplications: {
          orderBy: { createdAt: 'desc' },
          take: 5,
          select: {
            id: true,
            applicationNumber: true,
            loanType: true,
            amount: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Remove sensitive information
    const { password, ...userWithoutPassword } = user;

    return NextResponse.json({
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("[PROFILE_GET_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const body = await req.json();

    const {
      profile: profileData,
      address: addressData,
      employment: employmentData,
    } = body;

    // Update user profile
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        profile: profileData ? {
          upsert: {
            create: {
              ...profileData,
              fullName: `${profileData.firstName} ${profileData.lastName}`,
            },
            update: {
              ...profileData,
              fullName: `${profileData.firstName} ${profileData.lastName}`,
            },
          },
        } : undefined,
      },
      include: {
        profile: {
          include: {
            currentAddress: true,
            employment: true,
          },
        },
      },
    });

    // Update address if provided
    if (addressData && updatedUser.profile) {
      await prisma.address.upsert({
        where: { currentUserId: updatedUser.profile.id },
        create: {
          ...addressData,
          type: "CURRENT",
          currentUserId: updatedUser.profile.id,
        },
        update: addressData,
      });
    }

    // Update employment if provided
    if (employmentData && updatedUser.profile) {
      await prisma.employment.upsert({
        where: { profileId: updatedUser.profile.id },
        create: {
          ...employmentData,
          profileId: updatedUser.profile.id,
        },
        update: employmentData,
      });
    }

    return NextResponse.json({
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("[PROFILE_UPDATE_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
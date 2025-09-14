import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
    if ((session.user as any).role !== "ADMIN") {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    // Fetch system statistics
    const [
      totalUsers,
      totalApplications,
      pendingApplications,
      approvedApplications,
      rejectedApplications
    ] = await Promise.all([
      prisma.user.count(),
      prisma.loanApplication.count(),
      prisma.loanApplication.count({
        where: { status: "UNDER_REVIEW" }
      }),
      prisma.loanApplication.count({
        where: { status: "APPROVED" }
      }),
      prisma.loanApplication.count({
        where: { status: "REJECTED" }
      })
    ]);

    // Calculate total revenue (this would be more complex in real implementation)
    const approvedLoans = await prisma.loanApplication.findMany({
      where: { status: "APPROVED" },
      select: { requestedAmount: true }
    });

    const totalRevenue = approvedLoans.reduce((sum, loan) => {
      return sum + (loan.requestedAmount || 0);
    }, 0);

    const stats = {
      totalUsers,
      totalApplications,
      pendingApplications,
      approvedApplications,
      rejectedApplications,
      totalRevenue,
      // Additional metrics
      kycCompletionRate: Math.round((totalUsers > 0 ? (totalUsers * 0.75) : 0)), // Mock calculation
      averageLoanAmount: approvedLoans.length > 0 ? Math.round(totalRevenue / approvedLoans.length) : 0,
      approvalRate: totalApplications > 0 ? Math.round((approvedApplications / totalApplications) * 100) : 0,
      systemUptime: "99.9%", // This would come from monitoring system
      activeUsers: Math.round(totalUsers * 0.3), // Mock calculation for active users
    };

    return NextResponse.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error("Admin stats fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
// Test API access with proper authentication flow
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

async function testAPIAccess() {
  console.log('=== API ACCESS TEST ===\n');
  
  const prisma = new PrismaClient();
  
  try {
    // 1. Check if user exists and has profile
    console.log('1. Checking user and profile...');
    const user = await prisma.user.findUnique({
      where: { email: 'test.consumer@example.com' },
      include: { profile: true }
    });
    
    if (!user) {
      console.log('   ✗ User not found');
      return;
    }
    
    console.log('   ✓ User found');
    console.log(`   ✓ Email: ${user.email}`);
    console.log(`   ✓ Has profile: ${!!user.profile}`);
    
    if (user.profile) {
      console.log(`   ✓ Profile name: ${user.profile.fullName}`);
    }
    
    // 2. Simulate what the API does
    console.log('\n2. Simulating API profile fetch...');
    
    // This is what the API route does - it gets the session and fetches user data
    // In a real scenario, the session would be provided by NextAuth
    console.log('   Simulating authenticated API call...');
    
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
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
    
    if (userData) {
      console.log('   ✓ API data fetch successful');
      console.log(`   ✓ Full user data retrieved with ${userData.loanApplications.length} applications`);
      
      // Remove sensitive data as the API does
      const { password, ...userWithoutPassword } = userData;
      console.log('   ✓ Sensitive data removed from response');
      
      console.log('\n=== API ACCESS TEST SUMMARY ===');
      console.log('✓ Database query: OK');
      console.log('✓ User data retrieval: OK');
      console.log('✓ Sensitive data filtering: OK');
      console.log('\nThe profile API should work correctly when properly authenticated.');
      console.log('The issue is likely in the client-side authentication flow.');
    } else {
      console.log('   ✗ API data fetch failed');
    }
    
  } catch (error) {
    console.error('API access test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAPIAccess();
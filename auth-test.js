// Test authentication flow
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

async function testAuthentication() {
  console.log('=== AUTHENTICATION TEST ===\n');
  
  const prisma = new PrismaClient();
  
  try {
    // 1. Check if user exists
    console.log('1. Checking user existence...');
    const user = await prisma.user.findUnique({
      where: { email: 'test.consumer@example.com' }
    });
    
    if (!user) {
      console.log('   ✗ User not found');
      return;
    }
    
    console.log('   ✓ User found');
    console.log(`   ✓ Email: ${user.email}`);
    console.log(`   ✓ Role: ${user.role}`);
    
    // 2. Test password verification
    console.log('\n2. Testing password verification...');
    const testPassword = 'TestPass123!';
    const isPasswordValid = await bcrypt.compare(testPassword, user.password);
    
    if (isPasswordValid) {
      console.log('   ✓ Password verification successful');
    } else {
      console.log('   ✗ Password verification failed');
      return;
    }
    
    // 3. Summary
    console.log('\n=== AUTHENTICATION TEST SUMMARY ===');
    console.log('✓ User exists: OK');
    console.log('✓ Password verification: OK');
    console.log('\nYou should be able to log in with:');
    console.log('- Email: test.consumer@example.com');
    console.log('- Password: TestPass123!');
    
  } catch (error) {
    console.error('Authentication test failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testAuthentication();
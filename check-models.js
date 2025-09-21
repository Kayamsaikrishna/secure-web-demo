import { PrismaClient } from '@prisma/client';

async function checkModels() {
  const prisma = new PrismaClient();
  
  try {
    const models = Object.keys(prisma).filter(key => !key.startsWith('_') && !key.startsWith('$'));
    console.log('Available models:', models);
    
    // Check if partner model exists
    console.log('partner model exists:', 'partner' in prisma);
    console.log('Partner model exists:', 'Partner' in prisma);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

checkModels();
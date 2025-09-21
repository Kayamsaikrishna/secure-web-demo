import { PrismaClient } from '@prisma/client';

async function createTestOffer() {
  const prisma = new PrismaClient();
  
  try {
    // First, create a test partner
    const partner = await prisma.partner.create({
      data: {
        name: "Test University",
        type: "UNIVERSITY",
        sector: "EDUCATION_LOAN",
        contactPerson: "John Doe",
        email: "john@testuniversity.com",
        phone: "+919876543210",
        apiKey: "test-api-key-" + Date.now(),
        integrationStatus: "INTEGRATED"
      }
    });
    
    console.log("Created partner:", partner.name);
    
    // Create a marketplace offer
    const offer = await prisma.marketplaceOffer.create({
      data: {
        partnerId: partner.id,
        loanSector: "EDUCATION_LOAN",
        minAmount: 100000,
        maxAmount: 5000000,
        interestRate: 10.5,
        processingFee: 5000,
        tenureOptionsJson: JSON.stringify([12, 24, 36, 48, 60]),
        tagsJson: JSON.stringify(["education", "student", "university"]),
        priority: 1,
        isActive: true
      }
    });
    
    console.log("Created offer:", offer.id);
    
    // Fetch the offer
    const fetchedOffers = await prisma.marketplaceOffer.findMany({
      where: {
        isActive: true
      },
      include: {
        partner: true
      }
    });
    
    console.log("Fetched offers:", fetchedOffers.length);
    if (fetchedOffers.length > 0) {
      console.log("First offer:", {
        id: fetchedOffers[0].id,
        partner: fetchedOffers[0].partner.name,
        minAmount: fetchedOffers[0].minAmount,
        maxAmount: fetchedOffers[0].maxAmount,
        interestRate: fetchedOffers[0].interestRate
      });
    }
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

createTestOffer();
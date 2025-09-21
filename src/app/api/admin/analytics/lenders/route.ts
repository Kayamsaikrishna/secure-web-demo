import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// Mock data - in real implementation, this would query your database
const mockLenderData = [
  { 
    id: 1, 
    name: 'ABC Financial Services', 
    totalLoans: 1245, 
    totalAmount: 25000000, 
    activeLoans: 890, 
    defaultRate: 2.3, 
    sectors: ['Personal', 'Home', 'Vehicle'],
    performance: [
      { month: 'Jan', loans: 95, amount: 1900000 },
      { month: 'Feb', loans: 102, amount: 2100000 },
      { month: 'Mar', loans: 115, amount: 2400000 },
    ]
  },
  { 
    id: 2, 
    name: 'XYZ Credit Union', 
    totalLoans: 980, 
    totalAmount: 18500000, 
    activeLoans: 720, 
    defaultRate: 1.8, 
    sectors: ['Business', 'Education', 'Gold'],
    performance: [
      { month: 'Jan', loans: 78, amount: 1450000 },
      { month: 'Feb', loans: 85, amount: 1650000 },
      { month: 'Mar', loans: 92, amount: 1800000 },
    ]
  },
  { 
    id: 3, 
    name: 'Global Lending Corp', 
    totalLoans: 1560, 
    totalAmount: 32000000, 
    activeLoans: 1120, 
    defaultRate: 3.1, 
    sectors: ['Agriculture', 'Healthcare', 'Microfinance'],
    performance: [
      { month: 'Jan', loans: 120, amount: 2500000 },
      { month: 'Feb', loans: 135, amount: 2800000 },
      { month: 'Mar', loans: 145, amount: 3100000 },
    ]
  },
  { 
    id: 4, 
    name: 'National Bank Ltd', 
    totalLoans: 2100, 
    totalAmount: 45000000, 
    activeLoans: 1650, 
    defaultRate: 1.2, 
    sectors: ['Home', 'Business', 'Vehicle'],
    performance: [
      { month: 'Jan', loans: 165, amount: 3500000 },
      { month: 'Feb', loans: 180, amount: 3800000 },
      { month: 'Mar', loans: 195, amount: 4200000 },
    ]
  },
  { 
    id: 5, 
    name: 'Regional Finance Co', 
    totalLoans: 750, 
    totalAmount: 12000000, 
    activeLoans: 580, 
    defaultRate: 2.7, 
    sectors: ['Personal', 'Education', 'Digital'],
    performance: [
      { month: 'Jan', loans: 60, amount: 950000 },
      { month: 'Feb', loans: 65, amount: 1100000 },
      { month: 'Mar', loans: 70, amount: 1250000 },
    ]
  },
];

export async function GET(request: Request) {
  try {
    // Check if user is admin
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get('timeRange') || 'monthly';
    const sector = searchParams.get('sector') || 'all';

    // In a real implementation, you would:
    // 1. Query the database for lender data
    // 2. Filter by time range and sector
    // 3. Aggregate the data
    // 4. Return the results

    // For now, return mock data
    return NextResponse.json({
      lenders: mockLenderData,
      totalLenders: mockLenderData.length,
      totalLoans: mockLenderData.reduce((sum, lender) => sum + lender.totalLoans, 0),
      totalAmount: mockLenderData.reduce((sum, lender) => sum + lender.totalAmount, 0),
      averageDefaultRate: mockLenderData.reduce((sum, lender) => sum + lender.defaultRate, 0) / mockLenderData.length,
      timeRange,
      sector
    });
  } catch (error) {
    console.error('Error fetching lender analytics:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
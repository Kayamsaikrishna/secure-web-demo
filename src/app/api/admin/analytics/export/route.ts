import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Role } from '@prisma/client';

export async function POST(request: Request) {
  try {
    // Check if user is admin
    const session = await getServerSession(authOptions);
    
    if (!session || session.user.role !== Role.ADMIN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // In a real implementation, this would:
    // 1. Query the database for analytics data
    // 2. Format the data as CSV
    // 3. Return the CSV file

    // For now, return mock CSV data with enhanced information
    const csvData = `Lender Name,Total Loans,Total Amount,Active Loans,Default Rate,Sectors,Avg Loan Amount,Performance Rating
ABC Financial Services,1245,25000000,890,2.3,"Personal, Home, Vehicle",20080,Good
XYZ Credit Union,980,18500000,720,1.8,"Business, Education, Gold",18878,Excellent
Global Lending Corp,1560,32000000,1120,3.1,"Agriculture, Healthcare, Microfinance",20513,Fair
National Bank Ltd,2100,45000000,1650,1.2,"Home, Business, Vehicle",21429,Excellent
Regional Finance Co,750,12000000,580,2.7,"Personal, Education, Digital",16000,Good`;

    // Create headers for CSV download
    const headers = new Headers();
    headers.append('Content-Type', 'text/csv');
    headers.append('Content-Disposition', 'attachment; filename="lender-analytics.csv"');

    return new NextResponse(csvData, {
      status: 200,
      headers: headers
    });
  } catch (error) {
    console.error('Error exporting analytics data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
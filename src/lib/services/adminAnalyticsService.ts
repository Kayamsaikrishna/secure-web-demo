// Admin Analytics Service
// This service handles all data fetching and processing for the admin analytics dashboard

interface Lender {
  id: number;
  name: string;
  totalLoans: number;
  totalAmount: number;
  activeLoans: number;
  defaultRate: number;
  sectors: string[];
  performance: {
    month: string;
    loans: number;
    amount: number;
  }[];
}

interface AnalyticsData {
  lenders: Lender[];
  totalLenders: number;
  totalLoans: number;
  totalAmount: number;
  averageDefaultRate: number;
  timeRange: string;
  sector: string;
}

interface SectorDistribution {
  name: string;
  value: number;
}

interface MonthlyTrend {
  month: string;
  totalLoans: number;
  totalAmount: number;
}

interface PerformanceData {
  name: string;
  performance: number;
}

interface RiskData {
  name: string;
  risk: number;
}

// New interfaces for additional visualizations
interface TreemapData {
  name: string;
  size: number;
  value?: number;
  children?: TreemapData[];
}

interface GrowthData {
  name: string;
  growth: number;
}

interface PerformanceTrendData {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

interface RadialBarData {
  name: string;
  defaultRate: number;
  value?: number;
  [key: string]: string | number | undefined;
}

export class AdminAnalyticsService {
  // Fetch lender analytics data
  static async fetchLenderAnalytics(
    timeRange: string = 'monthly',
    sector: string = 'all'
  ): Promise<AnalyticsData> {
    try {
      // In a real implementation, this would call your API:
      // const response = await fetch(`/api/admin/analytics/lenders?timeRange=${timeRange}&sector=${sector}`);
      // const data = await response.json();
      // return data;

      // For now, return mock data
      const mockData: AnalyticsData = {
        lenders: [
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
        ],
        totalLenders: 5,
        totalLoans: 6635,
        totalAmount: 132500000,
        averageDefaultRate: 2.22,
        timeRange,
        sector
      };

      return mockData;
    } catch (error) {
      console.error('Error fetching lender analytics:', error);
      throw new Error('Failed to fetch lender analytics data');
    }
  }

  // Export analytics data to CSV
  static async exportAnalyticsData(): Promise<Blob> {
    try {
      // In a real implementation, this would call your API to generate and download a CSV:
      // const response = await fetch('/api/admin/analytics/export', { method: 'POST' });
      // const blob = await response.blob();
      // return blob;

      // For now, create a mock CSV
      const csvContent = "Lender Name,Total Loans,Total Amount,Active Loans,Default Rate,Sectors,Avg Loan Amount,Performance Rating\n" +
        "ABC Financial Services,1245,25000000,890,2.3,\"Personal, Home, Vehicle\",20080,Good\n" +
        "XYZ Credit Union,980,18500000,720,1.8,\"Business, Education, Gold\",18878,Excellent\n" +
        "Global Lending Corp,1560,32000000,1120,3.1,\"Agriculture, Healthcare, Microfinance\",20513,Fair\n" +
        "National Bank Ltd,2100,45000000,1650,1.2,\"Home, Business, Vehicle\",21429,Excellent\n" +
        "Regional Finance Co,750,12000000,580,2.7,\"Personal, Education, Digital\",16000,Good\n";
      
      return new Blob([csvContent], { type: 'text/csv' });
    } catch (error) {
      console.error('Error exporting analytics data:', error);
      throw new Error('Failed to export analytics data');
    }
  }

  // Get sector distribution data
  static getSectorDistribution(lenders: Lender[]): SectorDistribution[] {
    const sectorMap: { [key: string]: number } = {};
    
    lenders.forEach(lender => {
      lender.sectors.forEach(sector => {
        sectorMap[sector] = (sectorMap[sector] || 0) + 1;
      });
    });
    
    return Object.entries(sectorMap).map(([name, value]) => ({
      name,
      value
    }));
  }

  // Get top lenders by loan volume
  static getTopLendersByVolume(lenders: Lender[], count: number = 5): Lender[] {
    return [...lenders]
      .sort((a, b) => b.totalAmount - a.totalAmount)
      .slice(0, count);
  }

  // Get lenders with highest default rates
  static getLendersByDefaultRate(lenders: Lender[], count: number = 5): Lender[] {
    return [...lenders]
      .sort((a, b) => b.defaultRate - a.defaultRate)
      .slice(0, count);
  }

  // Get monthly trends across all lenders
  static getMonthlyTrends(lenders: Lender[]): MonthlyTrend[] {
    const trendsMap: { [month: string]: MonthlyTrend } = {};
    
    lenders.forEach(lender => {
      lender.performance.forEach(perf => {
        if (!trendsMap[perf.month]) {
          trendsMap[perf.month] = {
            month: perf.month,
            totalLoans: 0,
            totalAmount: 0
          };
        }
        trendsMap[perf.month].totalLoans += perf.loans;
        trendsMap[perf.month].totalAmount += perf.amount;
      });
    });
    
    return Object.values(trendsMap);
  }

  // Get lenders by sector
  static getLendersBySector(lenders: Lender[], sector: string): Lender[] {
    if (sector === 'all') return lenders;
    return lenders.filter(lender => lender.sectors.includes(sector));
  }

  // Get performance comparison data
  static getPerformanceComparison(lenders: Lender[]): PerformanceData[] {
    return lenders.map(lender => ({
      name: lender.name,
      performance: (lender.totalAmount / lender.totalLoans) // Avg loan amount as performance metric
    }));
  }

  // Get risk assessment data
  static getRiskAssessment(lenders: Lender[]): RiskData[] {
    return lenders.map(lender => ({
      name: lender.name,
      risk: lender.defaultRate
    }));
  }

  // Get loan volume data for visualization
  static getLoanVolumeData(lenders: Lender[]): { name: string; volume: number; loans: number }[] {
    return lenders.map(lender => ({
      name: lender.name,
      volume: lender.totalAmount,
      loans: lender.totalLoans
    }));
  }

  // Get active loans data
  static getActiveLoansData(lenders: Lender[]): { name: string; active: number; total: number }[] {
    return lenders.map(lender => ({
      name: lender.name,
      active: lender.activeLoans,
      total: lender.totalLoans
    }));
  }

  // Get radar chart data for lender comparison
  static getRadarData(lenders: Lender[]): { subject: string; volume: number; loans: number; active: number; default: number }[] {
    if (lenders.length === 0) return [];
    
    const maxVolume = Math.max(...lenders.map(l => l.totalAmount));
    const maxLoans = Math.max(...lenders.map(l => l.totalLoans));
    const maxActive = Math.max(...lenders.map(l => l.activeLoans));
    const maxDefault = Math.max(...lenders.map(l => l.defaultRate));
    
    return lenders.map(lender => ({
      subject: lender.name,
      volume: maxVolume ? (lender.totalAmount / maxVolume) * 100 : 0,
      loans: maxLoans ? (lender.totalLoans / maxLoans) * 100 : 0,
      active: maxActive ? (lender.activeLoans / maxActive) * 100 : 0,
      default: maxDefault ? 100 - (lender.defaultRate / maxDefault) * 100 : 100
    }));
  }

  // Get scatter plot data
  static getScatterData(lenders: Lender[]): { x: number; y: number; z: number; name: string }[] {
    return lenders.map(lender => ({
      x: lender.totalLoans,
      y: lender.defaultRate,
      z: lender.totalAmount / 100000, // Size based on amount in lakhs
      name: lender.name
    }));
  }

  // Get treemap data for sector distribution
  static getTreemapData(lenders: Lender[]): TreemapData[] {
    const sectorMap: { [key: string]: number } = {};
    
    lenders.forEach(lender => {
      lender.sectors.forEach(sector => {
        sectorMap[sector] = (sectorMap[sector] || 0) + 1;
      });
    });
    
    return Object.entries(sectorMap).map(([name, value]) => ({
      name,
      size: value
    }));
  }

  // Get loan growth data
  static getLoanGrowthData(lenders: Lender[]): GrowthData[] {
    return lenders.map(lender => ({
      name: lender.name,
      growth: lender.totalLoans > 0 ? ((lender.totalLoans - lender.activeLoans) / lender.activeLoans) * 100 : 0
    }));
  }

  // Get performance trend data
  static getPerformanceTrendData(lenders: Lender[]): PerformanceTrendData[] {
    return lenders.map(lender => {
      const trendData: PerformanceTrendData = {
        name: lender.name
      };
      
      lender.performance.forEach(perf => {
        trendData[perf.month] = perf.loans;
      });
      
      return trendData;
    });
  }

  // Get radial bar data for default rates
  static getRadialBarData(lenders: Lender[]): RadialBarData[] {
    return lenders.map(lender => ({
      name: lender.name,
      defaultRate: lender.defaultRate
    }));
  }

  // Get lender risk categories
  static getLenderRiskCategories(lenders: Lender[]): { low: number; medium: number; high: number } {
    let low = 0, medium = 0, high = 0;
    
    lenders.forEach(lender => {
      if (lender.defaultRate < 2) {
        low++;
      } else if (lender.defaultRate < 3) {
        medium++;
      } else {
        high++;
      }
    });
    
    return { low, medium, high };
  }

  // Get lender performance categories
  static getLenderPerformanceCategories(lenders: Lender[]): { excellent: number; good: number; fair: number; poor: number } {
    let excellent = 0, good = 0, fair = 0, poor = 0;
    
    lenders.forEach(lender => {
      const avgLoanAmount = lender.totalAmount / lender.totalLoans;
      if (avgLoanAmount > 30000) {
        excellent++;
      } else if (avgLoanAmount > 20000) {
        good++;
      } else if (avgLoanAmount > 10000) {
        fair++;
      } else {
        poor++;
      }
    });
    
    return { excellent, good, fair, poor };
  }

  // Get sector performance data
  static getSectorPerformanceData(lenders: Lender[]): { sector: string; totalAmount: number; totalLoans: number; defaultRate: number }[] {
    const sectorData: { [key: string]: { totalAmount: number; totalLoans: number; defaultRateSum: number; count: number } } = {};
    
    lenders.forEach(lender => {
      lender.sectors.forEach(sector => {
        if (!sectorData[sector]) {
          sectorData[sector] = {
            totalAmount: 0,
            totalLoans: 0,
            defaultRateSum: 0,
            count: 0
          };
        }
        sectorData[sector].totalAmount += lender.totalAmount;
        sectorData[sector].totalLoans += lender.totalLoans;
        sectorData[sector].defaultRateSum += lender.defaultRate;
        sectorData[sector].count++;
      });
    });
    
    return Object.entries(sectorData).map(([sector, data]) => ({
      sector,
      totalAmount: data.totalAmount,
      totalLoans: data.totalLoans,
      defaultRate: data.defaultRateSum / data.count
    }));
  }
}
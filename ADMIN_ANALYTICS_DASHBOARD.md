# Admin Analytics Dashboard Documentation

## Overview

The Admin Analytics Dashboard provides comprehensive statistical analysis and visualization of all lenders within the FinAgentix organization. This feature enables administrators to monitor lender performance, track financial metrics, and make data-driven decisions.

## Features

### 1. Dual Dashboard Views
- **Platform Overview**: General platform analytics and performance metrics
- **Lender Analytics**: Detailed statistics and visualization of individual lenders

### 2. Platform Overview Metrics
- Total revenue with growth indicators
- Application volume and approval rates
- Average ticket size trends
- Monthly performance trends
- Sector-wise performance analysis

### 3. Lender Analytics Metrics
- **Key Performance Indicators (KPIs)**
  - Total number of active lenders
  - Total loans processed across all lenders
  - Total loan amount disbursed
  - Average default rate across the organization

- **Data Visualization**
  - Top lenders by loan volume (bar chart)
  - Default rates by lender (bar chart)
  - Sector distribution (progress bars)
  - Monthly loan trends (list view)
  - Detailed lender table with comprehensive information

### 4. Filtering and Export
- Time range filtering (daily, weekly, monthly, quarterly, yearly)
- Export functionality to download reports in CSV format
- Tab-based navigation between platform and lender analytics

## Implementation Details

### Frontend
- **Location**: `src/app/admin/analytics/page.tsx`
- **Technology**: React with TypeScript
- **UI Components**: 
  - Tailwind CSS for styling
  - Heroicons for icons
  - Responsive design for different screen sizes
  - Tab-based navigation between views
  - Data visualization with Recharts library

### Backend
- **API Endpoint**: `src/app/api/admin/analytics/export/route.ts`
- **Service Layer**: `src/lib/services/adminAnalyticsService.ts`
- **Authentication**: Requires admin role access

### Data Model

```typescript
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
```

## Access Control

The dashboard is only accessible to users with the `ADMIN` role. Access is controlled through:
1. Session authentication check
2. Role-based authorization using Prisma Role enum
3. API endpoint protection

## Enhanced Features

### 1. Comprehensive Lender Tracking
- Detailed performance metrics for each lender
- Sector-wise distribution analysis
- Monthly trend visualization
- Risk assessment based on default rates

### 2. Advanced Data Visualization
- Interactive charts for better data interpretation
- Color-coded risk indicators
- Comparative analysis views
- Performance rating system

### 3. Detailed Reporting
- Export to CSV with comprehensive lender data
- Performance ratings (Excellent, Good, Fair, Poor)
- Sector distribution analysis
- Monthly trend reports

## Future Enhancements

### 1. Real-time Data
- WebSocket integration for live data updates
- Auto-refresh functionality

### 2. Advanced Analytics
- Trend analysis with forecasting
- Comparative analysis between time periods
- Peer benchmarking

### 3. Custom Reports
- Report builder for custom data views
- Scheduled report generation
- Email report delivery

### 4. Alerting System
- Threshold-based alerts for key metrics
- Automated notifications for abnormal performance
- Integration with communication channels

## Integration Points

### Database
- Queries lender information from the database
- Aggregates loan data across all lenders
- Calculates performance metrics

### Authentication
- Integrates with existing auth system
- Validates admin role permissions using Prisma Role enum

### Reporting
- Exports data in multiple formats (CSV, PDF, Excel)
- Schedules automated reports

## Deployment

### Prerequisites
- Next.js application running
- Database with lender and loan data
- Authentication system configured
- Admin user accounts created

### Environment Variables
```env
# Analytics feature flags
ENABLE_ANALYTICS_DASHBOARD=true
ANALYTICS_DATA_REFRESH_INTERVAL=300 # seconds
```

## Usage Instructions

### For Administrators
1. Navigate to `/admin/analytics`
2. Toggle between "Platform Overview" and "Lender Analytics" tabs
3. Select desired time range from the dropdown
4. View key metrics and charts
5. Export data using the "Export Report" button

### For Developers
1. Extend the API endpoint to connect to real database
2. Customize charts and metrics based on business requirements
3. Add new visualization components as needed

## Troubleshooting

### Common Issues
1. **Data Not Loading**: Check API endpoint and database connectivity
2. **Permission Denied**: Verify admin role assignment
3. **Charts Not Displaying**: Ensure data format matches chart requirements

### Logs
- Check application logs for API errors
- Monitor database query performance
- Review authentication logs for access issues

## Contact

For questions or support regarding the Admin Analytics Dashboard, please contact the development team.
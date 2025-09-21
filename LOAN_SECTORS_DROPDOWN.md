# Loan Sectors Dropdown Implementation

This document explains how the loan sectors dropdown is implemented across the application to ensure all 12 sectors are available as separate options.

## Implementation Overview

The loan sectors dropdown is implemented in multiple places in the application:

1. **Marketplace Page** - `/src/app/loans/marketplace/page.tsx`
2. **Loans Page** - `/src/app/loans/page.tsx`

## Available Loan Sectors

All 12 loan sectors are supported:

1. Personal Loan
2. Home Loan
3. Vehicle Loan
4. Business Loan
5. Education Loan
6. Gold Loan
7. Agriculture Loan
8. Microfinance
9. Credit Card
10. Two Wheeler Loan
11. Healthcare Loan
12. Digital Loan

## Translation Structure

The translations are organized in a hierarchical structure in each language file:

```json
{
  "loan_sectors": {
    "personal": {
      "name": "Personal Loan",
      "description": "Flexible personal loans for all your individual needs..."
    },
    "home": {
      "name": "Home Loan",
      "description": "Affordable home loans to make your dream of owning a house..."
    }
    // ... other sectors
  }
}
```

## Dropdown Implementation

In the marketplace page, the dropdown is populated dynamically from the available offers:

```typescript
// Get unique sectors for filter dropdown
const getSectors = () => {
  const sectors = [...new Set(offers.map(offer => offer.loanSector))];
  return sectors;
};

// In the JSX
{getSectors().map(sector => (
  <option key={sector} value={sector}>
    {t(`loan_sectors.${sector.toLowerCase().replace(/_loan$/, '').replace(/_/g, "-")}.name`)}
  </option>
))}
```

## Translation Key Mapping

The Prisma enum values are mapped to translation keys as follows:

| Prisma Enum | Translation Key |
|-------------|-----------------|
| PERSONAL_LOAN | personal |
| HOME_LOAN | home |
| VEHICLE_LOAN | vehicle |
| BUSINESS_LOAN | business |
| EDUCATION_LOAN | education |
| GOLD_LOAN | gold |
| AGRICULTURE_LOAN | agriculture |
| MICROFINANCE | microfinance |
| CREDIT_CARD | credit-card |
| TWO_WHEELER_LOAN | two-wheeler |
| HEALTHCARE_LOAN | healthcare |
| DIGITAL_LOAN | digital |

## Language Support

Translations are available in three languages:
- English (`/public/locales/en/common.json`)
- Telugu (`/public/locales/te/common.json`)
- Hindi (`/public/locales/hi/common.json`)

Each language file contains the complete set of 12 loan sectors with both names and descriptions.

## Validation

A validation script (`validate-loan-sectors.js`) is included to verify that all translations are properly defined across all languages.
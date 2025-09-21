# Fin-Agentix - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Database Schema](#database-schema)
6. [Authentication & Authorization](#authentication--authorization)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Loan Management System](#loan-management-system)
9. [Consumption-Driven Ecosystem](#consumption-driven-ecosystem)
10. [KYC & Verification System](#kyc--verification-system)
11. [AI-Powered Credit Scoring](#ai-powered-credit-scoring)
12. [Admin Dashboard](#admin-dashboard)
13. [Chatbot System](#chatbot-system)
14. [API Endpoints](#api-endpoints)
15. [Development Setup](#development-setup)
16. [Deployment](#deployment)
17. [Testing](#testing)
18. [Contributing](#contributing)

## Project Overview

Fin-Agentix is a comprehensive Next.js-based financial lending platform supporting all 12 major loan sectors with advanced KYC verification, AI-powered credit scoring, and seamless user experience. The platform is designed to revolutionize financial services in India by providing instant loan approvals, competitive rates, and a fully digital experience.

The platform supports 12 comprehensive loan sectors:
1. Personal Loans
2. Home Loans
3. Vehicle Loans
4. Business Loans
5. Gold Loans
6. Education Loans
7. Agriculture Loans
8. Microfinance
9. Credit Cards
10. Two-Wheeler Loans
11. Healthcare Loans
12. Digital Loans

## Key Features

### Core Functionality
- **Multi-Sector Loan Support**: 12 loan categories with tailored solutions
- **Advanced KYC Verification**: Aadhaar, PAN, and document verification
- **AI-Powered Credit Scoring**: Intelligent loan assessment and approval
- **Real-time Application Tracking**: Public tracking without login required
- **Interactive EMI Calculator**: Dynamic calculations for all loan types
- **Admin Dashboard**: Comprehensive management and analytics
- **Multi-Language Support**: Available in 12 Indian languages

### Technical Features
- **Next.js 15** with Turbopack for fast development
- **TypeScript** for type safety
- **Prisma ORM** with SQLite database
- **NextAuth.js** for authentication
- **Tailwind CSS** for responsive design
- **Server-Side Rendering** for optimal performance
- **i18next** for internationalization

## Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form validation and management
- **Zod**: Schema validation
- **react-i18next**: Internationalization
- **Headless UI**: Unstyled, accessible UI components
- **Recharts**: Data visualization

### Backend
- **Next.js API Routes**: Serverless functions
- **Prisma ORM**: Database toolkit
- **SQLite**: Development database
- **NextAuth.js**: Authentication solution

### Database
- **SQLite**: Development database
- **Prisma Schema**: Type-safe database client

### Authentication
- **NextAuth.js**: Authentication library
- **JWT**: Token-based authentication
- **bcryptjs**: Password hashing

### Internationalization
- **i18next**: Internationalization framework
- **react-i18next**: React integration for i18next
- **i18next-browser-languagedetector**: Language detection

## Project Structure

```
secure-web-demo/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   ├── hi/
│   │   ├── ta/
│   │   ├── te/
│   │   ├── ml/
│   │   ├── kn/
│   │   ├── bn/
│   │   ├── gu/
│   │   ├── or/
│   │   ├── pa/
│   │   ├── mr/
│   │   └── ur/
│   └── images/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── loans/
│   │   ├── kyc/
│   │   ├── profile/
│   │   ├── dashboard/
│   │   └── ...
│   ├── components/
│   │   ├── admin/
│   │   ├── chatbot/
│   │   ├── layout/
│   │   ├── providers/
│   │   └── ui/
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── i18n.ts
│   │   ├── i18n-preload.ts
│   │   ├── prisma.ts
│   │   └── services/
│   ├── types/
│   └── hooks/
├── prisma/
│   └── schema.prisma
├── scripts/
└── test/
```

## Database Schema

The application uses a comprehensive Prisma schema supporting:

### User Management
- **User**: Core user entity with authentication
- **UserProfile**: Detailed user information
- **Address**: Current and permanent addresses
- **Education**: Educational qualifications
- **Employment**: Employment details

### KYC & Verification
- **KYCData**: Government ID verification
- **BiometricData**: Biometric verification
- **IdentityDocument**: Document verification

### Financial Profile
- **FinancialProfile**: Income and financial health
- **BankAccount**: Bank account details
- **CreditScore**: Credit bureau scores

### Loan Management
- **LoanApplication**: Loan applications
- **LoanProduct**: Loan products
- **Verification**: Verification processes
- **Approval**: Approval workflow
- **Disbursement**: Loan disbursement
- **EMI**: EMI schedule and tracking

### Organization Management
- **Organization**: Partner organizations
- **License**: Regulatory licenses
- **Personnel**: Key personnel
- **OrganizationFinancial**: Financial data

### Consumption-Driven Ecosystem
- **Partner**: Marketplace partners
- **ConsumptionLoan**: Direct-to-partner loans
- **MarketplaceOffer**: Partner offers

### System Management
- **LoginSession**: Session management
- **AuditLog**: Audit trail
- **Notification**: User notifications
- **AdminAction**: Admin activities

## Authentication & Authorization

The platform uses NextAuth.js for authentication with JWT tokens and role-based access control.

### Roles
- **USER**: Standard users
- **ADMIN**: Administrative users
- **AGENT**: Loan agents
- **MANAGER**: Loan managers
- **AUDITOR**: Audit personnel
- **COMPLIANCE_OFFICER**: Compliance officers

### Authentication Flow
1. User registration with email and password
2. Password hashing with bcryptjs
3. JWT token generation
4. Session management
5. Role-based access control

### Security Features
- **JWT-based Authentication** with NextAuth.js
- **Role-based Access Control**
- **Input Validation** with Zod schemas
- **SQL Injection Prevention** with Prisma ORM
- **Password Hashing** with bcryptjs
- **Session Management** with secure cookies

## Internationalization (i18n)

The platform supports 12 Indian languages:
- English (en)
- Hindi (hi)
- Tamil (ta)
- Telugu (te)
- Malayalam (ml)
- Kannada (kn)
- Bengali (bn)
- Gujarati (gu)
- Odia (or)
- Punjabi (pa)
- Marathi (mr)
- Urdu (ur)

### Implementation
- **i18next**: Core internationalization library
- **react-i18next**: React integration
- **i18next-browser-languagedetector**: Language detection
- **JSON translation files**: Located in `public/locales/[language-code]/common.json`

### Language Detection Priority
1. Query string parameter (`lng`)
2. LocalStorage (`selectedLanguage`)
3. Cookie (`i18next`)
4. Browser navigator language
5. HTML tag

### Translation Loading
Translations are loaded dynamically at runtime using fetch requests to JSON files in the public directory.

## Loan Management System

### Loan Sectors
1. **Personal Loans**: Unsecured personal financing
2. **Home Loans**: Property purchase and construction
3. **Vehicle Loans**: Cars, bikes, commercial vehicles
4. **Business Loans**: Working capital and expansion
5. **Gold Loans**: Secured against gold jewelry
6. **Education Loans**: Student financing
7. **Agriculture Loans**: Farming and rural development
8. **Microfinance**: Small-scale lending
9. **Credit Cards**: Revolving credit facilities
10. **Two-Wheeler Loans**: Motorcycles and scooters
11. **Healthcare Loans**: Medical expenses
12. **Digital Loans**: App-based quick loans

### Loan Application Process
1. **Application Initiation**: User starts loan application
2. **Document Submission**: Upload required documents
3. **Verification**: Document and identity verification
4. **Credit Assessment**: AI-powered credit scoring
5. **Approval Workflow**: Multi-level approval process
6. **Disbursement**: Loan amount transfer
7. **EMI Management**: Repayment tracking

### Loan Statuses
- DRAFT
- SUBMITTED
- DOCUMENT_VERIFICATION
- UNDER_REVIEW
- TECHNICAL_REVIEW
- CREDIT_ASSESSMENT
- MANUAL_REVIEW
- APPROVED
- REJECTED
- DISBURSED
- ACTIVE
- CLOSED
- CANCELLED
- ON_HOLD

## Consumption-Driven Ecosystem

### Partners
- **Universities**: Education loans
- **Hospitals**: Healthcare loans
- **Dealers**: Vehicle and product financing
- **Suppliers**: Business financing
- **E-commerce Platforms**: Digital purchases
- **Service Providers**: Professional services

### Marketplace Offers
Partners can create loan offers with:
- Minimum and maximum loan amounts
- Interest rates
- Processing fees
- Tenure options
- Tags for search and filtering

### Consumption Loans
Direct-to-partner disbursement for:
- Education expenses (tuition, books, accommodation)
- Healthcare costs (treatment, medication, procedures)
- Vehicle purchases (cars, bikes, commercial vehicles)
- Agricultural needs (seeds, equipment, livestock)
- Home improvements (renovation, furniture)
- Personal requirements (electronics, appliances)
- Business investments (equipment, inventory)
- Digital services (software, subscriptions)
- Lifestyle products (jewelry, fashion, travel)
- Other consumption needs

## KYC & Verification System

### Verification Types
- **Aadhaar eKYC**: Government ID verification
- **PAN Verification**: Permanent Account Number verification
- **Bank Account Verification**: Bank account linking
- **Income Verification**: Income proof validation
- **Employment Verification**: Employment details confirmation
- **Address Verification**: Residential address confirmation
- **Reference Check**: Personal references
- **Credit Bureau Check**: CIBIL and other bureau scores
- **Document Verification**: Identity and address documents
- **Video KYC**: Face-to-face verification
- **Biometric Verification**: Fingerprint or iris scanning

### KYC Levels
- **BASIC**: Name, DOB, address
- **INTERMEDIATE**: Additional documents
- **FULL**: Comprehensive verification
- **ENHANCED**: Biometric and video verification

### Verification Statuses
- PENDING
- IN_PROGRESS
- COMPLETED
- FAILED
- EXPIRED
- CANCELLED

## AI-Powered Credit Scoring

The platform uses AI algorithms to analyze over 500 data points for instant credit decisions, including:
- Financial history
- Employment stability
- Income patterns
- Credit bureau scores
- Spending behavior
- Social media activity (with consent)
- Transaction patterns
- Demographic factors

### Risk Assessment
- **Risk Score**: Numerical risk assessment
- **Confidence Level**: Algorithm confidence in decision
- **Decision Engine**: Approve, Reject, or Manual Review
- **Factors**: Key factors influencing the decision

## Admin Dashboard

### Features
- **Real-time Analytics**: Application statistics and trends
- **User Management**: Account administration and monitoring
- **Loan Processing**: Application review and approval
- **Report Generation**: Financial and operational reports
- **System Configuration**: Platform settings and customization
- **Audit Trail**: Comprehensive activity logging
- **Partner Management**: Consumption ecosystem partners
- **Marketplace Management**: Offer creation and monitoring

### Analytics
- Loan application trends
- Approval and rejection rates
- Disbursement volumes
- Revenue tracking
- User engagement metrics
- Geographic distribution
- Product performance

## Chatbot System

### Features
- **24/7 Availability**: Round-the-clock assistance
- **Natural Language Processing**: Understanding user queries
- **Context Awareness**: Maintaining conversation context
- **Multilingual Support**: Communication in all supported languages
- **Integration**: Seamless integration with loan processes

### Capabilities
- Loan application guidance
- KYC process assistance
- Document requirements
- EMI calculations
- Account information
- Status updates
- FAQ responses
- Support ticket creation

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login (handled by NextAuth)

### Loans
- `POST /api/loans/apply` - Submit loan application
- `GET /api/loans/my-applications` - Get user's applications
- `GET /api/loans/:id` - Get specific loan details
- `PUT /api/loans/:id` - Update loan application

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `POST /api/admin/setup` - Initial admin setup
- `GET /api/admin/analytics` - Get analytics data
- `GET /api/admin/reports` - Generate reports

### Verification
- `POST /api/aadhaar/verify` - Aadhaar verification
- `POST /api/pan/verify` - PAN verification
- `POST /api/documents/verify` - Document verification

### Marketplace
- `GET /api/marketplace/offers` - Get marketplace offers
- `POST /api/marketplace/offers` - Create new offer (admin/partner)
- `PUT /api/marketplace/offers/:id` - Update offer
- `DELETE /api/marketplace/offers/:id` - Delete offer

### Partners
- `GET /api/partners` - Get partner list
- `POST /api/partners` - Create new partner
- `PUT /api/partners/:id` - Update partner
- `DELETE /api/partners/:id` - Delete partner

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd secure-web-demo
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example environment file
cp .env .env.local

# Edit .env.local with your values if needed
# Default values work for development
```

4. **Set up the database**
```bash
# Generate Prisma client and push schema to database
npx prisma db push
npx prisma generate
```

5. **Start the development server**
```bash
npm run dev
```

6. **Access the application**
- Main app: http://localhost:3000 (or next available port if 3000 is in use)
- Database viewer: `npx prisma studio --port 5556`

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open database viewer
npx prisma db push   # Update database schema
```

### Default Test Accounts

#### Admin Account
- **Email**: admin@finagentic.com
- **Password**: admin123
- **Access**: Full admin dashboard, user management, analytics

#### User Account  
- **Email**: test@example.com
- **Password**: test123
- **Access**: Standard user features, loan applications, KYC

## Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
Ensure all required environment variables are set:
- `DATABASE_URL`: Database connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `NEXTAUTH_URL`: Application URL
- `GOOGLE_CLIENT_ID`: Google OAuth client ID (optional)
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret (optional)

### Database Migration
For production deployments, use proper database migrations:
```bash
npx prisma migrate deploy
```

## Testing

### Unit Testing
The project uses Jest for unit testing:
```bash
npm run test
```

### End-to-End Testing
Cypress is used for end-to-end testing:
```bash
npm run test:e2e
```

### API Testing
Manual API testing can be done using the provided test scripts:
```bash
node api-access-test.js
node auth-test.js
node complete-flow-test.js
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use ESLint for code formatting
- Write comprehensive tests for new features
- Document new functionality

### Pull Request Guidelines
- Ensure all tests pass
- Update documentation as needed
- Follow the existing code style
- Provide clear commit messages
- Include screenshots for UI changes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the Prisma schema for database structure

## Roadmap

- [x] Multi-language support
- [ ] Mobile app development (React Native)
- [ ] Advanced AI/ML credit scoring
- [ ] Blockchain integration for security
- [ ] Advanced analytics and reporting
- [ ] Integration with external financial APIs
- [ ] Regulatory compliance automation
- [ ] Enhanced partner ecosystem
- [ ] Advanced risk management
- [ ] International expansion

---

**Built with ❤️ for Fin-Agentix - Making lending accessible and secure**# Fin-Agentix - Complete Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Database Schema](#database-schema)
6. [Authentication & Authorization](#authentication--authorization)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Loan Management System](#loan-management-system)
9. [Consumption-Driven Ecosystem](#consumption-driven-ecosystem)
10. [KYC & Verification System](#kyc--verification-system)
11. [AI-Powered Credit Scoring](#ai-powered-credit-scoring)
12. [Admin Dashboard](#admin-dashboard)
13. [Chatbot System](#chatbot-system)
14. [API Endpoints](#api-endpoints)
15. [Development Setup](#development-setup)
16. [Deployment](#deployment)
17. [Testing](#testing)
18. [Contributing](#contributing)

## Project Overview

Fin-Agentix is a comprehensive Next.js-based financial lending platform supporting all 12 major loan sectors with advanced KYC verification, AI-powered credit scoring, and seamless user experience. The platform is designed to revolutionize financial services in India by providing instant loan approvals, competitive rates, and a fully digital experience.

The platform supports 12 comprehensive loan sectors:
1. Personal Loans
2. Home Loans
3. Vehicle Loans
4. Business Loans
5. Gold Loans
6. Education Loans
7. Agriculture Loans
8. Microfinance
9. Credit Cards
10. Two-Wheeler Loans
11. Healthcare Loans
12. Digital Loans

## Key Features

### Core Functionality
- **Multi-Sector Loan Support**: 12 loan categories with tailored solutions
- **Advanced KYC Verification**: Aadhaar, PAN, and document verification
- **AI-Powered Credit Scoring**: Intelligent loan assessment and approval
- **Real-time Application Tracking**: Public tracking without login required
- **Interactive EMI Calculator**: Dynamic calculations for all loan types
- **Admin Dashboard**: Comprehensive management and analytics
- **Multi-Language Support**: Available in 12 Indian languages

### Technical Features
- **Next.js 15** with Turbopack for fast development
- **TypeScript** for type safety
- **Prisma ORM** with SQLite database
- **NextAuth.js** for authentication
- **Tailwind CSS** for responsive design
- **Server-Side Rendering** for optimal performance
- **i18next** for internationalization

## Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form validation and management
- **Zod**: Schema validation
- **react-i18next**: Internationalization
- **Headless UI**: Unstyled, accessible UI components
- **Recharts**: Data visualization

### Backend
- **Next.js API Routes**: Serverless functions
- **Prisma ORM**: Database toolkit
- **SQLite**: Development database
- **NextAuth.js**: Authentication solution

### Database
- **SQLite**: Development database
- **Prisma Schema**: Type-safe database client

### Authentication
- **NextAuth.js**: Authentication library
- **JWT**: Token-based authentication
- **bcryptjs**: Password hashing

### Internationalization
- **i18next**: Internationalization framework
- **react-i18next**: React integration for i18next
- **i18next-browser-languagedetector**: Language detection

## Project Structure

```
secure-web-demo/
├── public/
│   ├── locales/
│   │   ├── en/
│   │   ├── hi/
│   │   ├── ta/
│   │   ├── te/
│   │   ├── ml/
│   │   ├── kn/
│   │   ├── bn/
│   │   ├── gu/
│   │   ├── or/
│   │   ├── pa/
│   │   ├── mr/
│   │   └── ur/
│   └── images/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── loans/
│   │   ├── kyc/
│   │   ├── profile/
│   │   ├── dashboard/
│   │   └── ...
│   ├── components/
│   │   ├── admin/
│   │   ├── chatbot/
│   │   ├── layout/
│   │   ├── providers/
│   │   └── ui/
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── i18n.ts
│   │   ├── i18n-preload.ts
│   │   ├── prisma.ts
│   │   └── services/
│   ├── types/
│   └── hooks/
├── prisma/
│   └── schema.prisma
├── scripts/
└── test/
```

## Database Schema

The application uses a comprehensive Prisma schema supporting:

### User Management
- **User**: Core user entity with authentication
- **UserProfile**: Detailed user information
- **Address**: Current and permanent addresses
- **Education**: Educational qualifications
- **Employment**: Employment details

### KYC & Verification
- **KYCData**: Government ID verification
- **BiometricData**: Biometric verification
- **IdentityDocument**: Document verification

### Financial Profile
- **FinancialProfile**: Income and financial health
- **BankAccount**: Bank account details
- **CreditScore**: Credit bureau scores

### Loan Management
- **LoanApplication**: Loan applications
- **LoanProduct**: Loan products
- **Verification**: Verification processes
- **Approval**: Approval workflow
- **Disbursement**: Loan disbursement
- **EMI**: EMI schedule and tracking

### Organization Management
- **Organization**: Partner organizations
- **License**: Regulatory licenses
- **Personnel**: Key personnel
- **OrganizationFinancial**: Financial data

### Consumption-Driven Ecosystem
- **Partner**: Marketplace partners
- **ConsumptionLoan**: Direct-to-partner loans
- **MarketplaceOffer**: Partner offers

### System Management
- **LoginSession**: Session management
- **AuditLog**: Audit trail
- **Notification**: User notifications
- **AdminAction**: Admin activities

## Authentication & Authorization

The platform uses NextAuth.js for authentication with JWT tokens and role-based access control.

### Roles
- **USER**: Standard users
- **ADMIN**: Administrative users
- **AGENT**: Loan agents
- **MANAGER**: Loan managers
- **AUDITOR**: Audit personnel
- **COMPLIANCE_OFFICER**: Compliance officers

### Authentication Flow
1. User registration with email and password
2. Password hashing with bcryptjs
3. JWT token generation
4. Session management
5. Role-based access control

### Security Features
- **JWT-based Authentication** with NextAuth.js
- **Role-based Access Control**
- **Input Validation** with Zod schemas
- **SQL Injection Prevention** with Prisma ORM
- **Password Hashing** with bcryptjs
- **Session Management** with secure cookies

## Internationalization (i18n)

The platform supports 12 Indian languages:
- English (en)
- Hindi (hi)
- Tamil (ta)
- Telugu (te)
- Malayalam (ml)
- Kannada (kn)
- Bengali (bn)
- Gujarati (gu)
- Odia (or)
- Punjabi (pa)
- Marathi (mr)
- Urdu (ur)

### Implementation
- **i18next**: Core internationalization library
- **react-i18next**: React integration
- **i18next-browser-languagedetector**: Language detection
- **JSON translation files**: Located in `public/locales/[language-code]/common.json`

### Language Detection Priority
1. Query string parameter (`lng`)
2. LocalStorage (`selectedLanguage`)
3. Cookie (`i18next`)
4. Browser navigator language
5. HTML tag

### Translation Loading
Translations are loaded dynamically at runtime using fetch requests to JSON files in the public directory.

## Loan Management System

### Loan Sectors
1. **Personal Loans**: Unsecured personal financing
2. **Home Loans**: Property purchase and construction
3. **Vehicle Loans**: Cars, bikes, commercial vehicles
4. **Business Loans**: Working capital and expansion
5. **Gold Loans**: Secured against gold jewelry
6. **Education Loans**: Student financing
7. **Agriculture Loans**: Farming and rural development
8. **Microfinance**: Small-scale lending
9. **Credit Cards**: Revolving credit facilities
10. **Two-Wheeler Loans**: Motorcycles and scooters
11. **Healthcare Loans**: Medical expenses
12. **Digital Loans**: App-based quick loans

### Loan Application Process
1. **Application Initiation**: User starts loan application
2. **Document Submission**: Upload required documents
3. **Verification**: Document and identity verification
4. **Credit Assessment**: AI-powered credit scoring
5. **Approval Workflow**: Multi-level approval process
6. **Disbursement**: Loan amount transfer
7. **EMI Management**: Repayment tracking

### Loan Statuses
- DRAFT
- SUBMITTED
- DOCUMENT_VERIFICATION
- UNDER_REVIEW
- TECHNICAL_REVIEW
- CREDIT_ASSESSMENT
- MANUAL_REVIEW
- APPROVED
- REJECTED
- DISBURSED
- ACTIVE
- CLOSED
- CANCELLED
- ON_HOLD

## Consumption-Driven Ecosystem

### Partners
- **Universities**: Education loans
- **Hospitals**: Healthcare loans
- **Dealers**: Vehicle and product financing
- **Suppliers**: Business financing
- **E-commerce Platforms**: Digital purchases
- **Service Providers**: Professional services

### Marketplace Offers
Partners can create loan offers with:
- Minimum and maximum loan amounts
- Interest rates
- Processing fees
- Tenure options
- Tags for search and filtering

### Consumption Loans
Direct-to-partner disbursement for:
- Education expenses (tuition, books, accommodation)
- Healthcare costs (treatment, medication, procedures)
- Vehicle purchases (cars, bikes, commercial vehicles)
- Agricultural needs (seeds, equipment, livestock)
- Home improvements (renovation, furniture)
- Personal requirements (electronics, appliances)
- Business investments (equipment, inventory)
- Digital services (software, subscriptions)
- Lifestyle products (jewelry, fashion, travel)
- Other consumption needs

## KYC & Verification System

### Verification Types
- **Aadhaar eKYC**: Government ID verification
- **PAN Verification**: Permanent Account Number verification
- **Bank Account Verification**: Bank account linking
- **Income Verification**: Income proof validation
- **Employment Verification**: Employment details confirmation
- **Address Verification**: Residential address confirmation
- **Reference Check**: Personal references
- **Credit Bureau Check**: CIBIL and other bureau scores
- **Document Verification**: Identity and address documents
- **Video KYC**: Face-to-face verification
- **Biometric Verification**: Fingerprint or iris scanning

### KYC Levels
- **BASIC**: Name, DOB, address
- **INTERMEDIATE**: Additional documents
- **FULL**: Comprehensive verification
- **ENHANCED**: Biometric and video verification

### Verification Statuses
- PENDING
- IN_PROGRESS
- COMPLETED
- FAILED
- EXPIRED
- CANCELLED

## AI-Powered Credit Scoring

The platform uses AI algorithms to analyze over 500 data points for instant credit decisions, including:
- Financial history
- Employment stability
- Income patterns
- Credit bureau scores
- Spending behavior
- Social media activity (with consent)
- Transaction patterns
- Demographic factors

### Risk Assessment
- **Risk Score**: Numerical risk assessment
- **Confidence Level**: Algorithm confidence in decision
- **Decision Engine**: Approve, Reject, or Manual Review
- **Factors**: Key factors influencing the decision

## Admin Dashboard

### Features
- **Real-time Analytics**: Application statistics and trends
- **User Management**: Account administration and monitoring
- **Loan Processing**: Application review and approval
- **Report Generation**: Financial and operational reports
- **System Configuration**: Platform settings and customization
- **Audit Trail**: Comprehensive activity logging
- **Partner Management**: Consumption ecosystem partners
- **Marketplace Management**: Offer creation and monitoring

### Analytics
- Loan application trends
- Approval and rejection rates
- Disbursement volumes
- Revenue tracking
- User engagement metrics
- Geographic distribution
- Product performance

## Chatbot System

### Features
- **24/7 Availability**: Round-the-clock assistance
- **Natural Language Processing**: Understanding user queries
- **Context Awareness**: Maintaining conversation context
- **Multilingual Support**: Communication in all supported languages
- **Integration**: Seamless integration with loan processes

### Capabilities
- Loan application guidance
- KYC process assistance
- Document requirements
- EMI calculations
- Account information
- Status updates
- FAQ responses
- Support ticket creation

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login (handled by NextAuth)

### Loans
- `POST /api/loans/apply` - Submit loan application
- `GET /api/loans/my-applications` - Get user's applications
- `GET /api/loans/:id` - Get specific loan details
- `PUT /api/loans/:id` - Update loan application

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `POST /api/admin/setup` - Initial admin setup
- `GET /api/admin/analytics` - Get analytics data
- `GET /api/admin/reports` - Generate reports

### Verification
- `POST /api/aadhaar/verify` - Aadhaar verification
- `POST /api/pan/verify` - PAN verification
- `POST /api/documents/verify` - Document verification

### Marketplace
- `GET /api/marketplace/offers` - Get marketplace offers
- `POST /api/marketplace/offers` - Create new offer (admin/partner)
- `PUT /api/marketplace/offers/:id` - Update offer
- `DELETE /api/marketplace/offers/:id` - Delete offer

### Partners
- `GET /api/partners` - Get partner list
- `POST /api/partners` - Create new partner
- `PUT /api/partners/:id` - Update partner
- `DELETE /api/partners/:id` - Delete partner

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd secure-web-demo
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example environment file
cp .env .env.local

# Edit .env.local with your values if needed
# Default values work for development
```

4. **Set up the database**
```bash
# Generate Prisma client and push schema to database
npx prisma db push
npx prisma generate
```

5. **Start the development server**
```bash
npm run dev
```

6. **Access the application**
- Main app: http://localhost:3000 (or next available port if 3000 is in use)
- Database viewer: `npx prisma studio --port 5556`

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open database viewer
npx prisma db push   # Update database schema
```

### Default Test Accounts

#### Admin Account
- **Email**: admin@finagentic.com
- **Password**: admin123
- **Access**: Full admin dashboard, user management, analytics

#### User Account  
- **Email**: test@example.com
- **Password**: test123
- **Access**: Standard user features, loan applications, KYC

## Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables
Ensure all required environment variables are set:
- `DATABASE_URL`: Database connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth.js
- `NEXTAUTH_URL`: Application URL
- `GOOGLE_CLIENT_ID`: Google OAuth client ID (optional)
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret (optional)

### Database Migration
For production deployments, use proper database migrations:
```bash
npx prisma migrate deploy
```

## Testing

### Unit Testing
The project uses Jest for unit testing:
```bash
npm run test
```

### End-to-End Testing
Cypress is used for end-to-end testing:
```bash
npm run test:e2e
```

### API Testing
Manual API testing can be done using the provided test scripts:
```bash
node api-access-test.js
node auth-test.js
node complete-flow-test.js
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow TypeScript best practices
- Use ESLint for code formatting
- Write comprehensive tests for new features
- Document new functionality

### Pull Request Guidelines
- Ensure all tests pass
- Update documentation as needed
- Follow the existing code style
- Provide clear commit messages
- Include screenshots for UI changes

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the Prisma schema for database structure

## Roadmap

- [x] Multi-language support
- [ ] Mobile app development (React Native)
- [ ] Advanced AI/ML credit scoring
- [ ] Blockchain integration for security
- [ ] Advanced analytics and reporting
- [ ] Integration with external financial APIs
- [ ] Regulatory compliance automation
- [ ] Enhanced partner ecosystem
- [ ] Advanced risk management
- [ ] International expansion

---

**Built with ❤️ for Fin-Agentix - Making lending accessible and secure**
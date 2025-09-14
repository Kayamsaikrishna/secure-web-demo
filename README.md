# Fin-Agentix - Secure Financial Lending Platform

A comprehensive Next.js-based financial lending platform supporting all 12 major loan sectors with advanced KYC verification, AI-powered credit scoring, and seamless user experience.

## 🚀 Features

### Core Functionality
- **Multi-Sector Loan Support**: 12 loan categories including Personal, Home, Vehicle, Business, and more
- **Advanced KYC Verification**: Aadhaar, PAN, and document verification
- **AI-Powered Credit Scoring**: Intelligent loan assessment and approval
- **Real-time Application Tracking**: Public tracking without login required
- **Interactive EMI Calculator**: Dynamic calculations for all loan types
- **Admin Dashboard**: Comprehensive management and analytics

### Technical Features
- **Next.js 15** with Turbopack for fast development
- **TypeScript** for type safety
- **Prisma ORM** with SQLite database
- **NextAuth.js** for authentication
- **Tailwind CSS** for responsive design
- **Server-Side Rendering** for optimal performance

## 🛠️ Quick Setup

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
- Main app: http://localhost:3000 (or 3001 if 3000 is in use)
- Database viewer: `npx prisma studio --port 5556`

## 🎯 Default Test Accounts

The application comes with pre-configured test accounts:

### Admin Account
- **Email**: admin@finagentic.com
- **Password**: admin123
- **Access**: Full admin dashboard, user management, analytics

### User Account  
- **Email**: test@example.com
- **Password**: test123
- **Access**: Standard user features, loan applications, KYC

## 📁 Project Structure

```
src/
├── app/                    # Next.js 13+ app directory
│   ├── (public)/          # Public pages (no auth required)
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── loans/             # Loan-related pages
│   └── ...
├── components/            # Reusable React components
├── lib/                   # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   └── prisma.ts         # Prisma client
└── types/                # TypeScript type definitions

prisma/
├── schema.prisma         # Database schema
└── dev.db               # SQLite database file

```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx prisma studio    # Open database viewer
npx prisma db push   # Update database schema
```

## 🏦 Loan Sectors Supported

1. **Personal Loans** - Unsecured personal financing
2. **Home Loans** - Property purchase and construction  
3. **Vehicle Loans** - Cars, bikes, commercial vehicles
4. **Business Loans** - Working capital and expansion
5. **Gold Loans** - Secured against gold jewelry
6. **Education Loans** - Student financing
7. **Agriculture Loans** - Farming and rural development
8. **Microfinance** - Small-scale lending
9. **Credit Cards** - Revolving credit facilities
10. **Two-Wheeler Loans** - Motorcycles and scooters
11. **Healthcare Loans** - Medical expenses
12. **Digital Loans** - App-based quick loans

## 🔐 Security Features

- **JWT-based Authentication** with NextAuth.js
- **Role-based Access Control** (User, Admin, Agent, etc.)
- **Input Validation** with Zod schemas
- **SQL Injection Prevention** with Prisma ORM
- **Password Hashing** with bcryptjs
- **Session Management** with secure cookies

## 📊 Database Schema

The application uses a comprehensive Prisma schema supporting:
- User management with profiles
- KYC and document verification
- Loan applications and processing
- Financial profiles and credit scoring
- Admin actions and audit logs
- Multi-organizational support

## 🎨 UI/UX Features

- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - User preference support
- **Interactive Forms** - Real-time validation
- **Progress Indicators** - Clear application status
- **Accessible Design** - WCAG compliant

## 📈 Admin Dashboard

- **Real-time Analytics** - Application statistics
- **User Management** - Account administration  
- **Loan Processing** - Application review and approval
- **Report Generation** - Financial and operational reports
- **System Configuration** - Platform settings

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login (handled by NextAuth)

### Loans
- `POST /api/loans/apply` - Submit loan application
- `GET /api/loans/my-applications` - Get user's applications

### Admin
- `GET /api/admin/users` - Get all users (admin only)
- `POST /api/admin/setup` - Initial admin setup

### Verification
- `POST /api/aadhaar/verify` - Aadhaar verification
- `POST /api/pan/verify` - PAN verification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the Prisma schema for database structure

## 🔮 Roadmap

- [ ] Mobile app development (React Native)
- [ ] Advanced AI/ML credit scoring
- [ ] Blockchain integration for security
- [ ] Multi-language support
- [ ] Advanced analytics and reporting
- [ ] Integration with external financial APIs

---

**Built with ❤️ for Fin-Agentix - Making lending accessible and secure**
# FinAgentix Mobile App Documentation

## Overview

The FinAgentix Mobile App is a cross-platform mobile application built with React Native and Expo that provides users with a seamless experience for accessing consumption-driven lending services. The app connects consumers with sector-specific partners for various loan types including personal, home, vehicle, business, education, gold, agriculture, healthcare, and more.

## Features

### Core Features

1. **User Authentication**
   - Secure login and registration
   - Profile management
   - KYC verification status

2. **Loan Marketplace**
   - Browse partners across 12 loan sectors
   - View detailed partner information and offers
   - Compare loan terms and interest rates

3. **Loan Management**
   - Apply for loans directly through the app
   - Track loan application status
   - View active loans and repayment schedules

4. **Financial Tools**
   - EMI calculator for loan planning
   - Loan comparison tools
   - Financial health insights

5. **User Profile**
   - Personal information management
   - Notification preferences
   - Security settings

### Loan Sectors Supported

1. Personal Loans
2. Home Loans
3. Vehicle Loans
4. Business Loans
5. Education Loans
6. Gold Loans
7. Agriculture Loans
8. Healthcare Loans
9. Microfinance
10. Credit Card Loans
11. Two Wheeler Loans
12. Digital Loans

## Technical Architecture

### Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (File-based routing)
- **UI Components**: React Native built-in components
- **Icons**: MaterialCommunityIcons from @expo/vector-icons
- **State Management**: React hooks
- **Type Safety**: TypeScript

### Project Structure

```
fin-agentix-mobile/
├── app/                    # Main application screens
│   ├── (tabs)/            # Tab-based navigation screens
│   ├── (stack)/           # Stack-based navigation screens
│   ├── _layout.tsx        # Root layout configuration
│   └── index.tsx          # Entry point
├── components/            # Reusable UI components
├── assets/                # Static assets (images, icons)
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

### Navigation Structure

The app uses a combination of tab-based and stack-based navigation:

1. **Tab Navigation** (Main sections):
   - Home
   - Loans
   - Marketplace
   - Profile

2. **Stack Navigation** (Detail screens):
   - Loan Application
   - EMI Calculator
   - Partner Details
   - Settings
   - About

## Screens Overview

### 1. Home Screen (`app/(tabs)/home.tsx`)
- Welcome message and app overview
- Quick access to loan sectors
- Shortcuts to key features (EMI calculator, loan application)

### 2. Loans Screen (`app/(tabs)/loans.tsx`)
- View existing loan applications
- Track loan status (Approved, Pending, Disbursed)
- Apply for new loans
- Access different loan types

### 3. Marketplace Screen (`app/(tabs)/marketplace.tsx`)
- Browse featured partners
- Filter partners by sector
- View partner ratings and offers
- Access detailed partner information

### 4. Profile Screen (`app/(tabs)/profile.tsx`)
- User profile information
- Account status and statistics
- Settings access
- Logout functionality

### 5. Loan Application Screen (`app/(stack)/loan-application.tsx`)
- Detailed loan application form
- Loan type selection
- Amount and tenure specification
- Purpose description

### 6. EMI Calculator Screen (`app/(stack)/emi-calculator.tsx`)
- Calculate monthly loan payments
- Input loan amount, interest rate, and tenure
- View detailed payment breakdown

### 7. Partner Details Screen (`app/(stack)/partner-details.tsx`)
- Comprehensive partner information
- Detailed loan offers
- Partner ratings and reviews
- Direct application options

### 8. Settings Screen (`app/(stack)/settings.tsx`)
- Notification preferences
- Security settings
- Language and theme options
- Help and support

### 9. About Screen (`app/(stack)/about.tsx`)
- Company information
- Mission and vision
- Contact details
- Version information

## Components

### 1. LoanCard (`components/LoanCard.tsx`)
- Displays loan application information
- Shows loan type, amount, status, and date
- Clickable for detailed view

### 2. PartnerCard (`components/PartnerCard.tsx`)
- Displays partner information
- Shows name, sector, offers, and ratings
- Apply button for quick access

### 3. LoanSectorCard (`components/LoanSectorCard.tsx`)
- Visual representation of loan sectors
- Color-coded for easy identification
- Icon-based navigation

### 4. CustomHeader (`components/CustomHeader.tsx`)
- Consistent header across screens
- Back button navigation
- Screen title display

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Expo CLI
- Mobile device or emulator

### Installation

1. Navigate to the mobile app directory:
   ```bash
   cd fin-agentix-mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Follow the instructions to run on:
   - iOS Simulator (`i`)
   - Android Emulator (`a`)
   - Web Browser (`w`)
   - Physical Device (scan QR code)

### Building for Production

1. For Android:
   ```bash
   npx expo build:android
   ```

2. For iOS:
   ```bash
   npx expo build:ios
   ```

3. For Web:
   ```bash
   npx expo build:web
   ```

## Development Guidelines

### Code Structure

1. **File Naming**: Use kebab-case for file names
2. **Component Structure**: Each component in its own file
3. **Styling**: Use StyleSheet.create for consistent styling
4. **Navigation**: Use Expo Router file-based navigation
5. **Type Safety**: Define interfaces for props and state

### Best Practices

1. **Performance**:
   - Optimize images and assets
   - Use FlatList for large data sets
   - Implement proper loading states

2. **User Experience**:
   - Consistent design language
   - Clear navigation patterns
   - Responsive layouts
   - Accessibility considerations

3. **Security**:
   - Validate user input
   - Secure storage for sensitive data
   - Proper error handling

## API Integration

The mobile app integrates with the FinAgentix backend API to:

1. Authenticate users
2. Fetch loan and partner data
3. Submit loan applications
4. Update user profiles
5. Process payments

API endpoints are defined in the main application documentation.

## Testing

### Unit Testing

- Jest for JavaScript testing
- React Native Testing Library for component testing

### Integration Testing

- End-to-end testing with Detox
- API integration testing

### Manual Testing

- Device-specific testing
- Performance testing
- Usability testing

## Deployment

### Continuous Integration

- Automated testing on pull requests
- Code quality checks
- Build verification

### Release Process

1. Version bump in package.json
2. Update changelog
3. Create release branch
4. Run build process
5. Deploy to app stores

## Troubleshooting

### Common Issues

1. **Build Errors**:
   - Clear npm cache: `npm start --reset-cache`
   - Reinstall dependencies: `rm -rf node_modules && npm install`

2. **Navigation Issues**:
   - Check file paths in navigation configuration
   - Verify Expo Router setup

3. **Performance Issues**:
   - Optimize images and assets
   - Implement proper pagination
   - Use memoization for expensive calculations

### Support

For issues not covered in this documentation, please refer to:
- Expo documentation
- React Native documentation
- Project maintainers

## Future Enhancements

1. **Biometric Authentication**
2. **Push Notifications**
3. **Offline Mode**
4. **Advanced Analytics**
5. **Multi-language Support**
6. **Dark Mode**
7. **Payment Integration**
8. **Loan Document Management**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is proprietary to FinAgentix and should not be distributed without explicit permission.

## Contact

For questions or support, please contact the FinAgentix development team.
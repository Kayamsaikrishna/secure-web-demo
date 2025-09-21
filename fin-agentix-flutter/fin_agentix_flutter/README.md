# FinAgentix Flutter App

FinAgentix is an AI-powered digital lending platform that connects consumers with sector-specific partners for consumption-driven loans. This Flutter app provides a mobile-first experience for accessing all FinAgentix services.

## Features

- **Loan Marketplace**: Browse and apply for loans across 12 sectors
- **Partner Network**: Connect with trusted partners in education, healthcare, automotive, and more
- **Loan Management**: Track your loan applications and view status
- **EMI Calculator**: Calculate your monthly payments before applying
- **User Profile**: Manage your account information and settings

## Tech Stack

- **Framework**: Flutter (Dart)
- **State Management**: Built-in Flutter state management
- **Networking**: http package for API calls
- **UI Components**: Material Design widgets
- **Navigation**: Bottom navigation with tab-based interface

## Getting Started

### Prerequisites

- Flutter SDK (3.0 or higher)
- Dart SDK (2.17 or higher)
- Android Studio or VS Code with Flutter extensions
- Android/iOS emulator or physical device

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd fin-agentix-flutter/fin_agentix_flutter
   ```

3. Install dependencies:
   ```bash
   flutter pub get
   ```

4. Run the app:
   ```bash
   flutter run
   ```

## Project Structure

```
lib/
├── main.dart                 # Entry point and app routing
├── models/                   # Data models (Loan, Partner, User)
├── screens/                  # UI screens (Home, Loans, Marketplace, Profile)
├── services/                 # Business logic (API service, mock data)
├── utils/                    # Utility functions (formatting, calculations)
└── widgets/                  # Reusable UI components (cards, buttons)
```

## Screens

### Home Screen
- Welcome message and platform overview
- Quick access to loan sectors
- Shortcuts to key features (EMI calculator, loan application)

### Loans Screen
- View existing loan applications
- Track loan status (Approved, Pending, Disbursed)
- Apply for new loans
- Access different loan types

### Marketplace Screen
- Browse featured partners
- Filter partners by sector
- View partner ratings and offers
- Access detailed partner information

### Profile Screen
- User profile information
- Account status and statistics
- Settings access
- Logout functionality

## Supported Loan Sectors

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

## Building for Production

### Android
```bash
flutter build apk
```

### iOS
```bash
flutter build ios
```

### Web
```bash
flutter build web
```

## API Integration

The app integrates with the FinAgentix backend API to:
- Authenticate users
- Fetch loan and partner data
- Submit loan applications
- Update user profiles
- Process payments

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
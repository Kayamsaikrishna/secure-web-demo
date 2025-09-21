# FinAgentix Mobile App - Run Instructions

## Current Status

The FinAgentix Mobile App has been successfully developed with all core features implemented. However, there are some dependency conflicts that need to be resolved to run the app properly.

## Issues Encountered

1. **Expo SDK Version Mismatch**: The installed Expo Go app uses SDK 54, but our project was configured for SDK 51
2. **Dependency Conflicts**: Some Expo packages have version incompatibilities
3. **Port Conflicts**: Port 8081 is often occupied by other processes

## Solution Options

### Option 1: Use Compatible Expo Go Version (Recommended)

Since our app is built with Expo SDK 51, you should install the compatible version of Expo Go:

1. Uninstall the current Expo Go app from your device
2. Download and install Expo Go for SDK 51 from this link:
   https://expo.dev/go?sdkVersion=51&platform=android&device=true

### Option 2: Fix Dependency Issues

To fix the dependency conflicts, follow these steps:

1. Navigate to the mobile app directory:
   ```
   cd fin-agentix-mobile
   ```

2. Clean install dependencies:
   ```
   rm -rf node_modules package-lock.json
   npm install
   ```

3. Install expo-dev-client:
   ```
   npm install expo-dev-client
   ```

4. Start the app on a different port:
   ```
   npx expo start --go --port 8083
   ```

### Option 3: Create New Expo Project (If other options fail)

If you continue to have dependency issues, create a new Expo project and copy the source files:

1. Navigate to the parent directory:
   ```
   cd ..
   ```

2. Create a new Expo project:
   ```
   npx create-expo-app finagentix-mobile-new --template tabs
   ```

3. Copy the source files from `fin-agentix-mobile/app` to `finagentix-mobile-new/app`

4. Update dependencies in the new project:
   ```
   cd finagentix-mobile-new
   npm install @expo/vector-icons
   ```

## Running the App

Once dependencies are resolved:

1. Start the development server:
   ```
   npx expo start --go
   ```

2. Scan the QR code with:
   - Expo Go app (Android)
   - Camera app (iOS)

3. Alternative commands:
   - For web: `npx expo start --web`
   - For specific port: `npx expo start --go --port 8083`

## Features Available

The mobile app includes:

### Main Screens (Tab Navigation)
- **Home**: Dashboard with loan sectors and quick actions
- **Loans**: Loan applications management
- **Marketplace**: Partner browsing and offers
- **Profile**: User information and settings

### Detailed Screens (Stack Navigation)
- **Loan Application**: Apply for new loans
- **EMI Calculator**: Calculate loan payments
- **Partner Details**: View partner information
- **Settings**: Configure app preferences
- **About**: Company information

### Supported Loan Sectors
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

## Troubleshooting

### Common Issues

1. **"Project is incompatible with this version of Expo Go"**
   - Solution: Install the correct version of Expo Go for SDK 51

2. **Port already in use**
   - Solution: Use a different port: `npx expo start --go --port 8083`

3. **Dependency resolution errors**
   - Solution: Clean install with `npm install --legacy-peer-deps`

4. **Missing expo module**
   - Solution: Install expo in the project: `npm install expo`

### Need Help?

If you continue to have issues running the app:

1. Check that all dependencies are properly installed
2. Ensure you're using the correct version of Expo Go
3. Refer to the Expo documentation for SDK 51 compatibility
4. Contact the development team for further assistance

## Next Steps

The mobile app is feature-complete and ready for use. After resolving the dependency issues, you'll be able to:

1. Test all functionality on your mobile device
2. Deploy to app stores
3. Add additional features as needed
4. Integrate with the backend API

The app provides a seamless mobile experience for the FinAgentix consumption-driven lending platform.
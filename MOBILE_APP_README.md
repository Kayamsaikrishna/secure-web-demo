# FinAgentix Mobile App

## Overview

This repository contains two mobile app implementations for FinAgentix:

1. **Flutter App** (Recommended) - Located in `fin-agentix-flutter/fin_agentix_flutter`
2. **Expo App** - Located in `fin-agentix-mobile`

## Recommended Solution: Flutter App

The Flutter app is the recommended solution because it:
- Creates a standalone APK without QR codes
- Works offline for basic functionality
- Can be easily distributed
- Doesn't require constant network connectivity
- Has fewer memory issues than Expo

### Running in Android Studio (Recommended)

1. **Fix NDK Issues First**:
   - Run `fix_ndk_issue.ps1` for step-by-step instructions
   - Or manually reinstall NDK through Android Studio SDK Manager

2. **Open Project**:
   - Run `open_in_android_studio.bat` to open the project
   - Or manually open Android Studio and select:
     `D:\KAYAM_SAI_KRISHNA\dem\secure-web-demo\fin-agentix-flutter\fin_agentix_flutter`

3. **Configure Memory Settings**:
   - Go to Help → Edit Custom VM Options
   - Add: `-Xmx2G -XX:MaxMetaspaceSize=512m -XX:ReservedCodeCacheSize=256m`

4. **Connect Device and Run**:
   - Connect an Android device or start an emulator
   - Click the green "Run" button (▶) in Android Studio

### Building the Flutter App

1. **Prerequisites**:
   - Install Flutter SDK
   - Install Android Studio with Android SDK

2. **Easy Build Process**:
   - Run the `build_flutter_app.bat` file for a simple build
   - Run the `advanced_build_flutter.bat` file for multiple build attempts

3. **Manual Build Process**:
   ```
   cd fin-agentix-flutter\fin_agentix_flutter
   flutter pub get
   flutter build apk --release
   ```

4. **Build in Android Studio**:
   - Go to Build → Flutter → Build APK

5. **Output**:
   - The APK will be generated at:
     `fin-agentix-flutter\fin_agentix_flutter\build\app\outputs\flutter-apk\app-release.apk`

### Features

- All 12 loan sectors implemented
- Bottom navigation between Home, Loans, Marketplace, and Profile
- Mock data for offline functionality
- EMI calculator
- Loan application process
- Partner marketplace

## Expo App Alternative

The Expo app is located in `fin-agentix-mobile`. However, it has significant memory issues as shown in your recent attempt.

### Running Expo App with Memory Fixes

1. **Run with increased memory**:
   - Execute `run_expo_with_more_memory.bat`
   - Or manually set: `set NODE_OPTIONS=--max-old-space-size=8192`

2. **Use web version to avoid QR codes**:
   ```
   npx expo start --web
   ```

3. **Clear cache if needed**:
   ```
   npx expo start -c
   ```

### Memory Issues with Expo

You've encountered:
```
FATAL ERROR: NewSpace::EnsureCurrentCapacity Allocation failed - JavaScript heap out of memory
```

Solutions:
- Check `EXPO_MEMORY_FIX.md` for detailed fixes
- Use web version instead of mobile (no QR codes needed)
- Close other applications to free up RAM
- Increase Node.js memory limit

## Troubleshooting Build Issues

If you encounter build errors (especially NDK-related issues):

1. Check the `FLUTTER_BUILD_TROUBLESHOOTING.md` file for detailed solutions
2. Try running `advanced_build_flutter.bat` which attempts multiple build methods
3. Ensure your Android SDK and NDK are properly installed

Common issues:
- NDK at `C:\Users\kayam_drhfn9o\AppData\Local\Android\sdk\ndk\26.3.11579264` did not have a source.properties file
  Solution: Delete the corrupted NDK folder and reinstall through Android Studio SDK Manager
- Memory issues: "unable to create native thread: possibly out of memory"
  Solution: Reduce memory allocation in gradle.properties

## Distribution

### Flutter App (Recommended for Distribution)
- Can be distributed as standalone APK
- No app store required
- Direct download and installation
- No QR codes needed for users

### Expo App
- Requires Expo Go for testing (QR code needed)
- Needs app store deployment for production
- Has memory issues on systems with limited RAM

## Contact

For questions or support, please contact the development team.
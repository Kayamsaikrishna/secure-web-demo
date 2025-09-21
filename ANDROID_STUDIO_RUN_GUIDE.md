# Running FinAgentix Flutter App in Android Studio

## Prerequisites
- Android Studio installed and configured
- Flutter plugin installed in Android Studio
- Android device connected via USB or Android Emulator running

## Steps to Run the App

### 1. Open the Project
1. Launch Android Studio
2. Select "Open an existing Android Studio project"
3. Navigate to:
   ```
   D:\KAYAM_SAI_KRISHNA\dem\secure-web-demo\fin-agentix-flutter\fin_agentix_flutter
   ```
4. Select the `fin_agentix_flutter` folder and click "OK"

### 2. Wait for Initial Setup
- Wait for Gradle to sync (you'll see progress in the status bar)
- Flutter dependencies will be fetched automatically
- This may take 2-5 minutes on first load

### 3. Set Up Device
1. Connect your Android device via USB
   - Enable Developer Options on your device
   - Enable USB Debugging
2. OR create an Android Emulator:
   - Go to Tools → AVD Manager
   - Click "Create Virtual Device"
   - Select a device definition and Android version
   - Click "Finish"

### 4. Run the App
1. In the toolbar, select your target device from the dropdown
2. Click the green "Run" button (▶) or press Shift+F10
3. The app will build and install on your selected device

### 5. Troubleshooting Device Issues
If your device doesn't appear:
1. Check USB cable connection
2. Ensure USB debugging is enabled
3. Try different USB ports
4. Install proper USB drivers for your device
5. On Windows, you may need to:
   - Allow the device when prompted
   - Install OEM USB drivers

### 6. Hot Reload for Development
While the app is running:
- Press 'r' in the terminal to hot reload
- Press 'R' for hot restart
- Make code changes and see them instantly

## Building APK in Android Studio

### Method 1: Using Build Menu
1. Go to Build → Flutter → Build APK
2. Wait for the build process to complete
3. APK will be located at:
   ```
   build\app\outputs\flutter-apk\app-release.apk
   ```

### Method 2: Using Terminal in Android Studio
1. Open Terminal tab at the bottom of Android Studio
2. Run:
   ```
   flutter build apk --release
   ```

## Common Issues and Solutions

### Memory Issues
If you encounter:
```
unable to create native thread: possibly out of memory or process/resource limits reached
```

Solutions:
1. Close other applications to free up memory
2. Modify `android/gradle.properties` to use less memory:
   ```
   org.gradle.jvmargs=-Xmx2G -XX:MaxMetaspaceSize=512m -XX:ReservedCodeCacheSize=256m -XX:+HeapDumpOnOutOfMemoryError
   ```
3. Restart Android Studio and your computer

### NDK Issues
If you encounter NDK errors:
1. Go to File → Settings → Appearance & Behavior → System Settings → Android SDK
2. Click on "SDK Tools" tab
3. Uncheck "NDK (Side by side)" and apply
4. Check "NDK (Side by side)" again and apply
5. Restart Android Studio

### Gradle Sync Issues
1. Go to File → Sync Project with Gradle Files
2. Or click "Try Again" in the notification bar

### Flutter Plugin Issues
1. Go to File → Settings → Plugins
2. Search for "Flutter" and ensure it's installed and enabled
3. Restart Android Studio if you just installed it

## Testing the App

### Features to Test
1. Bottom navigation between Home, Loans, Marketplace, and Profile
2. All 12 loan sectors in the Home screen
3. Loan application process
4. Partner marketplace browsing
5. Profile management

### Offline Functionality
- The app should work without internet for basic features
- Mock data is provided for offline testing

## Distribution

Once you've successfully built the APK:
1. Locate the APK file:
   ```
   build\app\outputs\flutter-apk\app-release.apk
   ```
2. Share this file directly with users
3. Users can download and install without:
   - Scanning QR codes
   - Using Expo Go
   - Constant network connectivity

## Contact

For any issues not covered in this guide, please contact the development team.
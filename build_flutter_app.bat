@echo off
echo ========================================
echo FinAgentix Flutter App Builder
echo ========================================
echo.

cd fin-agentix-flutter\fin_agentix_flutter

echo Checking Flutter installation...
flutter doctor
echo.

echo Installing dependencies...
flutter pub get
echo.

echo Setting environment variables for optimal memory usage...
set GRADLE_OPTS=-Xmx2G -XX:MaxMetaspaceSize=512m -XX:ReservedCodeCacheSize=256m
echo.

echo Attempting to build APK with optimized memory settings...
echo This may take several minutes...
echo.

flutter build apk --release

if %errorlevel% == 0 (
    echo.
    echo ========================================
    echo BUILD SUCCESSFUL!
    echo ========================================
    echo APK location: build\app\outputs\flutter-apk\app-release.apk
    echo.
    echo You can now distribute this APK to users.
    echo They can download and install it directly
    echo without needing QR codes or Expo.
    echo.
) else (
    echo.
    echo ========================================
    echo BUILD FAILED
    echo ========================================
    echo.
    echo Trying alternative build method...
    echo.
    flutter build apk --split-per-abi
    if %errorlevel% == 0 (
        echo.
        echo ========================================
        echo ALTERNATIVE BUILD SUCCESSFUL!
        echo ========================================
        echo APK locations:
        echo build\app\outputs\flutter-apk\app-arm64-v8a-release.apk
        echo build\app\outputs\flutter-apk\app-armeabi-v7a-release.apk
        echo build\app\outputs\flutter-apk\app-x86_64-release.apk
        echo.
    ) else (
        echo.
        echo ========================================
        echo BOTH BUILD METHODS FAILED
        echo ========================================
        echo.
        echo Please check the error messages above.
        echo You may need to:
        echo 1. Update your Android SDK/NDK
        echo 2. Run 'flutter doctor' to diagnose issues
        echo 3. Try building on a different machine
        echo.
    )
)

echo.
pause
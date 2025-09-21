@echo off
echo ========================================
echo Advanced FinAgentix Flutter App Builder
echo ========================================
echo.

cd fin-agentix-flutter\fin_agentix_flutter

echo Step 1: Cleaning project...
flutter clean
echo.

echo Step 2: Getting dependencies...
flutter pub get
echo.

echo Step 3: Setting environment variables for optimal memory usage...
set GRADLE_OPTS=-Xmx2G -XX:MaxMetaspaceSize=512m -XX:ReservedCodeCacheSize=256m
echo.

echo Step 4: Trying standard release build...
flutter build apk --release --no-tree-shake-icons
if %errorlevel% == 0 (
    goto build_success
)

echo.
echo Standard build failed. Trying split ABI build...
flutter build apk --split-per-abi --no-tree-shake-icons
if %errorlevel% == 0 (
    goto split_success
)

echo.
echo Split ABI build failed. Trying debug build...
flutter build apk --debug
if %errorlevel% == 0 (
    goto debug_success
)

echo.
echo ========================================
echo ALL BUILD METHODS FAILED
echo ========================================
echo.
echo Please check FLUTTER_BUILD_TROUBLESHOOTING.md for solutions.
echo.
goto end

:build_success
echo.
echo ========================================
echo STANDARD BUILD SUCCESSFUL!
echo ========================================
echo APK location: build\app\outputs\flutter-apk\app-release.apk
echo.
goto end

:split_success
echo.
echo ========================================
echo SPLIT ABI BUILD SUCCESSFUL!
echo ========================================
echo APK locations:
echo build\app\outputs\flutter-apk\app-arm64-v8a-release.apk
echo build\app\outputs\flutter-apk\app-armeabi-v7a-release.apk
echo build\app\outputs\flutter-apk\app-x86_64-release.apk
echo.
echo These smaller APKs can be distributed to specific device types.
echo.
goto end

:debug_success
echo.
echo ========================================
echo DEBUG BUILD SUCCESSFUL!
echo ========================================
echo APK location: build\app\outputs\flutter-apk\app-debug.apk
echo.
echo Note: This is a debug build and larger than release builds.
echo It's suitable for testing but not recommended for production.
echo.

:end
echo.
echo Build process completed.
echo.
pause
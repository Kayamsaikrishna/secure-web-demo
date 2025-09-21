@echo off
echo ========================================
echo Opening FinAgentix Flutter App in Android Studio
echo ========================================
echo.

echo Before opening, please fix the NDK issue:
echo 1. Open Android Studio
echo 2. Go to Settings ^> Appearance ^& Behavior ^> System Settings ^> Android SDK
echo 3. Click on "SDK Tools" tab
echo 4. Uncheck "NDK (Side by side)" and apply
echo 5. Restart Android Studio
echo 6. Go back to SDK Tools
echo 7. Check "NDK (Side by side)" again
echo 8. Click "Apply" to reinstall
echo.

echo Also, configure memory settings in Android Studio:
echo 1. Go to Help ^> Edit Custom VM Options
echo 2. Add these lines:
echo    -Xmx2G
echo    -XX:MaxMetaspaceSize=512m
echo    -XX:ReservedCodeCacheSize=256m
echo.

echo Press any key to continue...
pause
echo.

echo Opening project...
echo.

start "" "D:\KAYAM_SAI_KRISHNA\dem\secure-web-demo\fin-agentix-flutter\fin_agentix_flutter"

echo.
echo If Android Studio doesn't open automatically:
echo 1. Open Android Studio manually
echo 2. Select "Open an existing Android Studio project"
echo 3. Navigate to:
echo    D:\KAYAM_SAI_KRISHNA\dem\secure-web-demo\fin-agentix-flutter\fin_agentix_flutter
echo 4. Select the fin_agentix_flutter folder
echo.

echo For detailed instructions, see COMPLETE_ANDROID_STUDIO_SOLUTION.md
echo.

pause
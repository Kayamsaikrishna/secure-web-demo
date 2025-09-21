# Fix NDK Issue Script
Write-Host "========================================"
Write-Host "Fixing NDK Issue for FinAgentix Flutter App"
Write-Host "========================================"
Write-Host ""

Write-Host "This script will help you fix the NDK issue by providing step-by-step instructions."
Write-Host ""

Write-Host "Step 1: Close Android Studio if it's currently running."
Write-Host ""

Write-Host "Step 2: Delete the corrupted NDK folder (if it exists):"
Write-Host "   Path: C:\Users\kayam_drhfn9o\AppData\Local\Android\sdk\ndk\26.3.11579264"
Write-Host ""

Write-Host "Step 3: Open Android Studio and follow these steps:"
Write-Host "   1. Go to Settings (Ctrl+Alt+S)"
Write-Host "   2. Navigate to Appearance & Behavior > System Settings > Android SDK"
Write-Host "   3. Click on 'SDK Tools' tab"
Write-Host "   4. Uncheck 'NDK (Side by side)' and click 'Apply'"
Write-Host "   5. Restart Android Studio"
Write-Host "   6. Go back to SDK Tools"
Write-Host "   7. Check 'NDK (Side by side)' again"
Write-Host "   8. Click 'Apply' to reinstall"
Write-Host ""

Write-Host "Step 4: Configure memory settings in Android Studio:"
Write-Host "   1. Go to Help > Edit Custom VM Options"
Write-Host "   2. Add these lines if they don't exist:"
Write-Host "      -Xmx2G"
Write-Host "      -XX:MaxMetaspaceSize=512m"
Write-Host "      -XX:ReservedCodeCacheSize=256m"
Write-Host ""

Write-Host "After completing these steps, you can open the project in Android Studio."
Write-Host "Run 'open_in_android_studio.bat' to open the project."
Write-Host ""

Write-Host "Press any key to continue..."
$host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
@echo off
echo ========================================
echo Running Expo App with Increased Memory
echo ========================================
echo.

echo Increasing Node.js memory limit...
echo Setting --max-old-space-size=8192
echo.

cd fin-agentix-mobile

echo Setting environment variables...
set NODE_OPTIONS=--max-old-space-size=8192
echo.

echo Starting Expo...
echo If you encounter issues, try:
echo 1. Closing other applications to free up RAM
echo 2. Running 'npx expo start --web' for web version (no QR code needed)
echo 3. Running 'npx expo start -c' to clear cache
echo.

npx expo start

echo.
echo If you continue to have memory issues:
echo 1. Try the web version: npx expo start --web
echo 2. Check EXPO_MEMORY_FIX.md for more solutions
echo.

pause
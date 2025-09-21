# Expo Memory Issues Fix

## Problem

You're encountering memory issues when running the Expo app:
```
FATAL ERROR: NewSpace::EnsureCurrentCapacity Allocation failed - JavaScript heap out of memory
FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
FATAL ERROR: Zone Allocation failed - process out of memory
```

## Solutions

### Solution 1: Increase Node.js Memory Limit

Create a batch file to run Expo with increased memory:

1. Create `run_expo_with_more_memory.bat`:
```batch
@echo off
echo Increasing Node.js memory limit for Expo...
echo.

set NODE_OPTIONS=--max-old-space-size=8192
npx expo start

echo.
pause
```

### Solution 2: Modify package.json Scripts

Update your `package.json` to include memory allocation:

```json
{
  "scripts": {
    "start": "node --max-old-space-size=8192 node_modules/.bin/expo start",
    "android": "node --max-old-space-size=8192 node_modules/.bin/expo start --android",
    "ios": "node --max-old-space-size=8192 node_modules/.bin/expo start --ios",
    "web": "node --max-old-space-size=8192 node_modules/.bin/expo start --web"
  }
}
```

### Solution 3: Environment Variables

Set environment variables before running Expo:

Windows Command Prompt:
```cmd
set NODE_OPTIONS=--max-old-space-size=8192
npx expo start
```

Windows PowerShell:
```powershell
$env:NODE_OPTIONS="--max-old-space-size=8192"
npx expo start
```

### Solution 4: Clean Cache

Clear Expo and npm cache:
```bash
npx expo start -c
npm start -- --reset-cache
```

### Solution 5: Close Other Applications

Before running Expo:
1. Close all browsers
2. Close other IDEs
3. Close unnecessary applications
4. Restart your computer

### Solution 6: Use Web Version (Recommended for Testing)

Instead of using Expo Go which requires QR codes:
```bash
npx expo start --web
```

This runs the app in a web browser without memory-intensive mobile emulation.

## Recommended Approach

1. Try the web version first: `npx expo start --web`
2. If you need mobile testing, use the batch file with increased memory
3. Close other applications to free up RAM
4. Consider upgrading to 16GB RAM if you frequently work with Expo

## Contact

For further assistance, please contact the development team.
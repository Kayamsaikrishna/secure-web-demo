import { NextResponse } from 'next/server';

export async function GET() {
  const status = {
    multilingualSupport: true,
    supportedLanguages: [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'Hindi' },
      { code: 'ta', name: 'Tamil' },
      { code: 'te', name: 'Telugu' },
      { code: 'ml', name: 'Malayalam' },
      { code: 'kn', name: 'Kannada' },
      { code: 'bn', name: 'Bengali' },
      { code: 'gu', name: 'Gujarati' },
      { code: 'or', name: 'Odia' },
      { code: 'pa', name: 'Punjabi' },
      { code: 'mr', name: 'Marathi' },
      { code: 'ur', name: 'Urdu' }
    ],
    implementation: 'Manual translation files',
    status: 'Active',
    lastUpdated: new Date().toISOString()
  };

  return NextResponse.json(status);
}
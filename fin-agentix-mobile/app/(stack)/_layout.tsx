import React from 'react';
import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="loan-application" options={{ headerShown: true, title: 'Loan Application' }} />
      <Stack.Screen name="emi-calculator" options={{ headerShown: true, title: 'EMI Calculator' }} />
      <Stack.Screen name="partner-details" options={{ headerShown: true, title: 'Partner Details' }} />
      <Stack.Screen name="settings" options={{ headerShown: true, title: 'Settings' }} />
      <Stack.Screen name="about" options={{ headerShown: true, title: 'About' }} />
    </Stack>
  );
}
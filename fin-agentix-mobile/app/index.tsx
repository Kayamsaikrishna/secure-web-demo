import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in and redirect accordingly
    // For now, we'll redirect to the main app
    setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fin-Agentix</Text>
      <Text style={styles.subtitle}>AI-Powered Digital Lending Platform</Text>
      <ActivityIndicator size="large" color="#0066cc" style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  loader: {
    marginTop: 20,
  },
});
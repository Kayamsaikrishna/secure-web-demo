import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface CustomHeaderProps {
  title: string;
  showBackButton?: boolean;
}

export default function CustomHeader({ title, showBackButton = false }: CustomHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, showBackButton && styles.titleWithBack]}>{title}</Text>
      <View style={styles.rightSpacer} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0066cc',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  titleWithBack: {
    marginLeft: -40, // Adjust for back button
  },
  rightSpacer: {
    width: 30, // Match back button width
  },
});
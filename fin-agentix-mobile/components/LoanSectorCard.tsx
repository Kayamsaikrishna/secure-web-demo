import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface LoanSectorCardProps {
  name: string;
  color: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  onPress: () => void;
}

export default function LoanSectorCard({ name, color, icon, onPress }: LoanSectorCardProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={32} color="white" />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 100,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});
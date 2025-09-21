import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface PartnerCardProps {
  id: string;
  name: string;
  sector: string;
  offer: string;
  interest: string;
  rating: number;
  onPress: () => void;
}

export default function PartnerCard({ id, name, sector, offer, interest, rating, onPress }: PartnerCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
      <Text style={styles.sector}>{sector}</Text>
      <Text style={styles.offer}>{offer}</Text>
      <View style={styles.footer}>
        <Text style={styles.interest}>Interest: {interest}</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  sector: {
    fontSize: 14,
    color: '#0066cc',
    marginBottom: 10,
  },
  offer: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interest: {
    fontSize: 14,
    color: '#666',
  },
  applyButton: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  applyText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
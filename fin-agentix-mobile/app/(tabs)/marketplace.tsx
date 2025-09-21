import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PartnerCard from '@/components/PartnerCard';

interface Sector {
  id: string;
  name: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
}

interface Partner {
  id: string;
  name: string;
  sector: string;
  offer: string;
  interest: string;
  rating: number;
}

export default function MarketplaceScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const sectors: Sector[] = [
    { id: '1', name: 'Education', icon: 'school', color: '#4285F4' },
    { id: '2', name: 'Healthcare', icon: 'hospital', color: '#EA4335' },
    { id: '3', name: 'Automotive', icon: 'car', color: '#FBBC05' },
    { id: '4', name: 'Technology', icon: 'laptop', color: '#34A853' },
    { id: '5', name: 'Agriculture', icon: 'tractor', color: '#4285F4' },
    { id: '6', name: 'Real Estate', icon: 'home', color: '#EA4335' },
  ];

  const partners: Partner[] = [
    { id: '1', name: 'ICICI Bank', sector: 'Banking', offer: 'Up to ₹50L', interest: '8.5%', rating: 4.5 },
    { id: '2', name: 'HDFC Ltd', sector: 'Housing', offer: 'Up to ₹1Cr', interest: '8.2%', rating: 4.7 },
    { id: '3', name: 'Tata Motors', sector: 'Automotive', offer: 'Up to ₹20L', interest: '9.0%', rating: 4.3 },
    { id: '4', name: 'Byju\'s', sector: 'Education', offer: 'Up to ₹5L', interest: '12.0%', rating: 4.6 },
    { id: '5', name: 'Apollo Hospitals', sector: 'Healthcare', offer: 'Up to ₹10L', interest: '11.5%', rating: 4.8 },
  ];

  const handlePartnerPress = (id: string) => {
    router.push('/(stack)/partner-details');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search partners or offers..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialCommunityIcons name="magnify" size={24} color="#666" style={styles.searchIcon} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sectors</Text>
        <View style={styles.sectorsGrid}>
          {sectors.map((sector) => (
            <TouchableOpacity 
              key={sector.id} 
              style={[styles.sectorCard, { backgroundColor: sector.color }]}
              onPress={() => router.push('/(stack)/loan-application')}
            >
              <MaterialCommunityIcons name={sector.icon} size={32} color="white" />
              <Text style={styles.sectorText}>{sector.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Partners</Text>
        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            id={partner.id}
            name={partner.name}
            sector={partner.sector}
            offer={partner.offer}
            interest={partner.interest}
            rating={partner.rating}
            onPress={() => handlePartnerPress(partner.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  sectorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectorCard: {
    width: '30%',
    height: 80,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectorText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
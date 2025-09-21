import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface LoanType {
  id: string;
  name: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  interest: string;
}

export default function LoansScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const loanTypes: LoanType[] = [
    { id: '1', name: 'Personal Loan', icon: 'account-cash', interest: '12.5%' },
    { id: '2', name: 'Home Loan', icon: 'home', interest: '8.5%' },
    { id: '3', name: 'Vehicle Loan', icon: 'car', interest: '9.0%' },
    { id: '4', name: 'Education Loan', icon: 'school', interest: '10.0%' },
    { id: '5', name: 'Business Loan', icon: 'briefcase', interest: '14.0%' },
    { id: '6', name: 'Gold Loan', icon: 'gold', interest: '11.0%' },
  ];

  const handleLoanPress = (id: string) => {
    // Navigate to loan details screen
    console.log('Loan pressed:', id);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search loans..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialCommunityIcons name="magnify" size={24} color="#666" style={styles.searchIcon} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loan Types</Text>
        <View style={styles.loanTypesGrid}>
          {loanTypes.map((loan, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.loanTypeCard}
              onPress={() => router.push('/(stack)/loan-application')}
            >
              <MaterialCommunityIcons name={loan.icon} size={32} color="#0066cc" />
              <Text style={styles.loanTypeName}>{loan.name}</Text>
              <Text style={styles.loanInterest}>From {loan.interest}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity 
        style={styles.applyButton}
        onPress={() => router.push('/(stack)/loan-application')}
      >
        <Text style={styles.applyButtonText}>Apply for New Loan</Text>
      </TouchableOpacity>
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
  loanTypesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  loanTypeCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  loanTypeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  loanInterest: {
    fontSize: 14,
    color: '#0066cc',
    marginTop: 5,
  },
  applyButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import LoanSectorCard from '../../components/LoanSectorCard';

export default function HomeScreen() {
  const router = useRouter();
  
  const loanSectors = [
    { name: 'Personal Loan', icon: 'account-cash', color: '#FF6B6B' },
    { name: 'Home Loan', icon: 'home', color: '#4ECDC4' },
    { name: 'Vehicle Loan', icon: 'car', color: '#45B7D1' },
    { name: 'Business Loan', icon: 'briefcase', color: '#96CEB4' },
    { name: 'Education Loan', icon: 'school', color: '#FFEAA7' },
    { name: 'Gold Loan', icon: 'gold', color: '#F7DC6F' },
    { name: 'Agriculture Loan', icon: 'tractor', color: '#82E0AA' },
    { name: 'Healthcare Loan', icon: 'hospital', color: '#BB8FCE' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to Fin-Agentix</Text>
        <Text style={styles.subtitle}>AI-Powered Digital Lending Platform</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loan Sectors</Text>
        <View style={styles.grid}>
          {loanSectors.map((sector, index) => (
            <LoanSectorCard
              key={index}
              name={sector.name}
              icon={sector.icon}
              color={sector.color}
              onPress={() => router.push('/(stack)/loan-application')}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/(stack)/emi-calculator')}
          >
            <MaterialCommunityIcons name="calculator" size={24} color="#0066cc" />
            <Text style={styles.actionText}>EMI Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => router.push('/(stack)/loan-application')}
          >
            <MaterialCommunityIcons name="file-document" size={24} color="#0066cc" />
            <Text style={styles.actionText}>Apply for Loan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <MaterialCommunityIcons name="account-check" size={24} color="#0066cc" />
            <Text style={styles.actionText}>KYC Status</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#0066cc',
    padding: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 5,
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  actionText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});
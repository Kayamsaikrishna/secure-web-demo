import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PartnerDetailsScreen() {
  const [partner] = useState({
    id: '1',
    name: 'ABC University',
    sector: 'Education',
    description: 'ABC University is a premier educational institution offering world-class education and research opportunities. We partner with Fin-Agentix to provide affordable education loans to deserving students.',
    offers: [
      {
        id: '1',
        title: 'Education Loan',
        description: 'Loan for tuition fees, books, and other educational expenses',
        amount: 'Up to ₹10,00,000',
        interest: '7.5% onwards',
        features: [
          'No collateral required',
          'Flexible repayment options',
          'Moratorium period during course',
          'Quick disbursal',
        ],
      },
      {
        id: '2',
        title: 'Hostel & Accommodation Loan',
        description: 'Loan for hostel fees and accommodation expenses',
        amount: 'Up to ₹2,00,000',
        interest: '8.0% onwards',
        features: [
          'Simple documentation',
          'Competitive rates',
          'Part payment facility',
        ],
      },
    ],
    rating: 4.5,
    reviews: 128,
    established: '2005',
    location: 'Mumbai, India',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.partnerHeader}>
          <MaterialCommunityIcons name="school" size={50} color="#0066cc" />
          <View style={styles.partnerInfo}>
            <Text style={styles.partnerName}>{partner.name}</Text>
            <Text style={styles.partnerSector}>{partner.sector}</Text>
          </View>
        </View>
        
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <MaterialCommunityIcons
                key={star}
                name={star <= Math.floor(partner.rating) ? 'star' : 'star-outline'}
                size={20}
                color={star <= Math.floor(partner.rating) ? '#FFD700' : '#ccc'}
              />
            ))}
          </View>
          <Text style={styles.ratingText}>{partner.rating} ({partner.reviews} reviews)</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{partner.description}</Text>
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="calendar" size={20} color="#666" />
            <Text style={styles.detailText}>Established: {partner.established}</Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialCommunityIcons name="map-marker" size={20} color="#666" />
            <Text style={styles.detailText}>Location: {partner.location}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loan Offers</Text>
        {partner.offers.map((offer) => (
          <View key={offer.id} style={styles.offerCard}>
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerDescription}>{offer.description}</Text>
            
            <View style={styles.offerDetails}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Loan Amount</Text>
                <Text style={styles.detailValue}>{offer.amount}</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Interest Rate</Text>
                <Text style={styles.detailValue}>{offer.interest}</Text>
              </View>
            </View>
            
            <Text style={styles.featuresTitle}>Key Features</Text>
            {offer.features.map((feature, index) => (
              <View key={index} style={styles.featureRow}>
                <MaterialCommunityIcons name="check-circle" size={16} color="#28a745" />
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
            
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.applyButtonText}>Apply for this Loan</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  partnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  partnerInfo: {
    marginLeft: 15,
  },
  partnerName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  partnerSector: {
    fontSize: 16,
    color: '#0066cc',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
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
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  offerCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  offerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detailItem: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 10,
  },
  applyButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface LoanCardProps {
  id: string;
  type: string;
  amount: string;
  status: string;
  date: string;
  onPress: () => void;
}

export default function LoanCard({ id, type, amount, status, date, onPress }: LoanCardProps) {
  const getStatusStyle = () => {
    switch (status) {
      case 'Approved':
        return styles.statusApproved;
      case 'Pending':
        return styles.statusPending;
      case 'Disbursed':
        return styles.statusDisbursed;
      default:
        return styles.statusPending;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.type}>{type}</Text>
        <Text style={[styles.status, getStatusStyle()]}>{status}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={styles.date}>{date}</Text>
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
    marginBottom: 10,
  },
  type: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 'bold',
  },
  statusApproved: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  statusPending: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
  statusDisbursed: {
    backgroundColor: '#cce5ff',
    color: '#004085',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});
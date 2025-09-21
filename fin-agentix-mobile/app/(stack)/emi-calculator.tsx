import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EMICalculatorScreen() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !tenure) {
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const months = parseFloat(tenure);

    if (isNaN(principal) || isNaN(rate) || isNaN(months) || rate <= 0 || months <= 0) {
      return;
    }

    const emiValue = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalAmountValue = emiValue * months;
    const totalInterestValue = totalAmountValue - principal;

    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalAmount(totalAmountValue);
  };

  const resetCalculator = () => {
    setLoanAmount('');
    setInterestRate('');
    setTenure('');
    setEmi(null);
    setTotalInterest(null);
    setTotalAmount(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EMI Calculator</Text>
        <Text style={styles.headerSubtitle}>Calculate your monthly loan payments</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Loan Amount (₹)</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="currency-inr" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter loan amount"
              value={loanAmount}
              onChangeText={setLoanAmount}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Interest Rate (%)</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="percent" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter annual interest rate"
              value={interestRate}
              onChangeText={setInterestRate}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tenure (Months)</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="calendar" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter loan tenure in months"
              value={tenure}
              onChangeText={setTenure}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.calculateButton} onPress={calculateEMI}>
            <Text style={styles.buttonText}>Calculate EMI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={resetCalculator}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {emi !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Loan Summary</Text>
          
          <View style={styles.resultCard}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Monthly EMI</Text>
              <Text style={styles.resultValue}>₹{emi.toFixed(2)}</Text>
            </View>
            
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Principal Amount</Text>
              <Text style={styles.resultValue}>₹{parseFloat(loanAmount).toFixed(2)}</Text>
            </View>
            
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>Total Interest</Text>
              <Text style={styles.resultValue}>₹{totalInterest!.toFixed(2)}</Text>
            </View>
            
            <View style={[styles.resultRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total Amount</Text>
              <Text style={styles.totalValue}>₹{totalAmount!.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      )}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 5,
  },
  formContainer: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  calculateButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    padding: 20,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultLabel: {
    fontSize: 16,
    color: '#333',
  },
  resultValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  totalRow: {
    borderBottomWidth: 0,
    paddingTop: 15,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
});
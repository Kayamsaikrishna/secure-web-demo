import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoanApplicationScreen() {
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [tenure, setTenure] = useState('');

  const handleSubmit = () => {
    if (!amount || !purpose || !tenure) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    
    Alert.alert(
      'Loan Application',
      'Your loan application has been submitted successfully!',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Apply for Loan</Text>
        <Text style={styles.headerSubtitle}>Fill in your details to apply</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Loan Type</Text>
          <View style={styles.pickerContainer}>
            <MaterialCommunityIcons name="bank" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Select loan type"
              onFocus={() => Alert.alert('Select Loan Type', 'Please select from available options')}
            />
            <MaterialCommunityIcons name="chevron-down" size={20} color="#666" />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Loan Amount</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="currency-inr" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter loan amount"
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Loan Purpose</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="text" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Describe the purpose of the loan"
              value={purpose}
              onChangeText={setPurpose}
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tenure (Months)</Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons name="calendar" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter loan tenure"
              value={tenure}
              onChangeText={setTenure}
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Application</Text>
        </TouchableOpacity>
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
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
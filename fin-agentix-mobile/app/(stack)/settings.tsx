import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="account" size={20} color="#666" />
            <Text style={styles.settingText}>Profile Information</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="lock" size={20} color="#666" />
            <Text style={styles.settingText}>Security</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="bell" size={20} color="#666" />
            <Text style={styles.settingText}>Notifications</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="translate" size={20} color="#666" />
            <Text style={styles.settingText}>Language</Text>
            <Text style={styles.settingValue}>English</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="palette" size={20} color="#666" />
            <Text style={styles.settingText}>Theme</Text>
            <Text style={styles.settingValue}>Light</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="help-circle" size={20} color="#666" />
            <Text style={styles.settingText}>Help Center</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="message-text" size={20} color="#666" />
            <Text style={styles.settingText}>Contact Us</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name="information" size={20} color="#666" />
            <Text style={styles.settingText}>About</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.dangerButton}>
          <MaterialCommunityIcons name="logout" size={20} color="#dc3545" />
          <Text style={styles.dangerText}>Logout</Text>
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
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  settingsCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  settingValue: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  dangerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  dangerText: {
    color: '#dc3545',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  kycStatus: string;
  memberSince: string;
  totalApplications: number;
  activeLoans: number;
}

export default function ProfileScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching profile data
    setTimeout(() => {
      setProfile({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+91 9876543210',
        kycStatus: 'Verified',
        memberSince: 'Jan 2023',
        totalApplications: 5,
        activeLoans: 2,
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive' },
      ]
    );
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading profile...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <MaterialCommunityIcons name="account-circle" size={80} color="#0066cc" />
        </View>
        <Text style={styles.profileName}>{profile?.name}</Text>
        <Text style={styles.profileEmail}>{profile?.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="phone" size={20} color="#666" />
            <Text style={styles.infoText}>{profile?.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="email" size={20} color="#666" />
            <Text style={styles.infoText}>{profile?.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <MaterialCommunityIcons name="calendar" size={20} color="#666" />
            <Text style={styles.infoText}>Member since {profile?.memberSince}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Status</Text>
        <View style={styles.statusCard}>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>KYC Status</Text>
            <Text style={[styles.statusValue, styles.verified]}>Verified</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Total Applications</Text>
            <Text style={styles.statusValue}>{profile?.totalApplications}</Text>
          </View>
          <View style={styles.statusRow}>
            <Text style={styles.statusText}>Active Loans</Text>
            <Text style={styles.statusValue}>{profile?.activeLoans}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingsCard}>
          <TouchableOpacity 
            style={styles.settingRow}
            onPress={() => router.push('/(stack)/settings')}
          >
            <MaterialCommunityIcons name="bell" size={20} color="#666" />
            <Text style={styles.settingText}>Notifications</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.settingRow}
            onPress={() => router.push('/(stack)/settings')}
          >
            <MaterialCommunityIcons name="lock" size={20} color="#666" />
            <Text style={styles.settingText}>Security</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.settingRow}
            onPress={() => router.push('/(stack)/about')}
          >
            <MaterialCommunityIcons name="help-circle" size={20} color="#666" />
            <Text style={styles.settingText}>Help & Support</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={20} color="white" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'white',
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
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
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  statusCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  statusValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  verified: {
    color: '#28a745',
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
  logoutButton: {
    backgroundColor: '#dc3545',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
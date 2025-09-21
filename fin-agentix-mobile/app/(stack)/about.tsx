import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="bank" size={60} color="white" />
        <Text style={styles.headerTitle}>FinAgentix</Text>
        <Text style={styles.headerSubtitle}>AI-Powered Digital Lending Platform</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About FinAgentix</Text>
        <Text style={styles.paragraph}>
          FinAgentix is a revolutionary digital lending platform that connects consumers with sector-specific partners for consumption-driven loans. Our AI-powered ecosystem ensures seamless, secure, and efficient lending experiences.
        </Text>
        <Text style={styles.paragraph}>
          We&apos;ve partnered with over 500+ trusted institutions across 12 key sectors including education, healthcare, automotive, and more to provide you with the best loan options tailored to your needs.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          To democratize access to credit by creating a transparent, efficient, and inclusive lending ecosystem that empowers consumers and partners alike.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.featureContainer}>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#28a745" />
            <Text style={styles.featureText}>AI-Powered Matching</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#28a745" />
            <Text style={styles.featureText}>Direct-to-Partner Disbursement</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#28a745" />
            <Text style={styles.featureText}>Real-time Loan Tracking</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#28a745" />
            <Text style={styles.featureText}>Secure & Transparent</Text>
          </View>
          <View style={styles.featureRow}>
            <MaterialCommunityIcons name="check-circle" size={20} color="#28a745" />
            <Text style={styles.featureText}>24/7 Customer Support</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <View style={styles.contactContainer}>
          <View style={styles.contactRow}>
            <MaterialCommunityIcons name="email" size={20} color="#666" />
            <Text style={styles.contactText}>support@finagentix.com</Text>
          </View>
          <View style={styles.contactRow}>
            <MaterialCommunityIcons name="phone" size={20} color="#666" />
            <Text style={styles.contactText}>+91 98765 43210</Text>
          </View>
          <View style={styles.contactRow}>
            <MaterialCommunityIcons name="web" size={20} color="#666" />
            <Text style={styles.contactText}>www.finagentix.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
        <Text style={styles.footerText}>© 2023 FinAgentix. All rights reserved.</Text>
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
    padding: 30,
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 5,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 15,
  },
  featureContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  contactContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});
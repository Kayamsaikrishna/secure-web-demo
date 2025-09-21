import '../models/loan.dart';
import '../models/partner.dart';
import '../models/user.dart';

class MockDataService {
  // Mock user data
  static User getMockUser() {
    return User(
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+91 9876543210',
      kycStatus: 'Verified',
      memberSince: 'Jan 2023',
      totalApplications: 5,
      activeLoans: 2,
    );
  }

  // Mock loan data
  static List<Loan> getMockLoans() {
    return [
      Loan(
        id: '1',
        type: 'Personal Loan',
        amount: 500000,
        status: 'Approved',
        date: '2023-05-15',
        interestRate: 10.5,
        tenure: 24,
      ),
      Loan(
        id: '2',
        type: 'Home Loan',
        amount: 2500000,
        status: 'Pending',
        date: '2023-06-20',
        interestRate: 8.5,
        tenure: 120,
      ),
      Loan(
        id: '3',
        type: 'Vehicle Loan',
        amount: 800000,
        status: 'Disbursed',
        date: '2023-04-10',
        interestRate: 9.0,
        tenure: 60,
      ),
    ];
  }

  // Mock partner data
  static List<Partner> getMockPartners() {
    return [
      Partner(
        id: '1',
        name: 'ABC University',
        sector: 'Education',
        description: 'Premier educational institution offering world-class education',
        offer: 'Education Loan up to ₹10,00,000',
        interestRate: 7.5,
        rating: 4.5,
        reviews: 128,
      ),
      Partner(
        id: '2',
        name: 'XYZ Hospital',
        sector: 'Healthcare',
        description: 'Leading healthcare provider with advanced medical facilities',
        offer: 'Medical Treatment Loan up to ₹5,00,000',
        interestRate: 9.0,
        rating: 4.2,
        reviews: 89,
      ),
      Partner(
        id: '3',
        name: 'Auto Dealership',
        sector: 'Vehicle',
        description: 'Trusted automobile dealer with wide range of vehicles',
        offer: 'Vehicle Loan up to ₹15,00,000',
        interestRate: 8.5,
        rating: 4.7,
        reviews: 210,
      ),
      Partner(
        id: '4',
        name: 'Tech Solutions',
        sector: 'Business',
        description: 'Innovative technology solutions for businesses',
        offer: 'Business Equipment Loan up to ₹50,00,000',
        interestRate: 12.0,
        rating: 4.0,
        reviews: 65,
      ),
    ];
  }

  // Mock loan sectors
  static List<Map<String, dynamic>> getLoanSectors() {
    return [
      {'name': 'Personal Loan', 'icon': 'account_balance', 'color': 0xFF4ECDC4},
      {'name': 'Home Loan', 'icon': 'home', 'color': 0xFF45B7D1},
      {'name': 'Vehicle Loan', 'icon': 'directions_car', 'color': 0xFF96CEB4},
      {'name': 'Business Loan', 'icon': 'business', 'color': 0xFFFF6B6B},
      {'name': 'Education Loan', 'icon': 'school', 'color': 0xFF4ECDC4},
      {'name': 'Gold Loan', 'icon': 'diamond', 'color': 0xFFF7DC6F},
      {'name': 'Agriculture Loan', 'icon': 'eco', 'color': 0xFF82E0AA},
      {'name': 'Healthcare Loan', 'icon': 'local_hospital', 'color': 0xFFBB8FCE},
      {'name': 'Microfinance', 'icon': 'account_balance_wallet', 'color': 0xFFFFA07A},
      {'name': 'Credit Card Loan', 'icon': 'credit_card', 'color': 0xFF87CEEB},
      {'name': 'Two Wheeler Loan', 'icon': 'two_wheeler', 'color': 0xFFDDA0DD},
      {'name': 'Digital Loan', 'icon': 'laptop', 'color': 0xFF98D8C8},
    ];
  }
}
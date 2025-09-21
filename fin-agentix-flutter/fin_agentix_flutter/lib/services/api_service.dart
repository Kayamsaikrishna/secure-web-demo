import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/loan.dart';
import '../models/partner.dart';
import '../models/user.dart';

class ApiService {
  static const String baseUrl = 'http://localhost:3000/api'; // Adjust to your API URL
  
  // Get loans for user
  static Future<List<Loan>> getLoans() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/loans'));
      
      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        return data.map((json) => Loan.fromJson(json)).toList();
      } else {
        throw Exception('Failed to load loans');
      }
    } catch (e) {
      throw Exception('Error fetching loans: $e');
    }
  }
  
  // Get partners
  static Future<List<Partner>> getPartners() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/partners'));
      
      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        return data.map((json) => Partner.fromJson(json)).toList();
      } else {
        throw Exception('Failed to load partners');
      }
    } catch (e) {
      throw Exception('Error fetching partners: $e');
    }
  }
  
  // Get user profile
  static Future<User> getUserProfile() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/profile'));
      
      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        return User.fromJson(data);
      } else {
        throw Exception('Failed to load user profile');
      }
    } catch (e) {
      throw Exception('Error fetching user profile: $e');
    }
  }
  
  // Apply for loan
  static Future<bool> applyForLoan(Map<String, dynamic> loanData) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/loans'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode(loanData),
      );
      
      return response.statusCode == 200 || response.statusCode == 201;
    } catch (e) {
      throw Exception('Error applying for loan: $e');
    }
  }
  
  // Calculate EMI
  static Future<Map<String, dynamic>> calculateEmi({
    required double principal,
    required double interestRate,
    required int tenure,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/emi-calculator'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'principal': principal,
          'interestRate': interestRate,
          'tenure': tenure,
        }),
      );
      
      if (response.statusCode == 200) {
        return json.decode(response.body);
      } else {
        throw Exception('Failed to calculate EMI');
      }
    } catch (e) {
      throw Exception('Error calculating EMI: $e');
    }
  }
}
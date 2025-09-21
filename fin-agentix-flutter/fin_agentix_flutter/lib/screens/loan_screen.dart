import 'package:flutter/material.dart';
import '../widgets/loan_card.dart';
import '../services/mock_data_service.dart';
import '../models/loan.dart';

class LoanScreen extends StatefulWidget {
  const LoanScreen({super.key});

  @override
  State<LoanScreen> createState() => _LoanScreenState();
}

class _LoanScreenState extends State<LoanScreen> {
  late List<Loan> loans;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadLoans();
  }

  void _loadLoans() {
    // Simulate loading
    Future.delayed(const Duration(seconds: 1), () {
      setState(() {
        loans = MockDataService.getMockLoans();
        isLoading = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Loans'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: isLoading
          ? const Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Search bar
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: TextField(
                      decoration: InputDecoration(
                        hintText: 'Search loans...',
                        prefixIcon: const Icon(Icons.search),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        filled: true,
                        fillColor: Colors.grey[100],
                      ),
                    ),
                  ),
                  
                  // My Loan Applications section
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'My Loan Applications',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 15),
                        // List of loans
                        Column(
                          children: loans.map((loan) {
                            return LoanCard(
                              loan: loan,
                              onTap: () {
                                // Navigate to loan details
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text('View details for ${loan.type}'),
                                  ),
                                );
                              },
                            );
                          }).toList(),
                        ),
                      ],
                    ),
                  ),
                  
                  // Loan Types section
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Loan Types',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 15),
                        // Grid of loan types
                        Wrap(
                          alignment: WrapAlignment.spaceBetween,
                          children: [
                            _buildLoanTypeCard('Personal Loan', '10.5%', Icons.account_balance),
                            _buildLoanTypeCard('Home Loan', '8.5%', Icons.home),
                            _buildLoanTypeCard('Vehicle Loan', '9.0%', Icons.directions_car),
                            _buildLoanTypeCard('Business Loan', '12.0%', Icons.business),
                            _buildLoanTypeCard('Education Loan', '7.5%', Icons.school),
                            _buildLoanTypeCard('Gold Loan', '11.0%', Icons.diamond),
                          ],
                        ),
                      ],
                    ),
                  ),
                  
                  // Apply for new loan button
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: SizedBox(
                      width: double.infinity,
                      child: ElevatedButton(
                        onPressed: () {
                          // Navigate to loan application screen
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('Apply for new loan'),
                            ),
                          );
                        },
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.all(16),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                        ),
                        child: const Text(
                          'Apply for New Loan',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
    );
  }

  Widget _buildLoanTypeCard(String name, String interest, IconData icon) {
    return GestureDetector(
      onTap: () {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Apply for $name'),
          ),
        );
      },
      child: Container(
        width: MediaQuery.of(context).size.width * 0.4,
        padding: const EdgeInsets.all(15),
        margin: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.2),
              spreadRadius: 1,
              blurRadius: 5,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        child: Column(
          children: [
            Icon(
              icon,
              size: 32,
              color: Colors.blue,
            ),
            const SizedBox(height: 10),
            Text(
              name,
              style: const TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 14,
                textAlign: TextAlign.center,
              ),
            ),
            const SizedBox(height: 5),
            Text(
              'From $interest',
              style: const TextStyle(
                color: Colors.blue,
                fontSize: 12,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
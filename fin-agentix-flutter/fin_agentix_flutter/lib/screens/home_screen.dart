import 'package:flutter/material.dart';
import '../widgets/loan_sector_card.dart';
import '../services/mock_data_service.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final loanSectors = MockDataService.getLoanSectors();

    return Scaffold(
      appBar: AppBar(
        title: const Text('FinAgentix'),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Welcome section
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(20),
              decoration: const BoxDecoration(
                color: Colors.blue,
              ),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Welcome to Fin-Agentix',
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(height: 5),
                  Text(
                    'AI-Powered Digital Lending Platform',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.white70,
                    ),
                  ),
                ],
              ),
            ),
            
            // Loan sectors section
            Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Loan Sectors',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 15),
                  // Grid of loan sectors
                  Wrap(
                    alignment: WrapAlignment.spaceBetween,
                    children: loanSectors.map((sector) {
                      return LoanSectorCard(
                        name: sector['name'],
                        icon: _getIconData(sector['icon']),
                        color: Color(sector['color']),
                        onTap: () {
                          // Navigate to loan application screen
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text('Apply for ${sector['name']}'),
                            ),
                          );
                        },
                      );
                    }).toList(),
                  ),
                ],
              ),
            ),
            
            // Quick actions section
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Quick Actions',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 15),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      _buildActionButton(
                        context,
                        Icons.calculate,
                        'EMI Calculator',
                        () {
                          // Navigate to EMI calculator
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('EMI Calculator'),
                            ),
                          );
                        },
                      ),
                      _buildActionButton(
                        context,
                        Icons.file_present,
                        'Apply for Loan',
                        () {
                          // Navigate to loan application
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('Apply for Loan'),
                            ),
                          );
                        },
                      ),
                      _buildActionButton(
                        context,
                        Icons.verified,
                        'KYC Status',
                        () {
                          // Show KYC status
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(
                              content: Text('KYC Status'),
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildActionButton(
    BuildContext context,
    IconData icon,
    String label,
    VoidCallback onTap,
  ) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.25,
        padding: const EdgeInsets.all(15),
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
              size: 24,
              color: Colors.blue,
            ),
            const SizedBox(height: 5),
            Text(
              label,
              style: const TextStyle(
                fontSize: 12,
                textAlign: TextAlign.center,
              ),
            ),
          ],
        ),
      ),
    );
  }

  IconData _getIconData(String iconName) {
    switch (iconName) {
      case 'account_balance':
        return Icons.account_balance;
      case 'home':
        return Icons.home;
      case 'directions_car':
        return Icons.directions_car;
      case 'business':
        return Icons.business;
      case 'school':
        return Icons.school;
      case 'diamond':
        return Icons.diamond;
      case 'eco':
        return Icons.eco;
      case 'local_hospital':
        return Icons.local_hospital;
      case 'account_balance_wallet':
        return Icons.account_balance_wallet;
      case 'credit_card':
        return Icons.credit_card;
      case 'two_wheeler':
        return Icons.two_wheeler;
      case 'laptop':
        return Icons.laptop;
      default:
        return Icons.help;
    }
  }
}
import 'package:flutter/material.dart';
import '../models/loan.dart';
import '../utils/format_utils.dart';

class LoanCard extends StatelessWidget {
  final Loan loan;
  final VoidCallback onTap;

  const LoanCard({
    super.key,
    required this.loan,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    Color getStatusColor() {
      switch (loan.status) {
        case 'Approved':
          return Colors.green;
        case 'Pending':
          return Colors.orange;
        case 'Disbursed':
          return Colors.blue;
        default:
          return Colors.grey;
      }
    }

    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      elevation: 2,
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    loan.type,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: getStatusColor().withOpacity(0.2),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Text(
                      loan.status,
                      style: TextStyle(
                        color: getStatusColor(),
                        fontWeight: FontWeight.bold,
                        fontSize: 12,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                FormatUtils.formatCurrency(loan.amount),
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: Colors.blue,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                loan.date,
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.grey,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
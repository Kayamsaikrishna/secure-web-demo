import 'package:flutter/material.dart';
import '../models/partner.dart';

class PartnerCard extends StatelessWidget {
  final Partner partner;
  final VoidCallback onTap;

  const PartnerCard({
    super.key,
    required this.partner,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
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
                    partner.name,
                    style: const TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  Row(
                    children: [
                      const Icon(
                        Icons.star,
                        color: Colors.amber,
                        size: 16,
                      ),
                      const SizedBox(width: 4),
                      Text(
                        partner.rating.toString(),
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 4),
              Text(
                partner.sector,
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.blue,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                partner.offer,
                style: const TextStyle(
                  fontSize: 16,
                ),
              ),
              const SizedBox(height: 12),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'Interest: ${partner.interestRate.toStringAsFixed(2)}%',
                    style: const TextStyle(
                      fontSize: 14,
                      color: Colors.grey,
                    ),
                  ),
                  ElevatedButton(
                    onPressed: onTap,
                    child: const Text('Apply'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
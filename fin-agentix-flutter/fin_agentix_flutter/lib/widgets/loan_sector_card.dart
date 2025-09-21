import 'package:flutter/material.dart';

class LoanSectorCard extends StatelessWidget {
  final String name;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;

  const LoanSectorCard({
    super.key,
    required this.name,
    required this.icon,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: MediaQuery.of(context).size.width * 0.4,
        height: 100,
        margin: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              icon,
              size: 32,
              color: Colors.white,
            ),
            const SizedBox(height: 10),
            Text(
              name,
              style: const TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.bold,
                fontSize: 12,
                textAlign: TextAlign.center,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
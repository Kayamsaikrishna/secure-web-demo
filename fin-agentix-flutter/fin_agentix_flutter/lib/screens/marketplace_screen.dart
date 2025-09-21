import 'package:flutter/material.dart';
import '../widgets/partner_card.dart';
import '../services/mock_data_service.dart';
import '../models/partner.dart';

class MarketplaceScreen extends StatefulWidget {
  const MarketplaceScreen({super.key});

  @override
  State<MarketplaceScreen> createState() => _MarketplaceScreenState();
}

class _MarketplaceScreenState extends State<MarketplaceScreen> {
  late List<Partner> partners;
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadPartners();
  }

  void _loadPartners() {
    // Simulate loading
    Future.delayed(const Duration(seconds: 1), () {
      setState(() {
        partners = MockDataService.getMockPartners();
        isLoading = false;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Marketplace'),
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
                        hintText: 'Search partners or offers...',
                        prefixIcon: const Icon(Icons.search),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        filled: true,
                        fillColor: Colors.grey[100],
                      ),
                    ),
                  ),
                  
                  // Sectors section
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Sectors',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 15),
                        // Grid of sectors
                        Wrap(
                          alignment: WrapAlignment.spaceBetween,
                          children: [
                            _buildSectorCard('Education', Icons.school, Colors.teal),
                            _buildSectorCard('Healthcare', Icons.local_hospital, Colors.red),
                            _buildSectorCard('Vehicle', Icons.directions_car, Colors.blue),
                            _buildSectorCard('Business', Icons.business, Colors.green),
                            _buildSectorCard('Agriculture', Icons.eco, Colors.yellow),
                            _buildSectorCard('Digital', Icons.laptop, Colors.purple),
                          ],
                        ),
                      ],
                    ),
                  ),
                  
                  // Featured Partners section
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Featured Partners',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 15),
                        // List of partners
                        Column(
                          children: partners.map((partner) {
                            return PartnerCard(
                              partner: partner,
                              onTap: () {
                                // Navigate to partner details
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text('View details for ${partner.name}'),
                                  ),
                                );
                              },
                            );
                          }).toList(),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
    );
  }

  Widget _buildSectorCard(String name, IconData icon, Color color) {
    return GestureDetector(
      onTap: () {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Browse $name partners'),
          ),
        );
      },
      child: Container(
        width: MediaQuery.of(context).size.width * 0.28,
        height: 80,
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
              size: 24,
              color: Colors.white,
            ),
            const SizedBox(height: 5),
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
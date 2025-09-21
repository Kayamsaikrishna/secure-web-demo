import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/loan_screen.dart';
import 'screens/marketplace_screen.dart';
import 'screens/profile_screen.dart';

void main() {
  runApp(const FinAgentixApp());
}

class FinAgentixApp extends StatelessWidget {
  const FinAgentixApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FinAgentix',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const MainScreen(),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _currentIndex = 0;

  final List<Widget> _children = [
    const HomeScreen(),
    const LoanScreen(),
    const MarketplaceScreen(),
    const ProfileScreen(),
  ];

  void onTabTapped(int index) {
    setState(() {
      _currentIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _children[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: onTabTapped,
        currentIndex: _currentIndex,
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.grey,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.account_balance),
            label: 'Loans',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.store),
            label: 'Marketplace',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }
}
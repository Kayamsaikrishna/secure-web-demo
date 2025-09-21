class FormatUtils {
  // Format currency
  static String formatCurrency(double amount) {
    return '₹${amount.toStringAsFixed(0).replaceAllMapped(RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'), (Match m) => '${m[1]},')}';
  }

  // Format date
  static String formatDate(String date) {
    return date;
  }

  // Format interest rate
  static String formatInterestRate(double rate) {
    return '${rate.toStringAsFixed(2)}%';
  }

  // Format tenure
  static String formatTenure(int months) {
    if (months < 12) {
      return '$months months';
    } else {
      int years = months ~/ 12;
      int remainingMonths = months % 12;
      if (remainingMonths == 0) {
        return '$years years';
      } else {
        return '$years years $remainingMonths months';
      }
    }
  }

  // Calculate EMI
  static double calculateEmi(double principal, double annualInterestRate, int tenureMonths) {
    double monthlyInterestRate = annualInterestRate / 12 / 100;
    double emi = (principal * monthlyInterestRate * pow(1 + monthlyInterestRate, tenureMonths)) /
        (pow(1 + monthlyInterestRate, tenureMonths) - 1);
    return emi;
  }

  // Helper function for power calculation
  static double pow(double base, int exponent) {
    double result = 1;
    for (int i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
}
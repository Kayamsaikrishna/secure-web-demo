class Loan {
  final String id;
  final String type;
  final double amount;
  final String status;
  final String date;
  final double interestRate;
  final int tenure;

  Loan({
    required this.id,
    required this.type,
    required this.amount,
    required this.status,
    required this.date,
    required this.interestRate,
    required this.tenure,
  });

  factory Loan.fromJson(Map<String, dynamic> json) {
    return Loan(
      id: json['id'] as String,
      type: json['type'] as String,
      amount: (json['amount'] as num).toDouble(),
      status: json['status'] as String,
      date: json['date'] as String,
      interestRate: (json['interestRate'] as num).toDouble(),
      tenure: json['tenure'] as int,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'type': type,
      'amount': amount,
      'status': status,
      'date': date,
      'interestRate': interestRate,
      'tenure': tenure,
    };
  }
}
class User {
  final String id;
  final String name;
  final String email;
  final String phone;
  final String kycStatus;
  final String memberSince;
  final int totalApplications;
  final int activeLoans;

  User({
    required this.id,
    required this.name,
    required this.email,
    required this.phone,
    required this.kycStatus,
    required this.memberSince,
    required this.totalApplications,
    required this.activeLoans,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
      phone: json['phone'] as String,
      kycStatus: json['kycStatus'] as String,
      memberSince: json['memberSince'] as String,
      totalApplications: json['totalApplications'] as int,
      activeLoans: json['activeLoans'] as int,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'phone': phone,
      'kycStatus': kycStatus,
      'memberSince': memberSince,
      'totalApplications': totalApplications,
      'activeLoans': activeLoans,
    };
  }
}
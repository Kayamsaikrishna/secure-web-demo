class Partner {
  final String id;
  final String name;
  final String sector;
  final String description;
  final String offer;
  final double interestRate;
  final double rating;
  final int reviews;

  Partner({
    required this.id,
    required this.name,
    required this.sector,
    required this.description,
    required this.offer,
    required this.interestRate,
    required this.rating,
    required this.reviews,
  });

  factory Partner.fromJson(Map<String, dynamic> json) {
    return Partner(
      id: json['id'] as String,
      name: json['name'] as String,
      sector: json['sector'] as String,
      description: json['description'] as String,
      offer: json['offer'] as String,
      interestRate: (json['interestRate'] as num).toDouble(),
      rating: (json['rating'] as num).toDouble(),
      reviews: json['reviews'] as int,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'sector': sector,
      'description': description,
      'offer': offer,
      'interestRate': interestRate,
      'rating': rating,
      'reviews': reviews,
    };
  }
}
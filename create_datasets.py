import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random
import json

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

# Read existing data
aadhaar_df = pd.read_excel('dataset/synthetic_students_aadhaar.xlsx')
pan_df = pd.read_excel('dataset/synthetic_guardian_pan_database.xlsx')
itr_df = pd.read_excel('dataset/synthetic_guardian_itr_database.xlsx')

print("Creating comprehensive datasets for Fin-Agentix India demo...")

# ===== CREDIT BUREAU DATA =====
def create_credit_scores():
    """Create comprehensive credit score data"""
    bureaus = ['CIBIL', 'Experian', 'Equifax', 'HighMark']
    grades = {
        (750, 900): 'Excellent',
        (700, 749): 'Good', 
        (650, 699): 'Fair',
        (550, 649): 'Poor',
        (300, 549): 'Very Poor'
    }
    
    credit_data = []
    for pan in pan_df['pan_number']:
        # Generate multiple credit scores from different bureaus
        for bureau in bureaus:
            score = np.random.choice([
                np.random.randint(750, 851),  # 30% excellent
                np.random.randint(700, 750),  # 25% good
                np.random.randint(650, 700),  # 25% fair
                np.random.randint(550, 650),  # 15% poor
                np.random.randint(300, 550)   # 5% very poor
            ], p=[0.3, 0.25, 0.25, 0.15, 0.05])
            
            grade = next(grade for (min_score, max_score), grade in grades.items() 
                        if min_score <= score <= max_score)
            
            credit_data.append({
                'pan_number': pan,
                'bureau': bureau,
                'credit_score': score,
                'grade': grade,
                'report_date': datetime.now() - timedelta(days=random.randint(1, 90)),
                'report_number': f"{bureau[:3]}{random.randint(100000, 999999)}",
                'factors': json.dumps([
                    'Payment History' if score > 650 else 'Late Payments',
                    'Credit Utilization' if score > 600 else 'High Utilization',
                    'Credit Age' if score > 700 else 'Limited Credit History',
                    'Credit Mix' if score > 650 else 'Limited Credit Types'
                ]),
                'previous_score': score + random.randint(-50, 30),
                'score_change': random.randint(-20, 20)
            })
    
    return pd.DataFrame(credit_data)

# ===== BANK STATEMENT DATA =====
def create_bank_statements():
    """Create detailed bank statement data"""
    banks = ['SBI', 'HDFC', 'ICICI', 'Axis Bank', 'Kotak Mahindra', 'Punjab National Bank']
    account_types = ['Savings', 'Current', 'Salary']
    
    bank_data = []
    for pan in pan_df['pan_number']:
        pan_info = pan_df[pan_df['pan_number'] == pan].iloc[0]
        
        # Primary account
        primary_account = {
            'pan_number': pan,
            'account_number': f"{random.randint(1000000000, 9999999999)}",
            'ifsc_code': f"{random.choice(banks)[:4]}0{random.randint(100000, 999999)}",
            'bank_name': random.choice(banks),
            'account_type': 'Salary' if pan_info['employment_type'] == 'Salaried' else 'Savings',
            'is_primary': True,
            'opening_date': datetime.now() - timedelta(days=random.randint(365, 3650)),
            'current_balance': max(5000, pan_info['annual_income'] * random.uniform(0.05, 0.15)),
            'average_balance': pan_info['annual_income'] * random.uniform(0.03, 0.12),
            'monthly_credits': pan_info['annual_income'] / 12 * random.uniform(0.8, 1.2),
            'monthly_debits': pan_info['annual_income'] / 12 * random.uniform(0.7, 1.1),
            'salary_account': pan_info['employment_type'] == 'Salaried',
            'relationship_years': random.randint(1, 15),
            'branch_name': f"{random.choice(['Central', 'Main', 'City', 'Commercial'])} Branch"
        }
        bank_data.append(primary_account)
        
        # Secondary account (60% chance)
        if random.random() < 0.6:
            secondary_account = {
                'pan_number': pan,
                'account_number': f"{random.randint(1000000000, 9999999999)}",
                'ifsc_code': f"{random.choice(banks)[:4]}0{random.randint(100000, 999999)}",
                'bank_name': random.choice([b for b in banks if b != primary_account['bank_name']]),
                'account_type': random.choice(['Savings', 'Current']),
                'is_primary': False,
                'opening_date': datetime.now() - timedelta(days=random.randint(180, 2190)),
                'current_balance': pan_info['annual_income'] * random.uniform(0.01, 0.05),
                'average_balance': pan_info['annual_income'] * random.uniform(0.01, 0.04),
                'monthly_credits': pan_info['annual_income'] / 12 * random.uniform(0.1, 0.3),
                'monthly_debits': pan_info['annual_income'] / 12 * random.uniform(0.1, 0.3),
                'salary_account': False,
                'relationship_years': random.randint(1, 8),
                'branch_name': f"{random.choice(['Mall Road', 'Sector', 'Industrial', 'Market'])} Branch"
            }
            bank_data.append(secondary_account)
    
    return pd.DataFrame(bank_data)

# ===== LOAN PRODUCTS DATA =====
def create_loan_products():
    """Create comprehensive loan product catalog"""
    loan_products = [
        # Personal Loans
        {
            'product_code': 'PL001',
            'name': 'Express Personal Loan',
            'sector': 'PERSONAL_LOAN',
            'category': 'Instant Approval',
            'description': 'Quick personal loan with minimal documentation',
            'min_amount': 50000,
            'max_amount': 1500000,
            'min_tenure': 12,
            'max_tenure': 60,
            'base_interest_rate': 12.5,
            'processing_fee_rate': 2.0,
            'min_age': 21,
            'max_age': 60,
            'min_income': 25000,
            'min_credit_score': 650,
            'features': json.dumps(['No Collateral', 'Quick Approval', 'Flexible Tenure']),
            'active': True
        },
        {
            'product_code': 'PL002', 
            'name': 'Salary Plus Personal Loan',
            'sector': 'PERSONAL_LOAN',
            'category': 'Salaried',
            'description': 'Personal loan for salaried professionals',
            'min_amount': 100000,
            'max_amount': 2500000,
            'min_tenure': 12,
            'max_tenure': 72,
            'base_interest_rate': 11.5,
            'processing_fee_rate': 1.5,
            'min_age': 23,
            'max_age': 58,
            'min_income': 50000,
            'min_credit_score': 700,
            'features': json.dumps(['Pre-approved offers', 'Lower rates', 'Higher amounts']),
            'active': True
        },
        
        # Home Loans
        {
            'product_code': 'HL001',
            'name': 'Home Sweet Home Loan',
            'sector': 'HOME_LOAN',
            'category': 'Purchase',
            'description': 'Home loan for purchasing residential property',
            'min_amount': 500000,
            'max_amount': 50000000,
            'min_tenure': 60,
            'max_tenure': 300,
            'base_interest_rate': 8.5,
            'processing_fee_rate': 0.5,
            'min_age': 23,
            'max_age': 65,
            'min_income': 40000,
            'min_credit_score': 650,
            'features': json.dumps(['Tax Benefits', 'Long Tenure', 'RERA Verified Projects']),
            'active': True
        },
        
        # Vehicle Loans
        {
            'product_code': 'VL001',
            'name': 'Car Loan Express',
            'sector': 'VEHICLE_LOAN',
            'category': 'Car',
            'description': 'Instant car loan with competitive rates',
            'min_amount': 200000,
            'max_amount': 5000000,
            'min_tenure': 12,
            'max_tenure': 84,
            'base_interest_rate': 9.5,
            'processing_fee_rate': 1.0,
            'min_age': 21,
            'max_age': 65,
            'min_income': 30000,
            'min_credit_score': 600,
            'features': json.dumps(['Instant Approval', 'Zero Down Payment', 'Insurance Included']),
            'active': True
        },
        
        # Business Loans
        {
            'product_code': 'BL001',
            'name': 'MSME Growth Loan',
            'sector': 'BUSINESS_LOAN',
            'category': 'Working Capital',
            'description': 'Working capital loan for small businesses',
            'min_amount': 100000,
            'max_amount': 10000000,
            'min_tenure': 12,
            'max_tenure': 60,
            'base_interest_rate': 14.0,
            'processing_fee_rate': 2.5,
            'min_age': 25,
            'max_age': 65,
            'min_income': 100000,
            'min_credit_score': 650,
            'features': json.dumps(['GST Based Assessment', 'Quick Disbursal', 'Flexible Repayment']),
            'active': True
        },
        
        # Education Loans
        {
            'product_code': 'EL001',
            'name': 'Future Scholar Loan',
            'sector': 'EDUCATION_LOAN',
            'category': 'Higher Education',
            'description': 'Education loan for higher studies in India and abroad',
            'min_amount': 100000,
            'max_amount': 7500000,
            'min_tenure': 60,
            'max_tenure': 180,
            'base_interest_rate': 10.5,
            'processing_fee_rate': 1.0,
            'min_age': 18,
            'max_age': 35,
            'min_income': 0,  # Co-applicant income considered
            'min_credit_score': 550,
            'features': json.dumps(['Moratorium Period', 'Covers Full Expenses', 'Tax Benefits']),
            'active': True
        },
        
        # Agriculture Loans
        {
            'product_code': 'AL001',
            'name': 'Kisan Vikas Loan',
            'sector': 'AGRICULTURE_LOAN',
            'category': 'Crop Loan',
            'description': 'Comprehensive agricultural loan for farmers',
            'min_amount': 50000,
            'max_amount': 2000000,
            'min_tenure': 6,
            'max_tenure': 36,
            'base_interest_rate': 7.0,  # Subsidized rate
            'processing_fee_rate': 0.5,
            'min_age': 18,
            'max_age': 70,
            'min_income': 0,
            'min_credit_score': 0,  # Not mandatory for agriculture
            'features': json.dumps(['Weather Insurance', 'Flexible Repayment', 'Government Subsidy']),
            'active': True
        },
        
        # Gold Loans
        {
            'product_code': 'GL001',
            'name': 'Instant Gold Loan',
            'sector': 'GOLD_LOAN',
            'category': 'Secured',
            'description': 'Instant loan against gold jewelry',
            'min_amount': 10000,
            'max_amount': 2000000,
            'min_tenure': 6,
            'max_tenure': 36,
            'base_interest_rate': 12.0,
            'processing_fee_rate': 1.0,
            'min_age': 18,
            'max_age': 75,
            'min_income': 0,
            'min_credit_score': 0,
            'features': json.dumps(['Instant Approval', 'Safe Storage', 'Flexible Repayment']),
            'active': True
        },
        
        # Credit Cards
        {
            'product_code': 'CC001',
            'name': 'Platinum Rewards Card',
            'sector': 'CREDIT_CARD',
            'category': 'Premium',
            'description': 'Premium credit card with exclusive rewards',
            'min_amount': 50000,  # Credit limit
            'max_amount': 2000000,
            'min_tenure': 12,  # Not applicable for credit cards
            'max_tenure': 12,
            'base_interest_rate': 42.0,  # Annual percentage rate
            'processing_fee_rate': 0,
            'min_age': 21,
            'max_age': 65,
            'min_income': 50000,
            'min_credit_score': 750,
            'features': json.dumps(['Reward Points', 'Airport Lounge Access', 'Cashback Offers']),
            'active': True
        },
        
        # Two Wheeler Loans
        {
            'product_code': 'TW001',
            'name': 'Bike Loan Express',
            'sector': 'TWO_WHEELER_LOAN',
            'category': 'Two Wheeler',
            'description': 'Quick loan for two-wheeler purchase',
            'min_amount': 30000,
            'max_amount': 300000,
            'min_tenure': 12,
            'max_tenure': 36,
            'base_interest_rate': 13.5,
            'processing_fee_rate': 1.5,
            'min_age': 18,
            'max_age': 65,
            'min_income': 15000,
            'min_credit_score': 550,
            'features': json.dumps(['Minimal Documentation', 'Same Day Approval', 'Insurance Included']),
            'active': True
        },
        
        # Healthcare Loans
        {
            'product_code': 'HC001',
            'name': 'Medical Emergency Loan',
            'sector': 'HEALTHCARE_LOAN',
            'category': 'Medical',
            'description': 'Emergency loan for medical expenses',
            'min_amount': 25000,
            'max_amount': 1000000,
            'min_tenure': 6,
            'max_tenure': 48,
            'base_interest_rate': 14.5,
            'processing_fee_rate': 1.0,
            'min_age': 18,
            'max_age': 70,
            'min_income': 20000,
            'min_credit_score': 600,
            'features': json.dumps(['Hospital Network', 'Quick Approval', 'EMI Moratorium']),
            'active': True
        },
        
        # Digital/Fintech Loans
        {
            'product_code': 'DL001',
            'name': 'Instant Digital Loan',
            'sector': 'DIGITAL_LOAN',
            'category': 'Instant',
            'description': 'Completely digital loan with instant approval',
            'min_amount': 5000,
            'max_amount': 500000,
            'min_tenure': 3,
            'max_tenure': 24,
            'base_interest_rate': 18.0,
            'processing_fee_rate': 3.0,
            'min_age': 21,
            'max_age': 60,
            'min_income': 20000,
            'min_credit_score': 650,
            'features': json.dumps(['100% Digital', 'Instant Disbursal', 'Flexible Tenure']),
            'active': True
        }
    ]
    
    return pd.DataFrame(loan_products)

# ===== BUSINESS/ORGANIZATION DATA =====
def create_business_data():
    """Create business organization data"""
    entity_types = ['PRIVATE_LIMITED', 'PARTNERSHIP', 'LLP', 'PROPRIETORSHIP']
    industries = ['Manufacturing', 'Trading', 'Services', 'IT', 'Retail', 'Construction', 'Agriculture']
    
    business_data = []
    for i in range(50):  # Create 50 business entities
        entity_type = random.choice(entity_types)
        industry = random.choice(industries)
        
        business = {
            'org_id': f"ORG{str(i+1).zfill(4)}",
            'legal_name': f"{random.choice(['ABC', 'XYZ', 'PQR', 'LMN'])} {industry} {random.choice(['Company', 'Enterprises', 'Solutions', 'Services'])}",
            'trade_name': f"{random.choice(['Star', 'Prime', 'Royal', 'Elite'])} {industry}",
            'entity_type': entity_type,
            'incorporation_date': datetime.now() - timedelta(days=random.randint(365, 7300)),
            'cin_number': f"U{random.randint(10000, 99999)}MH{random.randint(1990, 2023)}{random.choice(['PTC', 'PLC', 'LLC'])}{random.randint(100000, 999999)}" if entity_type in ['PRIVATE_LIMITED', 'PUBLIC_LIMITED'] else None,
            'gst_number': f"{random.randint(10, 37)}{random.choice(['ABCDE', 'FGHIJ', 'KLMNO', 'PQRST'])}{random.randint(1000, 9999)}{random.choice(['G', 'S', 'C'])}{random.randint(1, 9)}Z{random.randint(1, 9)}",
            'pan_number': f"{random.choice(['ABCDE', 'FGHIJ', 'KLMNO'])}{random.choice(['ABCDE', 'FGHIJ', 'KLMNO'])}{random.choice(['ABCDE', 'FGHIJ', 'KLMNO'])}{random.choice(['P', 'C', 'F', 'T'])}{random.choice(['A', 'B', 'C', 'P'])}{random.randint(1000, 9999)}{random.choice(['A', 'B', 'C', 'D', 'E'])}",
            'industry': industry,
            'business_type': random.choice(['Manufacturing', 'Trading', 'Service Provider', 'Consultant']),
            'authorized_capital': random.randint(100000, 10000000),
            'paid_up_capital': random.randint(50000, 5000000),
            'annual_turnover': random.randint(500000, 50000000),
            'net_profit_margin': random.uniform(2, 25),
            'partnership_status': random.choice(['PENDING', 'APPROVED', 'ACTIVE']),
            'employee_count': random.randint(5, 500),
            'office_city': random.choice(['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad']),
            'office_state': random.choice(['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Telangana'])
        }
        business_data.append(business)
    
    return pd.DataFrame(business_data)

# ===== UPI TRANSACTION PATTERNS =====
def create_upi_data():
    """Create UPI transaction pattern data"""
    upi_data = []
    
    for pan in pan_df['pan_number'][:30]:  # Create for first 30 users
        pan_info = pan_df[pan_df['pan_number'] == pan].iloc[0]
        monthly_income = pan_info['annual_income'] / 12
        
        # Generate 6 months of UPI data
        for month in range(6):
            month_data = {
                'pan_number': pan,
                'month': (datetime.now() - timedelta(days=30*month)).strftime('%Y-%m'),
                'total_transactions': random.randint(20, 150),
                'total_amount': monthly_income * random.uniform(0.3, 0.8),
                'peer_to_peer_count': random.randint(5, 30),
                'peer_to_peer_amount': monthly_income * random.uniform(0.1, 0.3),
                'merchant_payment_count': random.randint(10, 80),
                'merchant_payment_amount': monthly_income * random.uniform(0.2, 0.5),
                'bill_payment_count': random.randint(3, 15),
                'bill_payment_amount': monthly_income * random.uniform(0.05, 0.15),
                'avg_transaction_amount': monthly_income * random.uniform(0.001, 0.05),
                'utility_payment_regularity': random.choice(['Regular', 'Irregular', 'Occasional']),
                'spending_categories': json.dumps({
                    'Food & Dining': random.randint(15, 35),
                    'Shopping': random.randint(10, 30),
                    'Transportation': random.randint(5, 20),
                    'Bills & Utilities': random.randint(8, 15),
                    'Entertainment': random.randint(2, 10),
                    'Healthcare': random.randint(1, 8),
                    'Others': random.randint(5, 15)
                })
            }
            upi_data.append(month_data)
    
    return pd.DataFrame(upi_data)

# Generate all datasets
print("1. Creating Credit Score Data...")
credit_df = create_credit_scores()

print("2. Creating Bank Statement Data...")
bank_df = create_bank_statements()

print("3. Creating Loan Products Data...")
products_df = create_loan_products()

print("4. Creating Business Data...")
business_df = create_business_data()

print("5. Creating UPI Transaction Data...")
upi_df = create_upi_data()

# Save all datasets
print("Saving datasets...")
credit_df.to_excel('dataset/synthetic_credit_scores.xlsx', index=False)
bank_df.to_excel('dataset/synthetic_bank_statements.xlsx', index=False)
products_df.to_excel('dataset/loan_products_catalog.xlsx', index=False)
business_df.to_excel('dataset/synthetic_business_data.xlsx', index=False)
upi_df.to_excel('dataset/synthetic_upi_transactions.xlsx', index=False)

print("Dataset creation completed!")
print(f"Created datasets:")
print(f"- Credit Scores: {len(credit_df)} records")
print(f"- Bank Statements: {len(bank_df)} records") 
print(f"- Loan Products: {len(products_df)} records")
print(f"- Business Data: {len(business_df)} records")
print(f"- UPI Transactions: {len(upi_df)} records")
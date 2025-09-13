import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import random
import json

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

print("Creating additional demo scenario datasets...")

# ===== DEMO USER ACCOUNTS =====
def create_demo_users():
    """Create specific demo user accounts for showcasing different scenarios"""
    demo_users = [
        {
            'id': 'demo_farmer_001',
            'email': 'farmer.demo@finagenix.com',
            'password': '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',  # password
            'role': 'USER',
            'first_name': 'Ramesh',
            'last_name': 'Kumar',
            'full_name': 'Ramesh Kumar',
            'gender': 'MALE',
            'date_of_birth': '1985-07-15',
            'marital_status': 'MARRIED',
            'primary_phone': '+919876543210',
            'email_address': 'farmer.demo@finagenix.com',
            'aadhaar_number': '123456789012',
            'pan_number': 'ABCDE1234F',
            'annual_income': 150000,
            'employment_type': 'SELF_EMPLOYED_BUSINESS',
            'occupation': 'Farmer',
            'address': 'Village Rampur, Tehsil Bhopal, District Bhopal, Madhya Pradesh - 462001',
            'city': 'Bhopal',
            'state': 'Madhya Pradesh',
            'pincode': '462001',
            'scenario': 'Rural Farmer - Agriculture Loan',
            'demo_story': 'Ramesh is a farmer from MP who needs Rs. 2 lakhs for crop cultivation and equipment purchase.'
        },
        {
            'id': 'demo_business_001',
            'email': 'business.demo@finagenix.com',
            'password': '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'role': 'USER',
            'first_name': 'Priya',
            'last_name': 'Sharma',
            'full_name': 'Priya Sharma',
            'gender': 'FEMALE',
            'date_of_birth': '1990-03-22',
            'marital_status': 'SINGLE',
            'primary_phone': '+919123456789',
            'email_address': 'business.demo@finagenix.com',
            'aadhaar_number': '987654321098',
            'pan_number': 'FGHIJ5678K',
            'annual_income': 800000,
            'employment_type': 'SELF_EMPLOYED_BUSINESS',
            'occupation': 'Business Owner',
            'address': 'Shop No. 15, Commercial Complex, Sector 18, Noida, Uttar Pradesh - 201301',
            'city': 'Noida',
            'state': 'Uttar Pradesh',
            'pincode': '201301',
            'scenario': 'MSME Business Loan',
            'demo_story': 'Priya runs a small garment business and needs Rs. 15 lakhs for expanding her operations and purchasing new machinery.'
        },
        {
            'id': 'demo_salaried_001',
            'email': 'salaried.demo@finagenix.com',
            'password': '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'role': 'USER',
            'first_name': 'Arjun',
            'last_name': 'Patel',
            'full_name': 'Arjun Patel',
            'gender': 'MALE',
            'date_of_birth': '1992-11-08',
            'marital_status': 'MARRIED',
            'primary_phone': '+919876512345',
            'email_address': 'salaried.demo@finagenix.com',
            'aadhaar_number': '456789123456',
            'pan_number': 'LMNOP9876Q',
            'annual_income': 1200000,
            'employment_type': 'SALARIED',
            'occupation': 'Software Engineer',
            'address': 'Flat 301, Skyline Apartments, Whitefield, Bangalore, Karnataka - 560066',
            'city': 'Bangalore',
            'state': 'Karnataka',
            'pincode': '560066',
            'scenario': 'Home Loan for First-time Buyer',
            'demo_story': 'Arjun is a software engineer looking to buy his first home in Bangalore. He needs a Rs. 50 lakh home loan.'
        },
        {
            'id': 'demo_student_001',
            'email': 'student.demo@finagenix.com',
            'password': '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'role': 'USER',
            'first_name': 'Ravi',
            'last_name': 'Singh',
            'full_name': 'Ravi Singh',
            'gender': 'MALE',
            'date_of_birth': '2001-05-14',
            'marital_status': 'SINGLE',
            'primary_phone': '+919654321078',
            'email_address': 'student.demo@finagenix.com',
            'aadhaar_number': '789123456789',
            'pan_number': 'STUVW1234X',
            'annual_income': 0,  # Student
            'employment_type': 'STUDENT',
            'occupation': 'Student',
            'address': '45, Model Town, Ludhiana, Punjab - 141002',
            'city': 'Ludhiana',
            'state': 'Punjab',
            'pincode': '141002',
            'scenario': 'Education Loan for Engineering',
            'demo_story': 'Ravi wants to pursue B.Tech from a private engineering college and needs Rs. 8 lakhs education loan.'
        },
        {
            'id': 'demo_healthcare_001',
            'email': 'healthcare.demo@finagenix.com',
            'password': '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'role': 'USER',
            'first_name': 'Meera',
            'last_name': 'Nair',
            'full_name': 'Meera Nair',
            'gender': 'FEMALE',
            'date_of_birth': '1975-12-30',
            'marital_status': 'MARRIED',
            'primary_phone': '+919432167890',
            'email_address': 'healthcare.demo@finagenix.com',
            'aadhaar_number': '321654987321',
            'pan_number': 'YZABC6789D',
            'annual_income': 600000,
            'employment_type': 'SALARIED',
            'occupation': 'Teacher',
            'address': 'House No. 87, Teachers Colony, Kochi, Kerala - 682018',
            'city': 'Kochi',
            'state': 'Kerala',
            'pincode': '682018',
            'scenario': 'Medical Emergency Loan',
            'demo_story': 'Meera needs urgent funds for her mothers heart surgery. She requires Rs. 3 lakhs medical loan.'
        },
        {
            'id': 'demo_vehicle_001',
            'email': 'vehicle.demo@finagenix.com',
            'password': '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'role': 'USER',
            'first_name': 'Suresh',
            'last_name': 'Yadav',
            'full_name': 'Suresh Yadav',
            'gender': 'MALE',
            'date_of_birth': '1988-09-18',
            'marital_status': 'MARRIED',
            'primary_phone': '+919876501234',
            'email_address': 'vehicle.demo@finagenix.com',
            'aadhaar_number': '654321987654',
            'pan_number': 'EFGHI2345J',
            'annual_income': 480000,
            'employment_type': 'SALARIED',
            'occupation': 'Bank Officer',
            'address': 'Plot No. 23, Shanti Nagar, Nagpur, Maharashtra - 440015',
            'city': 'Nagpur',
            'state': 'Maharashtra',
            'pincode': '440015',
            'scenario': 'Car Loan for Family',
            'demo_story': 'Suresh wants to buy a car for his family. He needs Rs. 7 lakhs car loan with easy EMI options.'
        }
    ]
    
    return pd.DataFrame(demo_users)

# ===== LOAN APPLICATION SAMPLES =====
def create_sample_applications():
    """Create sample loan applications in different stages"""
    applications = [
        {
            'application_number': 'FA2025010001',
            'user_email': 'farmer.demo@finagenix.com',
            'loan_sector': 'AGRICULTURE_LOAN',
            'loan_type': 'Crop Loan',
            'requested_amount': 200000,
            'tenure': 12,
            'purpose': 'Crop cultivation and equipment purchase',
            'status': 'UNDER_REVIEW',
            'substatus': 'Document Verification',
            'priority': 'NORMAL',
            'risk_score': 65,
            'credit_score': 620,
            'ai_decision': 'Manual Review',
            'confidence_level': 0.75,
            'applied_date': '2025-01-05',
            'progress_percentage': 60,
            'next_step': 'Field Verification Pending'
        },
        {
            'application_number': 'FA2025010002',
            'user_email': 'business.demo@finagenix.com',
            'loan_sector': 'BUSINESS_LOAN',
            'loan_type': 'MSME Growth Loan',
            'requested_amount': 1500000,
            'tenure': 36,
            'purpose': 'Business expansion and machinery purchase',
            'status': 'APPROVED',
            'substatus': 'Awaiting Disbursement',
            'priority': 'HIGH',
            'risk_score': 45,
            'credit_score': 720,
            'ai_decision': 'Approve',
            'confidence_level': 0.89,
            'applied_date': '2025-01-02',
            'progress_percentage': 95,
            'next_step': 'Disbursement Processing'
        },
        {
            'application_number': 'FA2025010003',
            'user_email': 'salaried.demo@finagenix.com',
            'loan_sector': 'HOME_LOAN',
            'loan_type': 'Home Sweet Home Loan',
            'requested_amount': 5000000,
            'tenure': 240,
            'purpose': 'Purchase of residential property',
            'status': 'TECHNICAL_REVIEW',
            'substatus': 'Property Valuation',
            'priority': 'HIGH',
            'risk_score': 35,
            'credit_score': 780,
            'ai_decision': 'Approve',
            'confidence_level': 0.92,
            'applied_date': '2025-01-01',
            'progress_percentage': 75,
            'next_step': 'Technical Evaluation Pending'
        },
        {
            'application_number': 'FA2025010004',
            'user_email': 'student.demo@finagenix.com',
            'loan_sector': 'EDUCATION_LOAN',
            'loan_type': 'Future Scholar Loan',
            'requested_amount': 800000,
            'tenure': 120,
            'purpose': 'Engineering degree fees and expenses',
            'status': 'DOCUMENT_VERIFICATION',
            'substatus': 'Admission Letter Verification',
            'priority': 'NORMAL',
            'risk_score': 50,
            'credit_score': 0,  # No credit history for student
            'ai_decision': 'Manual Review',
            'confidence_level': 0.68,
            'applied_date': '2025-01-03',
            'progress_percentage': 40,
            'next_step': 'Co-applicant Documents Required'
        },
        {
            'application_number': 'FA2025010005',
            'user_email': 'healthcare.demo@finagenix.com',
            'loan_sector': 'HEALTHCARE_LOAN',
            'loan_type': 'Medical Emergency Loan',
            'requested_amount': 300000,
            'tenure': 24,
            'purpose': 'Heart surgery medical expenses',
            'status': 'DISBURSED',
            'substatus': 'Active Loan',
            'priority': 'URGENT',
            'risk_score': 40,
            'credit_score': 680,
            'ai_decision': 'Approve',
            'confidence_level': 0.85,
            'applied_date': '2024-12-28',
            'progress_percentage': 100,
            'next_step': 'EMI Collection Started'
        },
        {
            'application_number': 'FA2025010006',
            'user_email': 'vehicle.demo@finagenix.com',
            'loan_sector': 'VEHICLE_LOAN',
            'loan_type': 'Car Loan Express',
            'requested_amount': 700000,
            'tenure': 60,
            'purpose': 'Purchase of family car',
            'status': 'SUBMITTED',
            'substatus': 'Initial Processing',
            'priority': 'NORMAL',
            'risk_score': 55,
            'credit_score': 650,
            'ai_decision': 'Approve',
            'confidence_level': 0.78,
            'applied_date': '2025-01-06',
            'progress_percentage': 25,
            'next_step': 'Income Verification Pending'
        }
    ]
    
    return pd.DataFrame(applications)

# ===== ADMIN DASHBOARD DATA =====
def create_dashboard_metrics():
    """Create dashboard metrics data"""
    today = datetime.now()
    
    # Daily metrics for last 30 days
    daily_metrics = []
    for i in range(30):
        date = today - timedelta(days=i)
        daily_metrics.append({
            'date': date.strftime('%Y-%m-%d'),
            'new_applications': random.randint(50, 200),
            'applications_approved': random.randint(20, 80),
            'applications_rejected': random.randint(5, 25),
            'amount_disbursed': random.randint(1000000, 10000000),
            'new_users_registered': random.randint(30, 150),
            'kyc_completed': random.randint(25, 120),
            'total_portfolio_value': 285000000 + random.randint(-5000000, 5000000),
            'collection_efficiency': random.uniform(92, 98),
            'npa_percentage': random.uniform(2.1, 2.8)
        })
    
    # Sector-wise performance
    sector_metrics = [
        {'sector': 'PERSONAL_LOAN', 'applications': 1250, 'amount': 125000000, 'approval_rate': 72, 'avg_ticket_size': 100000},
        {'sector': 'HOME_LOAN', 'applications': 450, 'amount': 225000000, 'approval_rate': 65, 'avg_ticket_size': 500000},
        {'sector': 'VEHICLE_LOAN', 'applications': 320, 'amount': 64000000, 'approval_rate': 78, 'avg_ticket_size': 200000},
        {'sector': 'BUSINESS_LOAN', 'applications': 180, 'amount': 90000000, 'approval_rate': 58, 'avg_ticket_size': 500000},
        {'sector': 'EDUCATION_LOAN', 'applications': 220, 'amount': 44000000, 'approval_rate': 85, 'avg_ticket_size': 200000},
        {'sector': 'AGRICULTURE_LOAN', 'applications': 380, 'amount': 38000000, 'approval_rate': 88, 'avg_ticket_size': 100000},
        {'sector': 'GOLD_LOAN', 'applications': 520, 'amount': 26000000, 'approval_rate': 95, 'avg_ticket_size': 50000},
        {'sector': 'CREDIT_CARD', 'applications': 680, 'amount': 34000000, 'approval_rate': 45, 'avg_ticket_size': 50000},
        {'sector': 'TWO_WHEELER_LOAN', 'applications': 890, 'amount': 89000000, 'approval_rate': 82, 'avg_ticket_size': 100000},
        {'sector': 'HEALTHCARE_LOAN', 'applications': 160, 'amount': 16000000, 'approval_rate': 90, 'avg_ticket_size': 100000},
        {'sector': 'DIGITAL_LOAN', 'applications': 1200, 'amount': 60000000, 'approval_rate': 68, 'avg_ticket_size': 50000},
        {'sector': 'MICROFINANCE', 'applications': 950, 'amount': 19000000, 'approval_rate': 92, 'avg_ticket_size': 20000}
    ]
    
    return pd.DataFrame(daily_metrics), pd.DataFrame(sector_metrics)

# ===== RISK ASSESSMENT DATA =====
def create_risk_profiles():
    """Create risk assessment profiles"""
    risk_factors = [
        {'factor': 'Credit Score', 'weight': 25, 'description': 'CIBIL/Credit Bureau Score'},
        {'factor': 'Income Stability', 'weight': 20, 'description': 'Consistency of income sources'},
        {'factor': 'Debt-to-Income Ratio', 'weight': 15, 'description': 'Existing EMI burden'},
        {'factor': 'Employment History', 'weight': 12, 'description': 'Job stability and experience'},
        {'factor': 'Banking Relationship', 'weight': 10, 'description': 'Account conduct and history'},
        {'factor': 'Asset Ownership', 'weight': 8, 'description': 'Property and asset base'},
        {'factor': 'Guarantor Profile', 'weight': 5, 'description': 'Co-applicant strength'},
        {'factor': 'Regional Risk', 'weight': 3, 'description': 'Geographic and economic factors'},
        {'factor': 'Industry Risk', 'weight': 2, 'description': 'Sector-specific risks'}
    ]
    
    return pd.DataFrame(risk_factors)

# Generate all demo datasets
print("1. Creating Demo User Accounts...")
demo_users_df = create_demo_users()

print("2. Creating Sample Loan Applications...")
sample_apps_df = create_sample_applications()

print("3. Creating Dashboard Metrics...")
daily_metrics_df, sector_metrics_df = create_dashboard_metrics()

print("4. Creating Risk Assessment Profiles...")
risk_profiles_df = create_risk_profiles()

# Save all datasets
print("Saving demo datasets...")
demo_users_df.to_excel('dataset/demo_user_accounts.xlsx', index=False)
sample_apps_df.to_excel('dataset/sample_loan_applications.xlsx', index=False)
daily_metrics_df.to_excel('dataset/dashboard_daily_metrics.xlsx', index=False)
sector_metrics_df.to_excel('dataset/dashboard_sector_metrics.xlsx', index=False)
risk_profiles_df.to_excel('dataset/risk_assessment_profiles.xlsx', index=False)

print("Demo dataset creation completed!")
print(f"Created demo datasets:")
print(f"- Demo Users: {len(demo_users_df)} accounts")
print(f"- Sample Applications: {len(sample_apps_df)} records")
print(f"- Daily Metrics: {len(daily_metrics_df)} records")
print(f"- Sector Metrics: {len(sector_metrics_df)} records")
print(f"- Risk Profiles: {len(risk_profiles_df)} factors")
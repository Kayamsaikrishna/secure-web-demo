# Fin-Agentix API Endpoints Documentation

## Overview

This document provides documentation for all API endpoints in the Fin-Agentix platform, including the newly implemented consumption-driven ecosystem endpoints.

## Authentication

All API endpoints require authentication through NextAuth.js. Session tokens are provided upon successful login.

## Base URL

```
http://localhost:3000/api
```

## Core API Endpoints

### User Management

#### POST /auth/login
- **Description**: User login
- **Authentication**: None
- **Body**: `{ email, password }`
- **Response**: User session data

#### POST /auth/register
- **Description**: User registration
- **Authentication**: None
- **Body**: `{ email, password, firstName, lastName }`
- **Response**: Registered user data

#### GET /profile
- **Description**: Get user profile
- **Authentication**: Required
- **Response**: User profile data

#### PUT /profile
- **Description**: Update user profile
- **Authentication**: Required
- **Body**: Profile update data
- **Response**: Updated profile data

### Loan Management

#### POST /loans/apply
- **Description**: Submit loan application
- **Authentication**: Required
- **Body**: Loan application data
- **Response**: Created loan application

#### GET /loans/my-applications
- **Description**: Get user's loan applications
- **Authentication**: Required
- **Response**: Array of loan applications

### KYC & Verification

#### POST /kyc/initiate
- **Description**: Initiate KYC process
- **Authentication**: Required
- **Response**: KYC session data

#### POST /kyc/verify
- **Description**: Submit KYC verification data
- **Authentication**: Required
- **Body**: KYC verification data
- **Response**: Verification result

## Consumption Ecosystem API Endpoints

### Partner Management

#### POST /partners
- **Description**: Create a new partner
- **Authentication**: Admin required
- **Body**: 
  ```json
  {
    "name": "Partner Name",
    "type": "UNIVERSITY|HOSPITAL|DEALER|SUPPLIER|ECOMMERCE|SERVICE_PROVIDER|OTHER",
    "sector": "PERSONAL_LOAN|HOME_LOAN|VEHICLE_LOAN|BUSINESS_LOAN|GOLD_LOAN|EDUCATION_LOAN|AGRICULTURE_LOAN|MICROFINANCE|CREDIT_CARD|TWO_WHEELER_LOAN|HEALTHCARE_LOAN|DIGITAL_LOAN",
    "commissionRate": 2.5,
    "contactPerson": "John Doe",
    "email": "contact@partner.com",
    "phone": "+919876543210"
  }
  ```
- **Response**: Created partner data

#### GET /partners
- **Description**: List all partners
- **Authentication**: Required
- **Response**: Array of partners

#### GET /partners/[id]
- **Description**: Get specific partner details
- **Authentication**: Required
- **Response**: Partner data

#### PUT /partners/[id]
- **Description**: Update partner information
- **Authentication**: Admin required
- **Body**: Partner update data
- **Response**: Updated partner data

#### DELETE /partners/[id]
- **Description**: Delete a partner
- **Authentication**: Admin required
- **Response**: Success message

### Consumption Loans

#### POST /consumption-loans
- **Description**: Create a consumption loan record
- **Authentication**: Required
- **Body**:
  ```json
  {
    "applicationId": "application_cuid",
    "partnerId": "partner_cuid",
    "disbursementType": "DIRECT_TO_PARTNER|ESCROW|MULTI_PARTNER",
    "consumptionType": "EDUCATION|HEALTHCARE|VEHICLE|AGRICULTURE|HOME|PERSONAL|BUSINESS|DIGITAL|LIFESTYLE|OTHER",
    "partnerReference": "ORDER123456"
  }
  ```
- **Response**: Created consumption loan data

#### GET /consumption-loans
- **Description**: List consumption loans
- **Authentication**: Required
- **Response**: Array of consumption loans with related application and partner data

#### GET /consumption-loans/[id]
- **Description**: Get specific consumption loan details
- **Authentication**: Required
- **Response**: Consumption loan data with related application and partner data

#### PUT /consumption-loans/[id]
- **Description**: Update consumption loan status
- **Authentication**: Required
- **Body**: 
  ```json
  {
    "status": "PENDING|DISBURSED|CONFIRMED|COMPLETED|CANCELLED",
    "partnerReference": "updated_reference"
  }
  ```
- **Response**: Updated consumption loan data

### Marketplace Offers

#### POST /marketplace/offers
- **Description**: Create a new marketplace offer
- **Authentication**: Admin required
- **Body**:
  ```json
  {
    "partnerId": "partner_cuid",
    "loanSector": "PERSONAL_LOAN|HOME_LOAN|VEHICLE_LOAN|BUSINESS_LOAN|GOLD_LOAN|EDUCATION_LOAN|AGRICULTURE_LOAN|MICROFINANCE|CREDIT_CARD|TWO_WHEELER_LOAN|HEALTHCARE_LOAN|DIGITAL_LOAN",
    "minAmount": 100000,
    "maxAmount": 5000000,
    "interestRate": 12.5,
    "processingFee": 5000,
    "tenureOptions": [12, 24, 36],
    "isActive": true,
    "priority": 1,
    "tags": ["education", "premium"]
  }
  ```
- **Response**: Created marketplace offer data

#### GET /marketplace/offers
- **Description**: List active marketplace offers
- **Authentication**: Required
- **Response**: Array of active marketplace offers with partner data

## Error Handling

All API endpoints follow a consistent error response format:

```json
{
  "error": "Error message",
  "details": "Additional error details (optional)"
}
```

Common HTTP status codes:
- `200`: Success
- `400`: Bad Request (validation errors)
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- 100 requests per hour per IP for unauthenticated endpoints
- 1000 requests per hour per user for authenticated endpoints

## Versioning

API endpoints are currently unversioned. Future updates will follow semantic versioning.

## Changelog

### v1.0.0 (Current)
- Initial implementation of consumption-driven ecosystem endpoints
- Partner management APIs
- Consumption loan tracking APIs
- Marketplace offer APIs
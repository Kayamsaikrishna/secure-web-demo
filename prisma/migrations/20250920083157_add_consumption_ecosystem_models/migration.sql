-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastLoginAt" DATETIME
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT,
    "fullName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "nationality" TEXT NOT NULL DEFAULT 'Indian',
    "primaryPhone" TEXT NOT NULL,
    "secondaryPhone" TEXT,
    "whatsappNumber" TEXT,
    "alternateEmail" TEXT,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "spouseName" TEXT,
    "dependents" INTEGER NOT NULL DEFAULT 0,
    "preferredLanguage" TEXT NOT NULL DEFAULT 'English',
    "communicationMode" TEXT NOT NULL DEFAULT 'Email',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "landmark" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'India',
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "gpsLat" REAL,
    "gpsLng" REAL,
    "currentUserId" TEXT,
    "permanentUserId" TEXT,
    "organizationId" TEXT,
    "partnerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Address_currentUserId_fkey" FOREIGN KEY ("currentUserId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Address_permanentUserId_fkey" FOREIGN KEY ("permanentUserId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Address_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Address_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "KYCData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "aadhaarNumber" TEXT,
    "aadhaarVerified" BOOLEAN NOT NULL DEFAULT false,
    "panNumber" TEXT,
    "panVerified" BOOLEAN NOT NULL DEFAULT false,
    "passportNumber" TEXT,
    "voterIdNumber" TEXT,
    "drivingLicense" TEXT,
    "kycStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "kycLevel" TEXT NOT NULL DEFAULT 'BASIC',
    "overallScore" INTEGER NOT NULL DEFAULT 0,
    "riskScore" INTEGER NOT NULL DEFAULT 50,
    "aadhaarEkycRef" TEXT,
    "aadhaarEkycDate" DATETIME,
    "panVerificationRef" TEXT,
    "panVerificationDate" DATETIME,
    "fatcaStatus" TEXT,
    "pepStatus" BOOLEAN NOT NULL DEFAULT false,
    "sanctionCheck" BOOLEAN NOT NULL DEFAULT false,
    "initiatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" DATETIME,
    "expiryDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "KYCData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BiometricData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "livePhotoUrl" TEXT,
    "voiceSampleUrl" TEXT,
    "videoKycUrl" TEXT,
    "faceMatchScore" REAL,
    "livenessScore" REAL,
    "voicePrintId" TEXT,
    "videoKycAgent" TEXT,
    "videoKycDuration" INTEGER,
    "videoKycStatus" TEXT,
    "deviceFingerprint" TEXT,
    "ipAddress" TEXT,
    "location" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BiometricData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IdentityDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "documentNumber" TEXT,
    "issueDate" DATETIME,
    "expiryDate" DATETIME,
    "issuingAuthority" TEXT,
    "frontImageUrl" TEXT,
    "backImageUrl" TEXT,
    "pdfUrl" TEXT,
    "fileSize" INTEGER,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verificationScore" REAL,
    "verificationDate" DATETIME,
    "verifiedBy" TEXT,
    "ocrData" TEXT,
    "fraudScore" REAL,
    "qualityScore" REAL,
    "loanApplicationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "IdentityDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "IdentityDocument_loanApplicationId_fkey" FOREIGN KEY ("loanApplicationId") REFERENCES "LoanApplication" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "profileId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "degree" TEXT,
    "specialization" TEXT,
    "institution" TEXT NOT NULL,
    "university" TEXT,
    "passingYear" INTEGER NOT NULL,
    "percentage" REAL,
    "cgpa" REAL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Employment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "profileId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "designation" TEXT,
    "department" TEXT,
    "employeeId" TEXT,
    "companyName" TEXT,
    "companyType" TEXT,
    "industry" TEXT,
    "workLocation" TEXT,
    "joiningDate" DATETIME,
    "relievingDate" DATETIME,
    "totalExperience" INTEGER,
    "monthlyIncome" REAL,
    "annualIncome" REAL,
    "incomeMode" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Employment_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "UserProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FinancialProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "monthlyIncome" REAL NOT NULL,
    "annualIncome" REAL NOT NULL,
    "incomeStability" TEXT NOT NULL,
    "incomeProofType" TEXT NOT NULL,
    "totalAssets" REAL DEFAULT 0,
    "totalLiabilities" REAL DEFAULT 0,
    "netWorth" REAL DEFAULT 0,
    "liquidAssets" REAL DEFAULT 0,
    "totalEmi" REAL DEFAULT 0,
    "debtToIncomeRatio" REAL DEFAULT 0,
    "riskAppetite" TEXT,
    "investmentValue" REAL DEFAULT 0,
    "primaryBankYears" INTEGER DEFAULT 0,
    "averageBalance" REAL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FinancialProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BankAccount" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "ifscCode" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "accountType" TEXT NOT NULL,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "currentBalance" REAL DEFAULT 0,
    "averageBalance" REAL DEFAULT 0,
    "relationshipYears" INTEGER DEFAULT 0,
    "monthlyCredits" REAL DEFAULT 0,
    "monthlyDebits" REAL DEFAULT 0,
    "salaryAccount" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BankAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CreditScore" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "bureau" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "grade" TEXT,
    "reportDate" DATETIME NOT NULL,
    "reportNumber" TEXT,
    "factors" TEXT,
    "previousScore" INTEGER,
    "scoreChange" INTEGER DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CreditScore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LoanApplication" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicationNumber" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "loanSector" TEXT NOT NULL,
    "loanType" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "tenure" INTEGER NOT NULL,
    "purpose" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "substatus" TEXT,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "initiatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "submittedAt" DATETIME,
    "approvedAt" DATETIME,
    "disbursedAt" DATETIME,
    "requestedAmount" REAL NOT NULL,
    "approvedAmount" REAL,
    "interestRate" REAL,
    "processingFee" REAL,
    "riskScore" INTEGER,
    "creditScore" INTEGER,
    "aiDecision" TEXT,
    "confidenceLevel" REAL,
    "productId" TEXT,
    "assignedTo" TEXT,
    "branchCode" TEXT,
    "channel" TEXT,
    "applicantNotes" TEXT,
    "internalNotes" TEXT,
    "rejectionReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LoanApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "LoanApplication_productId_fkey" FOREIGN KEY ("productId") REFERENCES "LoanProduct" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LoanProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT,
    "minAmount" REAL NOT NULL,
    "maxAmount" REAL NOT NULL,
    "minTenure" INTEGER NOT NULL,
    "maxTenure" INTEGER NOT NULL,
    "baseInterestRate" REAL NOT NULL,
    "processingFeeRate" REAL,
    "minAge" INTEGER NOT NULL DEFAULT 18,
    "maxAge" INTEGER NOT NULL DEFAULT 65,
    "minIncome" REAL,
    "minCreditScore" INTEGER,
    "eligibilityCriteria" TEXT,
    "features" TEXT,
    "benefits" TEXT,
    "requiredDocuments" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Verification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicationId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "method" TEXT,
    "verifiedBy" TEXT,
    "verificationDate" DATETIME,
    "expiryDate" DATETIME,
    "result" TEXT,
    "score" REAL,
    "details" TEXT,
    "referenceNumber" TEXT,
    "apiResponse" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Verification_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "LoanApplication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Approval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicationId" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "approverRole" TEXT NOT NULL,
    "approverId" TEXT NOT NULL,
    "approverName" TEXT NOT NULL,
    "decision" TEXT NOT NULL,
    "approvedAmount" REAL,
    "approvedTenure" INTEGER,
    "approvedRate" REAL,
    "comments" TEXT,
    "conditions" TEXT,
    "approvedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Approval_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "LoanApplication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Disbursement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicationId" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "method" TEXT NOT NULL,
    "bankAccountId" TEXT,
    "upiId" TEXT,
    "requestedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "processedAt" DATETIME,
    "completedAt" DATETIME,
    "transactionId" TEXT,
    "referenceNumber" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "verifiedBy" TEXT,
    "verificationDate" DATETIME,
    "failureReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Disbursement_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "LoanApplication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EMI" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicationId" TEXT NOT NULL,
    "emiNumber" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "principalAmount" REAL NOT NULL,
    "interestAmount" REAL NOT NULL,
    "dueDate" DATETIME NOT NULL,
    "paidDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "paymentMethod" TEXT,
    "transactionId" TEXT,
    "daysPastDue" INTEGER NOT NULL DEFAULT 0,
    "lateFee" REAL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "EMI_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "LoanApplication" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "issuerBank" TEXT NOT NULL,
    "creditLimit" REAL NOT NULL,
    "availableLimit" REAL NOT NULL,
    "utilizedAmount" REAL NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "issuedDate" DATETIME NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "lastPaymentDate" DATETIME,
    "lastPaymentAmount" REAL DEFAULT 0,
    "minimumDue" REAL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CreditCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "investmentAmount" REAL NOT NULL,
    "currentValue" REAL,
    "investmentDate" DATETIME NOT NULL,
    "maturityDate" DATETIME,
    "expectedReturn" REAL,
    "actualReturn" REAL,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Investment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "legalName" TEXT NOT NULL,
    "tradeName" TEXT,
    "entityType" TEXT NOT NULL,
    "incorporationDate" DATETIME,
    "cinNumber" TEXT,
    "gstNumber" TEXT,
    "panNumber" TEXT,
    "tanNumber" TEXT,
    "businessType" TEXT,
    "industry" TEXT,
    "description" TEXT,
    "authorizedCapital" REAL,
    "paidUpCapital" REAL,
    "netWorth" REAL,
    "partnershipStatus" TEXT NOT NULL DEFAULT 'PENDING',
    "onboardingDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "License" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "licenseNumber" TEXT NOT NULL,
    "issuingAuthority" TEXT NOT NULL,
    "issueDate" DATETIME NOT NULL,
    "expiryDate" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'Active',
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "License_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Personnel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "dinNumber" TEXT,
    "panNumber" TEXT,
    "role" TEXT NOT NULL,
    "responsibilities" TEXT,
    "signatureSpecimen" TEXT,
    "authorizationLevel" TEXT,
    "appointmentDate" DATETIME NOT NULL,
    "relievingDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Personnel_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "OrganizationFinancial" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "organizationId" TEXT NOT NULL,
    "financialYear" TEXT NOT NULL,
    "revenue" REAL NOT NULL,
    "netProfit" REAL NOT NULL,
    "totalAssets" REAL NOT NULL,
    "totalLiabilities" REAL NOT NULL,
    "netWorth" REAL NOT NULL,
    "auditorName" TEXT,
    "auditDate" DATETIME,
    "auditOpinion" TEXT,
    "creditRating" TEXT,
    "ratingAgency" TEXT,
    "ratingDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "OrganizationFinancial_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LoginSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "location" TEXT,
    "loginAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "logoutAt" DATETIME,
    "expiresAt" DATETIME NOT NULL,
    "mfaVerified" BOOLEAN NOT NULL DEFAULT false,
    "riskScore" INTEGER DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "LoginSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "entity" TEXT,
    "entityId" TEXT,
    "description" TEXT,
    "oldValues" TEXT,
    "newValues" TEXT,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "sessionId" TEXT,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "priority" TEXT NOT NULL DEFAULT 'NORMAL',
    "read" BOOLEAN NOT NULL DEFAULT false,
    "readAt" DATETIME,
    "actionUrl" TEXT,
    "actionLabel" TEXT,
    "channels" TEXT,
    "deliveredAt" DATETIME,
    "expiresAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AdminAction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "adminId" TEXT NOT NULL,
    "targetType" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "targetUserId" TEXT,
    "actionType" TEXT NOT NULL,
    "description" TEXT,
    "reason" TEXT,
    "previousData" TEXT,
    "newData" TEXT,
    "actionDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "AdminAction_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AdminAction_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "commissionRate" REAL NOT NULL DEFAULT 2.5,
    "contactPerson" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "addressId" TEXT,
    "integrationStatus" TEXT NOT NULL DEFAULT 'NOT_INTEGRATED',
    "apiKey" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ConsumptionLoan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "applicationId" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "disbursementType" TEXT NOT NULL,
    "consumptionType" TEXT NOT NULL,
    "partnerReference" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ConsumptionLoan_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "LoanApplication" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ConsumptionLoan_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MarketplaceOffer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "partnerId" TEXT NOT NULL,
    "loanSector" TEXT NOT NULL,
    "minAmount" REAL NOT NULL,
    "maxAmount" REAL NOT NULL,
    "interestRate" REAL NOT NULL,
    "processingFee" REAL NOT NULL,
    "tenureOptionsJson" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "tagsJson" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "MarketplaceOffer_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_currentUserId_key" ON "Address"("currentUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_permanentUserId_key" ON "Address"("permanentUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_partnerId_key" ON "Address"("partnerId");

-- CreateIndex
CREATE UNIQUE INDEX "KYCData_userId_key" ON "KYCData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "BiometricData_userId_key" ON "BiometricData"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Employment_profileId_key" ON "Employment"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "FinancialProfile_userId_key" ON "FinancialProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LoanApplication_applicationNumber_key" ON "LoanApplication"("applicationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LoanProduct_code_key" ON "LoanProduct"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Disbursement_applicationId_key" ON "Disbursement"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_cardNumber_key" ON "CreditCard"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_cinNumber_key" ON "Organization"("cinNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_gstNumber_key" ON "Organization"("gstNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_panNumber_key" ON "Organization"("panNumber");

-- CreateIndex
CREATE UNIQUE INDEX "LoginSession_sessionToken_key" ON "LoginSession"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_addressId_key" ON "Partner"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Partner_apiKey_key" ON "Partner"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "ConsumptionLoan_applicationId_key" ON "ConsumptionLoan"("applicationId");

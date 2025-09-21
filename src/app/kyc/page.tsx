"use client";

import { useState, useRef } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  IdentificationIcon,
  DocumentTextIcon,
  CameraIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  FingerPrintIcon,
  EyeIcon
} from "@heroicons/react/24/outline";

// KYC form validation schema
const kycSchema = z.object({
  // Aadhaar Verification
  aadhaarNumber: z.string()
    .min(12, "Aadhaar number must be 12 digits")
    .max(12, "Aadhaar number must be 12 digits")
    .regex(/^\d{12}$/, "Aadhaar number must contain only digits"),
  aadhaarName: z.string().min(2, "Name as per Aadhaar is required"),
  
  // PAN Verification
  panNumber: z.string()
    .min(10, "PAN number must be 10 characters")
    .max(10, "PAN number must be 10 characters")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  panName: z.string().min(2, "Name as per PAN is required"),
  
  // Personal Details
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  fatherName: z.string().min(2, "Father's name is required"),
  
  // Address Details
  addressLine1: z.string().min(5, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string()
    .min(6, "Pincode must be 6 digits")
    .max(6, "Pincode must be 6 digits")
    .regex(/^\d{6}$/, "Pincode must contain only digits"),
  
  // Bank Details
  bankAccountNumber: z.string().min(9, "Bank account number is required"),
  ifscCode: z.string()
    .min(11, "IFSC code must be 11 characters")
    .max(11, "IFSC code must be 11 characters")
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC format"),
  bankName: z.string().min(2, "Bank name is required"),
  
  // Consent
  consentAadhaar: z.boolean().refine(val => val === true, "Aadhaar consent is required"),
  consentPAN: z.boolean().refine(val => val === true, "PAN consent is required"),
  consentCreditCheck: z.boolean().refine(val => val === true, "Credit check consent is required")
});

// Mock Aadhaar database (simulating government API)
const mockAadhaarDB = {
  "123456789012": {
    name: "Rajesh Kumar Singh",
    dob: "1985-06-15",
    gender: "Male",
    fatherName: "Ram Kumar Singh",
    address: "123 MG Road, Sector 5, New Delhi, 110001",
    isValid: true
  },
  "987654321098": {
    name: "Priya Sharma",
    dob: "1990-08-22",
    gender: "Female", 
    fatherName: "Ashok Sharma",
    address: "456 Park Street, Andheri West, Mumbai, 400058",
    isValid: true
  },
  "456789123456": {
    name: "Amit Patel",
    dob: "1988-03-10",
    gender: "Male",
    fatherName: "Kiran Patel", 
    address: "789 SG Highway, Ahmedabad, Gujarat, 380015",
    isValid: true
  }
};

// Mock PAN database
const mockPANDB = {
  "ABCDE1234F": {
    name: "RAJESH KUMAR SINGH",
    fatherName: "RAM KUMAR SINGH",
    dob: "15/06/1985",
    isValid: true
  },
  "FGHIJ5678K": {
    name: "PRIYA SHARMA",
    fatherName: "ASHOK SHARMA", 
    dob: "22/08/1990",
    isValid: true
  },
  "KLMNO9012P": {
    name: "AMIT PATEL",
    fatherName: "KIRAN PATEL",
    dob: "10/03/1988",
    isValid: true
  }
};

interface VerificationStatus {
  [key: string]: {
    status: string;
    data?: Record<string, any>;
    error?: string;
  } | undefined;
}

interface UploadedFiles {
  [key: string]: {
    name: string;
    size: number;
    type: string;
    lastModified: number;
    url: string;
  } | null;
}

interface BiometricData {
  [key: string]: {
    captured: boolean;
    timestamp: string;
    quality: number;
  } | null;
}

export default function KYCVerificationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>({});
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({});
  const [biometricData, setBiometricData] = useState<BiometricData>({});
  const [isProcessing, setIsProcessing] = useState(false);
  
  const fileInputRefs = {
    aadhaarFront: useRef<HTMLInputElement>(null),
    aadhaarBack: useRef<HTMLInputElement>(null),
    panCard: useRef<HTMLInputElement>(null),
    selfie: useRef<HTMLInputElement>(null),
    signature: useRef<HTMLInputElement>(null)
  };

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(kycSchema),
    defaultValues: {
      consentAadhaar: false,
      consentPAN: false,
      consentCreditCheck: false
    }
  });

  const watchedValues = watch();

  // Mock Aadhaar verification
  const verifyAadhaar = async (aadhaarNumber: string) => {
    setIsProcessing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const aadhaarData = mockAadhaarDB[aadhaarNumber as keyof typeof mockAadhaarDB];
    
    if (aadhaarData) {
      setVerificationStatus((prev: VerificationStatus) => ({
        ...prev,
        aadhaar: { status: 'verified', data: aadhaarData }
      }));
      
      // Auto-fill form with Aadhaar data
      setValue('aadhaarName', aadhaarData.name);
      setValue('dateOfBirth', aadhaarData.dob);
      setValue('gender', aadhaarData.gender);
      setValue('fatherName', aadhaarData.fatherName);
      
      // Extract address components
      const addressParts = aadhaarData.address.split(', ');
      setValue('addressLine1', addressParts[0] || '');
      setValue('city', addressParts[1] || '');
      setValue('state', addressParts[2] || '');
      setValue('pincode', addressParts[3] || '');
    } else {
      setVerificationStatus((prev: VerificationStatus) => ({
        ...prev,
        aadhaar: { status: 'failed', error: 'Aadhaar number not found' }
      }));
    }
    
    setIsProcessing(false);
  };

  // Mock PAN verification
  const verifyPAN = async (panNumber: string) => {
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const panData = mockPANDB[panNumber as keyof typeof mockPANDB];
    
    if (panData) {
      setVerificationStatus((prev: VerificationStatus) => ({
        ...prev,
        pan: { status: 'verified', data: panData }
      }));
      
      setValue('panName', panData.name);
    } else {
      setVerificationStatus((prev: VerificationStatus) => ({
        ...prev,
        pan: { status: 'failed', error: 'PAN number not found' }
      }));
    }
    
    setIsProcessing(false);
  };

  // Handle file uploads
  const handleFileUpload = (fileType: string, file: File) => {
    setUploadedFiles((prev: UploadedFiles) => ({
      ...prev,
      [fileType]: {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        url: URL.createObjectURL(file)
      }
    }));
  };

  // Mock biometric capture
  const captureBiometric = (type: 'fingerprint' | 'iris') => {
    setBiometricData((prev: BiometricData) => ({
      ...prev,
      [type]: {
        captured: true,
        timestamp: new Date().toISOString(),
        quality: Math.floor(Math.random() * 20) + 80 // 80-100%
      }
    }));
  };

  const onSubmit = async (data: FieldValues) => {
    console.log("KYC Data:", { ...data, uploadedFiles, biometricData });
    alert("KYC verification completed successfully! Your profile will be updated shortly.");
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold flex items-center justify-center">
              <ShieldCheckIcon className="h-8 w-8 mr-3" />
              KYC Verification
            </h1>
            <p className="text-blue-100 mt-2">Complete your Know Your Customer verification for secure lending</p>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step ? 'bg-yellow-400 text-gray-900' : 'bg-blue-800 text-blue-300'
                  }`}>
                    {currentStep > step ? <CheckCircleIcon className="h-5 w-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      currentStep > step ? 'bg-yellow-400' : 'bg-blue-800'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-blue-100">
              <span>Identity Verification</span>
              <span>Document Upload</span>
              <span>Biometric Verification</span>
              <span>Complete</span>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Identity Verification */}
        {currentStep === 1 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <IdentificationIcon className="h-6 w-6 mr-2" />
              Identity Verification
            </h2>
            
            {/* Aadhaar Verification */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCardIcon className="h-5 w-5 mr-2" />
                Aadhaar Verification
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aadhaar Number *
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      {...register("aadhaarNumber")}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="XXXX XXXX XXXX"
                      maxLength={12}
                    />
                    <button
                      type="button"
                      onClick={() => verifyAadhaar(watchedValues.aadhaarNumber)}
                      disabled={!watchedValues.aadhaarNumber || isProcessing}
                      className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? 'Verifying...' : 'Verify'}
                    </button>
                  </div>
                  {errors.aadhaarNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.aadhaarNumber.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name as per Aadhaar *
                  </label>
                  <input
                    type="text"
                    {...register("aadhaarName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly={verificationStatus.aadhaar?.status === 'verified'}
                  />
                  {errors.aadhaarName && (
                    <p className="text-red-500 text-sm mt-1">{errors.aadhaarName.message}</p>
                  )}
                </div>
              </div>

              {verificationStatus.aadhaar && (
                <div className={`p-3 rounded-lg mb-4 ${
                  verificationStatus.aadhaar.status === 'verified' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    {verificationStatus.aadhaar.status === 'verified' ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className={`text-sm ${
                      verificationStatus.aadhaar.status === 'verified' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {verificationStatus.aadhaar.status === 'verified' 
                        ? 'Aadhaar verified successfully!' 
                        : verificationStatus.aadhaar.error}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("consentAadhaar")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I consent to Aadhaar verification and data sharing as per UIDAI guidelines
                </label>
              </div>
              {errors.consentAadhaar && (
                <p className="text-red-500 text-sm mt-1">{errors.consentAadhaar.message}</p>
              )}
            </div>

            {/* PAN Verification */}
            <div className="mb-8 p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <DocumentTextIcon className="h-5 w-5 mr-2" />
                PAN Verification
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PAN Number *
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      {...register("panNumber")}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                      placeholder="ABCDE1234F"
                      maxLength={10}
                    />
                    <button
                      type="button"
                      onClick={() => verifyPAN(watchedValues.panNumber)}
                      disabled={!watchedValues.panNumber || isProcessing}
                      className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? 'Verifying...' : 'Verify'}
                    </button>
                  </div>
                  {errors.panNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.panNumber.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name as per PAN *
                  </label>
                  <input
                    type="text"
                    {...register("panName")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    readOnly={verificationStatus.pan?.status === 'verified'}
                  />
                  {errors.panName && (
                    <p className="text-red-500 text-sm mt-1">{errors.panName.message}</p>
                  )}
                </div>
              </div>

              {verificationStatus.pan && (
                <div className={`p-3 rounded-lg mb-4 ${
                  verificationStatus.pan.status === 'verified' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <div className="flex items-center">
                    {verificationStatus.pan.status === 'verified' ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <XMarkIcon className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className={`text-sm ${
                      verificationStatus.pan.status === 'verified' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {verificationStatus.pan.status === 'verified' 
                        ? 'PAN verified successfully!' 
                        : verificationStatus.pan.error}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("consentPAN")}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I consent to PAN verification and income tax data sharing
                </label>
              </div>
              {errors.consentPAN && (
                <p className="text-red-500 text-sm mt-1">{errors.consentPAN.message}</p>
              )}
            </div>

            {/* Demo Instructions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Demo Instructions</h4>
              <p className="text-yellow-700 text-sm mb-2">Use these sample numbers for testing:</p>
              <div className="text-sm text-yellow-700 space-y-1">
                <div><strong>Aadhaar:</strong> 123456789012 (Rajesh Kumar Singh)</div>
                <div><strong>PAN:</strong> ABCDE1234F (matches above Aadhaar)</div>
                <div className="text-xs mt-2">More combinations available: 987654321098/FGHIJ5678K, 456789123456/KLMNO9012P</div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                disabled={!(verificationStatus.aadhaar?.status === 'verified') || !(verificationStatus.pan?.status === 'verified')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center font-semibold"
              >
                Continue to Documents
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Document Upload */}
        {currentStep === 2 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <DocumentTextIcon className="h-6 w-6 mr-2" />
              Document Upload & Verification
            </h2>
            
            <div className="space-y-6">
              {/* Aadhaar Documents */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Aadhaar Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Front Side *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      {uploadedFiles.aadhaarFront ? (
                        <div className="space-y-2">
                          <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto" />
                          <p className="text-sm text-gray-600">{uploadedFiles.aadhaarFront.name}</p>
                          <button
                            type="button"
                            onClick={() => setUploadedFiles((prev: Record<string, any>) => ({ ...prev, aadhaarFront: null }))}
                            className="text-red-600 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <CameraIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Upload Aadhaar Front</p>
                          <input
                            ref={fileInputRefs.aadhaarFront}
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('aadhaarFront', e.target.files[0])}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRefs.aadhaarFront.current?.click()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                          >
                            Choose File
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Back Side *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      {uploadedFiles.aadhaarBack ? (
                        <div className="space-y-2">
                          <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto" />
                          <p className="text-sm text-gray-600">{uploadedFiles.aadhaarBack.name}</p>
                          <button
                            type="button"
                            onClick={() => setUploadedFiles((prev: Record<string, any>) => ({ ...prev, aadhaarBack: null }))}
                            className="text-red-600 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <CameraIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Upload Aadhaar Back</p>
                          <input
                            ref={fileInputRefs.aadhaarBack}
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('aadhaarBack', e.target.files[0])}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRefs.aadhaarBack.current?.click()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                          >
                            Choose File
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* PAN Card */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">PAN Card</h3>
                <div className="max-w-md">
                  <label className="block text-sm font-medium text-gray-700 mb-2">PAN Card Image *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                    {uploadedFiles.panCard ? (
                      <div className="space-y-2">
                        <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto" />
                        <p className="text-sm text-gray-600">{uploadedFiles.panCard.name}</p>
                        <button
                          type="button"
                          onClick={() => setUploadedFiles((prev: Record<string, any>) => ({ ...prev, panCard: null }))}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div>
                        <CameraIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload PAN Card</p>
                        <input
                          ref={fileInputRefs.panCard}
                          type="file"
                          accept="image/*"
                          onChange={(e) => e.target.files?.[0] && handleFileUpload('panCard', e.target.files[0])}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRefs.panCard.current?.click()}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                        >
                          Choose File
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Selfie & Signature */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Verification</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Live Selfie *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      {uploadedFiles.selfie ? (
                        <div className="space-y-2">
                          <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto" />
                          <p className="text-sm text-gray-600">{uploadedFiles.selfie.name}</p>
                          <button
                            type="button"
                            onClick={() => setUploadedFiles((prev: Record<string, any>) => ({ ...prev, selfie: null }))}
                            className="text-red-600 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <CameraIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Take Live Selfie</p>
                          <input
                            ref={fileInputRefs.selfie}
                            type="file"
                            accept="image/*"
                            capture="user"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('selfie', e.target.files[0])}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRefs.selfie.current?.click()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                          >
                            Capture Selfie
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Signature *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      {uploadedFiles.signature ? (
                        <div className="space-y-2">
                          <CheckCircleIcon className="h-8 w-8 text-green-500 mx-auto" />
                          <p className="text-sm text-gray-600">{uploadedFiles.signature.name}</p>
                          <button
                            type="button"
                            onClick={() => setUploadedFiles((prev: Record<string, any>) => ({ ...prev, signature: null }))}
                            className="text-red-600 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <DocumentTextIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Upload Signature</p>
                          <input
                            ref={fileInputRefs.signature}
                            type="file"
                            accept="image/*"
                            onChange={(e) => e.target.files?.[0] && handleFileUpload('signature', e.target.files[0])}
                            className="hidden"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRefs.signature.current?.click()}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"
                          >
                            Upload Signature
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center font-semibold"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!uploadedFiles.aadhaarFront || !uploadedFiles.aadhaarBack || !uploadedFiles.panCard || !uploadedFiles.selfie || !uploadedFiles.signature}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center font-semibold"
              >
                Continue to Biometrics
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Biometric Verification */}
        {currentStep === 3 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FingerPrintIcon className="h-6 w-6 mr-2" />
              Biometric Verification
            </h2>
            
            <div className="space-y-8">
              {/* Fingerprint Capture */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <FingerPrintIcon className="h-5 w-5 mr-2" />
                  Fingerprint Authentication
                </h3>
                <div className="text-center">
                  {biometricData.fingerprint ? (
                    <div className="space-y-4">
                      <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                      <div>
                        <p className="text-lg font-semibold text-green-700">Fingerprint Captured Successfully</p>
                        <p className="text-sm text-gray-600">Quality: {biometricData.fingerprint.quality}%</p>
                        <p className="text-xs text-gray-500">Captured at: {new Date(biometricData.fingerprint.timestamp).toLocaleString()}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBiometricData((prev: Record<string, any>) => ({ ...prev, fingerprint: null }))}
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        Recapture Fingerprint
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <FingerPrintIcon className="h-16 w-16 text-gray-400 mx-auto" />
                      <div>
                        <p className="text-lg font-semibold text-gray-900">Place your finger on the scanner</p>
                        <p className="text-sm text-gray-600">Ensure your finger is clean and dry for best results</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => captureBiometric('fingerprint')}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold"
                      >
                        Capture Fingerprint
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Iris Scan */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <EyeIcon className="h-5 w-5 mr-2" />
                  Iris Recognition
                </h3>
                <div className="text-center">
                  {biometricData.iris ? (
                    <div className="space-y-4">
                      <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto" />
                      <div>
                        <p className="text-lg font-semibold text-green-700">Iris Pattern Captured Successfully</p>
                        <p className="text-sm text-gray-600">Quality: {biometricData.iris.quality}%</p>
                        <p className="text-xs text-gray-500">Captured at: {new Date(biometricData.iris.timestamp).toLocaleString()}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setBiometricData((prev: Record<string, any>) => ({ ...prev, iris: null }))}
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        Recapture Iris
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <EyeIcon className="h-16 w-16 text-gray-400 mx-auto" />
                      <div>
                        <p className="text-lg font-semibold text-gray-900">Look into the iris scanner</p>
                        <p className="text-sm text-gray-600">Keep your eyes open and look straight ahead</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => captureBiometric('iris')}
                        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-semibold"
                      >
                        Capture Iris Pattern
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Credit Check Consent */}
              <div className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Credit Assessment Authorization</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      {...register("consentCreditCheck")}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
                    />
                    <div className="ml-3">
                      <label className="text-sm text-gray-700">
                        I hereby authorize Fin-Agentix India and its partner institutions to:
                      </label>
                      <ul className="text-xs text-gray-600 mt-2 space-y-1 ml-4">
                        <li>• Access my credit information from CIBIL, Experian, Equifax, and CRIF High Mark</li>
                        <li>• Verify my employment and income details</li>
                        <li>• Check my banking history and transaction patterns</li>
                        <li>• Perform ongoing monitoring for portfolio management</li>
                        <li>• Share my information with authorized lending partners</li>
                      </ul>
                    </div>
                  </div>
                  {errors.consentCreditCheck && (
                    <p className="text-red-500 text-sm">{errors.consentCreditCheck.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center font-semibold"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={!biometricData.fingerprint || !biometricData.iris || !watchedValues.consentCreditCheck}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center font-semibold"
              >
                Final Review
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Final Review */}
        {currentStep === 4 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircleIcon className="h-6 w-6 mr-2" />
              KYC Verification Complete
            </h2>
            
            <div className="space-y-6">
              {/* Verification Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold text-green-800">Identity Verified</span>
                  </div>
                  <p className="text-sm text-green-700">Aadhaar & PAN verification completed</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold text-green-800">Documents Uploaded</span>
                  </div>
                  <p className="text-sm text-green-700">All required documents submitted</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-semibold text-green-800">Biometrics Captured</span>
                  </div>
                  <p className="text-sm text-green-700">Fingerprint & iris verification done</p>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What Happens Next?</h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>✓ Your KYC data will be processed within 24-48 hours</p>
                  <p>✓ Credit assessment will be initiated automatically</p>
                  <p>✓ You&apos;ll receive SMS and email updates on verification status</p>
                  <p>✓ Once approved, you can access all loan products</p>
                  <p>✓ Enhanced loan limits and better interest rates will be unlocked</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Assistance?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p><strong>Customer Support:</strong></p>
                    <p>📞 1800-FIN-AGENTIX (24/7)</p>
                    <p>📧 kyc@fin-agentix.com</p>
                  </div>
                  <div>
                    <p><strong>KYC Helpdesk:</strong></p>
                    <p>💬 Live chat available</p>
                    <p>🕒 Mon-Sat: 9 AM - 9 PM</p>
                    <p>🏢 Head Office: Bangalore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 flex items-center font-semibold"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 flex items-center font-semibold"
              >
                Complete KYC Verification
                <CheckCircleIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
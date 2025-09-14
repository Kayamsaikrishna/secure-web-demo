"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  gender: z.enum(["MALE", "FEMALE", "OTHER", "PREFER_NOT_TO_SAY"]),
  dateOfBirth: z.string(),
  maritalStatus: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED", "SEPARATED"]),
  nationality: z.string().min(2, "Nationality is required"),
  primaryPhone: z.string().min(10, "Valid phone number is required"),
  secondaryPhone: z.string().optional(),
  alternateEmail: z.string().email().optional().or(z.literal("")),
  fatherName: z.string().min(2, "Father's name is required"),
  motherName: z.string().min(2, "Mother's name is required"),
  dependents: z.number().min(0),
  preferredLanguage: z.string(),
  communicationMode: z.enum(["Email", "SMS", "Phone", "WhatsApp"]),
});

const addressSchema = z.object({
  line1: z.string().min(5, "Address line 1 is required"),
  line2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Valid pincode is required"),
  country: z.string().default("India"),
});

const employmentSchema = z.object({
  type: z.enum(["SALARIED", "SELF_EMPLOYED_PROFESSIONAL", "SELF_EMPLOYED_BUSINESS", "UNEMPLOYED", "STUDENT", "RETIRED", "HOMEMAKER", "FREELANCER"]),
  companyName: z.string().optional(),
  designation: z.string().optional(),
  monthlyIncome: z.number().min(0).optional(),
  annualIncome: z.number().min(0).optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;
type AddressFormData = z.infer<typeof addressSchema>;
type EmploymentFormData = z.infer<typeof employmentSchema>;

export default function EditProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");

  const profileForm = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "PREFER_NOT_TO_SAY",
      dateOfBirth: "",
      maritalStatus: "SINGLE",
      nationality: "Indian",
      primaryPhone: "",
      fatherName: "",
      motherName: "",
      dependents: 0,
      preferredLanguage: "English",
      communicationMode: "Email",
    },
  });

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      line1: "",
      city: "",
      state: "",
      pincode: "",
      country: "India",
    },
  });

  const employmentForm = useForm<EmploymentFormData>({
    resolver: zodResolver(employmentSchema),
    defaultValues: {
      type: "SALARIED",
    },
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (session?.user) {
      fetchProfileData();
    }
  }, [session, status]);

  const fetchProfileData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/profile');
      
      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        
        if (user.profile) {
          profileForm.reset({
            firstName: user.profile.firstName || "",
            lastName: user.profile.lastName || "",
            gender: user.profile.gender || "PREFER_NOT_TO_SAY",
            dateOfBirth: user.profile.dateOfBirth ? user.profile.dateOfBirth.split('T')[0] : "",
            maritalStatus: user.profile.maritalStatus || "SINGLE",
            nationality: user.profile.nationality || "Indian",
            primaryPhone: user.profile.primaryPhone || "",
            secondaryPhone: user.profile.secondaryPhone || "",
            alternateEmail: user.profile.alternateEmail || "",
            fatherName: user.profile.fatherName || "",
            motherName: user.profile.motherName || "",
            dependents: user.profile.dependents || 0,
            preferredLanguage: user.profile.preferredLanguage || "English",
            communicationMode: user.profile.communicationMode || "Email",
          });

          if (user.profile.currentAddress) {
            addressForm.reset({
              line1: user.profile.currentAddress.line1 || "",
              line2: user.profile.currentAddress.line2 || "",
              city: user.profile.currentAddress.city || "",
              state: user.profile.currentAddress.state || "",
              pincode: user.profile.currentAddress.pincode || "",
              country: user.profile.currentAddress.country || "India",
            });
          }

          if (user.profile.employment) {
            employmentForm.reset({
              type: user.profile.employment.type || "SALARIED",
              companyName: user.profile.employment.companyName || "",
              designation: user.profile.employment.designation || "",
              monthlyIncome: user.profile.employment.monthlyIncome || 0,
              annualIncome: user.profile.employment.annualIncome || 0,
            });
          }
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  const onSubmitProfile = async (data: ProfileFormData) => {
    try {
      setSaving(true);
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile: data }),
      });

      if (response.ok) {
        toast.success("Profile updated successfully!");
        setActiveSection("address");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const onSubmitAddress = async (data: AddressFormData) => {
    try {
      setSaving(true);
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: data }),
      });

      if (response.ok) {
        toast.success("Address updated successfully!");
        setActiveSection("employment");
      } else {
        throw new Error("Failed to update address");
      }
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Failed to update address");
    } finally {
      setSaving(false);
    }
  };

  const onSubmitEmployment = async (data: EmploymentFormData) => {
    try {
      setSaving(true);
      const response = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employment: data }),
      });

      if (response.ok) {
        toast.success("Employment details updated successfully!");
        router.push("/profile");
      } else {
        throw new Error("Failed to update employment");
      }
    } catch (error) {
      console.error("Error updating employment:", error);
      toast.error("Failed to update employment details");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const sections = [
    { id: "personal", name: "Personal Information", form: profileForm, onSubmit: onSubmitProfile },
    { id: "address", name: "Address Details", form: addressForm, onSubmit: onSubmitAddress },
    { id: "employment", name: "Employment Information", form: employmentForm, onSubmit: onSubmitEmployment },
  ];

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <p className="text-gray-600">Update your personal information</p>
          </div>
          
          {/* Progress Steps */}
          <div className="px-6 py-4">
            <nav aria-label="Progress">
              <ol className="flex items-center">
                {sections.map((section, index) => (
                  <li key={section.id} className={`relative ${index !== sections.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                    <div className="flex items-center">
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
                          activeSection === section.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-300 text-gray-500 hover:bg-gray-400'
                        }`}
                      >
                        <span className="text-sm font-medium">{index + 1}</span>
                      </button>
                      <span className="ml-4 min-w-0 flex flex-col">
                        <span className={`text-sm font-medium ${
                          activeSection === section.id ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {section.name}
                        </span>
                      </span>
                    </div>
                    {index !== sections.length - 1 && (
                      <div className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" />
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">{currentSection?.name}</h2>

            {/* Personal Information Form */}
            {activeSection === "personal" && (
              <form onSubmit={profileForm.handleSubmit(onSubmitProfile)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      {...profileForm.register("firstName")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {profileForm.formState.errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      {...profileForm.register("lastName")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {profileForm.formState.errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.lastName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      {...profileForm.register("gender")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                      <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      {...profileForm.register("dateOfBirth")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                    <select
                      {...profileForm.register("maritalStatus")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="SINGLE">Single</option>
                      <option value="MARRIED">Married</option>
                      <option value="DIVORCED">Divorced</option>
                      <option value="WIDOWED">Widowed</option>
                      <option value="SEPARATED">Separated</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Primary Phone</label>
                    <input
                      type="tel"
                      {...profileForm.register("primaryPhone")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {profileForm.formState.errors.primaryPhone && (
                      <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.primaryPhone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Secondary Phone (Optional)</label>
                    <input
                      type="tel"
                      {...profileForm.register("secondaryPhone")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                    <input
                      type="text"
                      {...profileForm.register("fatherName")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {profileForm.formState.errors.fatherName && (
                      <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.fatherName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                    <input
                      type="text"
                      {...profileForm.register("motherName")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {profileForm.formState.errors.motherName && (
                      <p className="mt-1 text-sm text-red-600">{profileForm.formState.errors.motherName.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => router.push("/profile")}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Next: Address"}
                  </button>
                </div>
              </form>
            )}

            {/* Address Form */}
            {activeSection === "address" && (
              <form onSubmit={addressForm.handleSubmit(onSubmitAddress)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                    <input
                      type="text"
                      {...addressForm.register("line1")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {addressForm.formState.errors.line1 && (
                      <p className="mt-1 text-sm text-red-600">{addressForm.formState.errors.line1.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Address Line 2 (Optional)</label>
                    <input
                      type="text"
                      {...addressForm.register("line2")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      {...addressForm.register("city")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {addressForm.formState.errors.city && (
                      <p className="mt-1 text-sm text-red-600">{addressForm.formState.errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      {...addressForm.register("state")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {addressForm.formState.errors.state && (
                      <p className="mt-1 text-sm text-red-600">{addressForm.formState.errors.state.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                      type="text"
                      {...addressForm.register("pincode")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {addressForm.formState.errors.pincode && (
                      <p className="mt-1 text-sm text-red-600">{addressForm.formState.errors.pincode.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      {...addressForm.register("country")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveSection("personal")}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Next: Employment"}
                  </button>
                </div>
              </form>
            )}

            {/* Employment Form */}
            {activeSection === "employment" && (
              <form onSubmit={employmentForm.handleSubmit(onSubmitEmployment)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                    <select
                      {...employmentForm.register("type")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="SALARIED">Salaried</option>
                      <option value="SELF_EMPLOYED_PROFESSIONAL">Self-Employed Professional</option>
                      <option value="SELF_EMPLOYED_BUSINESS">Self-Employed Business</option>
                      <option value="FREELANCER">Freelancer</option>
                      <option value="UNEMPLOYED">Unemployed</option>
                      <option value="STUDENT">Student</option>
                      <option value="RETIRED">Retired</option>
                      <option value="HOMEMAKER">Homemaker</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company Name (Optional)</label>
                    <input
                      type="text"
                      {...employmentForm.register("companyName")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Designation (Optional)</label>
                    <input
                      type="text"
                      {...employmentForm.register("designation")}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Monthly Income (Optional)</label>
                    <input
                      type="number"
                      {...employmentForm.register("monthlyIncome", { valueAsNumber: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Annual Income (Optional)</label>
                    <input
                      type="number"
                      {...employmentForm.register("annualIncome", { valueAsNumber: true })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveSection("address")}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Complete Profile"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { 
  MagnifyingGlassIcon,
  UserIcon,
  ShieldCheckIcon,
  EyeIcon,
  PencilIcon,
  NoSymbolIcon
} from "@heroicons/react/24/outline";

const mockUsers = [
  {
    id: "USR001",
    name: "Rajesh Kumar Singh",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    role: "USER",
    status: "ACTIVE",
    kycStatus: "VERIFIED",
    joinDate: "2024-01-15T10:30:00Z",
    totalApplications: 3,
    activeLoans: 1
  },
  {
    id: "USR002", 
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 87654 32109",
    role: "USER",
    status: "ACTIVE",
    kycStatus: "PENDING",
    joinDate: "2024-01-18T09:15:00Z",
    totalApplications: 1,
    activeLoans: 0
  },
  {
    id: "USR003",
    name: "Amit Patel",
    email: "amit.patel@email.com", 
    phone: "+91 76543 21098",
    role: "USER",
    status: "SUSPENDED",
    kycStatus: "VERIFIED",
    joinDate: "2024-01-10T14:45:00Z",
    totalApplications: 5,
    activeLoans: 2
  }
];

const statusColors = {
  ACTIVE: "text-green-600 bg-green-100",
  SUSPENDED: "text-red-600 bg-red-100",
  PENDING: "text-yellow-600 bg-yellow-100"
};

const kycColors = {
  VERIFIED: "text-green-600 bg-green-100",
  PENDING: "text-yellow-600 bg-yellow-100",
  REJECTED: "text-red-600 bg-red-100"
};

export default function AdminUsersPage() {
  const { data: session } = useSession();
  const [users] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterStatus || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage customer accounts and KYC verification</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-blue-600">Total Users</p>
              <p className="text-2xl font-bold text-blue-900">{users.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-green-600">KYC Verified</p>
              <p className="text-2xl font-bold text-green-900">{users.filter(u => u.kycStatus === 'VERIFIED').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <UserIcon className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-yellow-600">Active Users</p>
              <p className="text-2xl font-bold text-yellow-900">{users.filter(u => u.status === 'ACTIVE').length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <NoSymbolIcon className="h-8 w-8 text-red-600" />
            <div className="ml-4">
              <p className="text-sm font-medium text-red-600">Suspended</p>
              <p className="text-2xl font-bold text-red-900">{users.filter(u => u.status === 'SUSPENDED').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="SUSPENDED">Suspended</option>
            <option value="PENDING">Pending</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loan Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.id}</div>
                        <div className="text-xs text-gray-400">
                          Joined: {new Date(user.joinDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.email}</div>
                    <div className="text-sm text-gray-500">{user.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        statusColors[user.status as keyof typeof statusColors]
                      }`}>
                        {user.status}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        kycColors[user.kycStatus as keyof typeof kycColors]
                      }`}>
                        KYC: {user.kycStatus}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Applications: {user.totalApplications}
                    </div>
                    <div className="text-sm text-gray-500">
                      Active Loans: {user.activeLoans}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Edit User"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      {user.status === 'ACTIVE' ? (
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Suspend User"
                        >
                          <NoSymbolIcon className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          className="text-green-600 hover:text-green-900"
                          title="Activate User"
                        >
                          <ShieldCheckIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No users found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

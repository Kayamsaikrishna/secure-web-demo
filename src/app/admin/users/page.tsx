"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { 
  UserGroupIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  PencilIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  XMarkIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

// Mock user data
const mockUsers = [
  {
    id: "USER001",
    name: "Rajesh Kumar Singh",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    role: "USER",
    status: "ACTIVE",
    kycStatus: "VERIFIED",
    creditScore: 742,
    joinedAt: "2024-01-15T10:30:00Z",
    lastLogin: "2024-01-20T16:45:00Z",
    totalApplications: 3,
    approvedLoans: 2,
    totalDisbursed: 1250000,
    state: "Delhi",
    city: "New Delhi"
  },
  {
    id: "USER002", 
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543211",
    role: "USER",
    status: "ACTIVE",
    kycStatus: "VERIFIED",
    creditScore: 789,
    joinedAt: "2024-01-10T09:15:00Z",
    lastLogin: "2024-01-20T14:22:00Z",
    totalApplications: 2,
    approvedLoans: 1,
    totalDisbursed: 2500000,
    state: "Maharashtra",
    city: "Mumbai"
  },
  {
    id: "AGENT001",
    name: "Priya Verma",
    email: "priya.verma@finagenix.com",
    phone: "+91 9876543214",
    role: "AGENT", 
    status: "ACTIVE",
    kycStatus: "VERIFIED",
    creditScore: null,
    joinedAt: "2023-12-01T10:00:00Z",
    lastLogin: "2024-01-20T17:30:00Z",
    assignedApplications: 45,
    processedApplications: 38,
    state: "Delhi",
    city: "New Delhi"
  },
  {
    id: "ADMIN001",
    name: "Admin User",
    email: "admin@finagenix.com",
    phone: "+91 9876543215",
    role: "ADMIN",
    status: "ACTIVE", 
    kycStatus: "VERIFIED",
    joinedAt: "2023-11-01T09:00:00Z",
    lastLogin: "2024-01-20T18:00:00Z",
    state: "Delhi",
    city: "New Delhi"
  }
];

const statusColors = {
  ACTIVE: "text-green-600 bg-green-100 border-green-200",
  INACTIVE: "text-gray-600 bg-gray-100 border-gray-200",
  SUSPENDED: "text-red-600 bg-red-100 border-red-200"
};

const roleColors = {
  USER: "text-blue-600 bg-blue-100",
  AGENT: "text-purple-600 bg-purple-100", 
  ADMIN: "text-red-600 bg-red-100"
};

const kycColors = {
  VERIFIED: "text-green-600 bg-green-100",
  PENDING: "text-yellow-600 bg-yellow-100",
  REJECTED: "text-red-600 bg-red-100"
};

export default function AdminUsersPage() {
  const { data: session } = useSession();
  const [users, setUsers] = useState(mockUsers);
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (roleFilter !== "ALL") {
      filtered = filtered.filter(user => user.role === roleFilter);
    }

    if (statusFilter !== "ALL") {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    setFilteredUsers(filtered);
  }, [searchTerm, roleFilter, statusFilter, users]);

  const handleStatusUpdate = (userId: string, newStatus: string) => {
    setUsers(prev => 
      prev.map(user => 
        user.id === userId 
          ? { ...user, status: newStatus }
          : user
      )
    );
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  if ((session?.user as any)?.role !== "ADMIN") {
    return (
      <div className="text-center py-12">
        <ShieldCheckIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Denied</h1>
        <p className="text-gray-600">
          You don't have permission to access the user management system.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage users, agents, and administrators</p>
        </div>
        <div className="flex items-center space-x-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {filteredUsers.length} users
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
            <UserPlusIcon className="h-5 w-5 mr-2" />
            Add User
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.role === "USER").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ShieldCheckIcon className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">KYC Verified</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.kycStatus === "VERIFIED").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Agents</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.role === "AGENT" && u.status === "ACTIVE").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Suspended</p>
              <p className="text-2xl font-bold text-gray-900">
                {users.filter(u => u.status === "SUSPENDED").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search by name, email, or ID"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="ALL">All Roles</option>
              <option value="USER">Users</option>
              <option value="AGENT">Agents</option>
              <option value="ADMIN">Administrators</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="ALL">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="SUSPENDED">Suspended</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
              <FunnelIcon className="h-5 w-5 mr-2" />
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  KYC & Credit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Activity
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
                    <div>
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.id}</div>
                      <div className="text-xs text-gray-400">{user.city}, {user.state}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="space-y-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        roleColors[user.role as keyof typeof roleColors]
                      }`}>
                        {user.role}
                      </span>
                      <div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${
                          statusColors[user.status as keyof typeof statusColors]
                        }`}>
                          {user.status}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mb-1 ${
                        kycColors[user.kycStatus as keyof typeof kycColors]
                      }`}>
                        KYC: {user.kycStatus}
                      </span>
                      {user.creditScore && (
                        <div className="text-sm text-gray-600">Score: {user.creditScore}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.role === "USER" ? (
                      <div className="text-sm">
                        <div className="text-gray-900">{user.totalApplications} applications</div>
                        <div className="text-gray-500">{user.approvedLoans} approved</div>
                        {user.totalDisbursed && user.totalDisbursed > 0 && (
                          <div className="text-green-600 text-xs">{formatCurrency(user.totalDisbursed!)} disbursed</div>
                        )}
                      </div>
                    ) : user.role === "AGENT" ? (
                      <div className="text-sm">
                        <div className="text-gray-900">{user.assignedApplications} assigned</div>
                        <div className="text-gray-500">{user.processedApplications} processed</div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">Admin</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowDetails(true);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                        title="View Details"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      
                      <button
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Edit User"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      
                      {user.status === "ACTIVE" ? (
                        <button
                          onClick={() => handleStatusUpdate(user.id, "SUSPENDED")}
                          className="text-red-600 hover:text-red-900"
                          title="Suspend User"
                        >
                          <ExclamationTriangleIcon className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatusUpdate(user.id, "ACTIVE")}
                          className="text-green-600 hover:text-green-900"
                          title="Activate User"
                        >
                          <CheckCircleIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Details Modal */}
      {showDetails && selectedUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  User Details - {selectedUser.name}
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">User ID:</span> <span className="font-medium">{selectedUser.id}</span></div>
                    <div><span className="text-gray-600">Name:</span> <span className="font-medium">{selectedUser.name}</span></div>
                    <div><span className="text-gray-600">Email:</span> <span className="font-medium">{selectedUser.email}</span></div>
                    <div><span className="text-gray-600">Phone:</span> <span className="font-medium">{selectedUser.phone}</span></div>
                    <div><span className="text-gray-600">Location:</span> <span className="font-medium">{selectedUser.city}, {selectedUser.state}</span></div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Account Information</h4>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-gray-600">Role:</span> <span className="font-medium">{selectedUser.role}</span></div>
                    <div><span className="text-gray-600">Status:</span> <span className="font-medium">{selectedUser.status}</span></div>
                    <div><span className="text-gray-600">KYC Status:</span> <span className="font-medium">{selectedUser.kycStatus}</span></div>
                    <div><span className="text-gray-600">Joined:</span> <span className="font-medium">{new Date(selectedUser.joinedAt).toLocaleDateString()}</span></div>
                    <div><span className="text-gray-600">Last Login:</span> <span className="font-medium">{new Date(selectedUser.lastLogin).toLocaleDateString()}</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => setShowDetails(false)}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  Close
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Edit User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
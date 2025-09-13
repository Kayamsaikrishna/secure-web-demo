"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if ((session?.user as any)?.role === "ADMIN") {
    redirect("/admin");
  }

  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">
          Welcome back, {session?.user?.name || session?.user?.email}
        </p>
      </header>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Quick Actions */}
        <div className="col-span-2 rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/loans/apply"
                className="flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Apply for Loan
              </Link>
              <Link
                href="/loans/my-applications"
                className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View Applications
              </Link>
            </div>
          </div>
        </div>

        {/* Account Overview */}
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Account Overview</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Active Loans</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">0</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">KYC Status</dt>
                <dd className="mt-1">
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800">
                    Pending
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-span-2 rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            <div className="mt-6">
              <div className="text-center text-sm text-gray-500">
                No recent activity
              </div>
            </div>
          </div>
        </div>

        {/* Financial Products */}
        <div className="rounded-lg bg-white shadow">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
              Available Products
            </h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Personal Loan
                  </h3>
                  <p className="text-sm text-gray-500">Up to ₹5,00,000</p>
                </div>
                <Link
                  href="/loans/apply?type=personal"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Apply →
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    Business Loan
                  </h3>
                  <p className="text-sm text-gray-500">Up to ₹25,00,000</p>
                </div>
                <Link
                  href="/loans/apply?type=business"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Apply →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

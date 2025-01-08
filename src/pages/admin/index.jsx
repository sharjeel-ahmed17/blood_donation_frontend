

import React, { useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import { 
  Calendar,
  Filter,
  Download,
  Users,
  Droplet,
  Activity,
  Clock
} from "lucide-react";

const AdminDashboard = () => {
  // Sample data for charts
  const monthlyDonations = [
    { month: "Jan", donations: 45, requests: 52 },
    { month: "Feb", donations: 52, requests: 48 },
    { month: "Mar", donations: 49, requests: 55 },
    { month: "Apr", donations: 58, requests: 50 },
    { month: "May", donations: 63, requests: 45 },
    { month: "Jun", donations: 55, requests: 58 }
  ];

  const bloodTypeDistribution = [
    { name: "A+", value: 35 },
    { name: "B+", value: 28 },
    { name: "O+", value: 45 },
    { name: "AB+", value: 15 },
    { name: "A-", value: 12 },
    { name: "B-", value: 8 },
    { name: "O-", value: 18 },
    { name: "AB-", value: 5 }
  ];

  const COLORS = [
    "#ef4444", "#f97316", "#f59e0b", "#84cc16", 
    "#22c55e", "#06b6d4", "#6366f1", "#d946ef"
  ];

  const recentDonations = [
    { id: 1, donor: "John Smith", bloodType: "A+", location: "New York", date: "2024-01-08" },
    { id: 2, donor: "Sarah Johnson", bloodType: "O-", location: "Los Angeles", date: "2024-01-07" },
    { id: 3, donor: "Mike Chen", bloodType: "B+", location: "Chicago", date: "2024-01-07" },
    { id: 4, donor: "Emily Davis", bloodType: "AB+", location: "Houston", date: "2024-01-06" }
  ];

  const [selectedPeriod, setSelectedPeriod] = useState("last7days");
  const [selectedLocation, setSelectedLocation] = useState("all");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="border rounded-lg px-4 py-2 text-sm"
            >
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last3months">Last 3 Months</option>
              <option value="last6months">Last 6 Months</option>
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border rounded-lg px-4 py-2 text-sm"
            >
              <option value="all">All Locations</option>
              <option value="newyork">New York</option>
              <option value="losangeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
            <button className="flex items-center space-x-2 bg-white border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Donors</p>
                <h3 className="text-2xl font-bold text-gray-900">2,547</h3>
                <p className="text-sm text-green-600">+12% from last month</p>
              </div>
              <Users className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Donations</p>
                <h3 className="text-2xl font-bold text-gray-900">1,824</h3>
                <p className="text-sm text-green-600">+8% from last month</p>
              </div>
              <Droplet className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Requests</p>
                <h3 className="text-2xl font-bold text-gray-900">156</h3>
                <p className="text-sm text-red-600">+24% from last month</p>
              </div>
              <Activity className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Response Time</p>
                <h3 className="text-2xl font-bold text-gray-900">2.4 hrs</h3>
                <p className="text-sm text-green-600">-15% from last month</p>
              </div>
              <Clock className="w-12 h-12 text-red-600" />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Donations vs Requests</h3>
            <BarChart width={500} height={300} data={monthlyDonations}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="donations" fill="#ef4444" />
              <Bar dataKey="requests" fill="#6366f1" />
            </BarChart>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Blood Type Distribution</h3>
            <PieChart width={500} height={300}>
              <Pie
                data={bloodTypeDistribution}
                cx={250}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                label
              >
                {bloodTypeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>

        {/* Recent Donations Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Donations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Donor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Blood Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentDonations.map((donation) => (
                  <tr key={donation.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donation.donor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        {donation.bloodType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {donation.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {donation.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

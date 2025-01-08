import React, { useState } from 'react';
import { Search, MapPin, Phone, Mail, X, Filter, Clock, Calendar, Droplets } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const DonorListing = () => {
  // Sample donor data
  const donors = [
    {
      id: 1,
      name: "John Smith",
      bloodType: "A+",
      age: 28,
      location: "New York, NY",
      lastDonation: "2024-12-15",
      phone: "+1 (555) 123-4567",
      email: "john.smith@email.com",
      donationCount: 12,
      availability: "Available",
      medicalClearance: true,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      bloodType: "O-",
      age: 35,
      location: "Los Angeles, CA",
      lastDonation: "2024-11-30",
      phone: "+1 (555) 987-6543",
      email: "sarah.j@email.com",
      donationCount: 8,
      availability: "Available in 2 weeks",
      medicalClearance: true,
    },
    {
      id: 3,
      name: "Michael Chen",
      bloodType: "B+",
      age: 42,
      location: "Chicago, IL",
      lastDonation: "2024-12-01",
      phone: "+1 (555) 456-7890",
      email: "m.chen@email.com",
      donationCount: 15,
      availability: "Available",
      medicalClearance: true,
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState('All');

  const bloodTypes = ['All', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = selectedBloodType === 'All' || donor.bloodType === selectedBloodType;
    return matchesSearch && matchesBloodType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blood Donors Directory</h1>
          <p className="text-gray-600">Find and connect with blood donors in your area</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Blood Type Filter */}
            <div className="w-full md:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  className="w-full pl-10 pr-4 py-2 border rounded-lg appearance-none bg-white focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  value={selectedBloodType}
                  onChange={(e) => setSelectedBloodType(e.target.value)}
                >
                  {bloodTypes.map(type => (
                    <option key={type} value={type}>{type} Blood Type</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Donors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map(donor => (
            <Dialog key={donor.id}>
              <DialogTrigger className="text-left">
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{donor.name}</h3>
                      <p className="text-gray-600 text-sm flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" /> {donor.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      {donor.bloodType}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
                    </span>
                    <Badge variant={donor.availability === 'Available' ? 'success' : 'secondary'}>
                      {donor.availability}
                    </Badge>
                  </div>
                </div>
              </DialogTrigger>

              {/* Donor Details Modal */}
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="flex justify-between items-center">
                    <span>Donor Details</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      {donor.bloodType}
                    </Badge>
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{donor.name}</h3>
                      <p className="text-gray-600 flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" /> {donor.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">Age</p>
                        <p className="font-semibold">{donor.age} years</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-600">Donations</p>
                        <p className="font-semibold">{donor.donationCount} times</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Contact Information</h4>
                      <p className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" /> {donor.phone}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" /> {donor.email}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">Donation Status</h4>
                      <p className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" /> {donor.availability}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" /> Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <Droplets className="w-4 h-4 mr-2" /> Medical clearance: {donor.medicalClearance ? 'Approved' : 'Pending'}
                      </p>
                    </div>

                    <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                      <a href="/chat">
                      
                      Contact Donor
                      </a>
                    </button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Empty State */}
        {filteredDonors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No donors found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorListing;
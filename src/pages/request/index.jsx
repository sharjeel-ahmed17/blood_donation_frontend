import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Droplet,
  Clock,
  MapPin,
  Phone,
  AlertCircle,
  Calendar,
  CheckCircle,
  XCircle,
  User,
  Hospital
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Request = () => {
  const [showRequestDialog, setShowRequestDialog] = useState(false);

  // Sample data for existing requests
  const requests = [
    {
      id: 1,
      patientName: "Sarah Johnson",
      bloodType: "A+",
      unitsNeeded: 2,
      hospital: "Central Hospital",
      urgency: "High",
      status: "Active",
      requestDate: "2025-01-07",
      requiredBy: "2025-01-09",
      location: "123 Medical Center Dr.",
      contact: "+1 (555) 234-5678",
      reason: "Surgery",
      matchedDonors: 1,
    },
    {
      id: 2,
      patientName: "Michael Brown",
      bloodType: "O-",
      unitsNeeded: 3,
      hospital: "City Medical Center",
      urgency: "Medium",
      status: "Fulfilled",
      requestDate: "2025-01-05",
      requiredBy: "2025-01-08",
      location: "456 Hospital Ave.",
      contact: "+1 (555) 876-5432",
      reason: "Treatment",
      matchedDonors: 3,
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-yellow-500';
      case 'Fulfilled':
        return 'bg-green-500';
      case 'Expired':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'High':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-orange-500';
      case 'Low':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blood Requests</h1>
            <p className="text-gray-600 mt-2">Manage and track blood donation requests</p>
          </div>
          <Button 
            className="bg-red-500 hover:bg-red-600"
            onClick={() => setShowRequestDialog(true)}
          >
            New Blood Request
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Active Requests</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Matched Donors</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Units Required</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Droplet className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Partner Hospitals</p>
                  <p className="text-2xl font-bold">5</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Hospital className="h-6 w-6 text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Request Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {requests.map((request) => (
            <Card key={request.id} className="shadow-md">
              <CardHeader className="border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Droplet className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{request.patientName}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="bg-red-500">{request.bloodType}</Badge>
                        <Badge className={getUrgencyColor(request.urgency)}>{request.urgency} Urgency</Badge>
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Hospital</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Hospital className="h-4 w-4 text-gray-400" />
                        <p className="font-medium">{request.hospital}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Required By</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <p className="font-medium">{request.requiredBy}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <p className="font-medium">{request.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Units Needed</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Droplet className="h-4 w-4 text-gray-400" />
                        <p className="font-medium">{request.unitsNeeded} units</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <p className="font-medium">{request.contact}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Matched Donors</p>
                      <div className="flex items-center gap-2 mt-1">
                        <User className="h-4 w-4 text-gray-400" />
                        <p className="font-medium">{request.matchedDonors} donors</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline">View Details</Button>
                  {request.status === 'Active' && (
                    <Button className="bg-red-500 hover:bg-red-600">
                      Respond to Request
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* New Request Dialog */}
      <AlertDialog open={showRequestDialog} onOpenChange={setShowRequestDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Blood Request</AlertDialogTitle>
            <AlertDialogDescription>
              Submit a new blood donation request. Please provide all required information to help us find matching donors quickly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600">
              Submit Request
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Request;

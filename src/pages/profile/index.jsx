import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, Calendar, Phone, MapPin, Clock, Droplet, 
  Award, Activity, Bell, AlertCircle, Plus, FileText
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

const Profile = () => {
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  
  const donor = {
    name: "John Smith",
    age: 32,
    bloodType: "O+",
    lastDonation: "2024-12-15",
    totalDonations: 8,
    contact: "+1 (555) 123-4567",
    address: "123 Health Street, Medical District, NY 10001",
    availableToDonate: true,
    nextEligibleDate: "2025-03-15",
    medicalConditions: ["None"],
    medications: ["None"],
    achievements: [
      { title: "Regular Donor", description: "Donated blood 5+ times" },
      { title: "Life Saver", description: "Helped save 24 lives" },
      { title: "Quick Responder", description: "Responded to 3 emergency requests" }
    ],
    upcomingAppointments: [
      { date: "2025-02-01", type: "Blood Test", location: "Central Hospital" },
      { date: "2025-03-15", type: "Blood Donation", location: "Blood Bank" }
    ],
    recentActivity: [
      { date: "2024-12-15", action: "Completed blood donation", location: "City Blood Bank" },
      { date: "2024-11-01", action: "Health check-up passed", location: "Central Hospital" },
      { date: "2024-10-15", action: "Donated platelets", location: "Medical Center" }
    ],
    healthMetrics: {
      hemoglobin: "14.5 g/dL",
      bloodPressure: "120/80 mmHg",
      weight: "75 kg",
      lastCheckup: "2024-12-01"
    }
  };

  const eligibilityStatus = new Date(donor.nextEligibleDate) <= new Date();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Donor Profile</h1>
          <div className="flex gap-4">
            <Button 
              className="bg-red-500 hover:bg-red-600"
              onClick={() => setShowScheduleDialog(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Schedule Donation
            </Button>
            <Badge 
              className={eligibilityStatus ? "bg-green-500" : "bg-yellow-500"}
            >
              {eligibilityStatus ? "Eligible to Donate" : "Next Eligible: " + donor.nextEligibleDate}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Profile Card */}
          <Card className="shadow-lg lg:col-span-2">
            <CardHeader className="bg-red-50 border-b">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
                  <Droplet className="h-10 w-10 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{donor.name}</h2>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge className="bg-red-500">{donor.bloodType}</Badge>
                    <span className="text-gray-600">{donor.age} years old</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Donation History */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Heart className="text-red-500" />
                    Donation History
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Total Donations</span>
                      <span className="font-bold text-gray-900">{donor.totalDonations}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Last Donation</span>
                      <span className="font-bold text-gray-900">{donor.lastDonation}</span>
                    </div>
                  </div>
                </div>

                {/* Health Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Activity className="text-red-500" />
                    Health Metrics
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Hemoglobin</span>
                      <span className="font-bold text-gray-900">{donor.healthMetrics.hemoglobin}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Blood Pressure</span>
                      <span className="font-bold text-gray-900">{donor.healthMetrics.bloodPressure}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Weight</span>
                      <span className="font-bold text-gray-900">{donor.healthMetrics.weight}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="text-gray-400" />
                      <span>{donor.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-gray-400" />
                      <span>{donor.address}</span>
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <AlertCircle className="text-red-500" />
                    Medical Information
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-600">Medical Conditions:</span>
                      <ul className="mt-1 list-disc list-inside">
                        {donor.medicalConditions.map((condition, index) => (
                          <li key={index} className="text-gray-900">{condition}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-gray-600">Current Medications:</span>
                      <ul className="mt-1 list-disc list-inside">
                        {donor.medications.map((medication, index) => (
                          <li key={index} className="text-gray-900">{medication}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sidebar Cards */}
          <div className="space-y-6">
            {/* Achievements Card */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Award className="text-red-500" />
                  Achievements
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge className="bg-yellow-500 mt-1">
                        <Award className="h-4 w-4" />
                      </Badge>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="text-red-500" />
                  Upcoming Appointments
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donor.upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge className="bg-blue-500 mt-1">
                        <Calendar className="h-4 w-4" />
                      </Badge>
                      <div>
                        <h4 className="font-semibold">{appointment.type}</h4>
                        <p className="text-sm text-gray-600">{appointment.date}</p>
                        <p className="text-sm text-gray-600">{appointment.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Bell className="text-red-500" />
                  Recent Activity
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {donor.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge className="bg-green-500 mt-1">
                        <FileText className="h-4 w-4" />
                      </Badge>
                      <div>
                        <h4 className="font-semibold">{activity.action}</h4>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                        <p className="text-sm text-gray-600">{activity.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Schedule Donation Dialog */}
      <AlertDialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Schedule a Blood Donation</AlertDialogTitle>
            <AlertDialogDescription>
              Would you like to schedule a blood donation appointment? Our team will contact you to confirm the details.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 hover:bg-red-600">
              Request Appointment
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Profile;











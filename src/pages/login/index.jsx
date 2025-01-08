import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [formData, setFormData] = useState({
    donorId: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.donorId || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    // Handle login logic here
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-red-600"> Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
              <Input
                type="text"
                value={formData.donorId}
                onChange={(e) => setFormData({...formData, donorId: e.target.value})}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your Email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
            >
              Login
            </button>

            <div className="text-center text-sm">
              <a href="#" className="text-red-600 hover:underline">Forgot Password?</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-red-600 hover:underline">New Donor? Register</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;


// npx shadcn@latest alert card
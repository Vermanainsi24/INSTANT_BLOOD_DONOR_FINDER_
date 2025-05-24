import React from 'react';
import contactImage from '../assets/contact.jpg';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${contactImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header */}
      <header className="bg-red-600 bg-opacity-90 py-4 text-white text-center text-3xl font-extrabold shadow-md tracking-wide">
        CONTACT US
      </header>

      {/* Main Section */}
      <main className="flex-grow flex flex-col md:flex-row items-stretch justify-center px-6 py-10 gap-8 bg-black/50">
        {/* Contact Information Card */}
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-xl flex flex-col justify-center">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-red-700">Contact Information</h2>
            <p>If you need assistance, please contact our help desk:</p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li><strong>Email:</strong> instantblooddonorfinder@gmail.com</li>
              <li><strong>Phone:</strong> 123456789</li>
              <li><strong>Address:</strong> Knowledge Park 3, Greater Noida</li>
              <li><strong>Hours:</strong> 24×7</li>
            </ul>
          </CardContent>
        </Card>

        {/* Form Card */}
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-xl flex flex-col justify-center">
          <CardContent className="p-6 space-y-5">
            <h2 className="text-2xl font-bold text-red-700">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="font-medium text-sm">Name</label>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm">Email</label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm">Message</label>
                <Textarea rows="4" placeholder="Type your message..." />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

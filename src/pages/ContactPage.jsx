import React from 'react';
import contactImage from '../assets/contact.jpg';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div
    //   className="min-h-screen flex flex-col"
    //   style={{
    //     backgroundImage: `url(${contactImage})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundAttachment: 'fixed',
    //   }}
    >
      {/* Header */}
      <header className="bg-red-600 bg-opacity-90 py-4 text-white text-center text-2xl font-bold shadow-md">
        CONTACT US
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-stretch justify-center px-6 py-12 gap-10">
        {/* Contact Info */}
        <Card className="w-full max-w-md bg-white bg-opacity-10 dark:bg-red-900/10 backdrop-blur-md border border-red-300/30 shadow-xl flex flex-col justify-center">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-red-700 border-b border-red-300 pb-2">
              Contact Information
            </h2>

            <div className="flex items-start gap-4">
              <Mail className="text-red-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Email</p>
                <p className="text-sm text-gray-600">instantblooddonorfinder@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Phone</p>
                <p className="text-sm text-gray-600">+91 12345 67890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Address</p>
                <p className="text-sm text-gray-600">Knowledge Park III, Greater Noida, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-red-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-800">Hours</p>
                <p className="text-sm text-gray-600">Available 24×7</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="w-full max-w-md bg-white shadow-xl flex flex-col justify-center">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-bold text-red-700 border-b border-red-300 pb-2">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea rows="4" placeholder="Type your message..." />
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
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

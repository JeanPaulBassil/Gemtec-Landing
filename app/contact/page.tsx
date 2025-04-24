'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Building, ChevronRight, Send, User, AtSign, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { ContactService } from "@/services/contact-service"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Log API URL for debugging
      console.log('API URL:', process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api');
      
      // Send data to the backend API using the contact service
      const result = await ContactService.submitContactForm(formData);
      console.log('Submission successful:', result);
      
      // Show success message
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
        variant: "default"
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      
      // Get more detailed error message if available
      let errorMessage = 'Failed to send your message. Please try again later.';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 border border-blue-800 rounded-full text-blue-100">
              <span className="font-medium text-sm tracking-wide">Let's Connect</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl/none text-white drop-shadow-sm">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              We're here to help with all your questions and inquiries
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-blue-950">Reach Out to Us</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mt-3 rounded-full"></div>
                <p className="mt-4 text-muted-foreground text-lg">
                  We're eager to hear from you. Fill out the form and our team will respond promptly.
                </p>
              </div>
              
              <form className="space-y-8 p-8 bg-white rounded-2xl shadow-xl border border-gray-100" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 relative">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <div className="relative">
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John" 
                        className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <div className="relative">
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe" 
                        className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <div className="relative">
                    <Input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <AtSign className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <div className="relative">
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..." 
                      className="min-h-[180px] pt-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md transition-all duration-300 hover:shadow-lg group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="space-y-10 lg:mt-12">
              <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Head Office</h3>
                  </div>
                  <p className="mt-1 text-blue-100 text-sm ml-[52px]">Lebanon</p>
                </div>
                
                <CardContent className="space-y-6 mt-6 px-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-blue-950">Tayouneh Office</p>
                      <p className="text-sm text-muted-foreground">Hamoudeh Building, GF, Tayouneh - Beirut</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-blue-950">Mar Mkhayel Office</p>
                      <p className="text-sm text-muted-foreground">Mar Mkhayel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-blue-950">Phone</p>
                      <p className="text-sm text-muted-foreground">+9611 380 377 / +9611 275 277</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-blue-950">Email</p>
                      <p className="text-sm text-muted-foreground">info@gemtec-int.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-blue-950">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 8:00 AM - 1:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
                
                <div className="px-8 pb-8 mt-3">
                  <Link 
                    href="/locations" 
                    className="group flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-colors duration-300"
                  >
                    View all locations
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[380px] relative z-10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.966193134545!2d35.49994047619233!3d33.86060757319092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f174d1ddf5ca5%3A0xa27feca7b42b1a40!2sTayouneh%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1719592926633!5m2!1sen!2sus"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gemtec Head Office Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


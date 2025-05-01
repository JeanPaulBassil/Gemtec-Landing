'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { QuoteSelect } from "@/components/quote-select"
import { Tooltip } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    projectType: '',
    projectDetails: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setErrorMessage('');

    // Enhanced validation
    if (!formData.firstName.trim()) {
      setErrorMessage('First name is required');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!formData.lastName.trim()) {
      setErrorMessage('Last name is required');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (!formData.projectDetails.trim()) {
      setErrorMessage('Project details are required');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (formData.projectDetails.trim().length < 50) {
      setErrorMessage('Please provide more detailed project information (minimum 50 characters)');
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        companyName: formData.company || 'Not specified',
        phoneNumber: formData.phone || 'Not specified',
        productCategory: formData.productCategory || 'Not specified',
        productType: formData.projectType || 'Not specified',
        description: formData.projectDetails,
        timeline: formData.timeline || 'Not specified'
      };

      console.log('Sending quote request:', apiData);

      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Failed to submit quote request');
      }

      const responseData = await response.json();
      console.log('Success response:', responseData);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        productCategory: '',
        projectType: '',
        projectDetails: '',
        timeline: ''
      });
      
      setSubmissionStatus('success');
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmissionStatus('error');
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'There was an error submitting your quote request. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Product category options
  const productCategoryOptions = [
    { value: "accessories", label: "Accessories" },
    { value: "grilles", label: "Air Outlet Grilles & Dampers" },
    { value: "curtains", label: "Air Curtains" },
    { value: "fans", label: "Fans" },
    { value: "ducts", label: "Flexible Ducts" },
    { value: "insulation", label: "Insulation" },
    { value: "pir", label: "PIR Panels" },
    { value: "attenuators", label: "Sound Attenuators" }
  ];

  // Project type options
  const projectTypeOptions = [
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" },
    { value: "residential", label: "Residential" },
    { value: "other", label: "Other" }
  ];

  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Request a Quote
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Tell us about your project and we'll provide you with a customized quote
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl">
          {submissionStatus === 'success' ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-600">Quote Request Submitted!</CardTitle>
                <CardDescription className="text-center">
                  Thank you for your quote request. We will get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button 
                  onClick={() => setSubmissionStatus('idle')}
                  className="mt-4"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us understand your requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {submissionStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName"
                        placeholder="First name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName"
                        placeholder="Last name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company"
                      placeholder="Company name" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="Phone number" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="productCategory">Product Category</Label>
                    <QuoteSelect
                      placeholder="Product category"
                      value={formData.productCategory}
                      onValueChange={(value) => handleSelectChange('productCategory', value)}
                      options={productCategoryOptions}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <QuoteSelect
                      placeholder="Project type"
                      value={formData.projectType}
                      onValueChange={(value) => handleSelectChange('projectType', value)}
                      options={projectTypeOptions}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectDetails">Project Description *</Label>
                    <Textarea 
                      id="projectDetails"
                      placeholder="Please provide detailed information about your project requirements, specifications, and any other relevant details (minimum 50 characters)" 
                      className="min-h-[150px]"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-sm text-gray-500">Minimum 50 characters required</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Completion Date</Label>
                    <Input 
                      id="timeline"
                      type="date" 
                      placeholder="Desired completion date"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    />
                  </div>
                  <Button 
                    className="w-full btn-secondary font-bold text-lg py-6" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full mr-3"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : 'Submit Quote Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </>
  )
}


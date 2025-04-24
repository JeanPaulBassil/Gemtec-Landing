'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { QuoteSelect } from "@/components/quote-select"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setErrorMessage('');

    try {
      // Format the data for the backend API
      const apiData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        productInterest: [formData.productCategory],
        projectDetails: formData.projectDetails,
        timeline: formData.timeline,
        status: 'new'
      };

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
      setErrorMessage('There was an error submitting your quote request. Please try again.');
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
                      <Input 
                        placeholder="First name" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input 
                        placeholder="Last name" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Company name" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Phone number" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <QuoteSelect
                      placeholder="Product category"
                      value={formData.productCategory}
                      onValueChange={(value) => handleSelectChange('productCategory', value)}
                      options={productCategoryOptions}
                    />
                  </div>
                  <div className="space-y-2">
                    <QuoteSelect
                      placeholder="Project type"
                      value={formData.projectType}
                      onValueChange={(value) => handleSelectChange('projectType', value)}
                      options={projectTypeOptions}
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea 
                      placeholder="Project description and requirements" 
                      className="min-h-[150px]"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="date" 
                      placeholder="Desired completion date"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    />
                  </div>
                  <Button 
                    className="w-full btn-secondary" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
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


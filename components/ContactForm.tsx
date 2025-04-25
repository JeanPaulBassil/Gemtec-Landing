"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useContact } from "@/hooks/use-contact"
import type { ContactFormData } from "@/services/contact-service"

export function ContactForm() {
  const { formStatus, formError, submitContactForm, resetForm } = useContact({
    showToast: true,
    onSuccess: () => {
      setFormData(initialFormState)
      window.scrollTo(0, 0)
    }
  })
  
  const initialFormState: ContactFormData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  }
  
  const [formData, setFormData] = useState<ContactFormData>(initialFormState)
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submitContactForm.mutate(formData)
  }
  
  // Show success message if form was submitted successfully
  if (formStatus === 'success') {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600">Message Sent!</CardTitle>
          <CardDescription>
            Thank you for contacting GEMTEC. We have received your message and will get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">We'll be in touch with you via email as soon as possible.</p>
          <Button onClick={() => resetForm()}>
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>
          Have a question or want to learn more about our services? Fill out the form below and we'll get back to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formError && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{formError}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input 
                id="firstName" 
                value={formData.firstName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input 
                id="lastName" 
                value={formData.lastName} 
                onChange={handleInputChange} 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input 
              id="subject" 
              value={formData.subject} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={formStatus === 'submitting'}>
            {formStatus === 'submitting' ? (
              <>
                <LoadingSpinner className="mr-2" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 
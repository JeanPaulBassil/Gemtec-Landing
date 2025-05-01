"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import type React from "react"
import { ApplicationService, ApplicationFormData } from "@/services/application-service"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Client component that uses useSearchParams
function ApplicationForm() {
  const searchParams = useSearchParams()
  const positionParam = searchParams.get("position")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [positions, setPositions] = useState<{ id: string; title: string; department: string }[]>([])
  const [selectedPosition, setSelectedPosition] = useState<string>(positionParam || "")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    currentLocation: "",
    yearsOfExperience: "",
    highestEducation: "",
    coverLetter: "",
    positionId: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()
  const [uploadProgress, setUploadProgress] = useState(0)

  // Load positions when component mounts
  useEffect(() => {
    const loadPositions = async () => {
      try {
        const positions = await ApplicationService.getPositions()
        setPositions(positions)
        
        // If we have a position from URL, find and select it
        if (positionParam) {
          const position = positions.find(
            pos => pos.id === positionParam || pos.title.toLowerCase().replace(/\s+/g, '-') === positionParam
          )
          if (position) {
            setSelectedPosition(position.id)
            setFormData(prev => ({ ...prev, positionId: position.id }))
          }
        }
      } catch (error) {
        console.error("Error loading positions:", error)
      }
    }
    
    loadPositions()
  }, [positionParam])

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }
  
  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive"
        })
        return
      }
      
      setResumeFile(file)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setUploadProgress(0)
    
    try {
      // Show upload progress
      setUploadProgress(10)

      // Submit application
      await ApplicationService.submitApplication(formData)
      
      // Upload complete
      setUploadProgress(100)
      
      // Show success message
      setSuccess(true)
      window.scrollTo(0, 0)
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        currentLocation: "",
        yearsOfExperience: "",
        highestEducation: "",
        coverLetter: "",
        positionId: "",
      })
      setResumeFile(null)
      setUploadProgress(0)
      
      // Show toast notification
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll be in touch soon!",
      })
    } catch (err: any) {
      console.error("Error submitting application:", err)
      let errorMessage = "An error occurred while submitting your application. Please try again."
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message
      } else if (err.message) {
        errorMessage = err.message
      }
      
      setError(errorMessage)
      setUploadProgress(0)
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Show success message if application was submitted
  if (success) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-green-600">Application Submitted!</CardTitle>
          <CardDescription>
            Thank you for applying to GEMTEC. We have received your application and will review it shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">We'll be in touch with you via email regarding the next steps in the hiring process.</p>
          <Button onClick={() => {
            setSuccess(false)
            window.location.href = "/careers"
          }}>
            Return to Careers
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Form</CardTitle>
        <CardDescription>
          Please fill out all required fields. We'll review your application and get back to you soon.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="positionId">Position</Label>
            <Select 
              value={formData.positionId} 
              onValueChange={(value) => handleSelectChange("positionId", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map(position => (
                  <SelectItem key={position.id} value={position.id}>
                    {position.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input 
              id="phoneNumber" 
              type="tel" 
              value={formData.phoneNumber} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentLocation">Current location</Label>
            <Input 
              id="currentLocation" 
              value={formData.currentLocation} 
              onChange={handleInputChange} 
              required 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsOfExperience">Years of experience</Label>
            <Select 
              value={formData.yearsOfExperience} 
              onValueChange={(value) => handleSelectChange("yearsOfExperience", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0-2 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="highestEducation">Highest education level</Label>
            <Select 
              value={formData.highestEducation} 
              onValueChange={(value) => handleSelectChange("highestEducation", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select education" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high-school">High School</SelectItem>
                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                <SelectItem value="masters">Master's Degree</SelectItem>
                <SelectItem value="phd">Ph.D.</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="resume">Resume (Optional)</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => document.getElementById('resume')?.click()}
              >
                {resumeFile ? 'Change File' : 'Upload Resume'}
              </Button>
              {resumeFile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setResumeFile(null)}
                >
                  Remove
                </Button>
              )}
            </div>
            <Input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleFileChange}
            />
            {resumeFile && (
              <p className="text-sm text-muted-foreground">
                Selected file: {resumeFile.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover letter</Label>
            <Textarea
              id="coverLetter"
              placeholder="Tell us why you're interested in this position and what makes you a great candidate"
              className="min-h-[150px]"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button type="submit" className="w-full btn-secondary" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoadingSpinner className="mr-2" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// Loading fallback for Suspense
function FormSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Form</CardTitle>
        <CardDescription>Loading application form...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ApplyPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Apply Now
            </h1>
            <p className="mt-6 text-lg text-gray-300">Take the next step in your career with GEMTEC</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl">
          <Suspense fallback={<FormSkeleton />}>
            <ApplicationForm />
          </Suspense>
        </div>
      </section>
    </>
  );
} 
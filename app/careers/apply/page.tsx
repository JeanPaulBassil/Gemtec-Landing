"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import type React from "react" // Added import for React

// Client component that uses useSearchParams
function ApplicationForm() {
  const searchParams = useSearchParams()
  const position = searchParams.get("position")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle form submission here
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Select defaultValue={position || undefined}>
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hvac-design-engineer">HVAC Design Engineer</SelectItem>
                <SelectItem value="production-supervisor">Production Supervisor</SelectItem>
                <SelectItem value="sales-engineer">Sales Engineer</SelectItem>
                <SelectItem value="quality-control-specialist">Quality Control Specialist</SelectItem>
                <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Current location</Label>
            <Input id="location" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Years of experience</Label>
            <Select>
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
            <Label htmlFor="education">Highest education level</Label>
            <Select>
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
            <Label htmlFor="resume">Resume/CV</Label>
            <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
            <p className="text-sm text-muted-foreground">
              Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover letter</Label>
            <Textarea
              id="coverLetter"
              placeholder="Tell us why you're interested in this position and what makes you a great candidate"
              className="min-h-[150px]"
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
  )
}


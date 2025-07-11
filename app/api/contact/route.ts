import { NextResponse } from 'next/server';
import { contactApi } from '@/lib/api';

// Validation functions
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateLength = (str: string, min: number, max: number): boolean => {
  return str.length >= min && str.length <= max;
};

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    
    // Extract fields
    const { firstName, lastName, email, subject, message } = body;
    
    // Validate required fields
    const validationErrors = [];
    
    if (!firstName) validationErrors.push('First name is required');
    else if (!validateLength(firstName, 2, 50)) validationErrors.push('First name must be between 2-50 characters');
    
    if (!lastName) validationErrors.push('Last name is required');
    else if (!validateLength(lastName, 2, 50)) validationErrors.push('Last name must be between 2-50 characters');
    
    if (!email) validationErrors.push('Email is required');
    else if (!validateEmail(email)) validationErrors.push('Invalid email format');
    
    if (!subject) validationErrors.push('Subject is required');
    else if (!validateLength(subject, 5, 100)) validationErrors.push('Subject must be between 5-100 characters');
    
    if (!message) validationErrors.push('Message is required');
    else if (!validateLength(message, 10, 1000)) validationErrors.push('Message must be between 10-1000 characters');
    
    // Return validation errors if any
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          validationErrors 
        },
        { status: 400 }
      );
    }

    // Log the submission for debugging
    console.log('Contact form submission received:', body);
    
    try {
      // Submit contact message using Supabase
      const contactData = {
        name: `${firstName} ${lastName}`,
        email,
        subject,
        message,
      };
      
      console.log('Submitting contact message to Supabase:', contactData);
      
      const result = await contactApi.submitContactMessage(contactData);
      
      console.log('Supabase response:', result);
      
      // Return success response
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact form submitted successfully', 
          data: result 
        },
        { status: 200 }
      );
    } catch (supabaseError) {
      console.error('Supabase error:', supabaseError);
      
      // Return a proper error message
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to submit your message. Please try again.',
          error: supabaseError instanceof Error ? supabaseError.message : 'Unknown error'
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to process your request',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 
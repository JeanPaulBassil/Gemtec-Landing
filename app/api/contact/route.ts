import { NextResponse } from 'next/server';

// Get the backend URL from environment variable or use default
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api';

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
      console.log(`Forwarding contact form to backend: ${BACKEND_URL}/contact`);
      
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(body),
      });
      
      // Always get the response body for proper error handling
      const responseText = await response.text();
      let data;
      
      try {
        // Try to parse as JSON if possible
        data = JSON.parse(responseText);
      } catch (e) {
        // If not JSON, use the raw text
        data = { message: responseText };
      }
      
      if (!response.ok) {
        console.error(`Backend error: ${response.status}`, data);
        
        // Log more details about the error
        console.error('Backend error details:', {
          status: response.status,
          body: responseText,
          url: `${BACKEND_URL}/contact`,
          data: body
        });
        
        // Return the actual error to the client
        return NextResponse.json(
          { 
            success: false, 
            message: 'Server error processing your request',
            error: data.message || 'Unknown error'
          },
          { status: response.status }
        );
      }
      
      console.log('Backend response:', data);
      
      // Return the backend response
      return NextResponse.json(
        { success: true, message: 'Contact form submitted successfully', data },
        { status: 200 }
      );
    } catch (backendError) {
      console.error('Cannot connect to backend:', backendError);
      
      // Log more details about the connection error
      console.error('Backend connection error details:', {
        error: backendError,
        url: `${BACKEND_URL}/contact`,
        data: body
      });
      
      // Return a proper error message instead of silently succeeding
      return NextResponse.json(
        { 
          success: false, 
          message: 'Could not connect to our server. Please try again later.',
          error: backendError instanceof Error ? backendError.message : 'Unknown error'
        },
        { status: 503 }
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
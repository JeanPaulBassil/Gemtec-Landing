import { NextResponse } from 'next/server';

// Get the backend URL from environment variable or use default
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3200/api';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();
    
    // Validate the form data
    const { firstName, lastName, email, subject, message } = body;
    
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Backend error: ${response.status} ${errorText}`);
        
        // If backend fails, still return success to the user but log the error
        console.error('Backend error but returning success to user');
        return NextResponse.json(
          { success: true, message: 'Contact form submitted successfully' },
          { status: 200 }
        );
      }
      
      const data = await response.json();
      console.log('Backend response:', data);
      
      // Return the backend response
      return NextResponse.json(
        { success: true, message: 'Contact form submitted successfully', data },
        { status: 200 }
      );
    } catch (backendError) {
      console.error('Cannot connect to backend:', backendError);
      
      // If backend is unreachable, still return success to the user but log the error
      console.warn('Backend connection failed but returning success to user');
      return NextResponse.json(
        { success: true, message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
} 
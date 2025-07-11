import { NextResponse } from 'next/server';
import { quoteApi } from '@/lib/api';

// Validation functions
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateLength = (str: string, min: number, max: number): boolean => {
  return str.length >= min && str.length <= max;
};

export async function POST(request: Request) {
  console.log('Quote API route called');
  
  try {
    // Log request headers for debugging
    const headers = Object.fromEntries(request.headers.entries());
    console.log('Request headers:', headers);
    
    // Get the request body
    const quoteData = await request.json();
    console.log('Received quote data:', JSON.stringify(quoteData, null, 2));
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'companyName', 'phoneNumber', 'productCategory', 'productType', 'description'];
    const missingFields = requiredFields.filter(field => !quoteData[field]);
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Missing required fields', 
          missingFields 
        },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    // Validate email format
    if (!validateEmail(quoteData.email)) {
      console.log('Invalid email format:', quoteData.email);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    // Format the data for Supabase
    const formattedData = {
      name: `${quoteData.firstName} ${quoteData.lastName}`,
      email: quoteData.email,
      company: quoteData.companyName,
      phone: quoteData.phoneNumber,
      project_description: `Product Category: ${quoteData.productCategory}\nProduct Type: ${quoteData.productType}\n\nDescription: ${quoteData.description}`,
      budget_range: null,
      timeline: quoteData.timeline || null,
    };
    
    console.log('Formatted data for Supabase:', JSON.stringify(formattedData, null, 2));
    
    // Submit to Supabase
    try {
      const result = await quoteApi.submitQuoteRequest(formattedData);
      
      console.log('Supabase response:', JSON.stringify(result, null, 2));
      
      return NextResponse.json({ 
        success: true, 
        data: result,
        message: 'Quote submitted successfully' 
      }, { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });
    } catch (supabaseError: unknown) {
      console.error('Supabase error:', supabaseError instanceof Error ? supabaseError.message : String(supabaseError));
      
      return NextResponse.json({ 
        success: false,
        error: 'Failed to submit quote request',
        message: supabaseError instanceof Error ? supabaseError.message : 'Unknown error occurred'
      }, { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error: unknown) {
    console.error('Error processing quote request:', error);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to process quote request',
        message: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 
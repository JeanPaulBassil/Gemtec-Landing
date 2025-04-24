import { NextResponse } from 'next/server';
import axios from 'axios';

// Your backend API URL (should match what the CMS is using)
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000/api';

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: Request) {
  console.log('Quote API route called');
  console.log('API URL being used:', API_URL);
  
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
      console.error('Missing required fields:', missingFields);
      return NextResponse.json(
        { 
          success: false, 
          error: `Missing required fields: ${missingFields.join(', ')}` 
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
    
    // Format data if needed
    const formattedData = {
      ...quoteData,
      // Add any additional formatting needed
    };
    
    // Make a direct request to the same backend API that the CMS uses
    console.log('Sending request to:', `${API_URL}/quotes`);
    
    // Debug with full request details
    console.log('Full request config:', {
      url: `${API_URL}/quotes`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: formattedData
    });
    
    const response = await axios.post(`${API_URL}/quotes`, formattedData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 second timeout
    });
    
    console.log('Backend API response status:', response.status);
    console.log('Backend API response data:', JSON.stringify(response.data, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      data: response.data,
      message: 'Quote submitted successfully' 
    }, { 
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error submitting quote:', error);
    
    // Extract detailed error message if available
    let errorMessage = 'An error occurred while submitting the quote request';
    let statusCode = 500;
    
    if (axios.isAxiosError(error)) {
      console.error('Axios error config:', error.config);
      console.error('Axios error details:', JSON.stringify(error.response?.data, null, 2));
      console.error('Error status:', error.response?.status);
      
      statusCode = error.response?.status || 500;
      
      // Use backend error message if available
      if (error.response?.data?.message) {
        if (Array.isArray(error.response.data.message)) {
          errorMessage = error.response.data.message.join(', ');
        } else {
          errorMessage = error.response.data.message;
        }
      }
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      }, 
      { 
        status: statusCode,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );
  }
} 
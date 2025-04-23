import { NextResponse } from 'next/server';
import axios from 'axios';

// Your backend API URL (should match what the CMS is using)
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000/api';

export async function POST(request: Request) {
  try {
    const quoteData = await request.json();
    
    console.log('Received quote data:', quoteData);
    
    // Make a direct request to the same backend API that the CMS uses
    const response = await axios.post(`${API_URL}/quotes`, quoteData);
    
    console.log('Backend API response:', response.data);
    
    return NextResponse.json({ success: true, data: response.data }, { status: 200 });
  } catch (error) {
    console.error('Error submitting quote:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while submitting the quote request' 
      }, 
      { status: 500 }
    );
  }
} 
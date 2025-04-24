// Test the API route directly
import axios from 'axios';

async function testQuoteSubmission() {
  try {
    console.log('Starting test submission');
    const testData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      companyName: 'Test Company',
      phoneNumber: '1234567890',
      productCategory: 'accessories',
      productType: 'commercial',
      description: 'This is a test submission'
    };

    const response = await axios.post('http://localhost:3000/api/quotes', testData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error in test submission:', error);
    throw error;
  }
}

export { testQuoteSubmission }; 
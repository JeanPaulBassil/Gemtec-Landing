// Run this script with: node scripts/test-quote-api.js
const axios = require('axios');

async function testQuoteApi() {
  console.log('Testing quote API...');
  
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
  
  try {
    console.log('Sending POST request to: http://localhost:3000/api/quotes');
    console.log('With data:', JSON.stringify(testData, null, 2));
    
    const response = await axios.post('http://localhost:3000/api/quotes', testData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('API Response Status:', response.status);
    console.log('API Response Data:', JSON.stringify(response.data, null, 2));
    console.log('Test completed successfully!');
  } catch (error) {
    console.error('Error testing quote API:', error.message);
    
    if (error.response) {
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', JSON.stringify(error.response.data, null, 2));
    }
    
    if (error.request) {
      console.error('Request was made but no response received');
    }
    
    console.error('Error Details:', error.stack);
  }
}

testQuoteApi(); 
# Fixing CORS Issues

## Understanding CORS

Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the web page.

## Current Issue

The Gemtec-Landing frontend application is experiencing CORS errors when trying to fetch job offerings data from the backend API. This happens because:

1. The frontend is served from one origin (e.g., `http://localhost:3000`)
2. The backend API is on a different origin (e.g., `http://localhost:3001`)
3. The browser enforces the Same-Origin Policy, blocking these cross-origin requests unless the server explicitly allows them

## Backend Configuration

To fix CORS issues, you need to configure your backend to allow requests from your frontend domain. Here's how to do it for different backend technologies:

### For Express.js Backend

1. Install the CORS middleware:
   ```bash
   npm install cors
   # or
   yarn add cors
   ```

2. Add the CORS middleware to your main app file (e.g., `app.js` or `index.js`):
   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();

   // Enable CORS for all routes
   app.use(cors({
     origin: ['http://localhost:3000', 'https://yourdomain.com'],
     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
     allowedHeaders: ['Content-Type', 'Authorization'],
     credentials: true
   }));

   // Your routes and other middleware...
   ```

### For NestJS Backend

1. Install the CORS package if not already included:
   ```bash
   npm install cors
   # or
   yarn add cors
   ```

2. Enable CORS in your `main.ts` file:
   ```typescript
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module';

   async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     
     // Enable CORS
     app.enableCors({
       origin: ['http://localhost:3000', 'https://yourdomain.com'],
       methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
       allowedHeaders: ['Content-Type', 'Authorization'],
       credentials: true
     });
     
     await app.listen(3001);
   }
   bootstrap();
   ```

## Important Notes

1. Replace `'http://localhost:3000'` with the actual URL of your frontend application.
2. In production, you should be more specific with your CORS configuration, limiting it to only the domains that need access.
3. The `credentials: true` option is needed if your API uses cookies or HTTP authentication.

## Environment Variables

To make your CORS configuration flexible across environments, consider using environment variables:

```typescript
app.enableCors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
});
```

Then set the `ALLOWED_ORIGINS` environment variable accordingly in different environments.

## Testing CORS Configuration

After making these changes:

1. Restart your backend server
2. Check the response headers in your browser's developer tools to ensure the `Access-Control-Allow-Origin` header is properly set
3. Verify that your API requests from the frontend are now working without CORS errors 
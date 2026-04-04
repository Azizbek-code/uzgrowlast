// EmailJS Configuration
// To set up EmailJS, follow these steps:

// 1. Go to https://www.emailjs.com/
// 2. Sign up for a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual credentials

export const emailConfig = {
  // Replace with your EmailJS service ID
  serviceId: 'YOUR_SERVICE_ID',
  
  // Replace with your EmailJS template ID
  templateId: 'YOUR_TEMPLATE_ID',
  
  // Replace with your EmailJS public key
  publicKey: 'YOUR_PUBLIC_KEY',
  
  // Email that will receive the form submissions
  recipientEmail: 'uzgrow@gmail.com'
}

// Example Email Template:
// Subject: New Contact Form Submission from {{from_name}}
// Content:
// Name: {{from_name}}
// Phone: {{from_phone}}
// Email: {{from_email}}
// Service: {{service_type}}
// Message: {{message}}

export default emailConfig;

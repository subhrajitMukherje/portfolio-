import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, name, email, message } = req.body;

  try {
    // For now, we'll use a simple approach that opens the user's email client
    // In a production environment, you would integrate with a service like:
    // - EmailJS
    // - SendGrid
    // - Nodemailer with SMTP
    // - Resend
    // - AWS SES
    
    // Since this is a static site, we'll return an error to trigger the mailto fallback
    return res.status(500).json({ 
      message: 'Email service not configured. Using mailto fallback.' 
    });
    
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ 
      message: 'Failed to send email. Using mailto fallback.' 
    });
  }
}
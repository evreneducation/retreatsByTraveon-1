// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      );
    }

    // Create transporter with better configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Add additional options for better reliability
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter connection
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || 'newsletter@traveon.in',
      to: 'info@traveon.in',
      replyTo: email, // So you can reply directly to the subscriber
      subject: 'New Newsletter Subscription - Retreats by Traveon',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #f4f4f4; padding: 20px; text-align: center; border-radius: 5px; }
              .content { padding: 20px; background: white; }
              .email { font-size: 18px; color: #007bff; font-weight: bold; }
              .info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🎉 New Newsletter Subscription</h2>
              </div>
              <div class="content">
                <div class="info">
                  <p><strong>New subscriber email:</strong></p>
                  <p class="email">${email}</p>
                </div>
                <p><strong>Subscription Date:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                <p><strong>Source:</strong> Website Newsletter Form</p>
                <br>
                <p><em>This subscriber is interested in receiving updates about wellness retreats, corporate retreats, and travel experiences.</em></p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`Newsletter subscription successful for: ${email}`);

    return NextResponse.json(
      { message: 'Thank you for subscribing! We will keep you updated with our latest retreats and wellness tips.' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Newsletter subscription error details:', {
      error: error.message,
      code: error.code,
      stack: error.stack
    });

    // More specific error messages
    let errorMessage = 'Failed to subscribe. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check email configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection error. Please check your internet connection.';
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
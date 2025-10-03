// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

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

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      secure: true,
    });

    // Verify transporter connection
    await transporter.verify();

    // Determine source
    const pageSource = source === 'landing' ? 'Landing Page' : 'Main Website';

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER, // Gmail requires the authenticated user as sender
      to: 'info@traveon.in', // Zoho email 
      replyTo: email,
      subject: `New Newsletter Subscription - ${pageSource}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                line-height: 1.6; 
                color: #333;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container { 
                max-width: 600px; 
                margin: 20px auto; 
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              }
              .header { 
                background: linear-gradient(135deg, #4a9f4d, #8bc34a);
                padding: 30px 20px; 
                text-align: center;
                color: white;
              }
              .header h2 {
                margin: 0;
                font-size: 24px;
              }
              .content { 
                padding: 30px;
              }
              .info-box { 
                background: #f8f9fa; 
                padding: 20px; 
                border-radius: 8px; 
                margin: 20px 0;
                border-left: 4px solid #4a9f4d;
              }
              .email { 
                font-size: 18px; 
                color: #4a9f4d; 
                font-weight: bold;
                word-break: break-all;
              }
              .label {
                font-weight: 600;
                color: #555;
                margin-bottom: 5px;
              }
              .badge {
                display: inline-block;
                background: #4a9f4d;
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-top: 10px;
              }
              .footer {
                background: #f8f9fa;
                padding: 20px;
                text-align: center;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🌿 New Newsletter Subscription</h2>
              </div>
              <div class="content">
                <p>Great news! You have a new subscriber for your retreat updates.</p>
                
                <div class="info-box">
                  <p class="label">📧 Subscriber Email:</p>
                  <p class="email">${email}</p>
                  
                  <p class="label" style="margin-top: 15px;">📅 Subscription Date:</p>
                  <p>${new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'full',
                    timeStyle: 'short'
                  })}</p>
                  
                  <p class="label" style="margin-top: 15px;">📍 Source:</p>
                  <span class="badge">${pageSource}</span>
                </div>
                
                <p style="background: #fff3cd; padding: 15px; border-radius: 5px; border-left: 4px solid #ffc107;">
                  <strong>💡 Next Steps:</strong><br>
                  Add this subscriber to your newsletter mailing list to keep them updated about wellness retreats, corporate experiences, and travel programs.
                </p>
              </div>
              <div class="footer">
                <p>This is an automated notification from Retreats by Traveon</p>
                <p>© ${new Date().getFullYear()} Retreats by Traveon. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`Newsletter subscription successful for: ${email} from ${pageSource}`);

    return NextResponse.json(
      { 
        message: 'Thank you for subscribing! We will keep you updated with our latest retreats and wellness tips.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Newsletter subscription error:', {
      error: error.message,
      code: error.code,
    });

    let errorMessage = 'Failed to subscribe. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email service authentication failed. Please contact support.';
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection error. Please check your internet connection and try again.';
    }

    return NextResponse.json(
      { error: errorMessage, success: false },
      { status: 500 }
    );
  }
}
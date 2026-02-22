import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {
    
    //const data = await request.json();

if (!request.body) {
    return NextResponse.json({ message: "Empty request" }, { status: 400 });
  }

  try {
    const data = await request.json();
    console.log("Received data:", data); // Check if this shows up! 

    // 1. Bot Check
    if (data.honeypot) return NextResponse.json({ message: "Spam detected" }, { status: 400 });

    // 2. Setup the "Mailman" (Transport)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Define the Email content
    const mailOptions = {
      from: data.email,
      to: process.env.EMAIL_USER, // Sends to you
      subject: `New School Inquiry from ${data.name}`,
      text: `Message: ${data.message} \n\nFrom: ${data.email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #059669;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9fafb; padding: 15px; border-radius: 8px;">${data.message}</p>
        </div>
      `,
    };

    // 4. Send it!
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email Sent!" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}

//real email



import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Email configuration missing")
    return NextResponse.json({ error: "Email configuration missing" }, { status: 500 })
  }

  const { name, email, subject, message } = await req.json()

  // Log for debugging (remove in production)
  console.log("Received form data:", { name, email, subject })

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Using gmail service directly
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,    // Using the sender's name and email from the form
      to: process.env.EMAIL_TO,        // Your receiving email
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #6366f1;">New Portfolio Contact</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ 
      error: "Failed to send email", 
      details: error.message 
    }, { status: 500 })
  }
}


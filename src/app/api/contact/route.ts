import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  feedback: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  const formData: ContactFormData = await request.json();

  if (
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.linkedin ||
    !formData.feedback
  ) {
    return NextResponse.json(
      { error: "Missing required form data." },
      { status: 400 }
    );
  }

  try {
    console.log(formData);

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: formData.email,
      subject: "We Have Received Your Inquiry",
      text: `
Dear ${formData.name},

Thank you for contacting us. Your inquiry has been received, and our team will respond promptly.

Best regards,
Your Team
      `,
      html: `
        <p>Dear ${formData.name},</p>
        <p>Thank you for contacting us. Your inquiry has been received, and our team will respond promptly.</p>
        <p>Best regards,<br/>Your Team</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}

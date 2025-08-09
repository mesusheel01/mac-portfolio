import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'susheelraime@gmail.com',
      subject: `New message from ${name}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      reply_to: email,
    });

    if (!data || (typeof data === 'object' && 'error' in data && data.error)) {
      console.error('Resend error:', (data as any).error);
      return NextResponse.json({ error: (data as any).error || 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

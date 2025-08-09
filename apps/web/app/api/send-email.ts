import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body as { name?: string; email?: string; message?: string };

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
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
    });

    if (!data || data.error) {
      console.error('Resend error:', data?.error);
      return res.status(500).json({ error: data?.error || 'Failed to send email.' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('API error:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}

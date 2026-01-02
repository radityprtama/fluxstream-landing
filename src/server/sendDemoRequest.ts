import { createServerFn } from '@tanstack/react-start'
import { Resend } from 'resend'

interface DemoRequestData {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  companySize: string
}

 export const sendDemoRequest = createServerFn({ method: 'POST' })
   .inputValidator((data: DemoRequestData) => data)
   .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { firstName, lastName, email, company, role, companySize } = data

    const { error: userEmailError } = await resend.emails.send({
      from: 'FluxStream <onboarding@resend.dev>',
      to: [email],
      subject: 'Your FluxStream Demo Request Received',
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <div style="display: inline-block; width: 48px; height: 48px; background: linear-gradient(135deg, #34d399, #059669); border-radius: 12px; margin-bottom: 16px;"></div>
            <h1 style="color: #0f172a; font-size: 24px; margin: 0;">FluxStream</h1>
          </div>
          <h2 style="color: #0f172a; font-size: 20px; margin-bottom: 16px;">Hi ${firstName},</h2>
          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for requesting a demo of FluxStream! We're excited to show you how our AI-driven orchestration engine can transform your workflows.
          </p>
          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            One of our product specialists will reach out within 24 hours to schedule a personalized demo tailored to ${company}'s needs.
          </p>
          <div style="background: #f1f5f9; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <p style="color: #64748b; font-size: 14px; margin: 0 0 8px;">In the meantime, explore our:</p>
            <ul style="color: #0f172a; font-size: 14px; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Documentation & API Reference</li>
              <li style="margin-bottom: 8px;">Integration Guides</li>
              <li>Customer Success Stories</li>
            </ul>
          </div>
          <p style="color: #475569; font-size: 16px; line-height: 1.6;">
            Best regards,<br/>
            <strong>The FluxStream Team</strong>
          </p>
        </div>
      `,
    })

    if (userEmailError) {
      console.error('Failed to send user email:', userEmailError)
      throw new Error('Failed to send confirmation email')
    }

    const { error: salesEmailError } = await resend.emails.send({
      from: 'FluxStream Leads <onboarding@resend.dev>',
      to: ['sales@fluxstream.io'],
      subject: `New Demo Request: ${company}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #0f172a; font-size: 24px; margin-bottom: 24px;">New Demo Request</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Role</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b;">Company Size</td>
              <td style="padding: 12px 0; color: #0f172a; font-weight: 500;">${companySize}</td>
            </tr>
          </table>
        </div>
      `,
    })

    if (salesEmailError) {
      console.error('Failed to send sales notification:', salesEmailError)
    }

    return { success: true }
  })

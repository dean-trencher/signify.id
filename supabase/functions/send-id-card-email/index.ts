import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  fullName: string;
  walletAddress: string;
  cardImageBase64: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, fullName, walletAddress, cardImageBase64 }: EmailRequest = await req.json();

    console.log("Sending ID card email to:", to);

    const emailResponse = await resend.emails.send({
      from: "SIGNIFY.AI <onboarding@resend.dev>",
      to: [to],
      subject: "Your SIGNIFY.AI ID Card",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #8B5CF6;">Your SIGNIFY.AI ID Card is Ready!</h1>
          <p>Hi ${fullName},</p>
          <p>Your Solana ID card has been generated successfully. Please find your ID card attached below.</p>
          <div style="margin: 20px 0;">
            <img src="${cardImageBase64}" alt="Your ID Card" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
          </div>
          <p><strong>Wallet Address:</strong> ${walletAddress}</p>
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            This is an automated email from SIGNIFY.AI. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);

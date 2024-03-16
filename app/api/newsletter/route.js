import { newsLetterHTML } from "@/helper/newsLetterHTML";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nikhilnigamnik@gmail.com",
      pass: "qbctpswpcgzhgref",
    },
  });
  const mailOptions = {
    from: "nikhilnigamnik@gmail.com",
    to: email,
    subject: "Newsletter Subscription",
    html: `
    <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
          margin: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
          text-align: center;
        }
        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .verification-code {
          background-color: #f0f0f0;
          padding: 15px;
          text-align: center;
          font-size: 20px;
          border-radius: 5px;
          margin-top: 30px;
        }
      </style>
      </head>
      <body>
        <div class="container">
          <h1>Email Verification</h1>
          <p>Hello,</p>
          <p>Your verification code is:</p>
          <div class="verification-code">
            <strong>7859</strong>
          </div>
          <p>Please use this code to complete your verification process.</p>
          <p>If you did not request this verification, please disregard this email.</p>
        </div>
      </body>
      </html>
  `,
  };

  try {
    const res = await transporter.sendMail(mailOptions);
    return NextResponse.json(res, { message: "Email sent" });
  } catch (error) {
    return NextResponse.json(error, { message: "Email not sent" });
    console.log(error);
  }
}

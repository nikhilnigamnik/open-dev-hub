import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nikhilnigamnik@gmail.com",
      pass: "fpwbomsqpumojvbw",
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
        <title>Thank You for Subscribing</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                text-align: center;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                margin-top: 50px;
            }
            h1 {
                color: #333;
            }
            p {
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Thank You for Subscribing!</h1>
            <p>Welcome to OpenDevHub. We're thrilled to have you as a part of our community.</p>
            <p>Stay tuned for exciting updates, news, and exclusive content delivered straight to your inbox.</p>
            <p>If you have any questions or feedback, feel free to reach out to us.</p>
            <p>Happy coding!</p>
            <p>- The OpenDevHub Team</p>
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
  }
}

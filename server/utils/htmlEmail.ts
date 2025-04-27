export const htmlContent: string = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f0f4f8;
      margin: 0;
      padding: 30px 0;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background-color: #2563eb;
      color: #fff;
      text-align: center;
      padding: 30px 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 26px;
    }
    .content {
      padding: 30px 40px;
      text-align: center;
    }
    .content h2 {
      font-size: 22px;
      margin-bottom: 10px;
    }
    .content p {
      font-size: 16px;
      color: #555;
      margin-bottom: 24px;
    }
    .code {
      display: inline-block;
      background-color: #f3f4f6;
      padding: 15px 25px;
      font-size: 20px;
      font-weight: bold;
      color: #111827;
      border-radius: 8px;
      letter-spacing: 2px;
      border: 1px dashed #9ca3af;
    }
    .footer {
      background-color: #f9fafb;
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Verify Your Email Address</h1>
    </div>
    <div class="content">
      <h2>Hi there,</h2>
      <p>We're excited to have you on board! Please use the following verification code to activate your account:</p>
      <div class="code">{verificationToken}</div>
      <p>If you didn’t request this email, no worries — just ignore it.</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Lazeez Diet. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const generateWelcomeEmailHtml = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f8;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #10b981;
      color: white;
      text-align: center;
      padding: 30px 20px;
    }
    .header h1 {
      margin: 0;
    }
    .body {
      padding: 30px 40px;
    }
    .body p {
      font-size: 16px;
      color: #4b5563;
      margin-bottom: 18px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #9ca3af;
      background-color: #f9fafb;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Lazeez Diet!</h1>
    </div>
    <div class="body">
      <p>Dear ${name},</p>
      <p>We're thrilled to confirm your email address has been successfully verified.</p>
      <p>Explore personalized diet plans, delicious recipes, and insightful tips to stay fit and healthy.</p>
      <p>Need help? Just reply to this email — we're always here for you!</p>
      <p>Warm regards,<br/>The Lazeez Diet Team</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Lazeez Diet. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const generatePasswordResetEmailHtml = (resetURL: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f8;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #ef4444;
      color: white;
      text-align: center;
      padding: 30px 20px;
    }
    .body {
      padding: 30px 40px;
      color: #374151;
    }
    .body p {
      font-size: 16px;
      margin-bottom: 18px;
    }
    .button {
      display: inline-block;
      background-color: #ef4444;
      color: white;
      padding: 12px 25px;
      text-decoration: none;
      font-weight: bold;
      border-radius: 8px;
      margin-top: 20px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #9ca3af;
      background-color: #f9fafb;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="body">
      <p>Hi,</p>
      <p>It looks like you requested a password reset. Click the button below to set a new password:</p>
      <a class="button" href="${resetURL}">Reset Password</a>
      <p>If you didn’t make this request, you can safely ignore this email.</p>
      <p>Thanks,<br/>The Lazeez Diet Team</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Lazeez Diet Food. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

export const generateResetSuccessEmailHtml = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f6f8;
      padding: 40px 0;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #10b981;
      color: white;
      text-align: center;
      padding: 30px 20px;
    }
    .body {
      padding: 30px 40px;
      color: #374151;
    }
    .body p {
      font-size: 16px;
      margin-bottom: 18px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #9ca3af;
      background-color: #f9fafb;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Successful</h1>
    </div>
    <div class="body">
      <p>Hello,</p>
      <p>Your password has been successfully updated. You can now log in using your new credentials.</p>
      <p>If this wasn't you, please contact our support immediately for assistance.</p>
      <p>Stay secure,<br/>The Lazeez Diet Team</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Lazeez Diet. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

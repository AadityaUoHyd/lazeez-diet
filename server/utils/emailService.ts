// utils/emailService.ts
import {
    generatePasswordResetEmailHtml,
    generateResetSuccessEmailHtml,
    generateWelcomeEmailHtml,
    htmlContent,
  } from "./htmlEmail";
  
  import { transporter, sender } from "./gmail";
  
  export const sendVerificationEmail = async (
    email: string,
    verificationToken: string
  ) => {
    const html = htmlContent.replace("{verificationToken}", verificationToken);
    try {
      const res = await transporter.sendMail({
        from: `"${sender.name}" <${sender.email}>`,
        to: email,
        subject: "Verify your email",
        html,
      });
      console.log("Gmail SMTP (verify email):", res.messageId);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email verification");
    }
  };
  
  export const sendWelcomeEmail = async (email: string, name: string) => {
    const html = generateWelcomeEmailHtml(name);
    try {
      const res = await transporter.sendMail({
        from: `"${sender.name}" <${sender.email}>`,
        to: email,
        subject: "Welcome to Lazeez Diet",
        html,
      });
      console.log("Gmail SMTP (welcome):", res.messageId);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send welcome email");
    }
  };
  
  export const sendPasswordResetEmail = async (
    email: string,
    resetURL: string
  ) => {
    const html = generatePasswordResetEmailHtml(resetURL);
    try {
      const res = await transporter.sendMail({
        from: `"${sender.name}" <${sender.email}>`,
        to: email,
        subject: "Reset your password",
        html,
      });
      console.log("Gmail SMTP (reset password):", res.messageId);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send password reset email");
    }
  };
  
  export const sendResetSuccessEmail = async (email: string) => {
    const html = generateResetSuccessEmailHtml();
    try {
      const res = await transporter.sendMail({
        from: `"${sender.name}" <${sender.email}>`,
        to: email,
        subject: "Password Reset Successfully",
        html,
      });
      console.log("Gmail SMTP (reset success):", res.messageId);
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send password reset success email");
    }
  };
  
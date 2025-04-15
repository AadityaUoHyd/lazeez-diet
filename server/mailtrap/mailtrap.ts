import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
 
const apiToken = process.env.MAILTRAP_API_TOKEN;
if (!apiToken) throw new Error("MAILTRAP_API_TOKEN is not defined in .env");

export const client = new MailtrapClient({ token: apiToken });

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};

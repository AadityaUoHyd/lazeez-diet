import { LucidePhone, LucideMail, LucideMapPin } from "lucide-react";
import logo from "../assets/lazeezdiet.png";

const Contact = () => (
  <div className="min-h-screen px-6 py-12 sm:px-12 md:px-20 lg:px-32">
    <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md dark:shadow-gray-700">
      <div className="flex items-center justify-center gap-3 mb-6">
        <LucideMail className="text-purple-600 dark:text-purple-400 w-8 h-8" />
        <h1 className="text-3xl font-bold text-purple-500">Contact Us</h1>
      </div>

      <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-4">
        We're just a message away. Let us help you on your wellness journey.
      </p>


      {/* Logo Image - Prominently Centered */}
      <div className="flex justify-center mb-8">
        <img
          src={logo}
          alt="Lazeez Diet Logo"
          className="w-48 h-auto rounded-xl"
        />
      </div>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Have a question, feedback, or need support? We're here to help! Reach out to us through the following channels:
      </p>

      <div className="space-y-6 mb-10">
        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <LucideMail className="text-purple-600 dark:text-purple-400 w-6 h-6" />
          <p className="text-lg">
            <strong>Email : </strong>&nbsp;
            <a href="mailto:support@lazeezdiet.com" className="text-blue-600 dark:text-blue-400 underline">
              support@lazeezdiet.com
            </a>
          </p>
        </div>

        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <LucidePhone className="text-purple-600 dark:text-purple-400 w-6 h-6" />
          <p className="text-lg">
            <strong>Phone : </strong>&nbsp;
            <a href="tel:+9100000000007" className="text-blue-600 dark:text-blue-400 underline">
              +91 000-000-0000
            </a>
          </p>
        </div>

        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <LucideMapPin className="text-purple-600 dark:text-purple-400 w-6 h-6" />
          <p className="text-lg">
            <strong>Address : </strong>&nbsp; SR Nagar, Hyderabad - 500016, India.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Send us a message for feedback</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
          <input type="hidden" name="access_key" value="031cb32e-4e5b-4310-9cfc-f82dda78ed5b" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600" />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"></textarea>
          </div>

          <div className="flex justify-end">
            <button type="submit" className="bg-purple-500 hover:bg-hoverPurple text-white py-2 px-6 rounded-lg shadow-md transition-colors">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;

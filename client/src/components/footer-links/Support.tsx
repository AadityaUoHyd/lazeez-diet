import { Mail, Phone, MessageSquareText, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
// Removed Textarea import as the module does not exist
import { Button } from "@/components/ui/button";


const Support = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500">
          Need Help? We're Here for You 🤝
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Got questions, feedback, or issues? Don’t worry, the Lazeez Diet team has your back!
          Reach out anytime and we'll get back to you faster than a chef slicing veggies. 🔪🥦
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid sm:grid-cols-3 gap-8 text-center">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <HelpCircle className="mx-auto text-orange mb-2" size={32} />
          <h2 className="font-semibold text-xl text-black dark:text-white">FAQs</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            Find quick answers to common queries.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <Phone className="mx-auto text-orange mb-2" size={32} />
          <h2 className="font-semibold text-xl text-black dark:text-white">Call Us</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            +91 00000 00000 <br />
            Mon-Sat, 9AM – 6PM
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <Mail className="mx-auto text-orange mb-2" size={32} />
          <h2 className="font-semibold text-xl text-black dark:text-white">Email</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
            support@lazeezdiet.com <br />
            We reply within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white flex items-center gap-2">
          <MessageSquareText size={24} className="text-orange" />
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
          </div>
          <Input type="text" placeholder="Subject" required />
          <textarea
            placeholder="How can we help you?"
            rows={6}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          />
          <Button type="submit" className="bg-purple-500 hover:bg-hoverPurple px-6 py-5 text-lg rounded-lg">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Support;

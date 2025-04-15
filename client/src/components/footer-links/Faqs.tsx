import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Lazeez Diet?",
    answer:
      "Lazeez Diet is your personalized companion for tracking meals, suggesting healthy recipes, and guiding your nutrition journey with ease.",
  },
  {
    question: "How can I track my meals?",
    answer:
      "You can visit the 'Track Meal' page from the navigation bar and log your daily food intake manually or through suggestions.",
  },
  {
    question: "Can I get recipe recommendations?",
    answer:
      "Yes! Our 'Suggest Recipes' feature provides delicious, balanced meal ideas based on your dietary preferences and goals.",
  },
  {
    question: "Is Lazeez Diet free to use?",
    answer:
      "Absolutely! All basic features are free. Premium services like diet consultation may have additional pricing in the future.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Head over to our 'Support' page and use the contact form. We typically respond within 24–48 hours.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500">
          Frequently Asked Questions <HelpCircle className="inline w-8 h-8 text-orange ml-1" />
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Got questions? We’ve got answers to help you make the most out of Lazeez Diet!
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-sm transition-all"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-black dark:text-white hover:bg-purple-500/10 dark:hover:bg-purple-500/20 rounded-t-lg"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-orange" />
              ) : (
                <ChevronDown className="w-5 h-5 text-orange" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        Still have questions? Visit our <a href="/support" className="underline text-orange">Support page</a>.
      </p>
    </div>
  );
};

export default Faqs;

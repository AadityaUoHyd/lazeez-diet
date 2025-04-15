import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const jobOpenings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Build stunning UI components using React, TailwindCSS, and Vite.",
  },
  {
    title: "Nutrition Specialist",
    location: "Mumbai, India",
    type: "Part-time",
    description: "Help our users plan healthy diets based on their preferences and needs.",
  },
  {
    title: "Marketing Manager",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Create and execute marketing strategies to grow Lazeez Diet's reach.",
  },
];

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - Lazeez Diet";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500 mb-4">
          Join the Lazeez Diet Team
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          We're on a mission to make nutrition effortless and accessible for everyone. 
          If you're passionate about food, tech, and wellness — we want you!
        </p>
      </div>

      {/* Open Positions */}
      <div className="space-y-8">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-lg transition-all border border-gray-200 dark:border-zinc-700"
          >
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">{job.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              <strong>Type:</strong> {job.type}
            </p>
            <p className="text-gray-700 dark:text-gray-400 mb-4">{job.description}</p>
            <Button
              onClick={() =>
                window.open("mailto:careers@lazeezdiet.com?subject=Job Application: " + job.title)
              }
              className="bg-purple-500 hover:bg-hoverPurple text-white px-5 py-2 text-md"
            >
              Apply Now
            </Button>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
          Didn't see the right role?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We’re always looking for passionate people. Send us your resume and tell us what you’d love to do.
        </p>
        <Button
          onClick={() =>
            window.open("mailto:careers@lazeezdiet.com?subject=General Job Inquiry")
          }
          className="bg-purple-500 hover:bg-hoverPurple text-white px-6 py-3 text-lg"
        >
          Reach Out
        </Button>
      </div>
    </div>
  );
};

export default Careers;

import { useEffect } from "react";

// Sample team data
const teamMembers = [
  {
    name: "Aaditya Raj",
    role: "Founder & Full Stack Developer",
    image: "https://res.cloudinary.com/ddgkgaffw/image/upload/v1744485825/tzt6ud5ayfos1xnvwjj7.jpg",
    bio: "Passionate about health tech and building scalable web apps. Coffee fuels his code.",
  },
  {
    name: "Saanvi Sharma",
    role: "Nutrition Expert",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    bio: "Crafts personalized diet plans with a smile. Yoga enthusiast and smoothie lover.",
  },
  {
    name: "Rohit Mehta",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Loves minimalist designs and pixel-perfect layouts. Figma is his playground.",
  },
  {
    name: "Nisha Verma",
    role: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    bio: "Connects Lazeez Diet to the world. Storyteller, content wizard, social media ninja.",
  },
];

const Team = () => {
  useEffect(() => {
    document.title = "Our Team - Lazeez Diet";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500">
          Meet Our Team
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          A passionate group of creators, nutritionists, designers, and techies
          working together to make healthy living easier and tastier.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-xl p-6 text-center shadow hover:shadow-lg transition-all border border-gray-200 dark:border-zinc-700"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {member.name}
            </h2>
            <p className="text-orange text-sm font-medium">{member.role}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

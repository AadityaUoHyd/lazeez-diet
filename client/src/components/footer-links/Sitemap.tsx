import { Link } from "react-router-dom";
import { Home, Users, Search, Heart, Phone, ShieldCheck, Book, FileText, Leaf } from "lucide-react";

const Sitemap = () => {
  const pages = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5 mr-2" /> },
    { name: "Team", path: "/team", icon: <Users className="w-5 h-5 mr-2" /> },
    { name: "Track Meal", path: "/track-meal", icon: <Leaf className="w-5 h-5 mr-2" /> },
    { name: "Suggest Recipes", path: "/suggest-recipes", icon: <Heart className="w-5 h-5 mr-2" /> },
    { name: "Community", path: "/community", icon: <Users className="w-5 h-5 mr-2" /> },
    { name: "Careers", path: "/careers", icon: <Book className="w-5 h-5 mr-2" /> },
    { name: "Support", path: "/support", icon: <Phone className="w-5 h-5 mr-2" /> },
    { name: "Terms & Conditions", path: "/terms", icon: <ShieldCheck className="w-5 h-5 mr-2" /> },
    { name: "Privacy Policy", path: "/privacy-policy", icon: <FileText className="w-5 h-5 mr-2" /> },
    { name: "Sitemap", path: "/sitemap", icon: <Search className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500">
          Sitemap 🗺️
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Navigate through every corner of Lazeez Diet with ease.
        </p>
      </div>

      {/* Link List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pages.map((page) => (
          <li
            key={page.name}
            className="flex items-center gap-2 px-4 py-4 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-purple-500/10 dark:hover:bg-purple-500/20 transition-all"
          >
            {page.icon}
            <Link
              to={page.path}
              className="text-lg font-medium text-black dark:text-white hover:underline"
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        Updated: April, 2025 • All routes are publicly accessible unless stated otherwise.
      </p>
    </div>
  );
};

export default Sitemap;

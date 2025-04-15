import logo from "../assets/lazeezdiet.png";
import {
  LucideUtensils,
  LucideUtensilsCrossed,
  ArrowRight,
  Bike,
  Home,
  MonitorSmartphone
} from "lucide-react";


const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-12 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md dark:shadow-gray-700">



        <div className="flex items-center gap-3 mb-6 justify-center">
          <LucideUtensils className="text-purple-600 " />
          <h1 className="text-3xl font-bold text-purple-500">
            About Lazeez Diet
          </h1>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Lazeez Diet is your all-in-one online food ordering app that combines health and flavor in one platform. Whether you're looking for a calorie-conscious salad, a keto-friendly wrap, or a full traditional Indian thali, we deliver it fresh and fast — right to your doorstep.
        </p>

        {/* Logo Image - Prominently Centered */}
        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Lazeez Diet Logo"
            className="w-48 h-auto rounded-xl"
          />
        </div>


        {/* Journey Flow Icons */}
        <div className="flex items-center justify-center gap-4 my-8 text-purple-600 dark:text-purple-400">
        <div className="flex flex-col items-center">
            <MonitorSmartphone className="w-8 h-8" />
            <span className="text-sm mt-1">Food Ordered to Lazeez Diet</span>
          </div>

          <ArrowRight className="w-6 h-6" />

          <div className="flex flex-col items-center">
            <LucideUtensilsCrossed className="w-8 h-8" />
            <span className="text-sm mt-1">Food Ready</span>
          </div>

          <ArrowRight className="w-6 h-6" />

          <div className="flex flex-col items-center">
            <Bike className="w-8 h-8" />
            <span className="text-sm mt-1">On the Way</span>
          </div>

          <ArrowRight className="w-6 h-6" />

          <div className="flex flex-col items-center">
            <Home className="w-8 h-8" />
            <span className="text-sm mt-1">Delivered to your Home</span>
          </div>
        </div>


        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Think of us like <span className="font-semibold text-purple-500 dark:text-purple-500">Your Mom's food with a twist</span> — our menu isn’t just about taste, it’s also about nutritional balance. Whether you're on a weight loss journey, building muscle, or just want to eat clean, we have curated meals crafted by dieticians and professional chefs to suit every lifestyle.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          With a clean and easy-to-use interface, <span className="font-semibold text-purple-500 dark:text-purple-500">Lazeez Diet</span> allows you to browse through restaurants, explore healthy menus, track your orders in real-time, and enjoy exclusive discounts — all from the comfort of your home.
        </p>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Why Choose Lazeez Diet?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>🍲 Curated healthy meals for all diet types</li>
            <li>🚀 Fast & hygienic delivery</li>
            <li>📦 Meal plans & subscription options</li>
            <li>🏋️‍♀️ Personalized diet tracking (coming soon!)</li>
            <li>💰 Budget-friendly combos and student meals</li>
          </ul>
        </div>

        <p className="mt-8 text-gray-600 dark:text-gray-400 italic">
          At Lazeez Diet, we believe in making nutrition accessible without compromising on taste. Let's eat smart and live well — together!
        </p>
      </div>
    </div>
  );
};

export default About;

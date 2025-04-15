import { useEffect } from "react";
import {
  Sun,
  Moon,
  Coffee,
  Salad,
  Trash2,
  PlusCircle,
} from "lucide-react";

const meals = [
  {
    title: "Breakfast",
    icon: <Coffee className="text-orange w-6 h-6" />,
    items: ["Oatmeal with banana", "Boiled eggs", "Green tea"],
  },
  {
    title: "Lunch",
    icon: <Sun className="text-yellow-500 w-6 h-6" />,
    items: ["Grilled chicken", "Brown rice", "Mixed salad"],
  },
  {
    title: "Snacks",
    icon: <Salad className="text-green-500 w-6 h-6" />,
    items: ["Almonds", "Greek yogurt"],
  },
  {
    title: "Dinner",
    icon: <Moon className="text-purple-500 w-6 h-6" />,
    items: ["Vegetable soup", "Multigrain roti", "Paneer curry"],
  },
];

const TrackMeal = () => {
  useEffect(() => {
    document.title = "Track Meals - Lazeez Diet";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500">
          Track Your Meals 🍽️
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">
          Stay on top of your daily nutrition by logging your meals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {meals.map((meal, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-zinc-700"
          >
            <div className="flex items-center gap-3 mb-4">
              {meal.icon}
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {meal.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {meal.items.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg"
                >
                  <span className="text-gray-800 dark:text-gray-200">{item}</span>
                  <Trash2 className="text-red-500 hover:text-red-600 cursor-pointer w-4 h-4" />
                </li>
              ))}
              <li className="mt-3 flex justify-center">
                <button className="text-orange hover:text-hoverPurple text-sm flex items-center gap-1 font-medium">
                  <PlusCircle className="w-4 h-4" /> Add Item
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackMeal;

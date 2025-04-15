import { useEffect, useState } from "react";
import { Timer, Flame, ChefHat, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockRecipes = [
  {
    id: 1,
    title: "Quinoa Avocado Salad",
    image: "https://cdn.pixabay.com/photo/2020/07/12/09/15/quinoa-5396618_1280.jpg",
    time: "15 mins",
    difficulty: "Easy",
    calories: "250 kcal",
  },
  {
    id: 2,
    title: "Grilled Chicken Bowl",
    image: "https://cdn.pixabay.com/photo/2020/03/21/18/13/saji-4954852_1280.jpg",
    time: "25 mins",
    difficulty: "Medium",
    calories: "420 kcal",
  },
  {
    id: 3,
    title: "Oats & Berry Smoothie",
    image: "https://cdn.pixabay.com/photo/2016/05/14/11/13/oat-1391682_1280.jpg",
    time: "10 mins",
    difficulty: "Easy",
    calories: "180 kcal",
  },
  {
    id: 4,
    title: "Paneer Veg Stir Fry",
    image: "https://cdn.pixabay.com/photo/2022/03/02/12/42/paneer-7043097_1280.jpg",
    //image: "https://source.unsplash.com/400x300/?paneer,veg",
    time: "20 mins",
    difficulty: "Medium",
    calories: "320 kcal",
  },
];

const SuggestRecipes = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Suggest Recipes - Lazeez Diet";
  }, []);

  const filtered = mockRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-500">
          Discover Delicious & Healthy Recipes 🍳
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Based on your cravings, we'll suggest meals that love you back!
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center max-w-xl mx-auto mb-10 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search by ingredients, name, or diet type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-12 py-5 rounded-lg text-base"
        />
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden border border-zinc-200 dark:border-zinc-800 transition hover:shadow-xl"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {recipe.title}
              </h3>

              <div className="flex flex-wrap items-center text-sm gap-3 text-gray-600 dark:text-gray-300 mt-2">
                <span className="flex items-center gap-1">
                  <Timer className="w-4 h-4 text-orange" /> {recipe.time}
                </span>
                <span className="flex items-center gap-1">
                  <ChefHat className="w-4 h-4 text-yellow-500" />{" "}
                  {recipe.difficulty}
                </span>
                <span className="flex items-center gap-1">
                  <Flame className="w-4 h-4 text-red-500" /> {recipe.calories}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-12 text-lg">
          No recipes match your search. Try something else! 🔍
        </div>
      )}
    </div>
  );
};

export default SuggestRecipes;

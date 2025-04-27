import { useState, useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

// Image imports
import LazeezDiet1 from "@/assets/lazeezdiet1.png";
import LazeezDiet2 from "@/assets/lazeezdiet2.png";
import LazeezDiet3 from "@/assets/lazeezdiet3.png";
import LazeezDiet4 from "@/assets/lazeezdiet4.png";
import LazeezDiet5 from "@/assets/lazeezdiet5.png";
import LazeezDiet6 from "@/assets/lazeezdiet6.png";
import LazeezDiet7 from "@/assets/lazeezdiet7.png";
import LazeezDiet8 from "@/assets/lazeezdiet8.png";
import LazeezDiet9 from "@/assets/lazeezdiet9.png";
import LazeezDiet10 from "@/assets/lazeezdiet10.png";
import LazeezDiet11 from "@/assets/lazeezdiet11.png";

const imageList = [
  LazeezDiet1,
  LazeezDiet2,
  LazeezDiet3,
  LazeezDiet4,
  LazeezDiet5,
  LazeezDiet6,
  LazeezDiet7,
  LazeezDiet8,
  LazeezDiet9,
  LazeezDiet10,
  LazeezDiet11,
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchText, setSearchText] = useState("");
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();

  const nextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  useEffect(() => {
    if (isHovered) return;
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isHovered]);

  const handleSearch = () => {
    if (searchText.trim() === "") {
      setInputError(true);
      return;
    }
    setInputError(false);
    navigate(`/search/${searchText.trim()}`);
  };

  return (
    <>
      {/* First Page: Image Slider */}
      <section
        className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full max-w-[100vw] max-h-[100vh] aspect-square overflow-hidden">
          {prevIndex !== -1 && (
            <img
              src={imageList[prevIndex]}
              key={prevIndex}
              className="absolute w-full h-full object-contain z-10 transition-transform duration-500 ease-in-out"
              style={{ transform: "translateX(-100%)" }}
              alt="Previous Slide"
            />
          )}
          <img
            src={imageList[currentIndex]}
            key={currentIndex}
            className="absolute w-full h-full object-contain z-20 transition-transform duration-500 ease-in-out"
            style={{ transform: "translateX(0%)" }}
            alt="Current Slide"
          />
        </div>
      </section>

      {/* Second Page: Text and Search */}
      <section className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center max-w-4xl px-4 space-y-8">
          <h1 className="font-extrabold text-4xl md:text-6xl text-black dark:text-white leading-tight">
            Food At Your Fingertips.<br /> Anytime, Anywhere.
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl">
            Hey there! Craving delicious food? We’re always nearby and ready to serve you!
          </p>

          <div className="relative flex flex-col sm:flex-row gap-4 items-center justify-center w-full py-16">
            <div className="relative w-full max-w-xl">
              <Input
                type="text"
                value={searchText}
                placeholder="Search restaurant by name, city, or country..."
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setInputError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className={`pl-14 pr-16 py-6 text-lg rounded-lg w-full shadow-lg border-2 ${
                  inputError ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                } focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white`}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <Button
              onClick={handleSearch}
              disabled={searchText.trim() === ""}
              className="bg-purple-500 hover:bg-hoverPurple text-white text-lg px-8 py-6 rounded-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Search
            </Button>
          </div>

          {inputError && (
            <p className="text-red-500 text-sm -mt-8">
              Please enter something before searching.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
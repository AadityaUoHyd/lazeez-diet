import { MenuItem } from "@/types/restaurantType";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";

const AvailableMenu = ({ menus }: { menus: MenuItem[] }) => {
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {menus.map((menu: MenuItem) => (
          <Card
            key={menu.name}
            className="w-[320px] h-[450px] mx-auto flex flex-col justify-between shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={menu.image}
              alt={menu.name}
              className="w-full h-[160px] object-cover"
            />
            <CardContent className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-yellow-600 dark:text-white">
                  {menu.name}
                </h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {menu.description}
                </p>
              </div>
              <h3 className="text-lg font-semibold mt-4">
                Price: <span className="text-yellow-600">₹{menu.price}</span>
              </h3>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                onClick={() => {
                  addToCart(menu);
                  navigate("/cart");
                }}
                className="w-full bg-purple-500 hover:bg-hoverPurple"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default AvailableMenu;

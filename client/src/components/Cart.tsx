import { Minus, Plus, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import { CartItem } from "@/types/cartType";
import cartImage from "@/assets/cartImage.png";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const { cart, decrementQuantity, incrementQuantity, clearCart, removeFromTheCart } = useCartStore();
  const { user } = useUserStore();
  const isAdmin = user?.admin || false;

  let totalAmount = cart.reduce((acc, ele) => {
    return acc + ele.price * ele.quantity;
  }, 0);

  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-left mb-8">
        <img
          src={cartImage}
          alt="Lazeez Diet contact image"
          className="w-400 h-auto rounded-xl"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item: CartItem) => (
            <TableRow key={item._id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={item.image} alt="" />
                  <AvatarFallback>
                    <div className="w-full h-full bg-gray-300 rounded-full shadow-md flex items-center justify-center">
                      <User />
                    </div>
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <div className="w-fit flex items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-md">
                  <Button
                    onClick={() => decrementQuantity(item._id)}
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full bg-gray-200 hover:bg-red-500"
                  >
                    <Minus />
                  </Button>
                  <Button
                    size={"icon"}
                    className="font-bold border-none"
                    disabled
                    variant={"outline"}
                  >
                    {item.quantity}
                  </Button>
                  <Button
                    onClick={() => incrementQuantity(item._id)}
                    size={"icon"}
                    className="rounded-full bg-purple-500 hover:bg-green-500"
                    variant={"outline"}
                  >
                    <Plus />
                  </Button>
                </div>
              </TableCell>
              <TableCell>{item.price * item.quantity}</TableCell>
              <TableCell className="text-right">
                <Button
                  size={"sm"}
                  className="bg-purple-500 hover:bg-red-500"
                  onClick={() => removeFromTheCart(item._id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-bold">
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex items-left justify-end mb-5 my-5 gap-2">
        <Button onClick={() => clearCart()} className="bg-purple-500 hover:bg-red-500">
          Clear All Order
        </Button>

        <Button
          variant="link"
          onClick={() => setOpen(true)}
          className={`bg-purple-500 hover:bg-green-500 mx-4 ${
            isAdmin ? "opacity-60 cursor-not-allowed" : ""
          }`}
          disabled={isAdmin}
        >
          Proceed To Checkout
        </Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;
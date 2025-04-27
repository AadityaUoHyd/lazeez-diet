import { NavLink, Link } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  HandPlatter,
  Loader2,
  Menu,
  Moon,
  PackageCheck,
  ShoppingCart,
  SquareMenu,
  Sun,
  User,
  UtensilsCrossed,
  LogOut,
  HomeIcon,
  Info,
  Phone,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useUserStore } from "@/store/useUserStore";
import { useCartStore } from "@/store/useCartStore";
import { useThemeStore } from "@/store/useThemeStore";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/lazeezDiet.png";

const linkStyles = "flex items-center gap-1 hover:text-purple-500 transition-colors";
const activeStyles = "text-blue-600 underline";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const { cart } = useCartStore();
  const { setTheme } = useThemeStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => {
      navigate("/login");
    });
  };
  

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex items-center justify-between h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <h1 className="font-bold md:font-extrabold text-2xl text-purple-500 hover:text-purple-800">
            Lazeez Diet
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>
              <HomeIcon size={18} />
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>
              <Info size={18} />
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>
              <Phone size={18} />
              Contact
            </NavLink>
            <NavLink to="/order/status" className={({ isActive }) => `${linkStyles} ${isActive ? activeStyles : ""}`}>
              <HandPlatter size={18} />
              Order
            </NavLink>

            {/* Cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative flex items-center gap-1 ${isActive ? activeStyles : linkStyles}`
              }
            >
              <ShoppingCart size={20} />
              <span className="text-sm">({cart.length})</span>
            </NavLink>

            {user?.admin && (
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger className="cursor-pointer bg-purple-500 hover:bg-hoverPurple text-white">Admin Panel</MenubarTrigger>
                  <MenubarContent>
                    <Link to="/admin/restaurant">
                      <MenubarItem>Restaurant</MenubarItem>
                    </Link>
                    <Link to="/admin/menu">
                      <MenubarItem>Menu</MenubarItem>
                    </Link>
                    <Link to="/admin/orders">
                      <MenubarItem>Orders</MenubarItem>
                    </Link>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            )}
          </div>



          {/* Avatar Dropdown - only show if user is logged in */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profilePicture} alt="profile" />
                  <AvatarFallback>
                    <User />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <User size={16} />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun size={16} className="mr-2" />
                  Light Mode
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon size={16} className="mr-2" />
                  Dark Mode
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                  <LogOut size={16} className="mr-2 text-red-600" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-1.5 rounded-md transition-all text-sm font-medium border border-purple-500 
     ${isActive ? "bg-purple-500 text-white" : "text-purple-600 hover:bg-purple-100"}`
              }
            >
              <User size={16} />
              Login
            </NavLink>

          )}

        </div>

        {/* Mobile Nav */}
        <div className="md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const { user, logout, loading } = useUserStore();
  const { cart } = useCartStore();
  const { setTheme } = useThemeStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full bg-gray-200 text-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white"
          variant="outline"
        >
          <Menu size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col dark:bg-gray-900">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>Lazeez Diet</SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetHeader>
        <Separator className="my-2" />
        <SheetDescription className="flex-1 flex flex-col gap-2">
          <MobileLink to="/" icon={<HomeIcon size={18} />} text="Home" />
          <MobileLink to="/about" icon={<Info size={18} />} text="About" />
          <MobileLink to="/contact" icon={<Phone size={18} />} text="Contact" />
          {user && <MobileLink to="/profile" icon={<User />} text="Profile" />}
          <MobileLink to="/order/status" icon={<HandPlatter />} text="Order" />
          <MobileLink to="/cart" icon={<ShoppingCart />} text={`Cart (${cart.length})`} />
          {user?.admin && (
            <>
              <MobileLink to="/admin/menu" icon={<SquareMenu />} text="Menu" />
              <MobileLink to="/admin/restaurant" icon={<UtensilsCrossed />} text="Restaurant" />
              <MobileLink to="/admin/orders" icon={<PackageCheck />} text="Orders" />
            </>
          )}
        </SheetDescription>
        {user && (
          <SheetFooter className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarImage src={user?.profilePicture} />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <h1 className="font-bold">{user?.fullname}</h1>
            </div>
            <SheetClose asChild>
              {loading ? (
                <Button className="bg-purple-500 hover:bg-hoverPurple">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                  Please wait
                </Button>
              ) : (
                <Button onClick={() => logout()} className="bg-purple-500 hover:bg-hoverPurple">
                  Logout
                </Button>
              )}
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

const MobileLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-2 py-1 rounded-md ${isActive ? "text-blue-600 underline" : "hover:text-purple-500"
      }`
    }
  >
    {icon}
    {text}
  </NavLink>
);

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/lazeezdiet.png";


const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const { loading, login } = useUserStore();
  const navigate = useNavigate();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }
    try {
      await login(input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10 text-foreground">
      <form
        onSubmit={loginSubmitHandler}
        className="w-full max-w-md p-8 rounded-xl border border-border bg-card shadow-md space-y-6"
      >
        <div className="text-center space-y-1">
          <img
            src={logo}
            alt="Lazeez Diet Logo"
            className="mx-auto w-20 h-20 object-contain rounded-full"
          />
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">Lazeez Diet</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Please login</p>
        </div>


        <div className="space-y-2">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
          {errors?.email && (
            <span className="text-xs text-red-500 block">{errors.email}</span>
          )}
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10"
            />
            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
          {errors?.password && (
            <span className="text-xs text-red-500 block">{errors.password}</span>
          )}
        </div>

        <div>
          {loading ? (
            <Button disabled className="w-full bg-purple-500 hover:bg-hoverPurple text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-purple-500 hover:bg-hoverPurple text-white">
              Login
            </Button>
          )}
        </div>

        <div className="flex justify-between text-sm">
          <Link
            to="/forgot-password"
            className="text-purple-500 hover:text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
          <Link
            to="/signup"
            className=" text-purple-500 hover:text-blue-500 hover:underline"
          >
            Sign up
          </Link>
        </div>

        <Separator />

        <p className="text-center text-xs text-muted-foreground mt-4">
          &copy; {new Date().getFullYear()} Lazeez Diet. All rights reserved.
        </p>
      </form>
    </div>
  );
};

export default Login;

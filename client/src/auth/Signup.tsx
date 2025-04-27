import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import {
  Loader2,
  LockKeyhole,
  Mail,
  PhoneOutgoing,
  User,
} from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/lazeezdiet.png"; 

const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const { signup, loading } = useUserStore();
  const navigate = useNavigate();

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }

    try {
      await signup(input);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4 py-10 text-foreground">
      <form
        onSubmit={loginSubmitHandler}
        className="w-full max-w-md rounded-xl border border-border bg-card p-6 md:p-8 shadow-md space-y-6"
      >
        <div className="text-center space-y-2">
          <img
            src={logo}
            alt="Lazeez Diet Logo"
            className="mx-auto w-20 h-20 object-contain rounded-full"
          />
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Lazeez Diet
          </h1>
          <p className="text-muted-foreground text-sm">Create your account</p>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-10"
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            {errors.fullname && (
              <span className="text-xs text-red-500 block">
                {errors.fullname}
              </span>
            )}
          </div>

          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10"
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            {errors.email && (
              <span className="text-xs text-red-500 block">
                {errors.email}
              </span>
            )}
          </div>

          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10"
            />
            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            {errors.password && (
              <span className="text-xs text-red-500 block">
                {errors.password}
              </span>
            )}
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="Contact"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-10"
            />
            <PhoneOutgoing className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            {errors.contact && (
              <span className="text-xs text-red-500 block">
                {errors.contact}
              </span>
            )}
          </div>
        </div>

        <div>
          {loading ? (
            <Button disabled className="w-full bg-purple-500 hover:bg-hoverPurple text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-purple-500 hover:bg-hoverPurple text-white">
              Signup
            </Button>
          )}
        </div>

        <Separator />

        <p className="mt-4 text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-500 hover:text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

// 👇 import your logo
import logo from "../assets/lazeezDiet.png"; // adjust path based on your project

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 2000));
      alert("Reset link sent to your email!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl border border-border bg-card p-6 md:p-8 shadow-md dark:shadow-lg space-y-6"
      >
        {/* 👇 Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto w-20 h-20 object-contain rounded-full"
          />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Forgot Password
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Enter your email to receive a reset link
          </p>
        </div>

        <div className="relative">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
          />
          <Mail className="absolute inset-y-2 left-2 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>

        <div>
          {loading ? (
            <Button
              disabled
              className="w-full bg-purple-500 hover:bg-hoverPurple text-white"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-hoverPurple text-white"
            >
              Send Reset Link
            </Button>
          )}
        </div>

        <p className="text-sm text-center text-muted-foreground">
          Back to{" "}
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

export default ForgotPassword;

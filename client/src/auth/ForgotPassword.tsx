import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/lazeezdiet.png";
import { useUserStore } from "@/store/useUserStore";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const { forgotPassword, loading } = useUserStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      setEmail(""); // Clear input on success
    } catch (error) {
      // Error is handled by useUserStore via toast
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10 text-foreground">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 rounded-xl border border-border bg-card shadow-md space-y-6"
      >
        <div className="text-center space-y-1">
          <img
            src={logo}
            alt="Lazeez Diet Logo"
            className="mx-auto w-20 h-20 object-contain rounded-full"
          />
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Lazeez Diet
          </h1>
          <p className="text-sm text-muted-foreground">
            Forgot your password? Don’t worry.
          </p>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              disabled={loading}
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
        </div>

        <div>
          {loading ? (
            <Button
              disabled
              className="w-full bg-purple-500 hover:bg-hoverPurple text-white"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Link...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-purple-500 hover:bg-hoverPurple text-white"
              disabled={!email.trim()}
            >
              Send Reset Link
            </Button>
          )}
        </div>

        <div className="text-center text-sm">
          <Link
            to="/login"
            className="text-purple-500 hover:text-blue-500 hover:underline"
          >
            Back to Login
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Lazeez Diet. All rights reserved.
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
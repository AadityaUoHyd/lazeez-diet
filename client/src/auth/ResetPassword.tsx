import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyholeIcon } from "lucide-react";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

// 👇 Import your logo (adjust the path if needed)
import logo from "../assets/lazeezdiet.png";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate backend call
      await new Promise((res) => setTimeout(res, 2000));
      alert("Password reset successful!");
    } catch (err) {
      console.error("Reset failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-background text-foreground px-4">
      <form
        onSubmit={handleSubmit}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-border bg-card shadow-sm space-y-6"
      >
        {/* 👇 Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="mx-auto w-20 h-20 object-contain rounded-full" />
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Reset Password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your new password to reset the old one.
          </p>
        </div>

        <div className="relative">
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your new password"
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyholeIcon className="absolute inset-y-2 left-2 text-muted-foreground pointer-events-none" />
        </div>

        {loading ? (
          <Button
            disabled
            className="w-full text-white bg-purple-500 hover:bg-hoverPurple"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full text-white bg-purple-500 hover:bg-hoverPurple"
          >
            Reset Password
          </Button>
        )}

        <p className="text-sm text-center">
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

export default ResetPassword;

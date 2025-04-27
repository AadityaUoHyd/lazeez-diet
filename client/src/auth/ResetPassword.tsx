import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyhole } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/lazeezdiet.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { token } = useParams();

  

const handleReset = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");
  try {
    await axios.post(
      `${import.meta.env.VITE_API_BACKEND_URL || "http://localhost:8000"}/api/v1/user/reset-password/${token}`,
      { newPassword }
    );
    setMessage("✅ Password has been reset successfully!");
    setNewPassword("");
  } catch (error: any) {
    setMessage(`❌ ${error.response?.data?.message || "Failed to reset password."}`);
  } finally {
    setLoading(false);
  }
};




  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-10 text-foreground">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md p-8 rounded-xl border border-border bg-card shadow-md space-y-6"
      >
        <div className="text-center space-y-1">
          <img
            src={logo}
            alt="Lazeez Diet Logo"
            className="mx-auto w-20 h-20 object-contain rounded-full"
          />
          <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Reset Password
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your new password below
          </p>
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="pl-10"
            />
            <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          </div>
        </div>

        {message && (
          <p
            className={`text-sm text-center ${
              message.startsWith("✅") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <div>
          {loading ? (
            <Button disabled className="w-full bg-purple-500 hover:bg-hoverPurple text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full bg-purple-500 hover:bg-hoverPurple text-white">
              Reset Password
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

        <p className="text-center text-xs text-muted-foreground mt-4">
          &copy; {new Date().getFullYear()} Lazeez Diet. All rights reserved.
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;

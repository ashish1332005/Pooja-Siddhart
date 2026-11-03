import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User } from "lucide-react";

const ADMIN_TOKEN_KEY = "admin_session_token";

export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem(ADMIN_TOKEN_KEY)) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    await new Promise((r) => setTimeout(r, 300));
    if (username.trim() && password.trim()) {
      sessionStorage.setItem(ADMIN_TOKEN_KEY, "local-admin-token");
      navigate("/admin/dashboard");
    } else {
      setErrorMsg("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your wedding invitation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 card-elegant">
          {errorMsg && (
            <div className="text-sm text-destructive text-center font-medium">{errorMsg}</div>
          )}
          <div>
            <label htmlFor="username" className="text-sm font-medium leading-none">
              Username
            </label>
            <div className="relative mt-2">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Username"
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Password
            </label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex h-10 px-4 py-2 items-center justify-center rounded-md text-sm font-medium bg-ivory text-sage-dark hover:bg-cream border border-gold/30 transition-colors"
          >
            {loading ? "Verifying..." : "Log in"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}


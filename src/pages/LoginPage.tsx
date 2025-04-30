
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pcos-card overflow-hidden">
          {/* Left Side */}
          <div className="bg-lavender/10 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-lavender-dark">
              Loved the experience?
            </h2>
            <p className="text-foreground/80 mb-6">
              Create an account to save your progress, receive personalized insights, 
              and connect with healthcare providers who understand your PCOS journey.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-lavender rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-display font-medium mb-1">Track Your Symptoms</h3>
                  <p className="text-sm text-muted-foreground">
                    Record your daily symptoms and visualize patterns over time
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-lavender rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-display font-medium mb-1">Get AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive personalized insights based on your health data
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-lavender rounded-full p-2 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-display font-medium mb-1">Connect with Specialists</h3>
                  <p className="text-sm text-muted-foreground">
                    Find doctors specialized in PCOS treatment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 md:p-10">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">Welcome Back</h2>
              <p className="text-muted-foreground">Log in to continue your PCOS journey</p>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border border-lavender/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-medium">
                    Password
                  </label>
                  <a href="#" className="text-xs text-lavender-dark hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border border-lavender/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full pcos-button-primary"
              >
                Log In
              </button>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-lavender/20"></div>
                </div>
                <div className="relative bg-card px-4 text-sm text-muted-foreground">
                  Or continue with
                </div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-lavender/30 rounded-full py-2 px-4 hover:bg-lavender/5 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <g fill="none">
                    <path
                      d="M17.876 10.284c0-.574-.052-1.127-.149-1.656H10v3.132h4.402a3.764 3.764 0 0 1-1.63 2.467v2.05h2.64c1.545-1.42 2.464-3.514 2.464-5.993z"
                      fill="#4285F4"
                    />
                    <path
                      d="M10 18c2.208 0 4.061-.728 5.413-1.966l-2.64-2.05c-.731.49-1.667.78-2.773.78-2.134 0-3.939-1.44-4.585-3.372H2.67v2.117A8.001 8.001 0 0 0 10 18z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.415 11.393c-.164-.49-.257-1.015-.257-1.555 0-.54.093-1.064.257-1.555V6.167H2.67A8.001 8.001 0 0 0 2 10c0 1.286.31 2.503.858 3.576l2.557-2.183z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M10 5.073c1.203 0 2.283.413 3.136 1.226l2.343-2.343C13.982 2.553 12.13 1.754 10 1.754A8.001 8.001 0 0 0 2.67 6.167l2.745 2.117C6.062 6.513 7.866 5.073 10 5.073z"
                      fill="#EA4335"
                    />
                  </g>
                </svg>
                Sign in with Google
              </button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/signup" className="text-lavender-dark hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/dashboard" className="pcos-button-primary inline-flex items-center gap-2">
            Continue to Dashboard
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default LoginPage;

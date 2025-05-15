import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="py-4 border-b border-lavender/20">
      <div className="pcos-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-lavender h-8 w-8 rounded-full flex items-center justify-center">
            <span className="font-display font-bold text-white">E</span>
          </div>
          <span className="font-display font-bold text-xl text-lavender-dark">
            OtoVee
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/approach"
            className="text-foreground hover:text-lavender-dark transition-colors"
          >
            PCOS Buddy
          </Link>
          <Link
            to="#"
            className="text-foreground hover:text-lavender-dark transition-colors"
          >
            About
          </Link>
          <Button variant="outline" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button
            className="bg-lavender hover:bg-lavender-dark text-primary-foreground"
            asChild
          >
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background z-50 border-b border-lavender/20 shadow-lg md:hidden">
            <div className="pcos-container py-4 flex flex-col gap-4">
              <Link
                to="/approach"
                className="text-foreground hover:text-lavender-dark transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                PCOS Buddy
              </Link>
              <Link
                to="#"
                className="text-foreground hover:text-lavender-dark transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/login"
                className="text-foreground hover:text-lavender-dark transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-lavender hover:bg-lavender-dark text-primary-foreground rounded-full py-2 px-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

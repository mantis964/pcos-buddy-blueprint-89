
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-lavender/20 mt-12">
      <div className="pcos-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-lavender h-6 w-6 rounded-full flex items-center justify-center">
              <span className="font-display font-bold text-xs text-white">P</span>
            </div>
            <span className="font-display font-medium text-sm text-lavender-dark">PCOS Buddy</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-lavender-dark transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-lavender-dark transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-lavender-dark transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PCOS Buddy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

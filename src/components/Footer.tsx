
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-lavender/20 mt-12">
      <div className="pcos-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-lavender h-6 w-6 rounded-full flex items-center justify-center">
              <span className="font-display font-bold text-xs text-white">E</span>
            </div>
            <span className="font-display font-medium text-sm text-lavender-dark">Ecolve Technologies</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-lavender-dark transition-colors">
              About
            </Link>
            <Link to="/careers" className="hover:text-lavender-dark transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-lavender-dark transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="border-t border-lavender/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Ecolve Technologies. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-lavender-dark transition-colors">
              Terms & Privacy
            </Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-lavender-dark transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-lavender-dark transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

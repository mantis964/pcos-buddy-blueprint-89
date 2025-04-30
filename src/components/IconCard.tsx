
import React from "react";
import { LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "lavender" | "pink" | "blue";
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  color = "lavender",
  className = "" 
}) => {
  const bgColorMap = {
    lavender: "bg-lavender/20",
    pink: "bg-pink/20",
    blue: "bg-blue/20"
  };
  
  const textColorMap = {
    lavender: "text-lavender-dark",
    pink: "text-pink-dark",
    blue: "text-blue-dark"
  };
  
  const bgColor = bgColorMap[color];
  const textColor = textColorMap[color];

  return (
    <div className={`pcos-card ${className}`}>
      <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mb-4`}>
        <Icon className={`${textColor}`} size={24} />
      </div>
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default IconCard;

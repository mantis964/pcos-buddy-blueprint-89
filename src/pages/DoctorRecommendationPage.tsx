
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Calendar, CheckCircle } from "lucide-react";
import PageContainer from "@/components/PageContainer";

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  tag: string;
  rating: number;
  location: string;
  availability: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  image,
  name,
  specialty,
  tag,
  rating,
  location,
  availability,
}) => {
  return (
    <div className="pcos-card hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-24 h-24 bg-lavender/20 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-display text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-1 mt-1 sm:mt-0">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">{specialty}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3">
            <div className="flex items-center gap-1 text-sm">
              <MapPin size={14} className="text-pink" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Calendar size={14} className="text-blue" />
              <span>{availability}</span>
            </div>
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="inline-flex items-center gap-1 bg-lavender/20 text-lavender-dark text-xs px-3 py-1 rounded-full">
              <CheckCircle size={12} />
              {tag}
            </span>
            
            <button className="pcos-button-outline text-sm py-2">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorRecommendationPage: React.FC = () => {
  const doctors = [
    {
      image: "/placeholder.svg",
      name: "Dr. Emily Chen",
      specialty: "Reproductive Endocrinologist",
      tag: "Suggested due to hormone imbalance",
      rating: 4.9,
      location: "New York, NY",
      availability: "Available next week"
    },
    {
      image: "/placeholder.svg",
      name: "Dr. Michael Johnson",
      specialty: "Gynecologist, PCOS Specialist",
      tag: "Suggested due to irregular cycles",
      rating: 4.7,
      location: "Remote Consultation",
      availability: "Available tomorrow"
    },
    {
      image: "/placeholder.svg",
      name: "Dr. Sarah Williams",
      specialty: "Endocrinologist",
      tag: "Suggested due to weight concerns",
      rating: 4.8,
      location: "Boston, MA",
      availability: "Available in 3 days"
    }
  ];

  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
          Recommended Specialists
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
          Based on your symptoms and AI analysis, we've matched you with these specialists 
          who have experience treating patients with similar PCOS profiles.
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/upload" className="pcos-button-primary inline-flex items-center gap-2">
            Select Your Specialist
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default DoctorRecommendationPage;

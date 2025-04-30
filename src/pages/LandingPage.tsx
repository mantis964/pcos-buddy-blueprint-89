
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const LandingPage: React.FC = () => {
  return (
    <PageContainer>
      <section className="py-12 md:py-24 pcos-container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-lavender-dark">
              Your trusted PCOS companion
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Navigate your PCOS journey with personalized guidance, 
              expert advice, and a supportive community. Take control of 
              your health with data-driven insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/approach" 
                className="pcos-button-primary flex items-center justify-center gap-2"
              >
                Explore how it works
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/login" 
                className="pcos-button-outline flex items-center justify-center gap-2"
              >
                Join now
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="aspect-square max-w-md mx-auto bg-lavender/20 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="PCOS Illustration" 
                  className="w-3/4 h-3/4 object-contain animate-pulse-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue/10">
        <div className="pcos-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-blue-dark">
              How PCOS Buddy helps you
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Track Symptoms",
                  description: "Log and monitor your PCOS symptoms over time"
                },
                {
                  title: "Get Insights",
                  description: "Receive personalized AI analysis of your health data"
                },
                {
                  title: "Expert Support",
                  description: "Connect with specialized healthcare providers"
                }
              ].map((item, index) => (
                <div key={index} className="pcos-card">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Link to="/approach" className="pcos-button-primary">
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default LandingPage;

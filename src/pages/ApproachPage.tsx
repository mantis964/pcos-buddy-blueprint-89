
import React from "react";
import { Link } from "react-router-dom";
import { User, Brain, UserRound, MessageSquare, ArrowRight } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const ApproachPage: React.FC = () => {
  return (
    <PageContainer>
      <section className="py-12 md:py-20 pcos-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-lavender-dark">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our comprehensive approach combines human expertise with 
            advanced technology to provide personalized PCOS care.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Flow Diagram */}
          <div className="relative">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-lavender/30" />
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: User,
                  title: "PCOS Buddy",
                  description: "Start with your own dedicated PCOS health coach"
                },
                {
                  icon: Brain,
                  title: "AI Engine",
                  description: "Data analysis provides personalized insights"
                },
                {
                  icon: UserRound,
                  title: "Doctor",
                  description: "Expert medical advice for your specific needs"
                },
                {
                  icon: MessageSquare,
                  title: "Chatbot",
                  description: "24/7 support for questions and guidance"
                }
              ].map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="bg-lavender rounded-full p-6 mb-4">
                    <step.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {step.description}
                  </p>
                  
                  {/* Arrow for mobile only */}
                  {index < 3 && (
                    <div className="mt-4 md:hidden">
                      <ArrowRight className="text-lavender mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Explainer Text */}
          <div className="mt-16 pcos-card bg-lavender/10 max-w-3xl mx-auto">
            <h3 className="font-display text-xl font-semibold mb-4">
              A Personalized PCOS Management Approach
            </h3>
            <p className="mb-4">
              Your PCOS Buddy supports you throughout your health journey, collecting and analyzing 
              your symptoms and data. Our AI engine processes this information to create 
              personalized insights, which are reviewed by specialized healthcare providers. 
            </p>
            <p className="mb-6">
              The result is a comprehensive care plan tailored specifically for your 
              PCOS needs, with continuous support from our chatbot.
            </p>
            
            <Link to="/buddy" className="pcos-button-primary inline-flex items-center gap-2">
              See it in action
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ApproachPage;

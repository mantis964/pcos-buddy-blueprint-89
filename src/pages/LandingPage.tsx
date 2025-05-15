import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import IconCard from "@/components/IconCard";
import { Input } from "@/components/ui/input";

const LandingPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-12 md:py-24 pcos-container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-lavender-dark">
              Smart Wellness for Every Woman
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Building science-backed, user-centered solutions for real women's
              health challenges — starting with PCOS Buddy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/approach"
                className="pcos-button-primary flex items-center justify-center gap-2"
              >
                Explore PCOS Buddy
                <ArrowRight size={18} />
              </Link>
              <Button className="border-lavender text-lavender-dark hover:bg-lavender/10">
                Stay Updated on Our Products
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square max-w-md mx-auto bg-lavender/20 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="./hero_image.jpeg"
                  alt="Women's Health Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About OtoVee */}
      <section className="py-12 bg-blue/10">
        <div className="pcos-container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-blue-dark">
              About Ecolve
            </h2>
            <p className="text-lg text-muted-foreground">
              Ecolve is a women-focused wellness tech company redefining how
              chronic conditions like PCOS are understood, tracked, and treated.
              We use smart technology, real-world insights, and holistic care
              models to build tools that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-12 pcos-container">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-lavender-dark">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PCOS Buddy */}
          <div className="pcos-card flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-lavender h-10 w-10 rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-white">P</span>
              </div>
              <h3 className="font-display text-xl font-semibold">PCOS Buddy</h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">
              A comprehensive companion app to help women track symptoms, get
              personalized insights, and feel seen.
            </p>
            <Link
              to="/approach"
              className="flex items-center text-lavender-dark hover:text-lavender font-medium"
            >
              View More <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Coming Soon Products */}
          <div className="pcos-card flex flex-col h-full bg-blue/5 border-blue/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue h-10 w-10 rounded-full flex items-center justify-center">
                <Clock className="text-blue-dark" size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold text-blue-dark">
                Coming Soon
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 flex-grow">
              Fertility Tracker, Hormonal Skincare, and More. We're expanding
              into adjacent areas — all with the same commitment to real,
              evidence-based care.
            </p>
            <Button className="border-blue text-blue-dark hover:bg-blue/10 w-fit">
              Get Notified
            </Button>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-12 bg-pink/10">
        <div className="pcos-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2 text-pink-dark">
              Why We Exist
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building solutions for the problems that have been
              overlooked for too long.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <div className="text-3xl font-bold text-pink-dark mb-2">80%</div>
              <p className="text-muted-foreground">
                of women with PCOS are misdiagnosed or untreated
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-3xl font-bold text-pink-dark mb-2">90%</div>
              <p className="text-muted-foreground">
                of existing health tools are generic, not personalized
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="text-3xl font-bold text-pink-dark mb-2">100%</div>
              <p className="text-muted-foreground">
                committed to changing that with real data and real empathy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PCOS Buddy - In Focus */}
      <section className="py-12 pcos-container">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-10 text-center text-lavender-dark">
          PCOS Buddy – In Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <IconCard
            icon={CheckCircle}
            title="Track Everything"
            description="Track your cycle, symptoms, moods, and meals with ease and clarity."
          />

          <IconCard
            icon={CheckCircle}
            title="AI-Driven Insights"
            description="Get personalized insights made for your unique body and symptoms."
            color="pink"
          />

          <IconCard
            icon={Users}
            title="Expert Support"
            description="Talk to experts and join a supportive community who understands."
            color="blue"
          />
        </div>

        <div className="text-center">
          <Link
            to="/signup"
            className="pcos-button-primary inline-flex items-center justify-center gap-2"
          >
            Join the PCOS Buddy Waitlist
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Join the Movement */}
      <section className="py-12 bg-lavender/10 rounded-lg my-12 mx-4">
        <div className="pcos-container">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 text-lavender-dark">
              Join the Movement
            </h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know about product launches, beta invites, and
              health resources.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow"
                required
              />
              <Button
                type="submit"
                className="bg-lavender hover:bg-lavender-dark text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default LandingPage;


import React from "react";
import { Link } from "react-router-dom";
import { Send, ThumbsUp, ThumbsDown, ArrowRight } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const SymptomCard: React.FC<{
  title: string;
  icon: string;
  options: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
}> = ({ title, icon, options, selectedIndex, onChange }) => {
  return (
    <div className="pcos-card">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedIndex === index
                ? "bg-lavender text-white"
                : "bg-lavender/10 text-lavender-dark hover:bg-lavender/20"
            }`}
            onClick={() => onChange(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const BuddyInteractionPage: React.FC = () => {
  // Mock state for symptom cards
  const [moodIndex, setMoodIndex] = React.useState(1);
  const [periodIndex, setPeriodIndex] = React.useState(2);
  const [weightIndex, setWeightIndex] = React.useState(0);
  const [acneIndex, setAcneIndex] = React.useState(1);

  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
          Check in with your PCOS Buddy
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left panel - Chat */}
          <div className="pcos-card flex flex-col h-[600px]">
            <div className="flex items-center gap-3 border-b border-lavender/20 pb-4 mb-4">
              <div className="bg-lavender h-10 w-10 rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-white">S</span>
              </div>
              <div>
                <h2 className="font-display font-semibold">Sarah</h2>
                <p className="text-xs text-muted-foreground">Your PCOS Buddy</p>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto mb-4 space-y-4">
              {/* Buddy Message */}
              <div className="flex gap-3">
                <div className="bg-lavender h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-white">S</span>
                </div>
                <div className="bg-lavender/10 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    Hi there! How are you feeling today? I'm here to help track your PCOS symptoms.
                  </p>
                  <span className="text-xs text-muted-foreground">10:30 AM</span>
                </div>
              </div>

              {/* User Message */}
              <div className="flex flex-row-reverse gap-3">
                <div className="bg-blue h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-white">Y</span>
                </div>
                <div className="bg-blue/10 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    I've been feeling a bit tired lately and noticed my acne flaring up again.
                  </p>
                  <span className="text-xs text-muted-foreground">10:32 AM</span>
                </div>
              </div>

              {/* Buddy Message */}
              <div className="flex gap-3">
                <div className="bg-lavender h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-white">S</span>
                </div>
                <div className="bg-lavender/10 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                  <p className="text-sm">
                    I'm sorry to hear that. Let's track your symptoms today to 
                    see if we can identify any patterns. Could you fill 
                    in the symptom cards on the right?
                  </p>
                  <span className="text-xs text-muted-foreground">10:33 AM</span>
                </div>
              </div>
            </div>

            <div className="border-t border-lavender/20 pt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-grow rounded-full border border-lavender/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                />
                <button className="bg-lavender hover:bg-lavender-dark text-white rounded-full p-2">
                  <Send size={20} />
                </button>
              </div>
              <div className="flex justify-between mt-2">
                <div className="text-xs text-muted-foreground">
                  Was this conversation helpful?
                </div>
                <div className="flex gap-2">
                  <button className="text-muted-foreground hover:text-lavender-dark">
                    <ThumbsUp size={16} />
                  </button>
                  <button className="text-muted-foreground hover:text-pink-dark">
                    <ThumbsDown size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel - Symptom cards */}
          <div className="flex flex-col gap-4">
            <SymptomCard
              title="Mood"
              icon="😊"
              options={["Great", "Good", "Neutral", "Low", "Bad"]}
              selectedIndex={moodIndex}
              onChange={setMoodIndex}
            />

            <SymptomCard
              title="Period"
              icon="📅"
              options={["Regular", "Early", "Late", "Irregular", "Missing"]}
              selectedIndex={periodIndex}
              onChange={setPeriodIndex}
            />

            <SymptomCard
              title="Weight"
              icon="⚖️"
              options={["Stable", "Slight Gain", "Significant Gain", "Slight Loss", "Significant Loss"]}
              selectedIndex={weightIndex}
              onChange={setWeightIndex}
            />

            <SymptomCard
              title="Acne"
              icon="🔍"
              options={["None", "Mild", "Moderate", "Severe"]}
              selectedIndex={acneIndex}
              onChange={setAcneIndex}
            />

            <div className="mt-4 flex justify-end">
              <Link to="/analysis" className="pcos-button-primary inline-flex items-center gap-2">
                Next Step
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default BuddyInteractionPage;

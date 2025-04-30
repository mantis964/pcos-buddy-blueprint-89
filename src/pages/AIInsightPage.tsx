
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, AlertTriangle, BadgeCheck } from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import PageContainer from "@/components/PageContainer";

// Mock data for charts
const hormoneData = [
  { month: "Jan", estrogen: 35, testosterone: 60, fsh: 12, lh: 14, progesterone: 2 },
  { month: "Feb", estrogen: 38, testosterone: 65, fsh: 10, lh: 16, progesterone: 1 },
  { month: "Mar", estrogen: 32, testosterone: 70, fsh: 9, lh: 18, progesterone: 2 },
  { month: "Apr", estrogen: 30, testosterone: 68, fsh: 8, lh: 20, progesterone: 1 },
  { month: "May", estrogen: 28, testosterone: 75, fsh: 7, lh: 22, progesterone: 3 },
  { month: "Jun", estrogen: 30, testosterone: 72, fsh: 9, lh: 21, progesterone: 2 },
];

const symptomData = [
  { name: "Week 1", acne: 2, hairLoss: 1, fatigue: 3, moodSwings: 2, bloating: 1 },
  { name: "Week 2", acne: 3, hairLoss: 1, fatigue: 2, moodSwings: 1, bloating: 2 },
  { name: "Week 3", acne: 4, hairLoss: 2, fatigue: 3, moodSwings: 3, bloating: 4 },
  { name: "Week 4", acne: 3, hairLoss: 2, fatigue: 4, moodSwings: 4, bloating: 3 },
];

const AIInsightPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
          AI Insights
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our AI has analyzed your reports and symptom history to provide 
          personalized insights about your PCOS condition.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side - Graphs */}
          <div className="space-y-8">
            {/* Hormone Level Graph */}
            <div className="pcos-card">
              <h2 className="font-display text-xl font-semibold mb-4">Hormone Levels</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hormoneData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="estrogen" 
                      stroke="#C9B6E4" 
                      strokeWidth={2}
                      name="Estrogen"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="testosterone" 
                      stroke="#F0B6C2" 
                      strokeWidth={2}
                      name="Testosterone"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="fsh" 
                      stroke="#B8DDED" 
                      strokeWidth={2}
                      name="FSH"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="lh" 
                      stroke="#FFD580" 
                      strokeWidth={2}
                      name="LH"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-pink-dark">Note:</span> Your testosterone levels are elevated 
                  compared to normal ranges, while estrogen is slightly low.
                </p>
              </div>
            </div>

            {/* Symptom Trend Graph */}
            <div className="pcos-card">
              <h2 className="font-display text-xl font-semibold mb-4">Symptom Trends</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={symptomData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="acne" fill="#C9B6E4" name="Acne" />
                    <Bar dataKey="hairLoss" fill="#F0B6C2" name="Hair Loss" />
                    <Bar dataKey="fatigue" fill="#B8DDED" name="Fatigue" />
                    <Bar dataKey="moodSwings" fill="#FFD580" name="Mood Swings" />
                    <Bar dataKey="bloating" fill="#A5D6A7" name="Bloating" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">
                  Severity scale: 1 (mild) to 5 (severe). Symptoms tend to increase around week 3.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Insight Cards */}
          <div className="space-y-6">
            {/* Summary Insight Card */}
            <div className="pcos-card bg-lavender/10">
              <div className="flex items-start gap-4">
                <div className="bg-lavender rounded-full p-2 mt-1">
                  <Brain size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold mb-2">Summary Analysis</h2>
                  <p className="text-foreground/80 mb-4">
                    Based on your reports and symptoms, our AI has identified a classic 
                    PCOS profile with hormonal imbalance characterized by elevated testosterone 
                    and LH/FSH ratio greater than 2:1. Your ultrasound results confirm polycystic 
                    ovaries with multiple small follicles.
                  </p>
                  <p className="text-foreground/80">
                    Your symptoms of acne, irregular periods, and mood fluctuations align with this 
                    hormonal pattern. The recent increase in symptoms correlates with the rise in 
                    testosterone levels observed over the past three months.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="pcos-card">
              <h2 className="font-display text-xl font-semibold mb-4">Key Findings</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-pink mt-1" />
                  <div>
                    <p className="font-medium">Hormone Imbalance</p>
                    <p className="text-sm text-muted-foreground">
                      Testosterone is 75 ng/dL (normal range: 15-70 ng/dL)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-pink mt-1" />
                  <div>
                    <p className="font-medium">Insulin Resistance</p>
                    <p className="text-sm text-muted-foreground">
                      Fasting insulin is elevated, suggesting insulin resistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-pink mt-1" />
                  <div>
                    <p className="font-medium">Ovarian Morphology</p>
                    <p className="text-sm text-muted-foreground">
                      12+ follicles visible in both ovaries on ultrasound
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="pcos-card">
              <h2 className="font-display text-xl font-semibold mb-4">Recommendations</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <BadgeCheck size={20} className="text-lavender-dark mt-1" />
                  <div>
                    <p className="font-medium">Medical Consultation</p>
                    <p className="text-sm text-muted-foreground">
                      Schedule an appointment with Dr. Emily Chen (Endocrinologist)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck size={20} className="text-lavender-dark mt-1" />
                  <div>
                    <p className="font-medium">Lifestyle Adjustments</p>
                    <p className="text-sm text-muted-foreground">
                      Low-glycemic diet and regular moderate exercise may help improve insulin sensitivity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BadgeCheck size={20} className="text-lavender-dark mt-1" />
                  <div>
                    <p className="font-medium">Further Testing</p>
                    <p className="text-sm text-muted-foreground">
                      Consider testing for vitamin D levels and thyroid function
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Logic Visual Block (simplified) */}
            <div className="pcos-card bg-blue/10 flex items-center justify-between">
              <div>
                <h3 className="font-display font-medium">Want to understand how we got here?</h3>
                <p className="text-sm text-muted-foreground">
                  See how our AI analyzed your data to reach these conclusions.
                </p>
              </div>
              <button className="pcos-button-outline text-sm">
                View AI Logic
              </button>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Link to="/chat" className="pcos-button-primary w-full inline-flex items-center justify-center gap-2">
                Discuss With Your PCOS Buddy
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AIInsightPage;

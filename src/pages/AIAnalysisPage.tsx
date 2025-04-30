
import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, Info } from "lucide-react";
import PageContainer from "@/components/PageContainer";

// Mock data for charts
const hormoneData = [
  { name: "Jan", estrogen: 45, testosterone: 60 },
  { name: "Feb", estrogen: 50, testosterone: 55 },
  { name: "Mar", estrogen: 40, testosterone: 70 },
  { name: "Apr", estrogen: 35, testosterone: 75 },
  { name: "May", estrogen: 30, testosterone: 80 },
  { name: "Jun", estrogen: 40, testosterone: 75 },
];

const cycleData = [
  { name: "Regular", value: 30 },
  { name: "Irregular", value: 70 },
];

const COLORS = ["#C9B6E4", "#F0B6C2"];

const AIAnalysisPage: React.FC = () => {
  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
          Your AI Analysis
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Report Card */}
          <div className="pcos-card">
            <h2 className="font-display font-semibold text-xl mb-4 flex items-center gap-2">
              Your Health Report
              <Info size={16} className="text-muted-foreground" />
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-lg mb-2">Symptom Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Mood", value: "Good", icon: "😊" },
                    { name: "Period", value: "Late", icon: "📅" },
                    { name: "Weight", value: "Stable", icon: "⚖️" },
                    { name: "Acne", value: "Mild", icon: "🔍" }
                  ].map((item, index) => (
                    <div key={index} className="bg-muted/40 p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span aria-hidden="true">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <p className="mt-1 text-sm text-foreground/80">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-lg mb-2">Risk Factors</h3>
                <div className="space-y-3">
                  <div className="bg-pink/10 p-3 rounded-lg">
                    <div className="font-medium">Irregular Periods</div>
                    <p className="text-sm text-foreground/80">
                      Your cycle has been irregular for the past 3 months.
                    </p>
                  </div>
                  <div className="bg-blue/10 p-3 rounded-lg">
                    <div className="font-medium">Hormone Imbalance</div>
                    <p className="text-sm text-foreground/80">
                      Testosterone levels have been elevated above normal range.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Link to="/doctors" className="pcos-button-primary inline-flex items-center gap-2">
                  Next Step
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Panel - Graphs and AI Summary */}
          <div className="space-y-8">
            {/* Hormonal Line Chart */}
            <div className="pcos-card">
              <h3 className="font-display text-lg mb-4">Hormonal Trends</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hormoneData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
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
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-lavender rounded-full"></div>
                  <span className="text-sm">Estrogen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-pink rounded-full"></div>
                  <span className="text-sm">Testosterone</span>
                </div>
              </div>
            </div>
            
            {/* Cycle Irregularity Pie Chart */}
            <div className="pcos-card">
              <h3 className="font-display text-lg mb-4">Cycle Irregularity</h3>
              <div className="h-64 flex items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={cycleData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {cycleData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* AI Summary Card */}
            <div className="pcos-card bg-lavender/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-lavender rounded-full p-2">
                  <Info size={16} className="text-white" />
                </div>
                <h3 className="font-display text-lg">AI Interpretation</h3>
              </div>
              <p className="text-foreground/80">
                Based on your symptom tracking and hormone trends, you're showing
                classic signs of PCOS with elevated testosterone and irregular cycles.
                Your mood is relatively stable, but the hormone imbalance is likely
                contributing to your mild acne. We recommend consulting with an
                endocrinologist for further evaluation and treatment options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default AIAnalysisPage;

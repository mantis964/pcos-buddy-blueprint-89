
import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  ShoppingBag,
  HelpCircle,
  BarChart3,
  Upload,
  Clock,
  User
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import PageContainer from "@/components/PageContainer";
import IconCard from "@/components/IconCard";

// Mock data for charts
const moodData = [
  { day: "Mon", value: 3 },
  { day: "Tue", value: 2 },
  { day: "Wed", value: 4 },
  { day: "Thu", value: 3 },
  { day: "Fri", value: 5 },
  { day: "Sat", value: 4 },
  { day: "Sun", value: 4 },
];

const energyData = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 3 },
  { day: "Wed", value: 2 },
  { day: "Thu", value: 4 },
  { day: "Fri", value: 3 },
  { day: "Sat", value: 5 },
  { day: "Sun", value: 4 },
];

const periodData = [
  { day: 1, flow: 1 },
  { day: 2, flow: 3 },
  { day: 3, flow: 4 },
  { day: 4, flow: 3 },
  { day: 5, flow: 2 },
  { day: 6, flow: 1 },
  { day: 7, flow: 0 },
];

const DashboardPage: React.FC = () => {
  return (
    <PageContainer className="bg-gray-50">
      <div className="pcos-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
          {/* Left Sidebar */}
          <div className="md:block">
            <div className="pcos-card sticky top-4 flex flex-col h-full">
              {/* User Profile Section */}
              <div className="flex items-center gap-4 pb-6 border-b border-lavender/20">
                <div className="bg-lavender h-12 w-12 rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Jessica Miller</h3>
                  <p className="text-xs text-muted-foreground">PCOS Warrior</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-grow py-6 space-y-1">
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg bg-lavender/10 text-lavender-dark font-medium"
                >
                  <BarChart3 size={18} />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Calendar size={18} />
                  <span>Calendar</span>
                </Link>
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText size={18} />
                  <span>Reports</span>
                </Link>
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Users size={18} />
                  <span>Community</span>
                </Link>
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Messages</span>
                </Link>
              </nav>

              {/* Footer Links */}
              <div className="border-t border-lavender/20 pt-4 space-y-1">
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ShoppingBag size={18} />
                  <span>Store</span>
                </Link>
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <HelpCircle size={18} />
                  <span>Help</span>
                </Link>
                <Link 
                  to="#" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-lavender/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </Link>
                <Link 
                  to="/" 
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink/5 text-pink-dark transition-colors"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Welcome Section */}
            <div className="pcos-card bg-gradient-to-r from-lavender/30 to-pink/30">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="font-display text-2xl font-bold mb-2">Good afternoon, Jessica!</h1>
                  <p className="text-foreground/80">
                    Here's an overview of your PCOS journey. You're making great progress!
                  </p>
                </div>
                <button className="pcos-button-primary self-start md:self-center">
                  Track Today's Symptoms
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <IconCard
                icon={Calendar}
                title="Cycle Day 16"
                description="Next period in 12 days"
                color="lavender"
              />
              <IconCard
                icon={Clock}
                title="Streak: 7 days"
                description="Keep tracking your symptoms!"
                color="pink"
              />
              <IconCard
                icon={Upload}
                title="Last Upload"
                description="Blood test (3 days ago)"
                color="blue"
              />
              <IconCard
                icon={User}
                title="Next Appointment"
                description="Dr. Chen - May 10"
                color="lavender"
              />
            </div>

            {/* First Card Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mood Card */}
              <div className="pcos-card">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <span>Mood Tracker</span>
                  <span className="text-sm bg-lavender/20 text-lavender-dark px-2 py-1 rounded-full">
                    Last 7 days
                  </span>
                </h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={moodData}>
                      <XAxis dataKey="day" />
                      <Tooltip />
                      <Line 
                        type="monotone"
                        dataKey="value"
                        stroke="#C9B6E4"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "#C9B6E4" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-muted-foreground">1 = Low, 5 = Great</span>
                  <button className="text-sm text-lavender-dark hover:underline">
                    See Details
                  </button>
                </div>
              </div>

              {/* Energy Card */}
              <div className="pcos-card">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <span>Energy Levels</span>
                  <span className="text-sm bg-blue/20 text-blue-dark px-2 py-1 rounded-full">
                    Last 7 days
                  </span>
                </h3>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={energyData}>
                      <XAxis dataKey="day" />
                      <Tooltip />
                      <Line 
                        type="monotone"
                        dataKey="value"
                        stroke="#B8DDED"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "#B8DDED" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-muted-foreground">1 = Exhausted, 5 = Energetic</span>
                  <button className="text-sm text-blue-dark hover:underline">
                    See Details
                  </button>
                </div>
              </div>
            </div>

            {/* Period Card */}
            <div className="pcos-card">
              <h3 className="font-display text-lg font-semibold mb-4">Last Period Flow</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={periodData}>
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Line 
                      type="monotone"
                      dataKey="flow"
                      stroke="#F0B6C2"
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#F0B6C2" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-muted-foreground">0 = None, 4 = Heavy flow</span>
                <button className="text-sm text-pink-dark hover:underline">
                  See Cycle History
                </button>
              </div>
            </div>

            {/* Doctor Notes & Report Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Doctor Notes */}
              <div className="pcos-card">
                <h3 className="font-display text-lg font-semibold mb-4">Doctor Notes</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-lavender pl-4">
                    <div className="flex justify-between items-start">
                      <p className="font-medium">Dr. Emily Chen</p>
                      <span className="text-xs text-muted-foreground">Apr 15</span>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Recommended starting metformin 500mg daily. Follow up in 3 months to check hormone levels.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-lavender pl-4">
                    <div className="flex justify-between items-start">
                      <p className="font-medium">Dr. Sarah Williams</p>
                      <span className="text-xs text-muted-foreground">Mar 3</span>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Nutritional plan discussed - focus on low glycemic index foods and anti-inflammatory diet.
                    </p>
                  </div>
                </div>
                
                <button className="mt-4 pcos-button-outline text-sm w-full">
                  View All Notes
                </button>
              </div>
              
              {/* Report Uploads */}
              <div className="pcos-card">
                <h3 className="font-display text-lg font-semibold mb-4">Recent Uploads</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <div className="bg-pink/20 p-2 rounded-lg">
                      <FileText size={20} className="text-pink-dark" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm">Blood Test Results</p>
                      <p className="text-xs text-muted-foreground">Uploaded 3 days ago</p>
                    </div>
                    <button className="text-xs text-lavender-dark hover:underline">
                      View
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <div className="bg-blue/20 p-2 rounded-lg">
                      <FileText size={20} className="text-blue-dark" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm">Ultrasound Report</p>
                      <p className="text-xs text-muted-foreground">Uploaded 2 weeks ago</p>
                    </div>
                    <button className="text-xs text-lavender-dark hover:underline">
                      View
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <div className="bg-lavender/20 p-2 rounded-lg">
                      <FileText size={20} className="text-lavender-dark" />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-sm">Hormone Panel</p>
                      <p className="text-xs text-muted-foreground">Uploaded 1 month ago</p>
                    </div>
                    <button className="text-xs text-lavender-dark hover:underline">
                      View
                    </button>
                  </div>
                </div>
                
                <button className="mt-4 pcos-button-outline text-sm w-full">
                  Upload New Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default DashboardPage;

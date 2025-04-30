
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ApproachPage from "./pages/ApproachPage";
import BuddyInteractionPage from "./pages/BuddyInteractionPage";
import AIAnalysisPage from "./pages/AIAnalysisPage";
import DoctorRecommendationPage from "./pages/DoctorRecommendationPage";
import ReportUploadPage from "./pages/ReportUploadPage";
import AIInsightPage from "./pages/AIInsightPage";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/buddy" element={<BuddyInteractionPage />} />
          <Route path="/analysis" element={<AIAnalysisPage />} />
          <Route path="/doctors" element={<DoctorRecommendationPage />} />
          <Route path="/upload" element={<ReportUploadPage />} />
          <Route path="/insight" element={<AIInsightPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

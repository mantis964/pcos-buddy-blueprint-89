
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, User, Bot, Users, FileText, ArrowRight } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Message {
  id: number;
  sender: "buddy" | "user" | "bot" | "system";
  content: string;
  timestamp: string;
}

const ChatPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("buddy");
  const [inputValue, setInputValue] = useState("");
  
  // Mock messages data
  const buddyMessages: Message[] = [
    {
      id: 1,
      sender: "buddy",
      content: "Hi there! I've reviewed your recent analysis. Your testosterone levels have been trending upward. Have you noticed any changes in your acne or hair growth?",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      sender: "user",
      content: "Yes, my acne has been getting worse, especially around my chin. And I think I'm seeing more hair on my upper lip.",
      timestamp: "10:32 AM"
    },
    {
      id: 3,
      sender: "buddy",
      content: "That's consistent with elevated androgens. Let me ask Dr. Chen about some topical treatments that might help. In the meantime, have you been able to keep up with the daily exercise we discussed?",
      timestamp: "10:35 AM"
    }
  ];
  
  const chatbotMessages: Message[] = [
    {
      id: 1,
      sender: "bot",
      content: "Hello! I'm your PCOS AI assistant. I can answer questions about PCOS, symptoms, treatments, and lifestyle changes. How can I help you today?",
      timestamp: "11:15 AM"
    },
    {
      id: 2,
      sender: "user",
      content: "What foods should I avoid with PCOS?",
      timestamp: "11:16 AM"
    },
    {
      id: 3,
      sender: "bot",
      content: "With PCOS, it's generally recommended to limit foods that cause blood sugar spikes, such as refined carbohydrates, sugary foods, and processed items. Many people with PCOS benefit from a low-glycemic diet that focuses on whole foods, lean proteins, healthy fats, and complex carbohydrates. Would you like me to provide some specific food suggestions?",
      timestamp: "11:16 AM"
    }
  ];
  
  const groupMessages: Message[] = [
    {
      id: 1,
      sender: "system",
      content: "Welcome to the PCOS Support Group Chat. Please be respectful and supportive of all members.",
      timestamp: "Yesterday"
    },
    {
      id: 2,
      sender: "user",
      content: "Hi everyone! I'm new here. Just diagnosed with PCOS last month and feeling a bit overwhelmed.",
      timestamp: "9:45 AM"
    },
    {
      id: 3,
      sender: "buddy",
      content: "Welcome to the group! Remember, you're not alone in this journey. We're here to support you!",
      timestamp: "9:47 AM"
    },
    {
      id: 4,
      sender: "user",
      content: "Thank you! Has anyone tried inositol supplements? My doctor recommended them but I'd love to hear about others' experiences.",
      timestamp: "9:50 AM"
    }
  ];

  const getMessagesForActiveTab = () => {
    switch (activeTab) {
      case "buddy":
        return buddyMessages;
      case "chatbot":
        return chatbotMessages;
      case "group":
        return groupMessages;
      default:
        return [];
    }
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the message here
    setInputValue("");
  };

  const getAvatarForSender = (sender: string) => {
    switch (sender) {
      case "buddy":
        return (
          <div className="bg-lavender h-8 w-8 rounded-full flex items-center justify-center">
            <span className="font-display font-bold text-white">S</span>
          </div>
        );
      case "bot":
        return (
          <div className="bg-blue h-8 w-8 rounded-full flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
        );
      case "user":
        return (
          <div className="bg-pink h-8 w-8 rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
        );
      case "system":
        return (
          <div className="bg-muted h-8 w-8 rounded-full flex items-center justify-center">
            <FileText size={16} className="text-muted-foreground" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageContainer>
      <div className="pcos-container py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
          Your Support Resources
        </h1>

        <div className="max-w-4xl mx-auto pcos-card min-h-[70vh] flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="buddy" className="flex items-center gap-2">
                <User size={16} />
                <span>Buddy</span>
              </TabsTrigger>
              <TabsTrigger value="chatbot" className="flex items-center gap-2">
                <Bot size={16} />
                <span>Chatbot</span>
              </TabsTrigger>
              <TabsTrigger value="group" className="flex items-center gap-2">
                <Users size={16} />
                <span>Group Chat</span>
              </TabsTrigger>
            </TabsList>

            {/* Chat Content Area - Shared for all tabs */}
            <div className="flex-grow flex flex-col">
              <div className="flex-grow overflow-y-auto mb-4 space-y-4 max-h-[50vh] min-h-[30vh] p-2">
                {getMessagesForActiveTab().map((message) => (
                  <div 
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}
                  >
                    {getAvatarForSender(message.sender)}
                    <div 
                      className={`rounded-2xl p-3 max-w-[80%] ${
                        message.sender === 'user' 
                          ? 'bg-pink/10 rounded-tr-none' 
                          : message.sender === 'system'
                            ? 'bg-muted/50'
                            : message.sender === 'bot'
                              ? 'bg-blue/10 rounded-tl-none'
                              : 'bg-lavender/10 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">
                        {message.content}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-lavender/20 pt-4">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow rounded-full border border-lavender/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender"
                  />
                  <button 
                    type="submit"
                    className="bg-lavender hover:bg-lavender-dark text-white rounded-full p-2"
                    disabled={!inputValue.trim()}
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </Tabs>
        </div>

        <div className="mt-8 text-center">
          <Link to="/login" className="pcos-button-primary inline-flex items-center gap-2">
            Continue to Login
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ChatPage;

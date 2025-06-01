import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import VoiceAssistantMockup from "@/components/VoiceAssistantMockup";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Демо голосового помощника
          </h1>
          <VoiceAssistantMockup />
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

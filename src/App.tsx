import React, { useEffect } from "react"; // Import useEffect
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollRestoration from "./components/ScrollRestoration";

import TechyBackground from "./components/TechyBackground";

const queryClient = new QueryClient();

const App = () => { // Convert to functional component
  useEffect(() => {
    // Check if the page was reloaded
    if (window.performance && window.performance.getEntriesByType("navigation").length > 0) {
      const navigationType = window.performance.getEntriesByType("navigation")[0].type;
      if (navigationType === 'reload') {
        sessionStorage.removeItem('heroRevealed');
        console.log("Cleared 'heroRevealed' from sessionStorage due to page reload.");
      }
    }
  }, []); // Run only once on mount

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TechyBackground />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollRestoration />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

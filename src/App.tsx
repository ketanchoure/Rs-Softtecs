import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JavaFullStackDevelopment from "./pages/JavaFullStackDevelopment";
import PythonFullStackDevelopment from "./pages/PythonFullStackDevelopment";
import CloudComputing from "./pages/CloudComputing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/java-full-stack-development" element={<JavaFullStackDevelopment />} />
          <Route path="/python-full-stack-development" element={<PythonFullStackDevelopment />} />
          <Route path="/cloud-Computing" element={<CloudComputing />} />
    
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

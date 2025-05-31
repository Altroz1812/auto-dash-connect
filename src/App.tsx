
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AndroidAuto from "./pages/AndroidAuto";
import OBDDiagnostics from "./pages/OBDDiagnostics";
import Settings from "./pages/Settings";
import MediaCenter from "./pages/MediaCenter";
import Navigation from "./pages/Navigation";
import Bluetooth from "./pages/Bluetooth";
import WiFi from "./pages/WiFi";
import Camera from "./pages/Camera";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/android-auto" element={<AndroidAuto />} />
          <Route path="/obd-diagnostics" element={<OBDDiagnostics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/media" element={<MediaCenter />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/bluetooth" element={<Bluetooth />} />
          <Route path="/wifi" element={<WiFi />} />
          <Route path="/camera" element={<Camera />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

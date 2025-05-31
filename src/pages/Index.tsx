
import { Car, Settings, Radio, Navigation, Bluetooth, Wifi, Camera, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAndroidAutoLaunch = async () => {
    try {
      // In a real implementation, this would invoke the autoapp binary
      // For demo purposes, we'll show a toast notification
      toast({
        title: "Launching Android Auto",
        description: "Starting autoapp binary...",
      });
      
      // Simulate the autoapp launch
      // In actual implementation: 
      // await window.electronAPI?.launchAutoApp('/home/pi/AutoDash/modules/OpenAuto/libs/openauto/bin/to/autoapp');
      
      console.log("Launching autoapp from: /home/pi/AutoDash/modules/OpenAuto/libs/openauto/bin/to/autoapp");
      
      // For demo, navigate to a placeholder page
      navigate('/android-auto');
    } catch (error) {
      toast({
        title: "Launch Failed",
        description: "Could not start Android Auto",
        variant: "destructive",
      });
    }
  };

  const menuItems = [
    {
      title: "Android Auto",
      icon: Car,
      onClick: handleAndroidAutoLaunch,
      description: "Connect your phone for navigation, music, and apps",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "OBD Diagnostics",
      icon: Wrench,
      onClick: () => navigate('/obd-diagnostics'),
      description: "Vehicle health and performance monitoring",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Media Center",
      icon: Radio,
      onClick: () => navigate('/media'),
      description: "Music, radio, and entertainment",
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "Navigation",
      icon: Navigation,
      onClick: () => navigate('/navigation'),
      description: "GPS navigation and route planning",
      color: "bg-orange-600 hover:bg-orange-700"
    },
    {
      title: "Bluetooth",
      icon: Bluetooth,
      onClick: () => navigate('/bluetooth'),
      description: "Manage Bluetooth connections",
      color: "bg-indigo-600 hover:bg-indigo-700"
    },
    {
      title: "Wi-Fi",
      icon: Wifi,
      onClick: () => navigate('/wifi'),
      description: "Wireless network settings",
      color: "bg-cyan-600 hover:bg-cyan-700"
    },
    {
      title: "Camera",
      icon: Camera,
      onClick: () => navigate('/camera'),
      description: "Parking assist and camera views",
      color: "bg-teal-600 hover:bg-teal-700"
    },
    {
      title: "Settings",
      icon: Settings,
      onClick: () => navigate('/settings'),
      description: "System configuration and preferences",
      color: "bg-gray-600 hover:bg-gray-700"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">AutoDash</h1>
        <p className="text-gray-400">Automotive Infotainment System</p>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center mb-8 p-4 bg-gray-900 rounded-lg">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">{new Date().toLocaleTimeString()}</div>
          <div className="text-gray-400">|</div>
          <div className="text-lg">Ready</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Bluetooth className="h-5 w-5 text-blue-400" />
            <span className="text-sm">Connected</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="h-5 w-5 text-green-400" />
            <span className="text-sm">Online</span>
          </div>
        </div>
      </div>

      {/* Main Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems.map((item, index) => (
          <Card key={index} className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-200 transform hover:scale-105">
            <CardContent className="p-0">
              <Button
                onClick={item.onClick}
                className={`w-full h-32 flex flex-col items-center justify-center space-y-2 ${item.color} text-white border-0 rounded-lg`}
                variant="default"
              >
                <item.icon className="h-8 w-8" />
                <span className="font-semibold">{item.title}</span>
              </Button>
              <div className="p-3">
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 flex justify-center space-x-4">
        <Button 
          variant="outline" 
          className="bg-red-600 hover:bg-red-700 text-white border-red-600"
          onClick={() => {
            toast({
              title: "System Shutdown",
              description: "Preparing to shutdown...",
            });
            // In real implementation: window.electronAPI?.shutdown();
          }}
        >
          Shutdown
        </Button>
        <Button 
          variant="outline"
          className="bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600"
          onClick={() => window.location.reload()}
        >
          Restart UI
        </Button>
      </div>
    </div>
  );
};

export default Index;

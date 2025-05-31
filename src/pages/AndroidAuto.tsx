
import { ArrowLeft, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const AndroidAuto = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Simulate autoapp launch and monitoring
    const timer = setTimeout(() => {
      toast({
        title: "Android Auto Ready",
        description: "Connect your phone via USB to continue",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [toast]);

  const handleExit = () => {
    toast({
      title: "Exiting Android Auto",
      description: "Returning to main dashboard...",
    });
    // In real implementation: window.electronAPI?.killAutoApp();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <Button
          onClick={handleExit}
          variant="ghost"
          className="text-white hover:bg-gray-800"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-xl font-bold">Android Auto</h1>
        <div className="w-24"></div> {/* Spacer for center alignment */}
      </div>

      {/* Android Auto Interface */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6">
          <Car className="h-24 w-24 text-green-500 mx-auto animate-pulse" />
          <h2 className="text-3xl font-bold">Android Auto</h2>
          <div className="space-y-4">
            <p className="text-gray-400">
              In a real implementation, this area would display the autoapp interface
            </p>
            <p className="text-gray-400">
              Binary path: /home/pi/AutoDash/modules/OpenAuto/libs/openauto/bin/to/autoapp
            </p>
            <div className="mt-8 p-6 bg-gray-900 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Connection Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>USB Connection:</span>
                  <span className="text-orange-400">Waiting...</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Detected:</span>
                  <span className="text-red-400">No</span>
                </div>
                <div className="flex justify-between">
                  <span>AutoApp Status:</span>
                  <span className="text-green-400">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AndroidAuto;

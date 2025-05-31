
import { ArrowLeft, Car, Smartphone, Usb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

const AndroidAuto = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [connectionStatus, setConnectionStatus] = useState({
    usb: false,
    phone: false,
    autoapp: false
  });
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    // Simulate connection sequence
    const connectionSequence = async () => {
      // Step 1: USB detection
      setTimeout(() => {
        setConnectionStatus(prev => ({ ...prev, usb: true }));
        toast({
          title: "USB Device Detected",
          description: "Android device found on USB port",
        });
      }, 1000);

      // Step 2: Phone handshake
      setTimeout(() => {
        setConnectionStatus(prev => ({ ...prev, phone: true }));
        toast({
          title: "Device Connected",
          description: "Android Auto handshake successful",
        });
      }, 3000);

      // Step 3: AutoApp ready
      setTimeout(() => {
        setConnectionStatus(prev => ({ ...prev, autoapp: true }));
        setIsConnecting(false);
        toast({
          title: "Android Auto Ready",
          description: "AutoApp interface is now active",
        });
      }, 5000);
    };

    connectionSequence();
  }, [toast]);

  const handleExit = () => {
    toast({
      title: "Exiting Android Auto",
      description: "Returning to main dashboard...",
    });
    // In real implementation: window.electronAPI?.killAutoApp();
    navigate('/');
  };

  const handleReconnect = () => {
    setConnectionStatus({ usb: false, phone: false, autoapp: false });
    setIsConnecting(true);
    toast({
      title: "Reconnecting",
      description: "Attempting to reconnect to Android Auto...",
    });
    // Restart the connection sequence
    window.location.reload();
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
        <Button
          onClick={handleReconnect}
          variant="ghost"
          className="text-white hover:bg-gray-800"
        >
          Reconnect
        </Button>
      </div>

      {/* Android Auto Interface */}
      <div className="flex-1 flex items-center justify-center">
        {connectionStatus.autoapp ? (
          // Connected state - show Android Auto interface
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-center space-y-6">
              <Car className="h-24 w-24 text-green-500 mx-auto" />
              <h2 className="text-3xl font-bold text-green-400">Android Auto Active</h2>
              <p className="text-gray-300">
                AutoApp is running. Your phone's interface is now mirrored.
              </p>
              <div className="mt-8 p-6 bg-black rounded-lg border border-green-500">
                <p className="text-green-400 font-mono">
                  autoapp: /home/pi/AutoDash/modules/OpenAuto/libs/openauto/bin/to/autoapp
                </p>
                <p className="text-green-400 font-mono mt-2">
                  Status: ACTIVE | Device: Connected | Audio: Ready
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Connecting state
          <div className="text-center space-y-6">
            <div className="relative">
              <Car className={`h-24 w-24 mx-auto ${isConnecting ? 'text-blue-500 animate-pulse' : 'text-green-500'}`} />
              {isConnecting && (
                <div className="absolute -top-2 -right-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
            <h2 className="text-3xl font-bold">Android Auto</h2>
            <div className="space-y-4">
              <p className="text-gray-400">
                {isConnecting ? "Establishing connection..." : "Ready to connect"}
              </p>
              <div className="mt-8 p-6 bg-gray-900 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Connection Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Usb className="h-5 w-5" />
                      <span>USB Connection:</span>
                    </div>
                    <span className={connectionStatus.usb ? "text-green-400" : "text-orange-400"}>
                      {connectionStatus.usb ? "Connected" : "Detecting..."}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-5 w-5" />
                      <span>Phone Handshake:</span>
                    </div>
                    <span className={connectionStatus.phone ? "text-green-400" : connectionStatus.usb ? "text-orange-400" : "text-gray-500"}>
                      {connectionStatus.phone ? "Complete" : connectionStatus.usb ? "In Progress..." : "Waiting"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Car className="h-5 w-5" />
                      <span>AutoApp Status:</span>
                    </div>
                    <span className={connectionStatus.autoapp ? "text-green-400" : "text-blue-400"}>
                      {connectionStatus.autoapp ? "Active" : "Starting..."}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AndroidAuto;

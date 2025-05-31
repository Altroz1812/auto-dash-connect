
import { ArrowLeft, Wifi as WifiIcon, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const WiFi = () => {
  const navigate = useNavigate();

  const wifiNetworks = [
    { name: "Home_Network", secured: true, strength: 4, connected: true },
    { name: "Car_Hotspot", secured: true, strength: 3, connected: false },
    { name: "Public_WiFi", secured: false, strength: 2, connected: false },
    { name: "Mobile_Hotspot", secured: true, strength: 1, connected: false }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="text-white hover:bg-gray-800"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Wi-Fi</h1>
        <div className="w-20"></div>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <WifiIcon className="h-5 w-5 mr-2" />
              Wi-Fi Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span>Wi-Fi</span>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Scan for Networks
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>Available Networks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {wifiNetworks.map((network, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <WifiIcon className="h-5 w-5" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span>{network.name}</span>
                        {network.secured && <Lock className="h-3 w-3" />}
                      </div>
                      <div className="text-xs text-gray-400">
                        Signal: {network.strength}/4
                      </div>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    network.connected ? 'bg-green-600' : 'bg-gray-600'
                  }`}>
                    {network.connected ? 'Connected' : 'Available'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WiFi;

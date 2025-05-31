
import { ArrowLeft, Bluetooth as BluetoothIcon, Smartphone, Speaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Bluetooth = () => {
  const navigate = useNavigate();

  const connectedDevices = [
    { name: "iPhone 12", type: "phone", connected: true },
    { name: "Samsung Galaxy", type: "phone", connected: false },
    { name: "Bluetooth Speaker", type: "audio", connected: true }
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
        <h1 className="text-2xl font-bold">Bluetooth</h1>
        <div className="w-20"></div>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BluetoothIcon className="h-5 w-5 mr-2" />
              Bluetooth Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span>Bluetooth</span>
              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4">
              Scan for Devices
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>Connected Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {connectedDevices.map((device, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {device.type === 'phone' ? (
                      <Smartphone className="h-5 w-5" />
                    ) : (
                      <Speaker className="h-5 w-5" />
                    )}
                    <span>{device.name}</span>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    device.connected ? 'bg-green-600' : 'bg-gray-600'
                  }`}>
                    {device.connected ? 'Connected' : 'Disconnected'}
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

export default Bluetooth;

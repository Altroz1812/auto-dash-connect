
import { ArrowLeft, Activity, Thermometer, Fuel, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const OBDDiagnostics = () => {
  const navigate = useNavigate();
  const [obdData, setObdData] = useState({
    speed: 0,
    rpm: 0,
    engineTemp: 85,
    fuelLevel: 75,
    voltage: 12.4,
    connected: false
  });

  const [dtcCodes, setDtcCodes] = useState([
    { code: "P0171", description: "System Too Lean (Bank 1)", severity: "warning" },
    { code: "P0420", description: "Catalyst System Efficiency Below Threshold", severity: "error" }
  ]);

  useEffect(() => {
    // Simulate OBD data updates
    const interval = setInterval(() => {
      setObdData(prev => ({
        ...prev,
        speed: Math.floor(Math.random() * 80),
        rpm: Math.floor(Math.random() * 3000) + 800,
        engineTemp: 85 + Math.floor(Math.random() * 10),
        connected: Math.random() > 0.1 // 90% connection rate
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="text-white hover:bg-gray-800"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">OBD-II Diagnostics</h1>
        <div className="w-20"></div>
      </div>

      {/* Connection Status */}
      <Card className="bg-gray-900 border-gray-700 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="h-5 w-5 mr-2" />
            Connection Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className={`h-3 w-3 rounded-full ${obdData.connected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span>{obdData.connected ? 'Connected to ECU' : 'Disconnected'}</span>
          </div>
        </CardContent>
      </Card>

      {/* Real-time Data */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obdData.speed}</div>
            <div className="text-sm text-gray-400">km/h</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">RPM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obdData.rpm}</div>
            <div className="text-sm text-gray-400">rev/min</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center">
              <Thermometer className="h-4 w-4 mr-1" />
              Engine Temp
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obdData.engineTemp}</div>
            <div className="text-sm text-gray-400">°C</div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm flex items-center">
              <Fuel className="h-4 w-4 mr-1" />
              Fuel Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{obdData.fuelLevel}</div>
            <div className="text-sm text-gray-400">%</div>
          </CardContent>
        </Card>
      </div>

      {/* Diagnostic Trouble Codes */}
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Diagnostic Trouble Codes
          </CardTitle>
        </CardHeader>
        <CardContent>
          {dtcCodes.length === 0 ? (
            <p className="text-green-400">No trouble codes found</p>
          ) : (
            <div className="space-y-3">
              {dtcCodes.map((code, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                  <div>
                    <div className="font-semibold">{code.code}</div>
                    <div className="text-sm text-gray-400">{code.description}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${
                    code.severity === 'error' ? 'bg-red-600' : 'bg-yellow-600'
                  }`}>
                    {code.severity.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OBDDiagnostics;

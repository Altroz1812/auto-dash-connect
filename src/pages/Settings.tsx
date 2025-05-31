
import { ArrowLeft, Monitor, Volume2, Palette, Clock, Wifi, Bluetooth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Settings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    brightness: [80],
    volume: [65],
    autoLaunchAndroidAuto: false,
    darkMode: true,
    showClock: true,
    autoConnectBluetooth: true,
    autoConnectWifi: true,
    screenTimeout: [30]
  });

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

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
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="w-20"></div>
      </div>

      <div className="space-y-6">
        {/* Display Settings */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Monitor className="h-5 w-5 mr-2" />
              Display Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Screen Brightness</label>
              <Slider
                value={settings.brightness}
                onValueChange={(value) => updateSetting('brightness', value)}
                max={100}
                step={10}
                className="w-full"
              />
              <div className="text-xs text-gray-400">{settings.brightness[0]}%</div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Screen Timeout (minutes)</label>
              <Slider
                value={settings.screenTimeout}
                onValueChange={(value) => updateSetting('screenTimeout', value)}
                max={120}
                step={5}
                min={5}
                className="w-full"
              />
              <div className="text-xs text-gray-400">{settings.screenTimeout[0]} minutes</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Palette className="h-4 w-4" />
                <span>Dark Mode</span>
              </div>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={(checked) => updateSetting('darkMode', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Show Clock</span>
              </div>
              <Switch
                checked={settings.showClock}
                onCheckedChange={(checked) => updateSetting('showClock', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Audio Settings */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Volume2 className="h-5 w-5 mr-2" />
              Audio Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">System Volume</label>
              <Slider
                value={settings.volume}
                onValueChange={(value) => updateSetting('volume', value)}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="text-xs text-gray-400">{settings.volume[0]}%</div>
            </div>
          </CardContent>
        </Card>

        {/* Android Auto Settings */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>Android Auto Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Auto-launch on USB connection</span>
              <Switch
                checked={settings.autoLaunchAndroidAuto}
                onCheckedChange={(checked) => updateSetting('autoLaunchAndroidAuto', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Connectivity Settings */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>Connectivity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bluetooth className="h-4 w-4" />
                <span>Auto-connect Bluetooth</span>
              </div>
              <Switch
                checked={settings.autoConnectBluetooth}
                onCheckedChange={(checked) => updateSetting('autoConnectBluetooth', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4" />
                <span>Auto-connect Wi-Fi</span>
              </div>
              <Switch
                checked={settings.autoConnectWifi}
                onCheckedChange={(checked) => updateSetting('autoConnectWifi', checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* System Actions */}
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>System Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Restart System
            </Button>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Factory Reset
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Check for Updates
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;

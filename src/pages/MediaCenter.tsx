
import { ArrowLeft, Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MediaCenter = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong] = useState({
    title: "Sample Track",
    artist: "Sample Artist",
    album: "Sample Album"
  });

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
        <h1 className="text-2xl font-bold">Media Center</h1>
        <div className="w-20"></div>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>Now Playing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold">{currentSong.title}</h3>
              <p className="text-gray-400">{currentSong.artist}</p>
              <p className="text-gray-500 text-sm">{currentSong.album}</p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon">
                <SkipBack className="h-6 w-6" />
              </Button>
              <Button 
                onClick={() => setIsPlaying(!isPlaying)}
                size="icon"
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">FM Radio</h3>
              <p className="text-gray-400">102.5 MHz</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">Bluetooth Audio</h3>
              <p className="text-gray-400">Connected</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MediaCenter;

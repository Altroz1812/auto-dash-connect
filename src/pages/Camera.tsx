
import { ArrowLeft, Camera as CameraIcon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Camera = () => {
  const navigate = useNavigate();

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
        <h1 className="text-2xl font-bold">Camera & Parking Assist</h1>
        <div className="w-20"></div>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CameraIcon className="h-5 w-5 mr-2" />
              Camera Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-24 bg-gray-800 hover:bg-gray-700 flex flex-col items-center justify-center">
                <Eye className="h-6 w-6 mb-2" />
                <span>Rear Camera</span>
              </Button>
              <Button className="h-24 bg-gray-800 hover:bg-gray-700 flex flex-col items-center justify-center">
                <Eye className="h-6 w-6 mb-2" />
                <span>Front Camera</span>
              </Button>
              <Button className="h-24 bg-gray-800 hover:bg-gray-700 flex flex-col items-center justify-center">
                <Eye className="h-6 w-6 mb-2" />
                <span>Left Camera</span>
              </Button>
              <Button className="h-24 bg-gray-800 hover:bg-gray-700 flex flex-col items-center justify-center">
                <Eye className="h-6 w-6 mb-2" />
                <span>Right Camera</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle>Parking Assist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <CameraIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <p className="text-gray-400">Parking assist features ready</p>
              <p className="text-sm text-gray-500 mt-2">
                Camera integration for parking assistance and 360° view
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Camera;

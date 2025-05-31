
import { ArrowLeft, Navigation as NavigationIcon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
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
        <h1 className="text-2xl font-bold">Navigation</h1>
        <div className="w-20"></div>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <NavigationIcon className="h-5 w-5 mr-2" />
              GPS Navigation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-400">Navigation features would be integrated here</p>
              <p className="text-sm text-gray-500 mt-2">
                This could integrate with OpenStreetMap or other mapping services
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">Recent Destinations</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Home</div>
                <div>Work</div>
                <div>Shopping Center</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <h3 className="font-bold mb-2">Favorites</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Gas Station</div>
                <div>Parking Lot</div>
                <div>Restaurant</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

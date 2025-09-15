import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CampusMap = () => {
  const [mapView, setMapView] = useState('satellite');
  
  // Mock coordinates for GM University AIML Branch
  const campusLocation = {
    lat: 12.9716,
    lng: 77.5946,
    address: "GM University, AIML Branch, Electronic City, Bangalore, Karnataka 560100"
  };

  const mapViews = [
    { id: 'satellite', label: 'Satellite', icon: 'Satellite' },
    { id: 'roadmap', label: 'Roadmap', icon: 'Map' },
    { id: 'terrain', label: 'Terrain', icon: 'Mountain' }
  ];

  const nearbyLandmarks = [
    { name: "Electronic City Metro Station", distance: "2.1 km", icon: "Train" },
    { name: "Infosys Campus", distance: "1.8 km", icon: "Building2" },
    { name: "Forum Mall", distance: "3.2 km", icon: "ShoppingBag" },
    { name: "Bannerghatta Road", distance: "4.5 km", icon: "Navigation" }
  ];

  const transportOptions = [
    { type: "Metro", details: "Electronic City Station - 2.1 km", icon: "Train", color: "text-blue-600" },
    { type: "Bus", details: "Multiple BMTC routes available", icon: "Bus", color: "text-green-600" },
    { type: "Taxi/Cab", details: "Uber, Ola readily available", icon: "Car", color: "text-yellow-600" },
    { type: "Parking", details: "On-campus parking available", icon: "ParkingCircle", color: "text-purple-600" }
  ];

  const handleDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${campusLocation?.lat},${campusLocation?.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleShareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'GM University AIML Branch Location',
        text: 'Visit us at GM University AIML Branch',
        url: `https://maps.google.com/?q=${campusLocation?.lat},${campusLocation?.lng}`
      });
    } else {
      navigator.clipboard?.writeText(`https://maps.google.com/?q=${campusLocation?.lat},${campusLocation?.lng}`);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-royal">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon name="MapPin" size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Campus Location</h2>
              <p className="text-gray-600">Find us on the map</p>
            </div>
          </div>
          <div className="flex space-x-2">
            {mapViews?.map((view) => (
              <button
                key={view?.id}
                onClick={() => setMapView(view?.id)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  mapView === view?.id
                    ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={view?.label}
              >
                <Icon name={view?.icon} size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Map Container */}
      <div className="relative">
        <div className="h-80 bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="GM University AIML Branch Location"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${campusLocation?.lat},${campusLocation?.lng}&z=16&output=embed&maptype=${mapView}`}
            className="border-0"
          />
        </div>
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            variant="secondary"
            size="sm"
            iconName="Navigation"
            onClick={handleDirections}
            className="bg-white/90 backdrop-blur-sm shadow-lg"
          >
            Directions
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Share"
            onClick={handleShareLocation}
            className="bg-white/90 backdrop-blur-sm shadow-lg"
          >
            Share
          </Button>
        </div>
      </div>
      {/* Location Details */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
          <div className="flex items-start space-x-3">
            <Icon name="MapPin" size={20} className="text-primary mt-1" />
            <div>
              <p className="text-gray-700">{campusLocation?.address}</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={handleDirections}
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
                >
                  <Icon name="Navigation" size={14} />
                  <span>Get Directions</span>
                </button>
                <button
                  onClick={() => navigator.clipboard?.writeText(campusLocation?.address)}
                  className="text-gray-600 hover:text-gray-800 text-sm font-medium flex items-center space-x-1"
                >
                  <Icon name="Copy" size={14} />
                  <span>Copy Address</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Nearby Landmarks</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nearbyLandmarks?.map((landmark, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-white rounded-lg">
                  <Icon name={landmark?.icon} size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{landmark?.name}</p>
                  <p className="text-xs text-gray-600">{landmark?.distance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Reach</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {transportOptions?.map((option, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                <Icon name={option?.icon} size={20} className={option?.color} />
                <div>
                  <p className="font-medium text-gray-900">{option?.type}</p>
                  <p className="text-sm text-gray-600">{option?.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;
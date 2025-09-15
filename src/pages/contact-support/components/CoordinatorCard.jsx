import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CoordinatorCard = ({ coordinator }) => {
  const handleContact = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value?.replace(/[^0-9]/g, '')}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 card-hover shadow-royal">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
            <Image
              src={coordinator?.avatar}
              alt={coordinator?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{coordinator?.name}</h3>
              <p className="text-sm text-primary font-medium">{coordinator?.role}</p>
            </div>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {coordinator?.department}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4">{coordinator?.description}</p>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={14} className="text-gray-500" />
              <span className="text-sm text-gray-700">{coordinator?.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={14} className="text-gray-500" />
              <span className="text-sm text-gray-700">{coordinator?.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} className="text-gray-500" />
              <span className="text-sm text-gray-700">{coordinator?.officeHours}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={14} className="text-gray-500" />
              <span className="text-sm text-gray-700">{coordinator?.office}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Mail"
              iconPosition="left"
              onClick={() => handleContact('email', coordinator?.email)}
            >
              Email
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              onClick={() => handleContact('phone', coordinator?.phone)}
            >
              Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => handleContact('whatsapp', coordinator?.whatsapp)}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorCard;
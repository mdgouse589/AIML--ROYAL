import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactCard = ({ title, description, icon, contactInfo, actionLabel, onAction, variant = "default" }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-primary to-primary/90 text-white border-primary/20';
      case 'secondary':
        return 'bg-gradient-to-br from-secondary to-accent text-black border-secondary/20';
      case 'success':
        return 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-emerald-200';
      default:
        return 'bg-white text-gray-900 border-gray-200 hover:border-primary/30';
    }
  };

  return (
    <div className={`p-6 rounded-xl border-2 transition-all duration-300 card-hover shadow-royal ${getVariantStyles()}`}>
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${variant === 'default' ? 'bg-primary/10' : 'bg-white/20'}`}>
          <Icon 
            name={icon} 
            size={24} 
            className={variant === 'default' ? 'text-primary' : 'text-current'} 
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className={`text-sm mb-4 ${variant === 'default' ? 'text-gray-600' : 'text-current opacity-90'}`}>
            {description}
          </p>
          <div className="space-y-2 mb-4">
            {contactInfo?.map((info, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Icon 
                  name={info?.icon} 
                  size={16} 
                  className={variant === 'default' ? 'text-gray-500' : 'text-current opacity-75'} 
                />
                <span className={`text-sm ${variant === 'default' ? 'text-gray-700' : 'text-current'}`}>
                  {info?.value}
                </span>
              </div>
            ))}
          </div>
          {actionLabel && onAction && (
            <Button
              variant={variant === 'default' ? 'outline' : 'secondary'}
              size="sm"
              onClick={onAction}
              className={variant === 'default' ? '' : 'bg-white/20 border-white/30 text-current hover:bg-white/30'}
            >
              {actionLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
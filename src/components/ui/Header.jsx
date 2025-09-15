import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage-royal-academic-portal' },
    { name: 'About', path: '/about-department-academic-heritage' },
    { name: 'Programs', path: '/programs-courses-academic-excellence-hub' },
    { name: 'Faculty', path: '/faculty-constellation-distinguished-educators' },
    { name: 'Research', path: '/research-innovation-center' }
  ];

const moreMenuItems = [
  { name: 'AI More', path: '/ai-more' } // ye naya route
]

  const isActivePath = (path) => location?.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass-morphism shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/homepage-royal-academic-portal"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 royal-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-accent font-bold text-xl font-playfair">AI</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary text-xs font-bold">ML</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-playfair font-bold text-white group-hover:text-accent transition-colors duration-300">
                AIML Royal
              </h1>
              <p className="text-xs text-accent/80 -mt-1">Academic Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${isActivePath(item?.path)
                    ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
              >
                {item?.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ${isActivePath(item?.path)
                      ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors duration-300">
                <span>More</span>
                <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>

              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg royal-shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://gmu.ac.in/public/admission-card/branch/ai.html" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                Apply Now
              </Button>
            </a>

            <Button
              className="gold-gradient text-primary hover:scale-105 transition-transform duration-300"
            >
              Contact Coordinator
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors duration-300"
          >
            <Icon
              name={isMobileMenuOpen ? "X" : "Menu"}
              size={24}
              className="transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen
              ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-primary/95 backdrop-blur-lg border-t border-accent/20">
            <nav className="px-6 py-4 space-y-2">
              {[...navigationItems, ...moreMenuItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${isActivePath(item?.path)
                      ? 'bg-accent text-primary' : 'text-white hover:bg-white/10 hover:text-accent'
                    }`}
                >
                  {item?.name}
                </Link>
              ))}

              <div className="pt-4 space-y-2">
                <a href="https://gmu.ac.in/public/admission-card/branch/ai.html" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-primary"
                  >
                    Apply Now
                  </Button>
                </a>

                <Button
                  fullWidth
                  className="gold-gradient text-primary"
                >
                  Contact Coordinator
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
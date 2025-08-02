import { FC, useState } from 'react';
import { Search, Menu, X, MapPin, Calendar, Users } from 'lucide-react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const accommodationTypes = [
    { id: 1, name: 'Rooms', icon: '🏠' },
    { id: 2, name: 'Mansion', icon: '🏰' },
    { id: 3, name: 'Countryside', icon: '🌾' },
    { id: 4, name: 'Beach House', icon: '🏖️' },
    { id: 5, name: 'Apartment', icon: '🏢' },
    { id: 6, name: 'Villa', icon: '🏡' },
    { id: 7, name: 'Cabin', icon: '🛖' },
    { id: 8, name: 'Penthouse', icon: '🏙️' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AL</span>
                </div>
                <span className="text-xl font-bold text-gray-900">AccomListing</span>
              </div>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className={`relative w-full transition-all duration-300 ${
              isSearchFocused ? 'transform scale-105' : ''
            }`}>
              <div className="flex items-center bg-white border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                {/* Location */}
                <div className="flex-1 px-4 py-3 border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div className="flex-1 px-4 py-3 border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Check in"
                      className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="flex-1 px-4 py-3 border-r border-gray-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Check out"
                      className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="flex-1 px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Guests"
                      className="w-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full mr-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 font-medium shadow-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Where do you want to stay?"
                className="flex-1 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            <button className="block w-full text-left text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Sign In
            </button>
            <button className="block w-full text-left bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Sign Up
            </button>
          </div>
        )}
      </div>

      {/* Accommodation Types */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
            {accommodationTypes.map((type) => (
              <button
                key={type.id}
                className="flex flex-col items-center space-y-2 min-w-0 flex-shrink-0 group hover:bg-white hover:shadow-sm rounded-lg p-3 transition-all duration-200"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
                  {type.icon}
                </div>
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 whitespace-nowrap">
                  {type.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
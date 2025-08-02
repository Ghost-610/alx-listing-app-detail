import React, { useState } from 'react';
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mock additional images - in a real app, these would come from your property data
  const additionalImages = [
    property.image,
    "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'amenities', label: 'What we offer' },
    { id: 'host', label: 'About host' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Grid */}
      <div className="mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="relative">
            <img
              src={additionalImages[selectedImageIndex]}
              alt={property.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {additionalImages.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.name} ${index + 2}`}
                className="w-full h-44 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setSelectedImageIndex(index + 1)}
              />
            ))}
          </div>
        </div>
        <div className="flex mt-4 space-x-2 overflow-x-auto">
          {additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer flex-shrink-0 ${
                selectedImageIndex === index ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
              }`}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="pb-6">
          {activeTab === 'overview' && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">About this place</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                    🏠
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Entire place</p>
                    <p className="text-sm text-gray-600">You'll have the place to yourself</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    ✨
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Enhanced Clean</p>
                    <p className="text-sm text-gray-600">Deep cleaned between stays</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                    🔑
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Self check-in</p>
                    <p className="text-sm text-gray-600">Easy access with keypad</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'amenities' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.category.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">House rules</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-gray-700">Check-in: 3:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center text-green-600">
                      ✓
                    </div>
                    <span className="text-gray-700">Checkout: 11:00 AM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center text-red-600">
                      ✗
                    </div>
                    <span className="text-gray-700">No smoking</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center text-red-600">
                      ✗
                    </div>
                    <span className="text-gray-700">No pets allowed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center text-red-600">
                      ✗
                    </div>
                    <span className="text-gray-700">No parties or events</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'host' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Meet your host</h2>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Host"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
                  <p className="text-gray-600 mb-2">Superhost • Host since 2019</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span>★ 4.9 rating</span>
                    <span>127 reviews</span>
                    <span>5+ years hosting</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Hi! I'm John, and I love sharing my beautiful property with guests from around the world. 
                    I'm passionate about hospitality and ensuring every guest has an amazing stay. 
                    I'm always available to help with recommendations or answer any questions you might have.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Response rate</h4>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Response time</h4>
                  <p className="text-2xl font-bold text-gray-900">Within an hour</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
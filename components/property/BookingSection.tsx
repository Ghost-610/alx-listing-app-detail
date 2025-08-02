import React, { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const nightsDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return nightsDiff > 0 ? nightsDiff : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const subtotal = nights * price;
  const serviceFee = subtotal * 0.12;
  const cleaningFee = 50;
  const total = subtotal + serviceFee + cleaningFee;

  const handleReserve = () => {
    if (!checkIn || !checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    if (nights <= 0) {
      alert('Check-out date must be after check-in date');
      return;
    }
    
    alert(`Booking confirmed for ${nights} nights! Total: $${total.toFixed(2)}`);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
      {/* Price Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-1">night</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-sm font-medium text-gray-700">4.8</span>
          <span className="text-gray-500 text-sm ml-1">(124)</span>
        </div>
      </div>

      {/* Date Selection */}
      <div className="border border-gray-300 rounded-lg mb-4">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={today}
              className="w-full text-sm text-gray-900 bg-transparent border-none focus:ring-0 focus:outline-none"
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
              Checkout
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || today}
              className="w-full text-sm text-gray-900 bg-transparent border-none focus:ring-0 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Guest Selection */}
      <div className="relative mb-6">
        <div 
          className="border border-gray-300 rounded-lg p-3 cursor-pointer"
          onClick={() => setShowGuestDropdown(!showGuestDropdown)}
        >
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1">
            Guests
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-900">
              {guests} guest{guests !== 1 ? 's' : ''}
            </span>
            <svg 
              className={`w-4 h-4 text-gray-500 transition-transform ${showGuestDropdown ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {showGuestDropdown && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-900">Guests</span>
                <p className="text-xs text-gray-500">Ages 13 or above</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={guests <= 1}
                >
                  -
                </button>
                <span className="w-8 text-center text-sm">{guests}</span>
                <button
                  onClick={() => setGuests(Math.min(8, guests + 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => setShowGuestDropdown(false)}
              className="mt-3 text-sm text-gray-600 hover:text-gray-800"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Reserve Button */}
      <button
        onClick={handleReserve}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4"
      >
        Reserve now
      </button>

      <p className="text-center text-sm text-gray-600 mb-4">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="text-gray-700 underline">
              ${price} × {nights} night{nights !== 1 ? 's' : ''}
            </span>
            <span className="text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 underline">Cleaning fee</span>
            <span className="text-gray-900">${cleaningFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 underline">Service fee</span>
            <span className="text-gray-900">${serviceFee.toFixed(2)}</span>
          </div>
          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Free cancellation for 48 hours
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Your payment is secure
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
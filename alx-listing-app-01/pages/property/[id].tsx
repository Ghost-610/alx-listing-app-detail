import { PROPERTY_LISTING_SAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTY_LISTING_SAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  // Mock reviews data - in a real app, this would come from your API
  const mockReviews = [
    {
      id: "1",
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning property! The amenities were top-notch and the location was perfect. Would definitely stay here again.",
      date: "2024-01-15",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "2",
      name: "Mike Davis",
      rating: 4,
      comment: "Great location and beautiful property. The only minor issue was the WiFi was a bit slow, but everything else was perfect.",
      date: "2024-01-10",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "3",
      name: "Emily Chen",
      rating: 5,
      comment: "Perfect for our family vacation. The host was very responsive and the amenities were exactly as described.",
      date: "2024-01-05",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: "4",
      name: "James Wilson",
      rating: 4,
      comment: "Clean, comfortable, and well-located. Would recommend to anyone looking for a quality stay.",
      date: "2023-12-28",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.name}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-medium">{property.rating}</span>
            </div>
            <span>•</span>
            <span>{property.address.city}, {property.address.country}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <PropertyDetail property={property} />
            <div className="mt-8">
              <ReviewSection reviews={mockReviews} />
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingSection price={property.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { PROPERTY_LISTING_SAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import React from "react";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTY_LISTING_SAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}
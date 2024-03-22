import React, { useState, useEffect } from "react";

const HotelDistance = ({ hotelLocation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation && hotelLocation) {
      const R = 6371e3; // Earth's radius in meters
      const lat1 = (userLocation.lat * Math.PI) / 180; // Latitude in radians
      const lat2 = (hotelLocation.lat * Math.PI) / 180; // Hotel latitude in radians
      const deltaLat = ((hotelLocation.lat - userLocation.lat) * Math.PI) / 180; // Difference in latitude
      const deltaLng = ((hotelLocation.lng - userLocation.lng) * Math.PI) / 180; // Difference in longitude

      const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1) *
          Math.cos(lat2) *
          Math.sin(deltaLng / 2) *
          Math.sin(deltaLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = R * c; // Distance in meters

      setDistance(distance);
    }
  }, [userLocation, hotelLocation]);

  return (
    <>
      {distance && (
        <span>
          {(distance.toFixed(1) / 1000).toLocaleString()} kilometers away
        </span>
      )}
    </>
  );
};

export default HotelDistance;

import React, { useEffect, useState, useCallback } from "react";
import { getUserLocation } from "../lib/getUserLocation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { LoaderCircle } from "lucide-react";
import HospitalCard from "../components/HospitalCard";

const BeDonorPage = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Haversine formula to calculate distance (km) between two coordinates
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (v) => (v * Math.PI) / 180;
    const R = 6371; // Earth radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const fetchLocationAndHospitals = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const loc = await getUserLocation();
      setLocation(loc);

      const querySnapshot = await getDocs(collection(db, "hospitals"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      const nearby = data.filter((h) => {
        if (!h.latitude || !h.longitude) return false;
        const dist = getDistance(loc.latitude, loc.longitude, h.latitude, h.longitude);
        return dist <= 50; // nearby within 20 km radius
      });

      setHospitals(nearby);
    } catch (err) {
      setError(err.message || "Failed to fetch hospitals or location");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLocationAndHospitals();
  }, [fetchLocationAndHospitals]);

  if (loading) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Nearby Hospitals</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <LoaderCircle className="animate-spin" />
          <span>Loading hospitals and location...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Nearby Hospitals</h1>
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchLocationAndHospitals}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Nearby Hospitals</h1>

      {location && (
        <p className="text-sm text-gray-600 mb-4">
          Your location: {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)} (±{location.accuracy} meters)
        </p>
      )}
      
      {hospitals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hospitals.map((hospital) => (
            <HospitalCard key={hospital.id} hospital={hospital} />
          ))}
        </div>
      ) : (
        <>
          <p>No nearby hospitals found.</p>
          <button
            onClick={fetchLocationAndHospitals}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Refresh
          </button>
        </>
      )}
    </div>
  );
};

export default BeDonorPage;

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HospitalCard = ({ hospital }) => {
  const {
    name = "Unnamed Hospital",
    address = "Address not available",
    description = "No description provided.",
  } = hospital || {};

  const handleReadMore = () => {
    alert(`More about ${name} coming soon!`);
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm mt-1">{address}</p>
      <p className="text-gray-700 my-2">{description}</p>
      <Button onClick={handleReadMore} className="mt-2">
        Read More
      </Button>
    </Card>
  );
};

export default HospitalCard;

// components/HospitalSelector.jsx
const hospitals = [
  { id: 1, name: "AIIMS", distance: "3.4 km" },
  { id: 2, name: "Fortis", distance: "5.1 km" },
];

export default function HospitalSelector({ onSelect }) {
  return (
    <div>
      <h2 className="text-xl font-bold">Nearby Hospitals</h2>
      {hospitals.map(h => (
        <div
          key={h.id}
          className="border p-4 rounded my-2 cursor-pointer"
          onClick={() => onSelect(h)}
        >
          {h.name} - {h.distance}
        </div>
      ))}
    </div>
  );
}

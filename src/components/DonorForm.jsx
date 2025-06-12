// src/components/DonorForm.jsx
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

function DonorForm({ hospital }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    aadhaar: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const donorId = `DNR-${Date.now().toString().slice(-6)}`;

    try {
      await addDoc(collection(db, "donors"), {
        ...formData,
        hospital,
        donorId,
        createdAt: new Date()
      });
      setStatus("Successfully registered as a donor!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error while registering. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4 bg-white p-6 rounded shadow-md">
      <input
        className="w-full p-2 border rounded"
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 border rounded"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 border rounded"
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 border rounded"
        type="text"
        name="aadhaar"
        placeholder="Aadhaar Number"
        onChange={handleChange}
        required
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        type="submit"
      >
        Submit
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}

export default DonorForm;

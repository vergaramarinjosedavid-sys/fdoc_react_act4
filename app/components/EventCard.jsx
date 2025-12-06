import React from "react";

export default function EventCard({ event }) {
  const { title, date, location, price } = event;

  // Formatear fecha legible
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p className="text-gray-600 mb-2">{location}</p>

      <p className="text-sm text-gray-500 mb-3">{formattedDate}</p>

      <p className="text-xl font-semibold text-green-600">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}

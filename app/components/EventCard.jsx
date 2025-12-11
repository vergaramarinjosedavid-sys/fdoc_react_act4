import React from "react";

export default function EventCard({ title, date, location, price }) {
  // --- Manejo seguro de fecha ---
  let formattedDate = "Fecha no disponible";
  if (date) {
    const d = new Date(date);
    if (!isNaN(d.getTime())) {
      formattedDate = d.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }

  // --- Manejo seguro de precio ---
  const formattedPrice =
    typeof price === "number" ? `$${price.toFixed(2)}` : "Precio no disponible";

  return (
    <div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
      <h2 className="text-2xl font-bold mb-1">{title || "Evento sin título"}</h2>
      <p className="text-gray-600 mb-2">
        {location || "Ubicación no disponible"}
      </p>

      <p className="text-sm text-gray-500 mb-3">{formattedDate}</p>

      <p className="text-xl font-semibold text-green-600">{formattedPrice}</p>
    </div>
  );
}

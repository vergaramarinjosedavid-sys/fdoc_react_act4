import React from "react";
import EventCard from "./EventCard";

export default function EventList() {
  const events = [
    {
      id: 1,
      title: "Concierto de Rock",
      date: "2025-03-12",
      location: "Estadio Central",
      price: 120.0,
    },
    {
      id: 2,
      title: "Feria de Tecnología",
      date: "2025-04-05",
      location: "Centro de Convenciones",
      price: 35.5,
    },
    {
      id: 3,
      title: "Exposición de Arte",
      date: "2025-06-20",
      location: "Museo Regional",
      price: 15.99,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Eventos Disponibles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

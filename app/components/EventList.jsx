import React from 'react'

const events = [
    {id: 1, title: "Nacional vs. Millonarios", date: "2025-11-16", location: " Estadio Atanasio Girardot, Medellín", price: "$25.000 COP",},
    {id: 2, title: "Concierto de Rock", date: "2025-12-05", location: "Parque Simón Bolívar, Bogotá", price: "$50.000 COP",},
    {id: 3, title: "Feria del Libro", date: "2026-01-20", location: "Corferias, Bogotá", price: "Entrada Libre",},
    {id: 4, title: "Festival de Jazz", date: "2026-02-14", location: "Plaza Mayor, Medellín", price: "$30.000 COP",},
    {id: 5, title: "Obra de Teatro 'Hamlet'", date: "2026-03-10", location: "Teatro Colón, Bogotá", price: "$40.000 COP",},
    
]

export default function EventList() {
  return (
    <>
        {events.map((event) => (
            <div
            key={events.id}
            className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl text-black font-semibold">{event.title}</h2>
              <p className="text-blue-600">Categoría: {event.category}</p>
            </div>
            <p className="text-lg font-bold text-green-600">${event.price}</p>
          </div>
        ))}
    </>
  )
}

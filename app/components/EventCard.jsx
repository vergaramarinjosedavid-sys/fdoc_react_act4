// import React from 'react'

// const event = [{
//     id: 1,
//     title: "Concierto de Música Clásica",
//     date: "2025-11-16",
//     location: "Teatro Pablo Tobón Uribe, Medellín",
//     price: "$20.000 COP",
//   }]

export default function EventCard({ event }) {}
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

//   return (
//     <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
//       <div className="p-6">
//         {/* Título del evento */}
//         <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
//           {event.title}
//         </h2>
        
//         {/* Ubicación */}
//         <p className="text-gray-600 mb-4 flex items-center">
//           <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//           </svg>
//           {event.location}
//         </p>
        
//         {/* Fecha formateada */}
//         <p className="text-gray-700 mb-4 flex items-center">
//           <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//           </svg>
//           {formatDate(event.date)}
//         </p>
        
//         {/* Precio resaltado */}
//         <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
//           <span className="text-sm text-gray-500">Precio:</span>
//           <span className="text-2xl font-bold text-green-600 bg-green-50 px-3 py-1 rounded-lg">
//             {event.price}
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }
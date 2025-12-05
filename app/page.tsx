// app/page.js
import Image from "next/image";
import EventCard from './components/EventCard';
import EventList from './components/EventList';
import ProductList from './components/ProductList';


export default function Home() {
  
  return (
    <>
      <EventList />
    </>
    // <main className="min-h-screen bg-gray-50 py-12 px-4">
    //   <ProductList />
    //   <div className="max-w-7xl mx-auto">
    //     <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    //       Próximos Eventos
    //     </h1>
    //     <div className="flex justify-center">
    //       <EventCard event={event}/>
    //     </div>
    //   </div>
    // </main>
  )
}
import EventList from "./components/EventList";
import EventCard from "./components/EventCard";

export default function Home() {
  const sampleEvent = {
    title: "Evento de Prueba",
    date: "2025-12-25",           
    location: "Auditorio Central",
    price: 75,
  };
  return (
    <main className="p-6">
      <EventList />
       <EventCard event={sampleEvent} />
    </main>
  );
}

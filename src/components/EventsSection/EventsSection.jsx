import EventCard from "../EventCard/EventCard";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Missa de Domingo",
      date: "20/05",
      description: "Celebração dominical com a comunidade",
    },
    {
      id: 2,
      title: "Grupo de Oração",
      date: "22/05",
      description: "Momento de oração e louvor",
    },
  ];

  return (
    <section style={{ padding: "40px 20px" }}>
      <h2>Eventos em destaque</h2>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
}

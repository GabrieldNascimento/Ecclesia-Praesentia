import "./EventCard.css";

export default function EventCard({ title, date, description }) {
  return (
    <article className="event-card">
      <span className="event-date">{date}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>Ver detalhes</button>
    </article>
  );
}

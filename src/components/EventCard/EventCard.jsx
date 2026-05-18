export default function EventCard({ title, date, description }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
}

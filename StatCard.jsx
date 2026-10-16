import "./App"


export default function StatCard({ title, text , img }) {
  return (
    <div className="statCardContainer">
      <div className="statCardIcon">
        <img src={img} />
      </div>

      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

import "./styles.css";

export default function App() {
  return <Badge />;
}

function Badge() {
  const name = "Faisal Mahmud";
  const handle = "bandaFaisal";
  const img =
    "https://pbs.twimg.com/profile_images/1617055623170129921/wty3vnHP_400x400.jpg";
  return (
    <main className="badge">
      <img src={img} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>@{handle}</p>
      </div>
    </main>
  );
}

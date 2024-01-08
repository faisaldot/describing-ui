function Today() {
  const date = new Date().toLocaleDateString("en", {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  });
  return <p>Today is {date}</p>;
}

export default function App() {
  return <Today />;
}

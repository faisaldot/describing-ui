function List() {
  const friends = ["Ben", "Lynn", "Alex"];

  return (
    <ul>
      {friends.map((friend) => (
        <li key={crypto.randomUUID()}>{friend}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return <List />;
}

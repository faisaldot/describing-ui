const USER_DATA = {
  name: "Ben Adam",
  img: "https://avatars.githubusercontent.com/u/6645985",
  handle: "benadam11",
};

function Badge({ user, style }) {
  return (
    <div style={style}>
      <img alt={`${user.name} avatar`} src={user.img} />
      <div>
        <h4>{user.name}</h4>
        <p>@{user.handle}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={USER_DATA}
      style={{
        color: "white",
        width: 300,
        margin: "0 auto",
        border: "1px solid #7b7b7b",
        borderRadius: 8,
        backgroundColor: "#231f20",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
    />
  );
}

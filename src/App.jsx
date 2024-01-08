import Authors from "./Authors";

export default function About() {
  localStorage.setItem("viewed_about", true);

  return (
    <main>
      <h1>About Us</h1>
      <p>We write JavaScript and words about JavaScript.</p>
      <Authors />
    </main>
  );
}

export default function App() {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    if (inputValue.length > 10) alert("Character limit exceeded");
  };

  return (
    <section>
      <h1>Character Limit</h1>
      <input onChange={handleChange} placeholder="Enter some text" />
    </section>
  );
}

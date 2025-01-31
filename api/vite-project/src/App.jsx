import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(characters);
  }, [characters]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://api.disneyapi.dev/character?page=" + page
      );
      const data = await res.json();
      setCharacters([...characters, ...data.data]);
    }
    getData();
  }, [page]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
      <h1>Disney Characters</h1>
      <div>
        {characters.length
          ? characters.map((character) => (
              <div key={character._id}>
                {" "}
                {}
                <p>{character.name}</p>
                {character.imageUrl ? (
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    width="500"
                  />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
            ))
          : "⏳ Loading..."}
      </div>
      <button onClick={() => setPage(page + 1)}>Load More</button>{" "}
    </>
  );
}

export default App;

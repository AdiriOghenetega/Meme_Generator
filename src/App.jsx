import { useState } from "react";
import { useEffect } from "react";
import Header from "./header";
import Generator from "./generator";
import "./App.css";

function App() {
  const [meme, setMeme] = useState("");

  const [memeDisplay, setMemeDisplay] = useState({
    topText: "",
    bottmText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
    on: true,
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMeme(data.data.memes));
  }, []);

  function handleClick() {
    const rand = Math.floor(Math.random() * meme.length);
    const memeRandom = meme[rand].url;
    setMemeDisplay((prevState) => {
      return { ...prevState, randomImage: memeRandom };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(event);
    setMemeDisplay((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function toggle() {
    setMemeDisplay((prevState) => {
      return { ...prevState, on: !prevState.on };
    });
  }

  return (
    <div className="App">
      <Header />
      <Generator
        key={meme.id}
        display={memeDisplay.randomImage}
        switch={handleClick}
        top={memeDisplay.topText}
        bottom={memeDisplay.bottmText}
        change={handleChange}
        toggle={toggle}
        color={memeDisplay.on}
      />
    </div>
  );
}

export default App;

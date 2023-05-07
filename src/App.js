import "./App.css";
import { useState } from "react";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;

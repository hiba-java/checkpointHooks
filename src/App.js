
import { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Navbarr from './components/Navbarr';
import Description from './components/Description';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  return (
    <>
      <div className="App">
        <Navbarr handleText={setText} handleRate={setRating} />

      </div>
      <Routes>
        <Route path='/' element={<MovieList text={text} rating={rating} />} />
        <Route path={"description"} element={<Description />} />
      </Routes>
    </>
  );
}

export default App;


import { useState } from 'react' ;
import './App.css';
import MovieList from './components/MovieList';
import Navbarr from './components/Navbarr';

function App() {
  const [text, setText] = useState("");
  const[rating,setRating] = useState("");
 
  return (
    <>
    <div className="App">
     <Navbarr  handleText ={setText} handleRate ={setRating}/>
     <MovieList text ={text} rating ={rating}  />
    </div>
    </>
  );
}

export default App;

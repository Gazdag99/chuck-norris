import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let chuckJoke; 

  
  const [chuck, setChuck] = useState(`${chuckJoke}`);
  
  useEffect(()=>{
  
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setChuck(data.value))
     
  },[])
  
  function newJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setChuck(data.value))
  };
 



  return (
    <div className="Container">
      <h1>Chuck Norris Joke Generator</h1>
      <div className='App'>

      <img src="https://www.pngkey.com/png/full/110-1104421_chuck-norris-facts-have-spread-around-the-world.png" alt="" />
      <div className="joke">
        <img className='quote' src="https://cdn.pixabay.com/photo/2022/05/29/05/23/quotation-mark-7228448_1280.png" alt="" />
        <p>{chuck}</p>
      </div>
    <button className="btn btn-new" onClick={newJoke}>Next Joke</button>
    </div>
    </div>
  );
}

export default App;
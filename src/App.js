import React from 'react';
import './App.css';
import ListOfGifs from "./components/ListOfGifs";
import { Link ,Route } from "wouter";


export default function App() {
  return (
    <div className="App">
       <h1>App</h1>
       <Link to='/gif/cat'>Gifs de gatos</Link>
       <Link to='/gif/panda'>Gifs de pandas</Link>
       <Link to='/gif/morty'>Gifs de morty</Link>
      <section className="App-content">
        <Route 
          component={ListOfGifs}
          path='/gif/:keyword' />
      </section>
    </div>
  );
}



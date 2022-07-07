import React from 'react';
import './App.css';
import ListOfGifs from "./components/ListOfGifs";
import { Link ,Route } from "wouter";


export default function App() {
  return (
    <div className="App">
       <h1>Api<span>Gifs</span></h1>
       <Link to='/gif/Reactions'>Reacciones</Link>
       <Link to='/gif/Entertainment'>Entretenimiento</Link>
       <Link to='/gif/Sports'>Deportes</Link>
       <Link to='/gif/Stickers'>Stickers</Link>
      <section className="App-content">
        <Route 
          component={ListOfGifs}
          path='/gif/:keyword' />
      </section>
    </div>
  );
}



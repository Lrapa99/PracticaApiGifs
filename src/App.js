import React, {useEffect, useState} from "react"
import './App.css';
import Gif from "./components/Gif";
import getGifs from "./services/getGifs"


const GIFS =  ["https://media2.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.webp?cid=ecf05e47mr7ionll8wzlyfocio9do7qaost9dlarfa1rp60s&rid=giphy.webp&ct=g","https://media3.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif?cid=ecf05e47h4u6aevupbuim96rot0t8u1vkos7mbgelvahekks&rid=giphy.gif&ct=g"]


const DIFERENT_GIFS = ["https://media1.giphy.com/media/MDJ9IbxxvDUQM/200w.webp?cid=ecf05e47mr7ionll8wzlyfocio9do7qaost9dlarfa1rp60s&rid=200w.webp&ct=g", "https://media3.giphy.com/media/lJNoBCvQYp7nq/200w.webp?cid=ecf05e47mr7ionll8wzlyfocio9do7qaost9dlarfa1rp60s&rid=200w.webp&ct=g" ]




function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    getGifs({keyword: "morty"}).then(gifs => setGifs(gifs))
  },[])

  return (
    <div className="App">
      <section className="App-content">
      {
          gifs.map(({id, title, url}) => 
            <Gif
              id={id}
              key={id} 
              title={title}
              url={url}
            />
          )
      }    
      </section>
    </div>
  );
}

export default App

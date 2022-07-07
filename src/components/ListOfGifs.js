import Gif from "./Gif"
import React, {useEffect, useState} from "react"
import getGifs from "../services/getGifs"


export default function ListOfGifs({params }) {

    const [loading, setLoading] = useState(false)

    const {keyword} = params

    const [gifs, setGifs] = useState([])

    useEffect(function () {
      setLoading(true) //inicio loading
      getGifs({keyword})
      .then(gifs => {
      setGifs(gifs)
      setLoading(false) //fin loading
      })},[keyword])

      if (loading) return <i>Loading...</i>

    return <div>
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
    </div>
}

import React from "react"
import "./Gif.css"


export default function Gif({title, id , url}){
    return (
    <a href={`#${id}`} className="Gif">
         <h4>{title}</h4>
      <div className="img-content">
        <img alt={title} src={url} /> 
      </div>
    </a>
  )
}

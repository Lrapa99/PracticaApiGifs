import React from "react"


function Gif({title, id , url}){
    return (
    <React.Fragment>
        <h4>{title}</h4>
        <small>{id}</small>
        <img alt={title} src={url} />
    </React.Fragment> 
  )
}
export default Gif
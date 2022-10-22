import { useFetchGifs } from "../hooks/useFetchGifs";
import { useState } from "react"




export const GifItem = ({title, url, id, imagenes, image}) => {

  const borrar = () => {
    //imagenes.shift()
    console.log(image)
    delete imagenes.id
    console.log(imagenes)
    
    
    
  }
  
  
  //console.log({title, url, id})
    return (
    <div className="card">
      
        <img 
            src={url}
            alt={title}
            />
            <p>{title}</p>

    </div>
  )
}

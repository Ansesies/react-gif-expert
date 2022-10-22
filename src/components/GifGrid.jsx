


import { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import {  GifItem } from "./GifItem";



export const GifGrid = ({ category, deleteCategory, borrar }) => {

    const {images, isLoading} = useFetchGifs(category);
    //console.log({isLoading});
    //const {categories, setCategories} = useState('')
  const Delete = () => {
      //console.log(images)
       borrar.shift()

      deleteCategory([...borrar])
  }
   

    return (
    <>
        <button
                className="botonDelete"
                onClick={Delete}
                value = {category}
            >Clean
            </button>
            
        <h3>{category}</h3>

        {
          isLoading && ( <h2>Cargando...</h2>)
          
        }
        
        

        <div className="card-grid">
          
          {
              images.map((image) => (
                <GifItem 
                    image = {image}
                    imagenes = {images}
                    key={image.id}
                    {...image}
                    />
                  
          ))}
          
          
          
        </div>
    
    </>
  )
}

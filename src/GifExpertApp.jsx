import {useState} from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);
    //console.log(categories);

    const onAddCategory = (newCategory) =>{
        //console.log(newCategory)
        if( categories.includes(newCategory) ) {
            return alert('La busqueda ya existe');
        }
        
        setCategories([newCategory, ... categories ])
        //setCategories(categories.concat('Naruto'))
    }

     const deleteCategory = () => {
        categories.shift()
        setCategories([...categories])
    }

    return(
        <>
            
            {/* titulo */}
            <h1>GifExpertApp</h1>

            

            {/* input */}
            <AddCategory 
                
                onNewCategory={ onAddCategory }
                />
            
            
            <ol>
                
                {categories.map( category => {
                    
                    return (
                        
                        <GifGrid 
                            borrar = {categories}
                            deleteCategory = {setCategories}
                            key={category} 
                            category={category}
                            />
                            
                    )
                    
                })}
                
                
                
            </ol>
               
        </>

    )

}
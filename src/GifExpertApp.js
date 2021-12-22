import React,{useState} from 'react'
import { AddCategorie } from './components/AddCategorie'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

  

     const [categories, setCategories] = useState(['One Punch'])


    return (
        <div>
           
            <h2>GifExpertApp</h2>
            <AddCategorie setCategories={setCategories}/>
            <hr></hr>
           
            <ol>
            {
                categories.map(category=>(
                    <GifGrid 
                      key={category}
                    category={category}/>
                    ))
                
            }
            </ol>
          
        </div>
    )
}

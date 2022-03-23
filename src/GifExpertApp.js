import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

   const [categories, setCategories] = useState( ['Kimetsu no Yaiba'] )

   return(
      <>
         <h1>GiftExpertApp</h1>
         <AddCategory setCategories={ setCategories }/>
         <hr></hr>
         
         <ol>
            {
               categories.map( category => (
                  <GifGrid
                     key={ category }
                     category = { category }
                  />
               ))
            }
         </ol>
      </>
   )
};

export default GiftExpertApp;
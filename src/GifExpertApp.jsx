
import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { Button, ChakraProvider} from '@chakra-ui/react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Porsche','MC Laren']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([ newCategory, ...categories]);
    };

  return (
    <div className='container'>
        <h1>Gif Expert App</h1>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        <ChakraProvider>
          <Button className='button-search' onClick={onAddCategory}>Agregar</Button>
        </ChakraProvider>
        
        
        {categories.map( category => (
            <GifGrid key={category} category={category}/>
        ) )}
        
    </div>
  )
}

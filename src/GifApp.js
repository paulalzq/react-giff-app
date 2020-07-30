import React, { useState } from 'react';
import './GifApp.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

    // let categories = ['Sailor moon', 'bjork', 'eco'];
    const [categories, setCategories] = useState(['trending'])

    // const agregarCategoria = () => {
    //     setCategories( ['Pachuco', ...categories] );
    // };

    // const giphy = 'vQ7cVmYpXEKP0FWzkuGqA7T3g4htHqVZ';

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            
            <ol>
                { categories.map( (category) => 
                    <GifGrid
                        key={ category }
                        category={ category }/>
                ) }
            </ol>
        </>
    )
};

export default GifApp

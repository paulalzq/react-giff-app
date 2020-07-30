import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs =>{
                setTimeout(() => {
                    console.log(imgs)
                    setstate({
                        data: imgs,
                        loading: false,
                    });
                }, 500);
            })
    }, [category])
    // useEffect(() => {
    //     getGifs( category )
    //         .then( imgs  => setImages( imgs ))
    // }, [ category ]);

   

    return state;
}
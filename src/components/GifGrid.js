import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category, gifs }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs(category);
    
    return (
        <div className="card-grid">
            { loading ? <p className="animate__animated animate__flash">Loading</p> : null }
            <>{
                images.map( img => (
                    <GifGridItem
                        key={img.id}
                        { ...img }
                        // img={img}
                    />
                ))
            }
            </>
        </div>
    )
}

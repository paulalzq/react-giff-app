import React from 'react'

export const GifGridItem = ({ id, title, url }) => {
    console.log(id, title, url)
    return (
        <div className="card animate__animated animate__fadeInUp">
            {/* <h4>{title}</h4> */}
            <img
                src={url}
                alt={title}
            />
        </div>
    )
}

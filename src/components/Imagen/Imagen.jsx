import React from "react";
import './imagen.css';

function Imagen({ url, alt }) {
    return (
        <>
            <img src={url} alt={alt} />
        </>
    );
}

export default Imagen;
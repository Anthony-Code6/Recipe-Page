import { useEffect, useState } from 'react';
import Items from '../Items/Items';
import './list.css';

function List({ list, color, title, normal, ulOl,colorText,colorSubtitle }) {
    const [array, setArray] = useState([])
    useEffect(() => {
        setArray(list)
    }, [0])

    return (
        <>
            <h4 className={normal ? 'normal' : 'large'} style={{ color: color }}>{title}</h4>
            {
                ulOl ? // ul : true or ol : false
                    <ul style={{ color: color }}>
                        {
                            array.map((element, index) =>
                                <Items key={index} colorSubtitle={colorSubtitle} colorText={colorText} subtitulo={element.subtitulo} descripcion={element.descripcion} />
                            )
                        }
                    </ul> :
                    <ol style={{ color: color }}>
                        {
                            array.map((element, index) =>
                                <Items key={index} colorSubtitle={colorSubtitle} colorText={colorText} subtitulo={element.subtitulo} descripcion={element.descripcion} />
                            )
                        }
                    </ol>
            }


        </>
    );
}

export default List;
import { useEffect, useState } from "react";
import './table.css';

function Table({ tabla, color, colorText }) {

    const [table, setTable] = useState([])

    useEffect(() => {
        setTable(tabla)
    }, [0])

    return (
        <>
            <table className="table">
                <tbody>
                    {
                        tabla.map((element, index) => (
                            <tr key={index}>
                                <td className="calorias" style={{ paddingLeft: '40px', color: colorText }}>{element.titulo}</td>
                                <td className="cantidad" style={{ paddingLeft:'-10px', color: color }}>{element.descriptcion}</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </>
    );
}

export default Table;
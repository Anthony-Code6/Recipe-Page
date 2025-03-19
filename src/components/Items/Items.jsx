import './item.css';

function Items({ subtitulo, descripcion, colorText, colorSubtitle }) {
    return (<>
        <li>
            {subtitulo != ''
                ? <p style={{ color: colorText }}>
                    <span style={{ color: colorSubtitle }}>{subtitulo}: </span>
                    {descripcion}
                </p>
                : <p style={{ color: colorText }}>{descripcion}</p>}
        </li>

    </>);
}

export default Items;
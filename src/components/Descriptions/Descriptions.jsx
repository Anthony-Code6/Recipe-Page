import './description.css';

function Descriptions(props) {
    return (
        <>
            <div className="descriptions">
                <h4 className='title'>{props.title}</h4>
                <p className='content' style={{color:props.colorText}} >{props.descriptions}</p>
            </div>
        </>
    );
}

export default Descriptions;
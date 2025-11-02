const Country = ({name, handleShow}) => {
    return (
        <div>
            <li style={{display: "inline", marginRight: "5px"}}>{name}</li>
            <button onClick={() => handleShow(name)}>show</button>
        </div>
    )
}

export default Country;
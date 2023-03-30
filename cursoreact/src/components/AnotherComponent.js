const AnotherComponent = () => {

    const handleClick = () =>{
        console.log("teste")
    };

    return(
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento click</button>
            <hr/>
            <button onClick={() => console.log("teste")}> Evento no elemento</button>
        </div>
    )
}
export default AnotherComponent;
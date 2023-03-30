const RenderCond = ({x,y}) =>{

    return(
        <div>
            {x > 5 && <p>X é maior que 10</p>}
            {x > 5 ? <p>X é maior que 10</p> : <p>é menor que 10</p>}
            <p>Valor de Y É: {y}</p>
        </div>
    )
}
export default RenderCond
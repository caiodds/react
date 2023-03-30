const List = () =>{
    const items = [{
        id: 1,
        name:"caio"
    },{
        id:2,
        name: "teste"
    }, {
        id: 3,
        name: "Jorellllllllll"
    }]
    return(
        <div>
            {items.map((item)=>(
                <p key={item.id}>{item.id} - {item.name}</p>
            ))}
        </div>
    )
}
export default List
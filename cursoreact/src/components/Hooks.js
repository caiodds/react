import {useState} from "react";
const Hooks = () =>{
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40)
    const changeAge = () =>{
        idade = 32
        
    };
    const changeNewAge = () =>{
        setNovaIdade(45);
    };
    return(
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Nova idade</button>
        </div>
    )
}
export default Hooks
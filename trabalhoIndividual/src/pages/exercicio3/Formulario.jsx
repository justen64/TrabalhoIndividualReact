import { useState, useEffect } from "react";
import { Botao } from "../../components/Botao/Button";
import { Input1 } from "../../components/Input/Input";
export function Formulario(){
    const [novoFormulario, setNovoFormulario] = useState('');
    const [novoNome, setNovoNome] = useState('');
    const[novaIdade, setNovaIdade] = useState('');
    const[novoEmail, setNovoEmail] = useState('');

function adicionarFormulario(){
    if (novoNome.trim() !== '' && novaIdade.trim() !== '' && novoEmail.trim() !== ''){
            console.log(`Nome: ${novoNome}, Idade: ${novaIdade}, Email: ${novoEmail}`);
         }else{
            console.log('Preencha todos os campos');
        }
       
        
}

    return(
        <>
        <h1>Formulario</h1>
        <form onSubmit={(e) => {
         e.preventDefault();
         }}>

        <label>Nome:</label>
        <Input1 type="text" 
        value={novoNome}
        onChange={(e)=>setNovoNome(e.target.value)}
        />
        <br />
        <label>Idade:</label>
        <Input1 type="number" 
        value={novaIdade}
        onChange={(e)=> setNovaIdade(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <Input1 type= "text" 
        value={novoEmail}
        onChange={(e)=> setNovoEmail(e.target.value)}
        />
        <br />
        <br />
        <Botao title={"botão"} valor={"enviar"} onclick={adicionarFormulario}></Botao>
        </form>
        </>
    )
}
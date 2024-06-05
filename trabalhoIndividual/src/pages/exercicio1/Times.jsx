import { useState } from "react"

export function ListaDeTimes(){
    const times = [
        {id: 1, name: 'Palmeiras'},
        {id: 2, name: 'Corinthians'},
        {id: 3, name: 'Santos'},
        {id: 4, name: 'São Paulo'},
    ]

    const [listaDeTimes, setListaDeTimes] = useState(times);
    const [novoTime, setNovoTime] = useState('');

    function adicionarTimes(){
        if(novoTime.trim() !== ''){
            const EntradaNovoTime = {
                id: listaDeTimes.length + 1,
                name: novoTime
            };
            setListaDeTimes([...listaDeTimes, EntradaNovoTime]);
            setNovoTime('');
        }
    }

    return(
        <>
            <h1>Lista de Times</h1>

            <div>
                <ul>
                    {listaDeTimes.map((times)=>(
                        <li key={times.id}>{times.name}</li>
                    ))}
                </ul>
                <input
                 type="text"
                 value={novoTime}
                 onChange={(e)=> setNovoTime(e.target.value)}
                 placeholder="Adicionar um time"   
                />
                <br />
                <button onClick={adicionarTimes}>Adicionar</button>
            </div>
        </>
    )
}
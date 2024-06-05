import React, { useState } from 'react';

export function BarraDePesquisa(){
  const times = [
      { id: 1, name: 'Palmeiras' },
      { id: 2, name: 'Corinthians' },
      { id: 3, name: 'Santos' },
      { id: 4, name: 'São Paulo' },
      { id: 5, name: 'Vasco'},
      { id: 6, name: 'Flamengo' },
      {id: 7, name: 'Fluminense'},
      {id: 8, name: 'Botafogo'},
    ];
  const [pesquisa, setPesquisar] = useState('');
  
  const buscar = times.filter(e => (e.name.toLowerCase()).includes(pesquisa.toLowerCase()));
    return(
      <>
      <div>
        <h1>Times do Rio de Janeiro e São Paulo</h1>
        <input type="text" 
        placeholder="Pesquisar..."
        onChange={(e)=> setPesquisar(e.target.value)}
        value={pesquisa}/>
        <ul>
          {buscar.map((times)=>(
            <li key={times.id}>{times.name}</li>
          ))}
        </ul>
      </div>
      </>
    )
}


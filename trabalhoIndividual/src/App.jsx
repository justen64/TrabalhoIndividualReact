import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ListaDeTimes } from './pages/exercicio1/Times'
import { Horario } from './pages/exercicio2/Horario'
import { Formulario } from './pages/exercicio3/Formulario'
import { BarraDePesquisa } from './pages/exercicio4/BarraDePesquisa'
import { Cor } from './pages/desafio/MudarACor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cor/>
    </>
  )
}

export default App

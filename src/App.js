// const logo = require('./logo.svg');
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BemVindo from './components/BemVindo';
import NavBar from './components/NavBar'

function App() {
  const caminhos = [
    {
      id: 1,
      caminho: '/',
      titulo: 'Página inicial'
    },
    {
      id: 2,
      caminho: '/perfil',
      titulo: 'Perfil'
    },
    {
      id: 3,
      caminho: '/repositorios',
      titulo: 'Repositórios'
    },
    {
      id: 4,
      caminho: '/busca',
      titulo: 'Busca'
    }
  ]
  const [numero, setNumero] = useState(1)

  useEffect(() => {
    alert('O número foi alterado')
    // setNumero(numero + 1)
  }, [numero])

  useEffect(() => {
    setNumero(numero + 1)
  }, [])

  function aumentaNumero() {
    setNumero(numero+numero)

    console.log(numero)
  }
  return (
    <div >
      <NavBar menu={caminhos}  />
      <h1>{numero}</h1> <button onClick={aumentaNumero}>Clique aqui</button>
      <BemVindo meuNome="Léo"></BemVindo>
      <BemVindo meuNome="Lígia"/>

      {numero}
    <br />
      {numero}
    </div>
  );
}

export default App;
//module.exports = App;

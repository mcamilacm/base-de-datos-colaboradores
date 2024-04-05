import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import { BaseColaboradores } from './BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const buscarColaboradores = (term) => {
    const filtered = colaboradores.filter(colaborador =>
      colaborador.nombre.toLowerCase().includes(term.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(term.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(term.toLowerCase())
    );
    setColaboradores(filtered);
  };

  return (
    <>
    <div className="main_container">
      <Formulario agregarColaborador={agregarColaborador} />
      <Buscador onSearch={buscarColaboradores} />
      <Listado colaboradores={colaboradores} />
      </div>
    </>
  );
}

export default App;
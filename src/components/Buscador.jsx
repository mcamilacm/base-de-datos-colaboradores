import React, { useState } from 'react';

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Buscar por nombre, correo, cargo, etc."
      />
      <button type="submit">BUSCAR</button>
    </form>
  );
};

export default Buscador;
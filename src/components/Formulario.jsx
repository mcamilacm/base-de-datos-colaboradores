import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validación
    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      phone === ""
    ) {
      setError(true);
      setRegistroExitoso(false);
      return;
    }
    setError(false);
    setRegistroExitoso(true);
    // Llamamos a la función para agregar el colaborador
    agregarColaborador({
      id: new Date().getTime().toString(), // Generamos un ID único
      nombre,
      correo,
      edad,
      cargo,
      telefono: phone
    });
    // Limpiamos los campos del formulario después de agregar el colaborador
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setPhone("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error ? <p className="wrong">Los campos están vacíos</p> : null}
        {registroExitoso && <p className="exito">Registro exitoso</p>}

        <div className="form_container">
          <label>
            Nombre del Colaborador:
            <input className="form-control" name="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
        </div>

        <div className="form_container">
          <label>
            Correo del Colaborador:
            <input className="form-control" name="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </label>
        </div>

        <div className="form_container">
          <label>
            Edad del Colaborador:
            <input className="form-control" name="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
          </label>
        </div>

        <div className="form_container">
          <label>
            Cargo del Colaborador:
            <input className="form-control" name="Cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} />
          </label>
        </div>

        <div className="form_container">
          <label>
            Teléfono del Colaborador:
            <input className="form-control" name="Telefono" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </>
  );
};

export default Formulario;
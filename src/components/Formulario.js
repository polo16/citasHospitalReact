import React from 'react';
import react, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {

  //Crear state de citas
  const [cita,actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha:'',
    hora:'',
    sintomas:'',
  });

  const [ error,actualizarError ] = useState(false);


  //fncion que se ejecuta cada qeu el usuario escribe en un input
  const actulizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Cuando el ususario presiona agregar cita
  const submitCita = e => {
    e.preventDefault();

    console.log(mascota)
    //Validar
    if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' ||sintomas.trim() === ''){
    actualizarError(true);
      return;
    }

    //Eliminar mensaje previo
    actualizarError(false);
  

    //Asignar un Id
    cita.id = uuid();

    //Crear la cita
    crearCita(cita);


    //Reiniciar el form

  }



    return (
      <Fragment>
        <h2>Crear cita</h2>

        {error 
        ? <p className="alerta-error">  Todos los campos son obligatorios</p>

        : null }

        <form
          onSubmit={submitCita}
        >
          <label>Nombre Mascota</label>
          <input type="text"
            name="mascota"
            clssName="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actulizarState}
            value={mascota}
          />

          <label>Nombre del Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño de la Mascota"
            onChange={actulizarState}
            value={propietario}
            />

          <label>Fecha de alta</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={actulizarState}
            value={fecha}
            />

          <label>Hora</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            onChange={actulizarState}
            fecha={hora}
            />
            <label>Sintomas</label>
            <textarea
            className="u-full-width"
            name="sintomas"
            onChange={actulizarState}
            value={sintomas}
            >
            </textarea>
          <button type="submit"
          className="u-full-width button-primary"
          >Agregar Cita</button>
          
        </form>

      </Fragment>
    );
}

export default Formulario;
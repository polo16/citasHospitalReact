import React from 'react';
import react, {Fragment} from 'react';

const Formulario = () => {
    return (
      <Fragment>
        <h2>Crear cita</h2>

        <form>
          <label>Nombre Mascota</label>
          <input type="text"
            name="mascota"
            clssName="u-full-width"
            placeholder="Nombre Mascota"
          />

          <label>Nombre del Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre Dueño de la Mascota"
            />

          <label>Fecha de alta</label>
          <input
            type="date"
            name="fecha"
            className="u-full-width"
            />

          <label>Nombre del Dueño</label>
          <input
            type="time"
            name="hora"
            className="u-full-width"
            />
            <label>Sintomas</label>
            <textarea
            className="u-full-width"
            name="sintomas"
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
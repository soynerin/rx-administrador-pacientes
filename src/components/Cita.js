import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {

    const {mascota, propietario, fecha, hora, sintomas, id} = cita;

    return (
        <div className="cita">
            <p> Mascota: <span> {mascota} </span> </p>
            <p> Dueño: <span> {propietario} </span> </p>
            <p> Fecha: <span> {fecha} </span> </p>
            <p> Hora: <span> {hora} </span> </p>
            <p> Síntomas: <span> {sintomas} </span> </p>

            <button
                type="button"
                className="u-full-width eliminar button"
                onClick={ () => eliminarCita(id)}
            >
                ELIMINAR
            </button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired,
}

export default Cita

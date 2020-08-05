import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    };

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        // VALIDAR FORMULARIO
        if (
            mascota.trim() === ''
            || propietario.trim() === ''
            || fecha.trim() === ''
            || hora.trim() === ''
            || sintomas.trim() === '') {
                actualizarError(true);
                return;
        };

        actualizarError(false);

        // ASIGNAR UN ID
        cita.id = uuidv4();
        
        // AGREGAR CITA
        crearCita(cita);

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {
                error
                ? <p className="alerta-error">Todos los campos son obligatorios</p>
                : null
            }

            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={handleChange}
                    value={mascota}
                ></input>

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la Mascota"
                    onChange={handleChange}
                    value={propietario}
                ></input>

                <label>Fecha Cita</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                ></input>

                <label>Hora Cita</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                ></input>

                <label>Sintomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Describe los síntomas que tiene tu mascota..."
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"                    
                >AGREGAR CITA</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
}

export default Formulario

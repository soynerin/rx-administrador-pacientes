import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  const CITAS = 'citas';

  let citasIniciales = JSON.parse(localStorage.getItem(CITAS));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem(CITAS, JSON.stringify(citas));
    } else {
      localStorage.setItem(CITAS, JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {
    const citasFiltradas = citas.filter( cita => cita.id !== id);
    setCitas(citasFiltradas);
  }

  return (
    <Fragment>
        <h1>Administrador de Turnos</h1>

        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario crearCita={crearCita} />
            </div>
            <div className="one-half column">
              {
                citas.length > 0
                ? <h2>Administrar Citas</h2>
                : <h2>Aún no tenés citas</h2>
              }              
              {
                citas.map(cita => (
                  <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))
              }
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;

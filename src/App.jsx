import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import React, { useState, useEffect } from "react";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	useEffect(() => {
		const pacientesLs = JSON.parse(localStorage.getItem("pacientes")) ?? [];
		setPacientes(pacientesLs);
	}, []);

	useEffect(() => {
		localStorage.setItem("pacientes", JSON.stringify(pacientes));
	}, [pacientes]);


	const eliminarPaciente = id => {
		const pacientesActualizados = pacientes.filter(p => p.id !== id);
		setPacientes(pacientesActualizados);
	}

	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 sm:flex">
				<Form 
					setPacientes={setPacientes} 
					pacientes={pacientes}
					paciente={paciente}
					setPaciente={setPaciente} />
				<PatientList
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;

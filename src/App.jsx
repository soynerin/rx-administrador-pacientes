import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import React, { useState, useEffect } from "react";

function App() {
	const [pacientes, setPacientes] = useState([]);

	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 sm:flex">
				<Form 
					setPacientes={setPacientes} 
					pacientes={pacientes} />
				<PatientList
					pacientes={pacientes}
				/>
			</div>
		</div>
	);
}

export default App;

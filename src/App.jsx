import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import React, { useState, useEffect } from 'react'


function App() {

	const [pacientes, setPacientes] = useState([]);

	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 sm:flex">
				<Form />
				<PatientList />
			</div>
		</div>
	);
}

export default App;

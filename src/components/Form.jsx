import React, { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({setPacientes, pacientes, paciente, setPaciente}) => {	
	const [mascota, setMascota] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setMascota(paciente.mascota);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente])

	const generarId = () => {
		const random = Math.random().toString(36).substring(2);
		const fecha = Date.now().toString(36);

		return random + fecha;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([mascota, propietario, email, fecha, sintomas].includes("")) {
			setError(true);

			return;
		}

		setError(false);

		const objetoPaciente = {
			mascota, 
			propietario, 
			email, 
			fecha, 
			sintomas,
		}

		if (paciente.id) {
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map(p => p.id === paciente.id ? objetoPaciente : p);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {	
			objetoPaciente.id = generarId();		
			setPacientes([...pacientes, objetoPaciente]);
		}


		setMascota("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
	};

	return (
		<div className="sm:w-1/2 text-center mx-5">
			<h2 className="text-black text-3xl font-black">
				Seguimiento Pacientes
			</h2>

			<p className="text-lg mt-5 font-bold mb-10">
				Añade pacientes y{" "}
				<span className="text-indigo-600">Administralos</span>
			</p>

			<form
				className="bg-white rounded-lg shadow-md py-10 px-5 mb-10"
				onSubmit={handleSubmit}
			>
				{error && <Error> <p>Todos los campos son obligatorios</p> </Error>}

				<div className="mb-10">
					<label
						htmlFor="mascota"
						className="block uppercase font-bold text-gray-700 text-left"
					>
						Nombre Mascota
					</label>
					<input
						type="text"
						name="mascota"
						id="mascota"
						placeholder="Nombre de la mascota"
						className="w-full border-2 p-2 mt-2 rounded-md"
						value={mascota}
						onChange={(e) => {
							setMascota(e.target.value);
						}}
					/>
				</div>
				<div className="mb-10">
					<label
						htmlFor="propietario"
						className="block uppercase font-bold text-gray-700 text-left"
					>
						Nombre Propietario
					</label>
					<input
						type="text"
						name="propietario"
						id="propietario"
						placeholder="Nombre del Propietario"
						className="w-full border-2 p-2 mt-2 rounded-md"
						value={propietario}
						onChange={(e) => {
							setPropietario(e.target.value);
						}}
					/>
				</div>
				<div className="mb-10">
					<label
						htmlFor="email"
						className="block uppercase font-bold text-gray-700 text-left"
					>
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email de contacto"
						className="w-full border-2 p-2 mt-2 rounded-md"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</div>
				<div className="mb-10">
					<label
						htmlFor="alta"
						className="block uppercase font-bold text-gray-700 text-left"
					>
						Alta
					</label>
					<input
						type="date"
						name="alta"
						id="alta"
						className="w-full border-2 p-2 mt-2 rounded-md"
						value={fecha}
						onChange={(e) => {
							setFecha(e.target.value);
						}}
					/>
				</div>
				<div className="mb-10">
					<label
						htmlFor="sintomas"
						className="block uppercase font-bold text-gray-700 text-left"
					>
						Síntomas
					</label>
					<textarea
						name="sintomas"
						id="sintomas"
						className="w-full border-2 p-2 mt-2 rounded-md"
						value={sintomas}
						onChange={(e) => {
							setSintomas(e.target.value);
						}}
					/>
				</div>

				<input
					type="submit"
					value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
				/>
			</form>
		</div>
	);
};

export default Form;

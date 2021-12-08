import React, { useState, useEffect } from "react";

const Form = () => {
	const [mascota, setMascota] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([mascota, propietario, email, fecha, sintomas].includes("")) {
			setError(true);

			return;
		}

		setError(false);
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
				{error && (
					<div className="bg-red-800 text-white text-center uppercase p-2 mb-10 font-bold rounded-md">
						<p>Todos los campos son obligatorios</p>
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
					value="Agregar paciente"
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
				/>
			</form>
		</div>
	);
};

export default Form;

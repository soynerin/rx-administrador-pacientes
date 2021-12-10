const Patient = ({paciente, setPaciente, eliminarPaciente}) => {

	const {mascota, propietario, email, fecha, sintomas, id} = paciente;

	const handleEliminar = () => {
		const respuesta = confirm("Desea eliminar este paciente?");

		if (respuesta) {
			eliminarPaciente(id);
		}
	}

	return (
		<div className="bg-white rounded-lg shadow-md py-10 px-5 ml-10 my-5 mx-5">
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Nombre: <span className="normal-case font-normal">{mascota}</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Propietario:{" "}
				<span className="normal-case font-normal">{propietario}</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Email:{" "}
				<span className="normal-case font-normal">{email}</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Fecha Alta:{" "}
				<span className="normal-case font-normal">{fecha}</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Síntomas:{" "}
				<span className="normal-case font-normal">
					{sintomas}
				</span>
			</p>

			<div className="flex justify-between">
				<button 
					type="button"
					className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold uppercase py-2 px-10 rounded-md"
					onClick={() => { setPaciente(paciente) }}>Editar</button>
				<button 
					type="button"
					className="bg-red-600 hover:bg-red-800 text-white font-bold uppercase py-2 px-10 rounded-md"
					onClick={handleEliminar}>Eliminar</button>
			</div>
		</div>
	);
};

export default Patient;

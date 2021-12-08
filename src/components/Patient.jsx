const Patient = ({paciente}) => {

	const {mascota, propietario, email, fecha, sintomas} = paciente;

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
		</div>
	);
};

export default Patient;

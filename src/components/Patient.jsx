const Patient = () => {
	return (
		<div className="bg-white rounded-lg shadow-md py-10 px-5 ml-10 my-5 mx-5">
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Nombre: <span className="normal-case font-normal">Lula</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Propietario:{" "}
				<span className="normal-case font-normal">Neri</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Email:{" "}
				<span className="normal-case font-normal">neri@gmail.com</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Fecha Alta:{" "}
				<span className="normal-case font-normal">10/10/2021</span>
			</p>
			<p className="text-left uppercase font-bold mb-2">
				{" "}
				Síntomas:{" "}
				<span className="normal-case font-normal">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Esse labore dicta magnam nam necessitatibus incidunt
					veritatis minima voluptate dolorum velit, cum quis quam
					deserunt culpa ad ipsa vel repellat quas?
				</span>
			</p>
		</div>
	);
};

export default Patient;

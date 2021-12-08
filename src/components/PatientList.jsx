import Patient from "./Patient"

const PatientList = () => {
    return (
        <div className="sm:w-1/2 text-center h-screen sm:overflow-y-scroll">
            <h2 className="text-black font-black text-3xl">Listado de pacientes</h2>    

			<p className="text-lg mt-5 font-bold mb-10">
				Administra tus {" "}
				<span className="text-indigo-600">Pacientes y Citas</span>
			</p>     

            <Patient />    
        </div>
    )
}

export default PatientList

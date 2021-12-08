import Patient from "./Patient";

const PatientList = ({ pacientes }) => {

    return (        
        <div className="sm:w-1/2 text-center h-screen sm:overflow-y-scroll">
            { pacientes && pacientes.length ? (
                <>
                    <h2 className="text-black font-black text-3xl">
                        Listado de pacientes
                    </h2>

                    <p className="text-lg mt-5 font-bold mb-10">
                        Administra tus{" "}
                        <span className="text-indigo-600">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente => {
                        return <Patient paciente={paciente} key={paciente.id} />;
                    })}                
                </>
            ) : (
                <>
                    <h2 className="text-black font-black text-3xl">
                        No hay pacientes
                    </h2>

                    <p className="text-lg mt-5 font-bold mb-10">
                        Comienza agregando pacientes {" "}
                        <span className="text-indigo-600">y apareceran en este lugar</span>
                    </p>                
                </>
            )}


		</div>
	);
};

export default PatientList;

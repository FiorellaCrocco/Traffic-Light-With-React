import React, { useState } from "react";

const Semaforo = () => {
	const [light, setLight] = useState(0); //hook, 1 la variable, 2 función que puede modificar el valor de la variable; useState inicializa el valor/estado de la primer variable ( sería como light=0)

	//linea 12: className pasó de tener solo el "sting" a tener código js mediante un ternario
	// linea 13: al hacer click en el div se llama la función que modifica el valor de la variable light.

	return (
		<div className="semaforo">
			<div
				className={`red ${light == 1 ? "on" : ""}`}
				onClick={() => setLight(1)}></div>
			<div
				className={`yellow ${light == 2 ? "on" : ""}`}
				onClick={() => setLight(2)}></div>
			<div
				className={`green ${light == 3 ? "on" : ""}`}
				onClick={() => setLight(3)}></div>
		</div>
	);
};

export default Semaforo;

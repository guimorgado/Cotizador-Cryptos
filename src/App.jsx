import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import ImagenCrypto from './img/cryptos-img.png';

const Contenedor = styled.div`
	max-width: 900px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ContendorResultado = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const Imagen = styled.img`
	max-width: 400px;
	width: 80%;
	display: block;
`;

const Heading = styled.h1`
	font-family: 'Inter', sans-serif;
	font-size: 34px;
	margin-top: 80px;
	margin-bottom: 50px;
	text-align: center;

	&::after {
		content: '';
		width: 100px;
		height: 6px;
		background-color: #00b8e3;
		display: block;
		margin: 10px auto;
	}
`;

const App = () => {
	const [monedas, setMonedas] = useState({});
	const [cotizacion, setCotizacion] = useState({});
	const [cargando, setCargando] = useState(false);

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			const cotizarCripto = async () => {
				setCargando(true);
				const { moneda, cryptoMoneda } = monedas;

				console.log(cryptoMoneda);

				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoMoneda}&tsyms=${moneda}`;

				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				setCotizacion(resultado.DISPLAY[cryptoMoneda][moneda]);
				setCargando(false);
			};

			cotizarCripto();
		}
	}, [monedas]);

	return (
		<>
			<Contenedor>
				<Imagen src={ImagenCrypto} alt='Cryptos' />

				<div>
					<Heading>Cotiza Cryptomonedas al instante</Heading>
					<Formulario setMonedas={setMonedas} />
				</div>
			</Contenedor>
			<ContendorResultado>
				{cargando && <Spinner />}
				{cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}
			</ContendorResultado>
		</>
	);
};

export default App;

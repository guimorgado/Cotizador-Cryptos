/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useSelectMonedas from '../hooks/useSelectMonedas';

const InputSubmit = styled.input`
	background-color: #00b8e3;
	border: 4px solid #61e1ff;
	padding-left: 75px;
	padding-right: 75px;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 20px;
	border-radius: 30px;
	font-weight: 600;
	color: white;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const P = styled.p`
	font-family: 'Inter', sans-serif;
	color: white;
	background-color: red;
	padding: 15px;
	font-size: 20px;
	border-radius: 10px;
`;

const Formulario = ({ setMonedas }) => {
	const [cryptos, setCryptos] = useState([]);
	const [error, setError] = useState(false);

	const monedas = [
		{ id: 'USD', nombre: 'Dolar de Estados Unidos' },
		{ id: 'MXN', nombre: 'Peso Mexicano' },
		{ id: 'EUR', nombre: 'Euro' },
		{ id: 'GBP', nombre: 'Libra Esterlina' }
	];

	useEffect(() => {
		const consultarApi = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
			const respuesta = await fetch(url);
			const resultado = await respuesta.json();

			const arrayCriptos = resultado.Data.map(crypto => {
				const objeto = {
					id: crypto.CoinInfo.Name,
					nombre: crypto.CoinInfo.FullName
				};
				console.log(objeto.id);
				return objeto;
			});

			setCryptos(arrayCriptos);
		};

		consultarApi();
	}, []);

	const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
	const [cryptoMoneda, SelectCryptomonedas] = useSelectMonedas(
		'Elige tu Cryptomoneda',
		cryptos
	);

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Le estas dando');

		if ([moneda, cryptoMoneda].includes('')) {
			setError(true);

			return;
		}

		setError(false);
		setMonedas({
			moneda,
			cryptoMoneda
		});
	};

	return (
		<>
			{error && <P>Todos los campos son obligatorios</P>}

			<Form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCryptomonedas />
				<InputSubmit type='submit' value='Cotizar' />
			</Form>
		</>
	);
};

export default Formulario;

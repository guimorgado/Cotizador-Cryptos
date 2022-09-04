import styled from '@emotion/styled';
import { useState } from 'react';

const Select = styled.select`
	border: 2px solid #61e1ff;
	padding-left: 15px;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 20px;
	border-radius: 30px;
	margin-top: 25px;
	margin-bottom: 25px;
`;

const InputLabel = styled.label`
	margin-top: 10px;
	font-weight: 600;
	font-family: 'Inter', sans-serif;
	font-size: 25px;
`;

const useSelectMonedas = (label, opciones) => {
	const [state, setState] = useState('');

	const SelectMonedas = () => {
		return (
			<>
				<InputLabel>{label}</InputLabel>
				<Select value={state} onChange={e => setState(e.target.value)}>
					<option>-- Seleccione --</option>
					{opciones.map(opcion => {
						return (
							<option key={opcion.id} value={opcion.id}>
								{opcion.nombre}
							</option>
						);
					})}
				</Select>
			</>
		);
	};

	return [state, SelectMonedas];
};

export default useSelectMonedas;

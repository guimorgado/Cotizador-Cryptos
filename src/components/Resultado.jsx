/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

const ContendorCryptos = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	font-family: 'Inter', sans-serif;
`;

const PCryptos = styled.p`
	font-size: 18px;
	font-weight: 600;
`;

const ImageCrypto = styled.img`
	width: 200px;
	height: 200px;
`;

const SpanCryptos = styled.span`
	font-weight: 400;
`;

const Resultado = ({ cotizacion }) => {
	console.log(cotizacion);

	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTDAY, IMAGEURL, LASTUPDATE } =
		cotizacion;

	return (
		<ContendorCryptos>
			<ImageCrypto src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen' />
			<div>
				<PCryptos>
					El precio es de: <SpanCryptos>{PRICE}</SpanCryptos>
				</PCryptos>
				<PCryptos>
					El precio más alto del dia es de: <SpanCryptos>{HIGHDAY}</SpanCryptos>
				</PCryptos>
				<PCryptos>
					El precio más bajo del dia es de: <SpanCryptos>{LOWDAY}</SpanCryptos>
				</PCryptos>
				<PCryptos>
					Bajó un: <SpanCryptos>{CHANGEPCTDAY}%</SpanCryptos>
				</PCryptos>
				<PCryptos>
					Última actualización: <SpanCryptos>{LASTUPDATE}</SpanCryptos>
				</PCryptos>
			</div>
		</ContendorCryptos>
	);
};

export default Resultado;

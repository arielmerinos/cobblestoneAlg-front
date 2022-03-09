import React from "react";
import styled from 'styled-components';

const Titulos = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`

const Titulo = styled.h1`
	font-family: Gilroy-ExtraBold;
	margin: 0;
	font-size: 4rem;
`

const Subitulo = styled.h2`
	font-family: Gilroy-Light;
	margin: 0;
`

export const Title = () =>{
	return <Titulos>
		<Subitulo>Análisis de algoritmos</Subitulo>
		<Titulo>Adoquinamiento</Titulo>
	</Titulos>
}
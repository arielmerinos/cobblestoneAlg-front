import waves from "../../assets/images/waves.svg";
import React from "react";
import styled from "styled-components"

const Image = styled.img`
	width: 100%;
	display: block;
	bottom: -10px;
	@media(max-width: 948px){
	display: none;
	}
`

export const Waves = () => {
	return <Image src={waves}/>
}
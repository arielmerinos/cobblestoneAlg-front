import waves from "../../assets/images/waves.svg";
import React from "react";
import styled from "styled-components"

const Image = styled.img`
	width: 100%;
	display: block;
	margin-top: 2rem;
    bottom: -10px;
	@media (max-width: 380px){
		bottom: -50px;
	}
`

export const Waves = () => {
	return <Image src={waves}/>
}
import React from "react";
import sizeimg from "../assets/images/size.svg";
import special from "../assets/images/special.svg";
import {InfoContainer, InfoSize, InfoSpecial, InfoSizeContainer, InfoSpecialContainer} from "../assets/styles/Info";

const Info = ({size, coordx, coordy}) =>{
return <InfoContainer>
	<InfoSizeContainer >
		<img src={sizeimg} alt={'.'} />
		<InfoSize>
			{size} x {size}
		</InfoSize>
	</InfoSizeContainer>
	<InfoSpecialContainer>
		<img src={special} alt={'.'}/>
		<InfoSpecial> ( {coordy+1},  {size -coordx})</InfoSpecial>
	</InfoSpecialContainer>
</InfoContainer>
}

export default Info
import React from "react";
import {Title} from './Title'
import {Interactive, Input, Button} from "../assets/styles/InteractiveSide";

export const InteractiveSide = ({rand_button, set_dimensions}) =>{
	return <Interactive>
		<Title/>
		<div>
			<Button onClick={() => rand_button(Math.ceil(Math.random() * 50))}> random</Button>
			<Input type="number" placeholder={'  e. g.  2,  4,  8,  16,  32'} onChange={(e) => {
				set_dimensions(e.target.valueAsNumber)
			}}/>
		</div>
	</Interactive>
}
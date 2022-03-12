import React from "react";
import {Title} from './Title'
import Info from '../components/Info'
import {Interactive, Input, Button, Buttons} from "../assets/styles/InteractiveSide";
import Repos from "./Repos";

export const InteractiveSide = ({rand_button, set_dimensions, size, coordx, coordy}) =>{
	return <Interactive>
		<Title/>
		<Buttons>
			<Button onClick={() => rand_button(Math.ceil(Math.random() * 50))}> random</Button>
			<Input type="number" placeholder={'  e. g.  2,  4,  8,  16,  32'} onChange={(e) => {
				set_dimensions(e.target.valueAsNumber)
			}}/>
		</Buttons>
		<Info size={size} coordx={coordx} coordy={coordy}></Info>
		<Repos/>
	</Interactive>
}
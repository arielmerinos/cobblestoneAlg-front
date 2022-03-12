import React from "react";
import {GridContainer, Grid} from "../assets/styles/Grilla";
import '../assets/styles/App.css';
import {individualSquares} from "./IndividualSquare";


function Grilla({canvas, size}) {

	return <GridContainer >
		<Grid size={size}>
			{canvas.map((list) => <> {individualSquares(list)} </>) }
		</Grid>
	</GridContainer>
}

export default Grilla
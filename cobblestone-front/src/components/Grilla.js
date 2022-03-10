import React, {useEffect, useState} from "react";
import {repeat} from "@react-spectrum/layout";
import {Grid} from '@adobe/react-spectrum'
import {getMinimum} from "../services/utils/minimum";
import {getDefaultData, getSize} from "../services/get-api";
import {GridContainer} from "../assets/styles/Grilla";
import '../assets/styles/App.css';
import {individualSquares} from "./IndividualSquare";


function Grilla({rand_button, dimensions, margin}) {
	const [canvas, setCanvas] = useState([]);
	const [size, setSize] = useState(8);


	useEffect(()=>{
		getSize(dimensions).then(
			res => {
				const data = res.data
				if (data){
					setSize(data.size_canvas)
					setCanvas(data.lista)
				}
			}
		)
	}, [dimensions])

	useEffect(() => {
		getDefaultData().then(
			res =>{
				const data = res.data
				if (data){
					setSize(data.size_canvas)
					setCanvas(data.lista)
				}
			}
		)
	} , [rand_button])
	console.log(`Esto es size ${size}`)

	return <GridContainer >
		<Grid
			columns={repeat(size, getMinimum(margin) / size)}
			rows={repeat(size, getMinimum(margin) / size)}
			justifyContent="center"
		>
			{canvas.map((list) => <> {individualSquares(list, size, margin)} </>) }
		</Grid>
	</GridContainer>
}

export default Grilla
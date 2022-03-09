import logo from './logo.svg';

import './App.css';
import {Grid} from '@adobe/react-spectrum'
import {getDefaultData, getSize} from "./services/getCanvas";
import {useEffect, useState} from "react";
import {repeat} from "@react-spectrum/layout";


function Grilla({rand_button, dimensions}) {
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



	const getMinimum = () =>{
		return Math.min(window.innerWidth, window.innerHeight -250)
	}
	const ids = (id) => {
		const minmimum = getMinimum()
		return id.map((elemento) => {
			if (elemento.id === -1){
				return <div style={{
					backgroundColor: 'black',
					width: minmimum / size,
					height: minmimum / size}}> </div>
			}
			return <div style={{
				backgroundColor: elemento.color,
				width: minmimum / size,
				height: minmimum / size}}> </div>
		})
	}

	return <div  style={{
		margin: '0 auto',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '80vh'}}>
		<Grid
			columns={repeat(size, getMinimum() / size)}
			rows={repeat(size, getMinimum() / size)}
			justifyContent="center"> {canvas.map((list) => <> {ids(list)}</>)}
		</Grid>
	</div>


}

export default Grilla
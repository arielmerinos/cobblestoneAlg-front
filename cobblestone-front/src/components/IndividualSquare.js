import React from "react"
import {getMinimum} from "../services/utils/minimum";

export const individualSquares = (row, size, margin) => {
	const minimum = getMinimum(margin)

	return row.map((square) => {
		if (square.id === -1){
			return <div  style={{
				backgroundColor: 'black',
				width: minimum / size,
				height: minimum / size,
				overflow: 'hidden'
			}}> </div>
		}
		return <div style={{
			backgroundColor: square.color,
			width: minimum / size,
			height: minimum / size,
			overflow: 'hidden'
		}}> </div>
	})
}

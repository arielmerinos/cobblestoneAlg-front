import React from "react"
import {getMinimum} from "../services/utils/minimum";
import {Square, SquareContainer} from "../assets/styles/Square";

export const individualSquares = (row, size, margin) => {
	const minimum = getMinimum(margin)

	return row.map((square) => {
		if (square.id === -1){
			return  <SquareContainer><Square/></SquareContainer>
		}
		return <SquareContainer> <Square color={square.color}></Square></SquareContainer>
	})
}

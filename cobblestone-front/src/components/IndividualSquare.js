import React from "react"
import {Square, SquareContainer} from "../assets/styles/Square";

export const individualSquares = (row) => {

	return row.map((square) => {
		if (square.id === -1){
			return  <SquareContainer><Square/></SquareContainer>
		}
		return <SquareContainer> <Square color={square.color}/></SquareContainer>
	})
}

import styled from 'styled-components'

export const SquareContainer = styled.div`
	padding-top: 100%; /* padding trick directly on the grid item */
  	box-sizing: border-box;
 	position: relative;
`
export const Square = styled.div`
	position: absolute;
  	top: 0;
  	right:0;
  	left: 0;
  	bottom: 0;
	background-color: ${props => props.color || 'black' };

`





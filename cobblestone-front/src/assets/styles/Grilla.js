import styled from 'styled-components'

export const GridContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
	padding-bottom: 2rem;
	@media(max-width: 948px){
		max-width: 90%;
	}
	@media(max-width: 650px){
		max-height: 40vh;
	}
`

export const Grid = styled.div`
	margin-top: 2rem;
	max-height: 80vh;
	display: grid;
	grid-template-columns: repeat(${props => props.size}, 1fr);
	justify-content: center;
	width: 80%;
	max-width: 800px;
	
`
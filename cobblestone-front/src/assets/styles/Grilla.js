import styled from 'styled-components'

export const GridContainer = styled.div`
	margin: 0 auto;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
	@media(max-width: 948px){
		max-width: 90%;
	}
	@media(max-width: 650px){
		max-height: 40vh;
	}
`
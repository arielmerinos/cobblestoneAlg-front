import styled from 'styled-components'

export const InfoContainer = styled.div`
	display: flex;
	max-width: 80vw;
`

export const InfoSize = styled.div`
	display: flex;
	font-family: Gilroy-Light;
	font-size: 2rem;
	@media(max-width: 400px){
		font-size: 1.5rem;
	}
`

export const InfoSpecial = styled.div`
	display: flex;
	font-family: Gilroy-Light;
	font-size: 2rem;
	@media(max-width: 400px){
		font-size: 1.7rem;
	}
`
export const InfoSizeContainer = styled.div`
	display: flex; 
	margin-right: 1rem;
	align-items: center;
	& img{
		width: 30%;
	}
`
export const InfoSpecialContainer = styled.div`
	display: flex;
	align-items: center;
		& img{
		width: 30%;
	}
`
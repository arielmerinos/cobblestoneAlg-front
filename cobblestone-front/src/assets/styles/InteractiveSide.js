import styled from 'styled-components'

export const Interactive = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 948px){
    margin-top: 5em;
    height: auto;
    justify-content: center;
    }
    @media(max-width: 320px){

    }
`

export const Button = styled.button`
	background: linear-gradient(180deg, #31B3F2 0%, #ED20A8 100%);
	box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.07), 0px 4.82353px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 2.00345px 10.0172px rgba(0, 0, 0, 0.035), 0px 0.724608px 3.62304px rgba(0, 0, 0, 0.0243888);
	border-radius: 25px;
	max-width: 50%;
	min-width: 120px;
	height: 3rem;
	border: none;
	font-family: Gilroy-ExtraBold;
	color: white;
	&:hover{
		cursor: pointer;
	}
	&:active{
		background: linear-gradient(90deg, #31B3F2 0%, #ED20A8 100%);
	}
`

export const Input = styled.input`
	&::-webkit-inner-spin-button {
	  -webkit-appearance: none;
	}
	&:focus-visible{
		border: none;
		justify-content: center;
	}
	border: none;
	background-color: #e6e6e6;
	height: 3rem;
	border-radius: 25px;
	padding-left: 30px;
	margin: 1rem;
`

import {Title} from './Title'
import styled from 'styled-components'

const Interactive = styled.div`
	display: flex;
	flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
background: linear-gradient(180deg, #31B3F2 0%, #ED20A8 100%);
box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.07), 0px 4.82353px 24.1177px rgba(0, 0, 0, 0.0456112), 0px 2.00345px 10.0172px rgba(0, 0, 0, 0.035), 0px 0.724608px 3.62304px rgba(0, 0, 0, 0.0243888);
border-radius: 25px;
max-width: 50%;
min-width: 120px;
height: 3rem;
border: none;
font-family: Gilroy-ExtraBold;
color: white;
`

const Input = styled.input`
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
border: none;
background-color: #e6e6e6;
height: 3rem;
border-radius: 25px;
padding-left: 30px;
margin: 1rem;
&:focus-visible{
	border: none;
	justify-content: center;
}

&::placeholder{

}
`


export const InteractiveSide = ({rand_button, set_dimensions}) =>{
	return <Interactive>
		<Title></Title>
		<div>
			<Button onClick={() => rand_button(Math.ceil(Math.random() * 50))}> random</Button>
			<Input type="number" placeholder={'  e. g.2,  4,  8,  16,  32'} onChange={(e) => {
				set_dimensions(e.target.valueAsNumber)
			}}/>
		</div>
	</Interactive>
}
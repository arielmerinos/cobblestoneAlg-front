import styled from 'styled-components'

export const ReposContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 2rem;
	max-width: 90vw;
	align-content: center;
    justify-content: center;
}
`

export const RepoInfoImage = styled.img`
	width: 10%;
	max-width: 40px;
	min-width: 10px;
	margin: 0 8px;
`

export const RepoContainer = styled.a`
	display: flex;
	cursor: pointer;
	border: none;
	color: #282c34;
	background: none;
	&:hover{
		background: -webkit-linear-gradient(left, #ff10a0, #2AB8F4);
  	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent;
	}
	text-decoration: none;
	&:visited{
		text-decoration: none;
	}
`

export const Link = styled.h1`
	margin: 0;
	padding: 0;
	font-family: Gilroy-ExtraBold;
	font-size: 1rem;
	  	
`
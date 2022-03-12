import React from 'react'
import {ReposContainer, RepoInfoImage, RepoContainer, Link} from "../assets/styles/Repos";
import github from '../assets/images/github.svg'
import figma from '../assets/images/figma.svg'

const Repos = () =>{
	return <ReposContainer>
		<RepoContainer target={'_blank'} href={"https://github.com/arielmerinos/cobblestoneAlg"} >
			<RepoInfoImage src={github}/>
			<Link>Código backend</Link>
		</RepoContainer>
		<RepoContainer target={'_blank'} href={"https://github.com/arielmerinos/cobblestoneAlg-front"} >
			<RepoInfoImage src={github}/>
			<Link>Código backend</Link>
		</RepoContainer >
		<RepoContainer target={'_blank'} href={"https://www.figma.com/file/GrzRD57sODTLGBfpZlFKJm/Cobblestone?node-id=16%3A37"}>
			<RepoInfoImage src={figma}/>
			<Link>Prototipo en Figma</Link>
		</RepoContainer>
	</ReposContainer>
}

export default Repos
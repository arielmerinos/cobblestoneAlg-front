import waves from './waves.svg'

import './App.css';
import Grilla from './Grilla'
import {InteractiveSide} from "./InteractiveSide";
import React, {useState} from "react";
import {Grid, repeat} from "@react-spectrum/layout";

function App() {

  const [rand, setRand] = useState(1);
  const [dimensions, set_dimensions ] = useState();

  return <>
  <Grid columns={repeat(2, ((window.innerWidth/2) - 80))} height={'80vh'} justifyContent="center"  >
    <InteractiveSide rand_button={setRand} set_dimensions={set_dimensions}></InteractiveSide>
    <Grilla rand_button={rand} dimensions={dimensions}></Grilla>

  </Grid>
    <img src={waves} width={'100%'} alt={'oad'} style={{display:'block' ,bottom: -10}}/>
  </>
}

export default App;

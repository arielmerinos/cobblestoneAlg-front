import React, {useState} from "react";
import {Grid, repeat} from "@react-spectrum/layout";
import {InteractiveSide} from "../components/InteractiveSide";
import Grilla from '../components/Grilla'
import {Waves} from "../layouts/footer";
import '../assets/styles/App.css';

function App() {

  const [rand, setRand] = useState(1);
  const calculeGridMargin = () =>{
    const width = window.innerWidth
    if (width < 550){
      // For tablets
      return 600
    }
    if (width < 100) {
      //works good on desktop small
      return 480
      //works good on desktop large
    }
    return 250
  }

  const sizeOfCols = () =>{
    if(window.innerWidth > 988){
      return (window.innerWidth / 2) - 80
    }
    else {
      return window.innerWidth - 30
    }
  }

  const howMuchCols = () => {
    if (window.innerWidth < 988){
      return 1
    }
    else return 2
  }

  const [dimensions, set_dimensions ] = useState();

  return <>
    <Grid
        columns={repeat(howMuchCols(), sizeOfCols())}
        marginTop={'3rem'}
        justifyContent="center" />
      <InteractiveSide
          rand_button={setRand}
          set_dimensions={set_dimensions}/>
      <Grilla
          rand_button={rand}
          dimensions={dimensions}
          margin={calculeGridMargin()}/>
    <Waves/>
  </>
}

export default App;

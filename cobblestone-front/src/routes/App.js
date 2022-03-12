import React, {useEffect, useState} from "react";
import {Grid, repeat} from "@react-spectrum/layout";
import {InteractiveSide} from "../components/InteractiveSide";
import Grilla from '../components/Grilla'
import {Waves} from "../layouts/footer";
import '../assets/styles/App.css';
import {getDefaultData, getSize} from "../services/get-api";

function App() {

  const [rand, setRand] = useState(1);
  const [size, setSize] = useState(8);
  const [canvas, setCanvas] = useState([]);
  const [dimensions, set_dimensions ] = useState();
  const [coordX, setCoordX] = useState()
  const [coordY, setCoordY] = useState()

  useEffect(()=>{
    getSize(dimensions).then(
        res => {
          const data = res.data
          if (data){
            setSize(data.size_canvas)
            setCanvas(data.lista)
            setCoordX(data.init_coords.x)
            setCoordY(data.init_coords.y)
          }
        }
    )
  }, [dimensions])

  useEffect(() => {
    getDefaultData().then(
        res =>{
          const data = res.data
          if (data){
            setSize(data.size_canvas)
            setCanvas(data.lista)
            setCoordX(data.init_coords.x)
            setCoordY(data.init_coords.y)
            console.log(`this is canvas ${canvas}`)
          }
        }
    )
  } , [rand])
  console.log(`Esto es size ${size}`)


  const howMuchCols = () => {
    if (window.innerWidth < 988){
      return 1
    }
    else return 2
  }


  return <>
    <Grid
        columns={repeat(howMuchCols(), '1fr')}
        marginTop={'3rem'}
        marginBottom={'3rem'}
        justifyContent="center"
        maxWidth={'2000px'}
    >
      <InteractiveSide
          rand_button={setRand}
          set_dimensions={set_dimensions}
          size={size}
          coordy={coordY}
          coordx={coordX}
      />
      <Grilla
          canvas={canvas}
          size={size}
      />
    </Grid>
    <Waves/>
  </>
}

export default App;

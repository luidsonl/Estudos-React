import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import ResetButton from "./components/ResetButton";


const App = () => {
  const [cells, setCells] = useState(['','','','','','','','','']);
  const [go, setGo] = useState('circle');
  const [cellsLeft, setCellsLeft] = useState(9);
  const[message, setMessage] = useState('');
  const[running, setRunning] = useState(true);

  useEffect(()=>{
    const checkScore = ()=>{
      if(cellsLeft === 0){
        setMessage(`Draw!`);
        setRunning(false);
      }else{
        setMessage(`It is now ${go}'s go.`);
      }
      const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ]
      winningCombos.forEach(array=>{
        const circleWins = array.every(cell=>cells[cell]=== 'circle')
        const crossWins = array.every(cell=>cells[cell]=== 'cross')

        if(circleWins){
          setMessage('Circle Wins!!')
          setRunning(false);
          return

        }else if(crossWins){
          setMessage('Cross Wins!!')
          setRunning(false);
          return
        }
      })

    }
    checkScore()
  }, [cellsLeft, go,cells])

  return (
    
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index)=>
          <Cell
            running = {running}
            key={index} 
            id={index} 
            cell={cell}
            setCells = {setCells}
            go={go}
            setGo={setGo}
            cells={cells}
            setCellsLeft = {setCellsLeft}
          />)}
          
      </div>
      
      <h3>{message}</h3>
      {!running && 
        <ResetButton
          setCells = {setCells}
          setGo = {setGo}
          setCellsLeft = {setCellsLeft}
          setMessage = {setMessage}
          setRunning = {setRunning}
        />}
    </div>
  );
}

export default App;

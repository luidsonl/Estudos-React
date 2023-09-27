import './styles.css';

const ResetButton = ({setCells, setGo, setCellsLeft, setMessage, setRunning})=>{
    const handleReset = () =>{
        setCells(['','','','','','','','','']);
        setGo('circle');
        setCellsLeft(9);
        setMessage('');
        setRunning(true);
    }
    
    return(
        <button onClick={()=> handleReset()}>Reset</button>
    );
}

export default ResetButton
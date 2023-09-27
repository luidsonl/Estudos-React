const Cell = ({ running, cells, id, cell, setCells, setCellsLeft, go, setGo})=>{

    const handleCellChange = ()=>{
        const updateCells = cells.map((cell, index)=>{
            if(index === id){
                return go
            }else{
                return cell
            }
        })
        setCells(updateCells)
        setCellsLeft((cellsLeft)=>cellsLeft - 1)
    }

    const handleSetGo = ()=>{
        if(go ==='cross'){
            setGo('circle')
        }else if(go ==='circle'){
            setGo('cross')
        }
        
    }

    const handleClick = () =>{
        
        if(cell === '' && running){
            handleCellChange()
            handleSetGo()
            
        }

    };

    return (
        <div className="square" id={id} onClick={()=>handleClick({id})}>
            <div className={cell}></div>
        </div>
    );
}

export default Cell;
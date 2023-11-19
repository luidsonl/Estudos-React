import React from "react";
import './styles.css';


const CityCard = ({name, state, id}) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>{state}</p>
        </div>
    );
}

export default CityCard

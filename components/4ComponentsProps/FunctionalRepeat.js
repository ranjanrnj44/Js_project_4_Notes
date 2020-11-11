import React from "react";

function FunctionalRepeat(props){
    return <h4>Functional Rpeat {props.name}</h4>
}

function Fun(){
    return(
        <div>
            <FunctionalRepeat name="sara1" />
            <FunctionalRepeat name="sara11" />
            <FunctionalRepeat name="sara111" />
        </div>
    )
}

export default Fun;
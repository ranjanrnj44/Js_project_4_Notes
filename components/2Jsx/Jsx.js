import React from "react";

//Embedding
function JsxEmbedding(){
    let name="jsx component"
    return <h3>2 Hello {name}</h3>
}



//Expression
function Person(user){
    return user.fname + " " + user.lname;
}

let user = {
    fname : "jsx",
    lname : "expression"
}

function JsxExpression(){
    return <h4> {Person(user)} </h4>;
}

export {JsxEmbedding , JsxExpression};
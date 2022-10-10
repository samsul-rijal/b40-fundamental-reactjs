import React from "react";

function EmbedExpression() {
  //Create function here

  function getHallo(){
    return "Hallo Batch 40"
  }

  //Create a variable here
  const Name = "Fandi"

  return (
    // Code Inside div
    <div>
      {getHallo()}
      <h2>{Name}</h2>
    </div>
  );
}

export default EmbedExpression;

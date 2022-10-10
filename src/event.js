import React from "react";

function Event() {
  //Create function here

  function Greeting(){
    return alert("good morning everyone have a nice day")
  }

  return (
    // Code Inside div
    <div>
      <button onClick={Greeting}>Klik</button>
      <button onClick={() => alert("Saya diklik")}>Klik ME</button>
    </div>
  );
}

export default Event;

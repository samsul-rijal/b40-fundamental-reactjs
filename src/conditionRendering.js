import React from "react";
import { useState } from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  );
}

//Create Component GuestPage
function GuestPage(props) {
  return (
    <div>
      <h1>Please Sign</h1>
      <button onClick={props.login}>Login</button>
    </div>
  );
}

function ConditionRendering() {
  //init State
  const [isLogin, setIsLogin] = useState(false)

  return (
    // Code Inside div
    <div>
      {isLogin ? 
        <PrivatePage logout={() => setIsLogin(false)} /> 
        : 
        <GuestPage login={() => setIsLogin(true)} />
      }
    </div>
  );
}

export default ConditionRendering;

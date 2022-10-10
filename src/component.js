import React from "react";
// import component Header
import Header from "./components/header"

function Component() {
  return (
    //   Code Here
    <div>
      <Header />
      <Footer />
    </div>
  );
}

// Create a new component here
function Footer() {
  return(
    <div>
      <h2>This is Footer</h2>
    </div>
  )
}

export default Component;

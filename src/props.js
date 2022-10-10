import React from "react";
import Button from "./components/atoms/Button";
import List from "./components/list";

//Import Components

function Props() {
  return (
    // Code Inside div
    <div>
      <List name="Rizal" address="Jaksel" desc="loremmm...." />
      <Button onClick={() => alert("Selamat anda berhasil register")} name="Register" />
    </div>
  );
}

export default Props;

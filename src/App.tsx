import nodeLogo from "./assets/node.svg";
import { useEffect, useState } from "react";
import Update from "@/components/update";
import "./App.scss";
import AppLayout from "./components/AppLayout";
import sendAsync from "@/message-control/renderer";
import "reflect-metadata"



function App() {
  useEffect(() => {
    sendAsync("SELECT * FROM USERS").then(data => console.log("response from db", data));
  }, []);
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export default App;

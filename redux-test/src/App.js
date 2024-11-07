import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

function App() {
  return (
    <div className="App">
      <Box>
        <canvas width="600" height="400" style={{ border: "1px solid gray" }} />
      </Box>
    </div>
  );
}

export default App;

let Box = styled.div`
  display: inline-block;
  width: 602px;
  height: 402px;
  position: absolute;
  left: 30%;
  top: 3%;
  background-color: blue;
`;

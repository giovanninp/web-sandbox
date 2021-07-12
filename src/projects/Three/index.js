import React from "react";
import "./index.css";

import { CanvasFrame } from "./components";
import { Box } from "./meshes";

const App = () => (
  <div>
    <CanvasFrame>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box onHover={() => console.log('hELLO')} materialProps={{ color: "orange" }} position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </CanvasFrame>
  </div>
);

export default App;

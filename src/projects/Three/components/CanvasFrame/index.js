import React from "react";
import { Canvas } from "@react-three/fiber";

function CanvasFrame({ children }) {
  return <Canvas>{children}</Canvas>;
}

export default CanvasFrame;

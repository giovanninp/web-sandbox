import React, { useRef } from "react";

function Box({ boxProps, materialProps, ...props }) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry {...boxProps} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
}

export default Box;

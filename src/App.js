import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Scene from "./Scene";

function find(e) {
  console.log(e.target);
}

export default function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}

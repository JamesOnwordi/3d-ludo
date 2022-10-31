import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav";

import Scene from "./Scene";

export default function App() {
  return (
    <Suspense fallback={null}>
      <div className="displayBox">
        <h1 id="display">Yellow turn, roll dice to play</h1>
      </div>
      <Canvas shadows flat linear>
        <Scene />
        <OrbitControls />
      </Canvas>
      <Nav />
      <div className="displayBox">hidden</div>
    </Suspense>
  );
}

'use client'
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Computers = () => {
  const computer = useGLTF("./elf/scene.gltf");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4.7 : 7.75}
        position={isMobile ? [0, -1.25, -2.2] : [2, -2.56, -1.5]}
        rotation={[-0.01, 1, -0.1]}
      />
    </mesh>
  );
};

const ElfCanvas = () => {
  return (
    <>
      <Canvas
        className="elf-wiz"
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 4], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
      {/* Optionally, show Loader outside Canvas if needed */}
      {/* <Loader /> */}
    </>
  );
};

export default ElfCanvas;
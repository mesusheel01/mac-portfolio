'use client'
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const ElfModel = () => {
  const elf = useGLTF("./elf/scene.gltf");
  const [isMobile, setIsMobile] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(2); // radians per second
  const modelRef = useRef<THREE.Object3D>(null);

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

  useEffect(() => {
    // After 1 second, slow down the rotation
    const timer = setTimeout(() => setRotationSpeed(0.2), 1000);
    return () => clearTimeout(timer);
  }, []);

  useFrame((_, delta) => {
    if (modelRef.current) {
      // Animate y rotation for spinning, not x
      modelRef.current.rotation.y += rotationSpeed * delta;
    }
  });

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
        shadow-color="white"
      />
      <pointLight intensity={1} />
      <primitive
        ref={modelRef}
        object={elf.scene}
        scale={isMobile ? 4.7 : 6}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]} // rotate 180deg on y so model faces front
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
        camera={{ position: [1,7, 4], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ElfModel />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ElfCanvas;
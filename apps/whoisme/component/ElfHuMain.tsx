'use client'
import * as THREE from 'three';
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Center, Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

const ElfModel = () => {
  const elf = useGLTF("/elf/scene.gltf");
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
    <Center>
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
        {/* Wrap in a group to separate spinning from orientation correction */}
        <group ref={modelRef}>
          <primitive
            object={elf.scene}
            scale={isMobile ? 4.7 : 6}
            rotation={[-Math.PI / 2.2, 0, 0]} // Rotate on X to stand up
            position={[0, -2, 0]} // Adjust vertical position if needed
          />
        </group>
      </mesh>
    </Center>
  );
};

const ElfCanvas = () => {
  return (
    <>
      <Canvas
        className="elf-wiz"
        frameloop='always'
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true}
          />
          <ElfModel />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

export default ElfCanvas;
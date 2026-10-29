"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function DeveloperWorkspace() {
  const laptop = useRef<Group>(null);
  const codeIcon = useRef<Group>(null);

  useFrame((state, delta) => {
    if (laptop.current) {
      laptop.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.16;

      laptop.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.35) * 0.04;
    }

    if (codeIcon.current) {
      codeIcon.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <>
      {/* Floating laptop */}
      <Float speed={1.4} floatIntensity={0.35} rotationIntensity={0.12}>
        <group ref={laptop} position={[0, -0.35, 0]}>
          {/* Laptop screen */}
          <mesh position={[0, 0.45, -0.12]}>
            <boxGeometry args={[2.15, 1.38, 0.09]} />
            <meshStandardMaterial
              color="#171717"
              metalness={0.8}
              roughness={0.25}
            />
          </mesh>

          {/* Screen display */}
          <mesh position={[0, 0.46, -0.068]}>
            <planeGeometry args={[1.96, 1.18]} />
            <meshBasicMaterial color="#080b0a" />
          </mesh>

          {/* Code lines */}
          {[
            { x: -0.62, y: 0.79, w: 0.7, c: "#e4bf68" },
            { x: -0.49, y: 0.57, w: 1.0, c: "#56c6a3" },
            { x: -0.36, y: 0.35, w: 0.74, c: "#b5a0ee" },
            { x: -0.49, y: 0.13, w: 1.02, c: "#d8d8d8" },
          ].map((line, index) => (
            <mesh key={index} position={[line.x, line.y, -0.05]}>
              <planeGeometry args={[line.w, 0.035]} />
              <meshBasicMaterial color={line.c} />
            </mesh>
          ))}

          {/* Laptop keyboard base */}
          <mesh position={[0, -0.3, 0.28]} rotation={[-0.12, 0, 0]}>
            <boxGeometry args={[2.3, 0.09, 0.82]} />
            <meshStandardMaterial
              color="#a67c32"
              metalness={0.85}
              roughness={0.3}
            />
          </mesh>

          {/* Trackpad */}
          <mesh position={[0, -0.245, 0.43]}>
            <boxGeometry args={[0.53, 0.012, 0.25]} />
            <meshStandardMaterial
              color="#24201a"
              metalness={0.6}
              roughness={0.35}
            />
          </mesh>
        </group>
      </Float>

      {/* Floating developer code symbol */}
      <Float speed={2} floatIntensity={0.7}>
        <group ref={codeIcon} position={[1.45, 0.9, 0.2]}>
          <mesh>
            <icosahedronGeometry args={[0.37, 1]} />
            <meshStandardMaterial
              color="#d8b15a"
              metalness={0.9}
              roughness={0.18}
              wireframe
            />
          </mesh>
        </group>
      </Float>

      {/* Floating technology sphere */}
      <Float speed={1.7} floatIntensity={0.8}>
        <mesh position={[-1.4, 0.85, 0]}>
          <sphereGeometry args={[0.22, 24, 24]} />
          <meshStandardMaterial
            color="#f5d98b"
            metalness={1}
            roughness={0.15}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function GoldScene() {
  return (
    <div className="h-[320px] w-full sm:h-[430px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.3} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2.5}
          color="#ffe5a5"
        />

        <pointLight position={[-3, 2, 2]} intensity={8} color="#d8a441" />

        <DeveloperWorkspace />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

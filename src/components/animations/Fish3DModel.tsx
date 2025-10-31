// FishHero.tsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


type GLTFResult = {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
};

// Fish component
const Fish: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const fishRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/tillapia_buttikoferi_fish.glb") as GLTFResult;
  const { actions } = useAnimations(animations, fishRef);
  // Play baked animation from GLB
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action: any) => action.play());
    }
  }, [actions]);

  // useEffect(() => {
  //   if (fishRef.current) {
  //     fishRef.current.traverse((child) => {
  //       if ((child as THREE.Mesh).isMesh) {
  //         const mesh:any = child as THREE.Mesh;
  //         if (Array.isArray(mesh.material)) {
  //           mesh.material.forEach((mat: any) => mat.color.set("white")); // light blue
  //         } else {
  //           mesh.material.color.set("#66ccff"); // light blue
  //         }
  //       }
  //     });
  //   }
  // }, [fishRef]);

  return (
    <primitive
      ref={fishRef}
      object={scene}
      scale={isMobile?12:23} // Big fish
      rotation={[0, Math.PI / 2, 0]} // Face left
       // Slight shift left
    />
  );
};

// Camera controller to look at origin
const CameraController: React.FC = () => {
  const camera = useThree((state) => state.camera);
  useFrame(() => {
    camera.lookAt(0, 0, 0);
  });
  return null;
};

// Main FishHero component
const Fish3DModel: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div style={isMobile?{ position: "relative", width: "100%", height: "250px", overflow: "hidden" }:{position: "relative", width: "100%", height: "500px", overflow: "hidden"}}>
      <Canvas
        camera={{ position: [4, 1, 8], fov: 50 }}
        style={isMobile?{ width: "90%", height: "100%", position: "absolute", top: -12, left: 0 }:{ width: "90%", height: "100%", position: "absolute", top: 0, left: 0 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Fish />
        </Suspense>
        <CameraController />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      {/* Optional: Other hero content on top */}
     
    </div>
  );
};

export default Fish3DModel;

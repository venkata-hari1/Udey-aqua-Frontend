import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

type GLTFResult = {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
};

interface KoiProps {
  initialPosition: number;
  initialDirection: number;
  onPositionChange: (pos: number, dir: number) => void;
}

const Koi: React.FC<KoiProps> = ({ initialPosition, initialDirection, onPositionChange }) => {
  const koiRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/koi_fish.glb") as GLTFResult;
  const { actions } = useAnimations(animations, koiRef);

  const speed = 0.03;
  const leftBound = -18;
  const rightBound = 10;
  const direction = useRef(initialDirection);
  const hasInitialized = useRef(false);

  useFrame(() => {
    if (!koiRef.current) return;
    if (!hasInitialized.current) {
      koiRef.current.position.x = initialPosition;
      koiRef.current.rotation.y = initialDirection === -1 ? Math.PI : 0;
      hasInitialized.current = true;
    }
    if (actions) Object.values(actions).forEach((action: any) => action.play());
    koiRef.current.position.x += speed * direction.current;
    if (koiRef.current.position.x >= rightBound) {
      direction.current = -1;
      koiRef.current.rotation.y = Math.PI;
    } else if (koiRef.current.position.x <= leftBound) {
      direction.current = 1;
      koiRef.current.rotation.y = 0;
    }
    onPositionChange(koiRef.current.position.x, direction.current);
  });

  return <primitive ref={koiRef} object={scene} scale={0.8} />;
};

const KoiFishScene: React.FC = () => {
  const [fishState, setFishState] = useState({ position: -10, direction: 1 });

  const handlePositionChange = (pos: number, dir: number) => {
    setFishState({ position: pos, direction: dir });
  };

  return (
    <Canvas camera={{ position: [4, 2, 10], fov: 15 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Koi 
          initialPosition={fishState.position}
          initialDirection={fishState.direction}
          onPositionChange={handlePositionChange}
        />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default KoiFishScene;
import React, { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";
const CarParticles = ({ isMobile }) => {
  const { scene } = useGLTF("./mclaren_mp45_2k.glb");
  const particlesRef = useRef();
  const scrollProgress = useRef(-0.5);
const lastScrollY = useRef(0);
  const { mouse } = useThree();
  const particles = useMemo(() => {
    const positions = [];
    const randomDirections = [];
    const colors = [];
    const originalPositions = [];

    scene.traverse((child) => {
  if (!child.isMesh) return;

  const mesh = child.clone();

  mesh.geometry = mesh.geometry.toNonIndexed();

  const sampler = new MeshSurfaceSampler(mesh).build();

  const color = child.material.color || new THREE.Color(1, 1, 1);

  const tempPosition = new THREE.Vector3();

  const samples = 9000;

  for (let i = 0; i < samples; i++) {
    sampler.sample(tempPosition);

    tempPosition.applyMatrix4(child.matrixWorld);
positions.push(
  tempPosition.x,
  tempPosition.y,
  tempPosition.z
);
randomDirections.push(
  (Math.random() - 0.5) * 40,
  (Math.random() - 0.5) * 40,
  (Math.random() - 0.5) * 40
);

originalPositions.push(
  tempPosition.x,
  tempPosition.y,
  tempPosition.z
);

    colors.push(
      color.r,
      color.g,
      color.b
    );
  }
});

    const particleGeometry = new THREE.BufferGeometry();

    particleGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    particleGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    return {
  geometry: particleGeometry,
  originalPositions,
  randomDirections,
};
  }, [scene]);
useEffect(() => {
  const startScroll = window.scrollY;
  lastScrollY.current = startScroll;
scrollProgress.current = 0;
  const handleScroll = () => {
    const current = window.scrollY;
const explosionStart = 100;


    const delta = current - lastScrollY.current;

    scrollProgress.current += delta * 0.0005;

    scrollProgress.current = Math.max(
      0,
      Math.min(scrollProgress.current, 1)
    );

    lastScrollY.current = current;
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
 useFrame((state, delta) => {
  if (!particlesRef.current) return;

  particlesRef.current.rotation.y += delta * 0.2;

  const positions =
    particlesRef.current.geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    const ox = particles.originalPositions[i];
    const oy = particles.originalPositions[i + 1];
 const rx = particles.randomDirections[i];
const ry = particles.randomDirections[i + 1];
const rz = particles.randomDirections[i + 2];
   const mouseX = mouse.x * 6;
const mouseY = mouse.y * 4 + 2.5;

const dx = positions[i] - mouseX;
const dy = positions[i + 1] - mouseY;

const distance = Math.sqrt(dx * dx + dy * dy);

const radius = 1;

if (distance < radius) {
  const force = (radius - distance) / radius;

  positions[i] += dx * force * 0.01;
  positions[i + 1] += dy * force * 0.01;
}

const oz = particles.originalPositions[i + 2];

const targetX = ox + rx * scrollProgress.current;
const targetY = oy + ry * scrollProgress.current;
const targetZ = oz + rz * scrollProgress.current;

positions[i] += (targetX - positions[i]) * 0.02;
positions[i + 1] += (targetY - positions[i + 1]) * 0.02;
positions[i + 2] += (targetZ - positions[i + 2]) * 0.02;
  }

  particlesRef.current.geometry.attributes.position.needsUpdate = true;
});

 return (
  <points
  ref={particlesRef}
  geometry={particles.geometry}
    scale={isMobile ? 1 : 2.7}
    position={isMobile ? [0, 0, 0] : [0, -1.5, 0]}
    rotation={[0, 0, 0]}
  >
  <pointsMaterial
  size={0.08}
  color="#5669f8"
  sizeAttenuation
  transparent
  opacity={0.9}
/>
  </points>
);
};

export default CarParticles;
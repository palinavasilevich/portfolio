import React, { forwardRef, useMemo } from "react";
import * as THREE from "three";
import type { ColorRepresentation } from "three";

const PHI = (1 + Math.sqrt(5)) / 2;

// Icosahedron vertices normalized to unit sphere
const RAW_VERTS: [number, number, number][] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
];

// 20 triangular faces matching Three.js IcosahedronGeometry
const FACE_INDICES: [number, number, number][] = [
  [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
  [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
  [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
  [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
];

// Opposite faces sum to 21 (standard d20 convention)
const FACE_NUMBERS = [1, 20, 2, 19, 3, 18, 4, 17, 5, 16, 6, 15, 7, 14, 8, 13, 9, 12, 10, 11];

function createNumberTexture(num: number): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  const numStr = String(num);
  const fontSize = numStr.length > 1 ? Math.round(size * 0.46) : Math.round(size * 0.56);

  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.font = `bold ${fontSize}px Georgia, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(numStr, size / 2, size / 2);

  // Real d20s underline 6 and 9 to distinguish them
  if (num === 6 || num === 9) {
    const metrics = ctx.measureText(numStr);
    const textWidth = metrics.width;
    const underlineY = size / 2 + fontSize * 0.42;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
    ctx.lineWidth = Math.round(size * 0.04);
    ctx.moveTo(size / 2 - textWidth / 2, underlineY);
    ctx.lineTo(size / 2 + textWidth / 2, underlineY);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(canvas);
}

function computeFaceQuaternion(
  centroid: THREE.Vector3,
  verts: THREE.Vector3[]
): THREE.Quaternion {
  const normal = centroid.clone().normalize();

  // Project global "up" onto the face plane for consistent text orientation
  const globalUp = new THREE.Vector3(0, 1, 0);
  const upProjected = globalUp
    .clone()
    .sub(normal.clone().multiplyScalar(globalUp.dot(normal)));

  // Face is nearly horizontal — fall back to global X axis
  if (upProjected.lengthSq() < 0.001) {
    upProjected
      .set(1, 0, 0)
      .sub(normal.clone().multiplyScalar(normal.x))
      .normalize();
  } else {
    upProjected.normalize();
  }

  // Build right-handed basis: X = Y×Z, Y = up, Z = normal (outward)
  const xAxis = new THREE.Vector3().crossVectors(upProjected, normal).normalize();
  const matrix = new THREE.Matrix4().makeBasis(xAxis, upProjected, normal);
  return new THREE.Quaternion().setFromRotationMatrix(matrix);
}

type D20ModelProps = {
  color?: ColorRepresentation;
} & React.ComponentProps<"group">;

export const D20Model = forwardRef<THREE.Group, D20ModelProps>(function D20Model(
  { color = "#a855f7", ...rest },
  ref
) {
  const { geometry, edgesGeometry, faceData, textures } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 0);
    const edgesGeo = new THREE.EdgesGeometry(geo);

    const verts = RAW_VERTS.map(([x, y, z]) =>
      new THREE.Vector3(x, y, z).normalize()
    );

    const faceData = FACE_INDICES.map((indices, i) => {
      const triVerts = indices.map((idx) => verts[idx]);
      const [a, b, c] = triVerts;
      const centroid = a.clone().add(b).add(c).divideScalar(3);
      const normal = centroid.clone().normalize();
      // Sit the plane just above the face surface to avoid z-fighting
      const position = centroid.clone().addScaledVector(normal, 0.015);
      const quaternion = computeFaceQuaternion(centroid, triVerts);
      return { position, quaternion, number: FACE_NUMBERS[i] };
    });

    const textures = FACE_NUMBERS.map(createNumberTexture);

    return { geometry: geo, edgesGeometry: edgesGeo, faceData, textures };
  }, []);

  return (
    <group ref={ref} {...rest} dispose={null}>
      <mesh geometry={geometry}>
        <meshStandardMaterial color={color} flatShading roughness={0.2} metalness={0.15} />
      </mesh>

      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </lineSegments>

      {faceData.map((face, i) => (
        <mesh key={i} position={face.position} quaternion={face.quaternion}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshBasicMaterial
            map={textures[i]}
            transparent
            alphaTest={0.01}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
});

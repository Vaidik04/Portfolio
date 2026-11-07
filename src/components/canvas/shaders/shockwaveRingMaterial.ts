import * as THREE from "three";

export const ShockwaveShader = {
  uniforms: {
    uTime: { value: 0 },
    uRadius: { value: 0 },
    uColor: { value: new THREE.Color("#3DDC84") },
    uThickness: { value: 0.12 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    uniform float uRadius;
    uniform float uThickness;
    varying vec2 vUv;

    void main() {
      float dist = length(vUv - vec2(0.5));
      float inner = uRadius - uThickness;
      float outer = uRadius;
      
      float ring = smoothstep(inner, inner + 0.02, dist) * (1.0 - smoothstep(outer - 0.02, outer, dist));
      float fade = clamp(1.0 - uRadius * 1.8, 0.0, 1.0);
      
      gl_FragColor = vec4(uColor, ring * fade * 0.8);
    }
  `,
};

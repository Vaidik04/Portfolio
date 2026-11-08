import * as THREE from "three";

// Custom ShaderMaterial for physically plausible dark glass slabs
// Features: transmission, edge fresnel, internal dispersion, and encryption sweep
export const GlassSlabShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color("#161820") },
    uEdgeColor: { value: new THREE.Color("#3DDC84") },
    uEncryptionSweep: { value: 0.0 },
    uCipherColor: { value: new THREE.Color("#7C5CFF") },
    uFresnelPower: { value: 2.5 },
    uOpacity: { value: 0.88 },
    uRoughness: { value: 0.12 },
  },
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    uniform vec3 uEdgeColor;
    uniform float uEncryptionSweep;
    uniform vec3 uCipherColor;
    uniform float uFresnelPower;
    uniform float uOpacity;
    uniform float uRoughness;

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;

    // Pseudo-random hash
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);

      // Fresnel rim reflection
      float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);

      // Internal subtle grid / circuit traces
      float gridX = step(0.96, fract(vUv.x * 24.0));
      float gridY = step(0.96, fract(vUv.y * 48.0));
      float grid = max(gridX, gridY) * 0.18;

      // Base slab tone
      vec3 finalColor = mix(uColor, uColor * 1.4, vUv.y);
      finalColor += uEdgeColor * grid;

      // Encryption sweep visualization: plaintext -> ciphertext
      if (uEncryptionSweep > 0.001) {
        float sweepLine = uEncryptionSweep;
        float distToSweep = vUv.y - sweepLine;

        // Glowing sweep boundary pulse
        float sweepGlow = smoothstep(0.06, 0.0, abs(distToSweep));
        finalColor += uCipherColor * sweepGlow * 2.8;

        // Encrypted ciphertext region
        if (vUv.y < sweepLine) {
          float noiseBlock = step(0.45, hash(floor(vUv * vec2(32.0, 64.0)) + floor(uTime * 4.0)));
          finalColor = mix(finalColor, uCipherColor * 0.35 + vec3(noiseBlock * 0.4), 0.7);
        }
      }

      // Edge fresnel glow
      finalColor += uEdgeColor * fresnel * 1.2;

      gl_FragColor = vec4(finalColor, uOpacity);
    }
  `,
};

export function createGlassSlabMaterial(options: {
  baseColor?: string;
  edgeColor?: string;
  cipherColor?: string;
}) {
  const mat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(GlassSlabShader.uniforms),
    vertexShader: GlassSlabShader.vertexShader,
    fragmentShader: GlassSlabShader.fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
  });

  if (options.baseColor) mat.uniforms.uColor.value.set(options.baseColor);
  if (options.edgeColor) mat.uniforms.uEdgeColor.value.set(options.edgeColor);
  if (options.cipherColor) mat.uniforms.uCipherColor.value.set(options.cipherColor);

  return mat;
}


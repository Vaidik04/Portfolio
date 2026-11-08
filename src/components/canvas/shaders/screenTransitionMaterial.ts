import * as THREE from "three";

// Custom screen shader with glitch / pixel-sort dissolve transition
export const ScreenTransitionShader = {
  uniforms: {
    uTextureA: { value: null as THREE.Texture | null },
    uTextureB: { value: null as THREE.Texture | null },
    uTransition: { value: 0.0 }, // 0.0 = TextureA, 1.0 = TextureB
    uTime: { value: 0.0 },
    uGlitchIntensity: { value: 0.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTextureA;
    uniform sampler2D uTextureB;
    uniform float uTransition;
    uniform float uTime;
    uniform float uGlitchIntensity;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec2 uv = vUv;

      // Horizontal scanline displacement during transition
      float glitchTrigger = sin(uTime * 30.0) * uGlitchIntensity;
      if (abs(glitchTrigger) > 0.05) {
        float slice = step(0.85, sin(uv.y * 80.0 + uTime * 20.0));
        uv.x += slice * glitchTrigger * 0.03;
      }

      // Vertical threshold pixel-sort wipe
      float threshold = uTransition + (hash(vec2(floor(uv.x * 64.0), floor(uv.y * 128.0))) - 0.5) * 0.25;
      threshold = clamp(threshold, 0.0, 1.0);

      vec4 texA = texture2D(uTextureA, uv);
      vec4 texB = texture2D(uTextureB, uv);

      // Subtle RGB Chromatic split at transition boundary
      float edge = smoothstep(0.08, 0.0, abs(uTransition - 0.5));
      if (edge > 0.01) {
        float r = texture2D(uTextureB, uv + vec2(edge * 0.008, 0.0)).r;
        float b = texture2D(uTextureA, uv - vec2(edge * 0.008, 0.0)).b;
        vec4 blended = mix(texA, texB, smoothstep(0.4, 0.6, threshold));
        gl_FragColor = vec4(r, blended.g, b, 1.0);
      } else {
        gl_FragColor = mix(texA, texB, smoothstep(0.45, 0.55, threshold));
      }
    }
  `,
};


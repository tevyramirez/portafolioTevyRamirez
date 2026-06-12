import * as THREE from 'three';

declare module 'three/examples/jsm/postprocessing/UnrealBloomPass' {
  import { Pass } from 'three/examples/jsm/postprocessing/Pass';
  export class UnrealBloomPass extends Pass {
    constructor(
      resolution: THREE.Vector2,
      strength: number,
      radius: number,
      threshold: number
    );
    threshold: number;
    strength: number;
    radius: number;
  }
}

declare module 'three/examples/jsm/postprocessing/Pass' {
  export class Pass {
    constructor();
    enabled: boolean;
    needsSwap: boolean;
    clear: boolean;
    renderToScreen: boolean;
    setSize(width: number, height: number): void;
    render(
      renderer: THREE.WebGLRenderer,
      writeBuffer: THREE.WebGLRenderTarget,
      readBuffer: THREE.WebGLRenderTarget,
      deltaTime: number,
      maskActive: boolean
    ): void;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: {
        threshold?: number;
        strength?: number;
        radius?: number;
      };
    }
  }
}

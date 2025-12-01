import React, { useEffect, useRef } from 'react';
import \* as THREE from 'three';

// --- Assets & Icons ---
const ROBOT_HAND_PATH = "M10,250 L60,240 L100,235 L120,200 L160,180 L200,170 L240,165 C250,165 260,170 260,180 L250,200 L210,210 L170,220 L130,240 L150,250 L190,240 L230,230 L270,225 C280,225 290,230 290,240 L280,260 L240,260 L200,270 L160,280 L140,290 L180,290 L220,290 L260,285 C270,285 280,290 280,300 L270,320 L230,320 L190,320 L150,320 L120,330 L160,340 L200,345 L240,350 C250,350 260,355 260,365 L250,380 L210,380 L170,370 L100,360 L50,400 L0,400 Z";
const HUMAN_HAND_PATH = "M500,400 L450,400 L400,360 L330,370 L290,380 L250,380 L240,365 C240,355 250,350 260,350 L300,345 L340,340 L380,330 L350,320 L310,320 L270,320 L230,320 L220,300 C220,290 230,285 240,285 L280,290 L320,290 L360,290 L340,280 L300,270 L260,260 L220,260 L210,240 C210,230 220,225 230,225 L270,230 L310,240 L350,250 L370,240 L330,220 L290,210 L250,200 L240,180 C240,170 250,165 260,165 L300,170 L340,180 L380,200 L400,235 L440,240 L490,250 Z";

// --- 3D Scene Component (Vanilla Three.js implementation) ---
// Esta implementación no depende de @react-three/fiber y es más estable en entornos sandboxed
const VanillaThreeScene = () => {
const mountRef = useRef(null);

useEffect(() => {
// 1. Setup Scene
const scene = new THREE.Scene();
// No background color, transparent

    // 2. Setup Camera
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100); // Aspect ratio will be set in resize
    camera.position.z = 8;

    // 3. Setup Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    // Initial size (will be updated)
    renderer.setSize(300, 300);

    if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
    }

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 2);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4c1d95, 1.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const spotLight = new THREE.SpotLight(0x8b5cf6, 3);
    spotLight.position.set(0, 5, 0);
    scene.add(spotLight);

    // 5. Objects (The Star)
    const geometry = new THREE.BoxGeometry(1, 4, 1);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xa0a0ff,
        emissive: 0x6060ff,
        emissiveIntensity: 1.2,
        metalness: 0.9,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
    });

    const group = new THREE.Group();

    // Central bar
    const bar1 = new THREE.Mesh(geometry, material);
    group.add(bar1);

    // Cross bar 1
    const bar2 = new THREE.Mesh(geometry, material);
    bar2.rotation.z = Math.PI / 3;
    group.add(bar2);

    // Cross bar 2
    const bar3 = new THREE.Mesh(geometry, material);
    bar3.rotation.z = -Math.PI / 3;
    group.add(bar3);

    // Small floating details
    const smallGeo1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const detail1 = new THREE.Mesh(smallGeo1, material);
    detail1.position.set(1.5, 0, 0);
    detail1.rotation.set(0.5, 0.5, 0);
    group.add(detail1);

    const smallGeo2 = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const detail2 = new THREE.Mesh(smallGeo2, material);
    detail2.position.set(-1.5, 0.5, 0);
    detail2.rotation.set(0.2, 0.1, 0);
    group.add(detail2);

    group.scale.set(1.2, 1.2, 1.2);
    scene.add(group);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let animationId;

    const animate = () => {
        const t = clock.getElapsedTime();

        // Rotate
        group.rotation.x = t * 0.3;
        group.rotation.y = t * 0.4;
        group.rotation.z = Math.sin(t * 0.2) * 0.2;

        // Float
        group.position.y = Math.sin(t * 1.5) * 0.2;

        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
    };
    animate();

    // 7. Resize Handler
    const handleResize = () => {
        if (!mountRef.current) return;
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    };

    // Initial resize to fit container
    handleResize();

    // Observe container resize
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountRef.current);

    // Cleanup
    return () => {
        cancelAnimationFrame(animationId);
        resizeObserver.disconnect();
        if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement);
        }
        // Dispose resources to prevent leaks
        geometry.dispose();
        material.dispose();
        renderer.dispose();
    };

}, []);

return <div ref={mountRef} className="w-full h-full" />;
};

// --- UI Components ---

/\*\*

- Componente que renderiza una mano con efecto "LED/Matriz de puntos"
  \*/
  const LedHand = ({ side, pathData }) => {
  const isLeft = side === 'left';

return (
<div
className={`absolute w-[300px] md:w-[500px] h-[400px] z-0 opacity-80 pointer-events-none transition-transform duration-1000 ${
        // Ajustada la posición de la mano derecha para que salga desde la esquina inferior
        isLeft ? 'top-1/2 -translate-y-1/2 left-[-50px] md:left-0' : 'bottom-0 right-[-50px] md:right-0 translate-y-1/4'
      }`}
style={{
        // Sutil animación de flotación usando CSS puro para rendimiento
        animation: 'float 6s ease-in-out infinite',
        animationDelay: isLeft ? '0s' : '3s'
      }} >
<div className="relative w-full h-full">
{/_ El contenedor que tiene la forma de la mano _/}
<div
className="w-full h-full"
style={{
                clipPath: `path('${pathData}')`,
                transform: isLeft ? 'scale(1)' : 'scale(1)',
                transformOrigin: 'center',
            }} >
{/_ El relleno de "puntos LED" _/}
<div
className="w-full h-full absolute inset-0"
style={{
                    backgroundImage: `radial-gradient(${isLeft ? '#e0e0e0' : '#ffcfbc'} 2px, transparent 2.5px)`,
                    backgroundSize: '8px 8px',
                    maskImage: `linear-gradient(to ${isLeft ? 'right' : 'left'}, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 95%)`,
                    WebkitMaskImage: `linear-gradient(to ${isLeft ? 'right' : 'left'}, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 95%)`
                }}
/>
{/_ Capa extra para brillo (Bloom falso en CSS) _/}
<div
className="w-full h-full absolute inset-0 mix-blend-overlay"
style={{
                    background: `linear-gradient(to ${isLeft ? 'right' : 'left'}, ${isLeft ? 'rgba(200,200,255,0.2)' : 'rgba(255,200,180,0.2)'}, transparent)`,
                }}
/>
</div>
</div>
</div>
);
};

export default function App() {
return (
<div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans selection:bg-purple-500 selection:text-white">

      {/* --- CSS Global Styles (for animations) --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50% { transform: translateY(-50%) translateY(15px); }
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        /* Simulación de Bloom usando filtro CSS en el contenedor del Canvas */
        .canvas-glow {
           filter: drop-shadow(0 0 15px rgba(167, 139, 250, 0.6));
        }
      `}</style>

      {/* --- Navigation --- */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-20">
        <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="font-serif italic text-3xl">qintara</span>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm md:text-base">
          Get started
        </button>
      </nav>

      {/* --- Main Content --- */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">

        {/* Background Hands */}
        <LedHand side="left" pathData={ROBOT_HAND_PATH} />
        <LedHand side="right" pathData={HUMAN_HAND_PATH} />

        {/* 3D Center Object - Ahora usando VanillaThreeScene */}
        {/* Movido el objeto 3D un poco hacia arriba */}
        <div className="canvas-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-10">
             <VanillaThreeScene />
        </div>

        {/* Text Content */}
        {/* Subido el contenedor de texto y reducido el tamaño del título */}
        <div className="relative z-20 text-center max-w-4xl mx-auto mt-[-150px] md:mt-[-200px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight mb-4 text-white text-glow">
            Intelligence reaches out to instinct
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 tracking-widest uppercase font-mono">
            an unlikely alliance - where human intuition and algorithmic precision move as one
          </p>

          <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              See it in action
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
          </button>
        </div>

      </main>

      {/* --- Footer / Bottom Overlay (Gradient) --- */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

    </div>

);
}

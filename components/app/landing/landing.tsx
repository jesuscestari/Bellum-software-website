"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import * as THREE from "three";
import Typewriter from "../typewriter/typewriter";

// --- Assets & Icons ---

// --- 3D Scene Component (Vanilla Three.js implementation) ---
// Esta implementación no depende de @react-three/fiber y es más estable en entornos sandboxed
const VanillaThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

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

    group.scale.set(1.2, 1.2, 1.2);
    scene.add(group);

    // 6. Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

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

type LedHandProps = {
  side: "left" | "right";
};

/**
 * Componente que renderiza una mano usando imágenes
 */
const LedHand = ({ side }: LedHandProps) => {
  const isLeft = side === "left";
  const imageSrc = isLeft ? "/izquierda2.webp" : "/derecha.webp";

  return (
    <div
      className={`absolute w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[250px] sm:h-[350px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[430px] z-0 opacity-90 pointer-events-none transition-transform duration-1000 ${
        // Mano izquierda centrada verticalmente, mano derecha desde esquina inferior derecha
        isLeft
          ? "top-1/2 -translate-y-1/2 left-[-20px] sm:left-[-30px] md:left-[-15px] lg:left-[-10px] xl:left-0"
          : "bottom-0 right-[-20px] sm:right-[-30px] md:right-[-15px] lg:right-[-10px] xl:right-0"
      }`}
      style={{
        // Sutil animación de flotación usando CSS puro para rendimiento
        animation: isLeft
          ? "float 6s ease-in-out infinite"
          : "floatBottom 6s ease-in-out infinite",
        animationDelay: isLeft ? "0s" : "1.5s",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={isLeft ? "Mano izquierda" : "Mano derecha"}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

const Landing = () => {
  const handleGetStarted = () => {
    // Try to find contact section by ID first, then by class/component
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: scroll to bottom or find by text
      const contactElements = document.querySelectorAll('[class*="contact"]');
      if (contactElements.length > 0) {
        contactElements[0].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans selection:bg-purple-500 selection:text-white">
      {/* --- CSS Global Styles (for animations) --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50% { transform: translateY(-50%) translateY(15px); }
        }
        @keyframes floatBottom {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-center md:justify-between items-center z-20">
        <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <Image
            src="/logo.png"
            width={128}
            height={114}
            alt="Bellum logo"
            className="h-8 w-auto md:h-10"
          />
        </div>
        <button
          onClick={handleGetStarted}
          className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm md:text-base"
        >
          Contactar
        </button>
      </nav>

      {/* --- Main Content --- */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">
        {/* Background Hands */}
        <LedHand side="left" />
        <LedHand side="right" />

        {/* 3D Center Object - Ahora usando VanillaThreeScene */}
        {/* Estrella posicionada entre las manos */}
        <div className="canvas-glow absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[450px] 2xl:h-[450px] z-10">
          <VanillaThreeScene />
        </div>

        {/* Text Content */}
        {/* Texto posicionado arriba de la estrella */}
        <div className="relative z-20 text-center max-w-4xl mx-auto mt-[-380px] md:mt-[-430px]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight mb-4 text-white text-glow">
            <Typewriter
              text="Desarrollo web definitivo"
              speed={40}
              className="inline-block"
            />
          </h1>

          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 tracking-widest uppercase font-mono">
            Soluciones digitales a medida
          </p>

          <button
            onClick={handleGetStarted}
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Empezar ahora
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
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
};

export default Landing;

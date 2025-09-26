import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "framer-motion";
import logo from "../../assets/fejobach-logo.png";

export default function MisionVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const logoRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" });
  const isLogoInView = useInView(logoRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const container = containerRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    };
    container?.addEventListener("mousemove", handleMouseMove);
    return () => container?.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="mision"
      className="relative overflow-hidden bg-white py-32 px-6"
    >
      {/* Fondo cuadriculado animado */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[150%] h-[150%] grid grid-cols-12 grid-rows-6 gap-px opacity-20 animate-pulse-slow scale-105">
          {Array.from({ length: 72 }).map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-red-200/40 to-purple-300/40 border border-slate-300/30"
            />
          ))}
        </div>
        <div className="absolute w-[60%] h-[60%] bg-white/60 blur-3xl rounded-full z-[-1]" />
      </div>

      {/* Contenido principal */}
      <div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-12"
        ref={containerRef}
      >
        {/* Misión */}
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, y: 50, color: "#991b1b" }}
          animate={isMissionInView ? { opacity: 1, y: 0, color: "#dc2626" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold mb-3">Misión</h3>
          <p className="text-slate-700 leading-relaxed">
            Fomentar el crecimiento espiritual de los jóvenes, promoviendo
            valores cristianos, amor al prójimo y participación activa en la comunidad.
          </p>
        </motion.div>

        {/* Logo con animación de entrada y rotación */}
        <motion.div
          ref={logoRef}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isLogoInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mx-auto w-36 md:w-44 logo-3d"
        >
          <img
            src={logo}
            alt="Fejobach Logo"
            className="w-full h-auto drop-shadow-xl rounded-xl"
          />
        </motion.div>

        {/* Visión */}
        <motion.div
          ref={visionRef}
          initial={{ opacity: 0, y: 50, color: "#991b1b" }}
          animate={isVisionInView ? { opacity: 1, y: 0, color: "#dc2626" } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-3">Visión</h3>
          <p className="text-slate-700 leading-relaxed">
            Ser una comunidad joven influyente que vive su fe en acción,
            inspirando a otros a través del ejemplo, el servicio y el testimonio cristiano.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

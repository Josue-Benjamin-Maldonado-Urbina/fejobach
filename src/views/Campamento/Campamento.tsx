import { useEffect, useState } from "react";

export default function Campamento() {
  const targetDate = new Date("2026-07-20T16:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate.getTime() - now;

    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / (1000 * 60)) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden text-white font-sans">
      
      {/* Fondo */}
      <img
        src="/fondo.jpg"
        alt="Campamento"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          CMS 2026 - Convicción con Visión
        </h1>

        <p className="mt-2 text-lg md:text-xl opacity-80">
          20 de Julio · 4:00 PM · Monte Sion
        </p>

        <div className="flex gap-6 md:gap-10 mt-10">
          <TimeBox label="DÍAS" value={timeLeft.dias} />
          <TimeBox label="HORAS" value={timeLeft.horas} />
          <TimeBox label="MIN" value={timeLeft.minutos} />
          <TimeBox label="SEG" value={timeLeft.segundos} />
        </div>

        {/* Botón */}
        <button className="mt-10 px-8 py-3 border border-white uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
          REGÍSTRATE
        </button>

      </div>
    </div>
  );
}

function TimeBox({ label, value }: any) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-5xl font-bold">
        {value}
      </span>
      <span className="text-xs md:text-sm opacity-70 tracking-widest">
        {label}
      </span>
    </div>
  );
}
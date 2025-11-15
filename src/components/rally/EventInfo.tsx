import React from "react";

const EventInfo: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-[#f6f7fc]">

      {/* HERO SECTION */}
      <div
        className="relative rounded-3xl shadow-xl overflow-hidden mb-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 backdrop-blur-sm p-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Rally Bíblico FEJOBACH
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            ¡Prepárate para vivir una experiencia de compañerismo, retos,
            crecimiento espiritual y mucha diversión!
          </p>
        </div>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden border border-gray-100 hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-48 object-cover"
            alt="Actividad grupo"
          />
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ¿Estás listo?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Este Rally Bíblico pondrá a prueba tus habilidades físicas y tu
              disciplina espiritual. La Primera Iglesia Bautista de Arriaga nos
              recibe con amor en esta experiencia única.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden border border-gray-100 hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?auto=format&fit=crop&w=1400&q=80"
            className="w-full h-48 object-cover"
            alt="Biblia y devocionales"
          />
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Preparación desde casa
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hemos publicado devocionales para que puedas prepararte antes del
              rally. Léelos para avanzar en la actividad, y sobre todo, para
              fortalecer tu relación con Dios.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-0 overflow-hidden border border-gray-100 hover:shadow-xl transition">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-48 object-cover"
            alt="Trabajo en equipo"
          />
          <div className="p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Trabajo en equipo
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Serás evaluado en tu capacidad de trabajar con otros, incluso con
              personas que aún no conoces, enfrentando los cinco desafíos finales
              preparados especialmente para ti.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL IMAGE + MESSAGE */}
      <div className="mt-20 rounded-3xl overflow-hidden shadow-xl relative">
        <img
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1400&q=80"
          alt="Jóvenes reunidos"
          className="w-full h-[380px] object-cover"
        />

        <div className="absolute inset-0 bg-purple-800 bg-opacity-60 p-12 flex items-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed max-w-3xl">
            Ven con ropa cómoda que puedas mojar, lleva un cambio extra y anima
            a otros jóvenes a unirse. ¡Este rally será una experiencia llena de
            crecimiento, compañerismo y bendición para todos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;

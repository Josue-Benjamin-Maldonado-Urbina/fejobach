import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Flame, Send, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN — reemplaza estos valores con los tuyos
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_ti1a28g";
const EMAILJS_TEMPLATE_ID = "template_99c6rbd";
const EMAILJS_PUBLIC_KEY = "cupA8UWLwsU9jUvcN";

const SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxWimL_tYOoW-semFjKW1l_Pm5zW8RbsoehVMNkBovc653B6X5y05JuTX62PaWJ_7Wa/exec";

const ASPECTOS = ["Conferencias", "Talleres", "Alabanza", "Juegos", "Organización general", "Comida", "Agua", "Sonido", "Dormitorios", "Tiendita"] as const;
 
type Aspecto = (typeof ASPECTOS)[number];
 
type Calificaciones = Record<Aspecto, number>;
 
interface FormState {
  calificaciones: Calificaciones;
  mejor: string;
  peor: string;
  favorito: string;
  aprendizaje: string;
  incomodo: string;
  relacionDios: "Mucho" | "Sí" | "Poco" | "No" | "";
  porQue: string;
  cambiaria: string;
  noCambiaria: string;
  calificacionGeneral: number;
  volveria: "Sí" | "Tal vez" | "No" | "";
}
 
const initialState: FormState = {
  calificaciones: Object.fromEntries(ASPECTOS.map((a) => [a, 0])) as Calificaciones,
  mejor: "",
  peor: "",
  favorito: "",
  aprendizaje: "",
  incomodo: "",
  relacionDios: "",
  porQue: "",
  cambiaria: "",
  noCambiaria: "",
  calificacionGeneral: 0,
  volveria: "",
};
 
function FlameRating({ value, onChange, max = 5 }: { value: number; onChange: (n: number) => void; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`Calificar ${n} de ${max}`}
          onClick={() => onChange(n)}
          className="p-0.5 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ember)] rounded"
        >
          <Flame size={22} className={n <= value ? "fill-[var(--accent-ember)] text-[var(--accent-ember)]" : "text-[var(--border)]"} strokeWidth={1.5} />
        </button>
      ))}
    </div>
  );
}
 
function Field({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold tracking-wide text-[var(--text-primary)]">{label}</label>
      {hint && <p className="text-xs text-[var(--text-muted)] -mt-1">{hint}</p>}
      {children}
    </div>
  );
}
 
const textareaClass =
  "w-full rounded-md bg-[var(--bg-void)] border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-transparent transition resize-none";
 
function RadioPills<T extends string>({ options, value, onChange }: { options: readonly T[]; value: T | ""; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
            value === opt ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white" : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
 
export default function EncuestaSatisfaccion() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
 
  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((prev) => ({ ...prev, [key]: value }));
 
  const updateCalificacion = (aspecto: Aspecto, value: number) => setForm((prev) => ({ ...prev, calificaciones: { ...prev.calificaciones, [aspecto]: value } }));
 
  const isValid = Object.values(form.calificaciones).every((v) => v > 0) && form.relacionDios !== "" && form.calificacionGeneral > 0 && form.volveria !== "";
 
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === "sending") return;
    setStatus("sending");
 
    const templateParams: Record<string, string | number> = {
      ...Object.fromEntries(ASPECTOS.map((a) => [`calif_${a}`, form.calificaciones[a]])),
      mejor: form.mejor,
      peor: form.peor,
      favorito: form.favorito,
      aprendizaje: form.aprendizaje,
      incomodo: form.incomodo,
      relacion_dios: form.relacionDios,
      por_que: form.porQue,
      cambiaria: form.cambiaria,
      no_cambiaria: form.noCambiaria,
      calificacion_general: form.calificacionGeneral,
      volveria: form.volveria,
      fecha: new Date().toLocaleString("es-MX"),
    };
 
    try {
      const results = await Promise.allSettled([
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, { publicKey: EMAILJS_PUBLIC_KEY }),
        fetch(SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify(templateParams),
        }),
      ]);
 
      // Con mode: "no-cors" el fetch a Apps Script siempre resuelve como "opaque",
      // así que solo verificamos que EmailJS haya funcionado.
      const emailOk = results[0].status === "fulfilled";
      setStatus(emailOk ? "sent" : "error");
    } catch (err) {
      console.error("Error al enviar encuesta:", err);
      setStatus("error");
    }
  }
 
  if (status === "sent") {
    return (
      <div className="min-h-screen bg-[var(--bg-void)] flex items-center justify-center px-4">
        <div className="max-w-md text-center space-y-4">
          <CheckCircle2 size={48} className="mx-auto text-[var(--accent-ember)]" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
            ¡Gracias por tu respuesta!
          </h2>
          <p className="text-[var(--text-muted)]">Tu opinión nos ayuda a construir un mejor CMS el próximo año.</p>
        </div>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-[var(--bg-void)] py-10 px-4" style={{ ["--font-display" as string]: "'Anton', sans-serif", ["--bg-void" as string]: "#0a0807", ["--bg-card" as string]: "#1c1310", ["--accent-primary" as string]: "#c11f2e", ["--accent-ember" as string]: "#e8833a", ["--text-primary" as string]: "#f3ece2", ["--text-muted" as string]: "#a89484", ["--border" as string]: "#3a2620" }}>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
        {/* Encabezado */}
        <header className="text-center space-y-2 pb-4 border-b border-[var(--border)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-ember)] font-semibold">CMS 2026</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            ENCUESTA DE SATISFACCIÓN
          </h1>
          <p className="text-[var(--accent-primary)] font-semibold">"Convicción con visión"</p>
          <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto pt-1">Tu opinión nos ayuda a hacer un mejor campamento el próximo año. La encuesta es anónima.</p>
        </header>
 
        {/* 1. Calificaciones */}
        <section className="bg-[var(--bg-card)] rounded-lg border border-[var(--border)] p-5 space-y-4">
          <h2 className="font-semibold text-[var(--text-primary)]">1. ¿Cómo calificarías...?</h2>
          <div className="divide-y divide-[var(--border)]">
            {ASPECTOS.map((aspecto) => (
              <div key={aspecto} className="flex items-center justify-between py-3 gap-4">
                <span className="text-sm text-[var(--text-primary)]">{aspecto}</span>
                <FlameRating value={form.calificaciones[aspecto]} onChange={(v) => updateCalificacion(aspecto, v)} />
              </div>
            ))}
          </div>
        </section>
 
        <Field label="2. ¿Qué fue lo mejor del campamento?">
          <textarea className={textareaClass} rows={3} value={form.mejor} onChange={(e) => update("mejor", e.target.value)} />
        </Field>
 
        <Field label="3. ¿Qué fue lo peor o qué deberíamos mejorar?">
          <textarea className={textareaClass} rows={3} value={form.peor} onChange={(e) => update("peor", e.target.value)} />
        </Field>
 
        <Field label="4. ¿Cuál fue tu conferencia o taller favorito? ¿Por qué?">
          <textarea className={textareaClass} rows={3} value={form.favorito} onChange={(e) => update("favorito", e.target.value)} />
        </Field>
 
        <Field label="5. ¿Qué aprendizaje te llevas del campamento?">
          <textarea className={textareaClass} rows={3} value={form.aprendizaje} onChange={(e) => update("aprendizaje", e.target.value)} />
        </Field>
 
        <Field label="6. ¿Hubo algún problema que te incomodó?" hint="Comida, agua, baños, horarios, sonido, etc.">
          <textarea className={textareaClass} rows={3} value={form.incomodo} onChange={(e) => update("incomodo", e.target.value)} />
        </Field>
 
        <Field label="7. ¿Sentiste que este campamento fortaleció tu relación con Dios?">
          <div className="space-y-3">
            <RadioPills options={["Mucho", "Sí", "Poco", "No"] as const} value={form.relacionDios} onChange={(v) => update("relacionDios", v)} />
            <textarea className={textareaClass} rows={2} placeholder="¿Por qué?" value={form.porQue} onChange={(e) => update("porQue", e.target.value)} />
          </div>
        </Field>
 
        <Field label="8. Si tú organizaras el próximo campamento, ¿qué cambiarías primero?">
          <textarea className={textareaClass} rows={3} value={form.cambiaria} onChange={(e) => update("cambiaria", e.target.value)} />
        </Field>
 
        <Field label="9. ¿Qué NO debería cambiar nunca porque funcionó muy bien?">
          <textarea className={textareaClass} rows={3} value={form.noCambiaria} onChange={(e) => update("noCambiaria", e.target.value)} />
        </Field>
 
        <Field label="10. En general, ¿qué calificación le das al campamento?">
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => update("calificacionGeneral", n)}
                className={`w-9 h-9 rounded-md text-sm font-semibold border transition ${
                  form.calificacionGeneral === n ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white" : "bg-transparent border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </Field>
 
        <Field label="11. ¿Volverías a asistir el próximo año?">
          <RadioPills options={["Sí", "Tal vez", "No"] as const} value={form.volveria} onChange={(v) => update("volveria", v)} />
        </Field>
 
        {status === "error" && (
          <div className="flex items-center gap-2 text-sm text-[var(--accent-primary)] bg-[var(--bg-card)] border border-[var(--accent-primary)] rounded-md px-3 py-2">
            <AlertTriangle size={16} />
            Hubo un problema al enviar. Intenta de nuevo.
          </div>
        )}
 
        <button
          type="submit"
          disabled={!isValid || status === "sending"}
          className="w-full flex items-center justify-center gap-2 bg-[var(--accent-primary)] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-md hover:brightness-110 transition"
        >
          {status === "sending" ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Enviando...
            </>
          ) : (
            <>
              <Send size={18} /> Enviar encuesta
            </>
          )}
        </button>
        {!isValid && <p className="text-xs text-center text-[var(--text-muted)]">Completa todas las calificaciones y preguntas de opción antes de enviar.</p>}
      </form>
    </div>
  );
}
 
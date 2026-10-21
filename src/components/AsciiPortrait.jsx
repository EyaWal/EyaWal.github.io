import { useEffect, useRef } from "react";
import { asciiData, ramp } from "../assets/asciiData.js";

// Tailles disponibles dans asciiData (400, 280, 220), de la plus grande à la plus petite.
const KEYS = Object.keys(asciiData)
  .map(Number)
  .sort((a, b) => b - a);

// Taille la plus grande qui tient (avec 10 % de tolérance : le canevas est ajusté en CSS)
const pickKey = (width) => KEYS.find((k) => k <= width * 1.1) ?? KEYS[KEYS.length - 1];

export default function AsciiPortrait({ label }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!KEYS.length) return undefined;

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = {
      key: null,
      data: null,
      dpr: 1,
      raf: 0,
      running: false,
      t: 0,
      // x, y : position lissée ; tx, ty : cible ; target : 1 si le curseur est dessus
      pointer: { x: 0, y: 0, tx: 0, ty: 0, target: 0, influence: 0 },
    };

    function draw() {
      const { data, dpr, pointer: p, t } = state;
      if (!data) return;

      p.x += (p.tx - p.x) * 0.2;
      p.y += (p.ty - p.y) * 0.2;
      p.influence += (p.target - p.influence) * 0.08;
      const inf = reduceMotion ? 0 : p.influence;

      const radius = data.w * 0.24;
      const strength = 2.4 * inf;
      const swirling = inf > 0.01;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, data.w, data.h);
      ctx.font = `${data.font}px ui-monospace, "SF Mono", Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--sage").trim() || "#9fc79b";

      for (const [x, y, c, a] of data.particles) {
        let px = x;
        let py = reduceMotion ? y : y + Math.sin(x * 0.045 + y * 0.09 + t * 0.6) * 0.9;
        let ci = c;
        let alpha = a / 100;

        if (swirling) {
          const dx = px - p.x;
          const dy = py - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            const f = (1 - dist / radius) ** 2;
            if (dist < radius * 0.2 * inf) continue; // petit vide sous le curseur
            const angle = Math.atan2(dy, dx) + f * strength;
            const pull = 1 - inf * 0.75 * (1 - dist / radius);
            px = p.x + Math.cos(angle) * dist * pull;
            py = p.y + Math.sin(angle) * dist * pull;
            ci = Math.min(ramp.length - 1, c + Math.round(f * 3 * inf));
            alpha = Math.min(1, alpha + f * 0.5 * inf);
          }
        }

        ctx.globalAlpha = alpha;
        ctx.fillText(ramp[ci], px, py);
      }
      ctx.globalAlpha = 1;
    }

    function tick(now) {
      state.t = now / 1000;
      draw();
      state.raf = requestAnimationFrame(tick);
    }

    function start() {
      if (reduceMotion || state.running) return;
      state.running = true;
      state.raf = requestAnimationFrame(tick);
    }

    function stop() {
      state.running = false;
      cancelAnimationFrame(state.raf);
    }

    function setup() {
      const key = pickKey(wrap.clientWidth || KEYS[0]);
      if (key === state.key) return;
      const data = asciiData[key];
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      state.key = key;
      state.data = data;
      state.dpr = dpr;
      canvas.width = Math.round(data.w * dpr);
      canvas.height = Math.round(data.h * dpr);
      canvas.style.aspectRatio = `${data.w} / ${data.h}`;
      canvas.style.maxWidth = "22rem";
      draw();
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      const scale = state.data.w / rect.width;
      const p = state.pointer;
      p.tx = (e.clientX - rect.left) * scale;
      p.ty = (e.clientY - rect.top) * scale;
      if (p.target === 0 && p.influence < 0.05) {
        p.x = p.tx;
        p.y = p.ty;
      }
      p.target = 1;
    }

    function onLeave() {
      state.pointer.target = 0;
    }

    setup();
    // Redessine une fois la police chargée (le canevas ne suit pas le chargement des polices)
    document.fonts?.ready.then(draw);

    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(wrap);

    // N'anime que lorsque le portrait est visible à l'écran
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(canvas);

    if (!reduceMotion) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
      canvas.addEventListener("pointercancel", onLeave);
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointercancel", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="portrait">
      <canvas ref={canvasRef} role="img" aria-label={label} />
    </div>
  );
}

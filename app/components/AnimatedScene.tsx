"use client";

import { useMemo, type CSSProperties } from "react";

const PETAL_COUNT = 26;

export function AnimatedScene() {
  const petals = useMemo(() => {
    return Array.from({ length: PETAL_COUNT }).map((_, index) => {
      const startX = ((index * 37) % 100) - 10;
      const drift = ((index * 53) % 60) - 30;
      const delay = (index * 1.45) % 14;
      return { id: index, startX, drift, delay };
    });
  }, []);

  return (
    <div className="scene" role="presentation" aria-hidden>
      <div className="mantra-overlay" />
      <div className="sky-glow" />

      <div className="flower-shower">
        {petals.map((petal) => (
          <span
            key={petal.id}
            className="petal"
            style={
              {
                "--start-x": `${petal.startX}%`,
                "--drift-x": `${petal.drift}%`,
                animationDelay: `${petal.delay}s`
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="temple">
        <div className="shikhara" />
        <div className="shikhara" />
        <div className="shikhara" />
      </div>

      <div className="steps">
        <div className="step" />
        <div className="step" />
        <div className="step" />
        <div className="step" />
      </div>

      <div className="altar">
        <div className="diyas">
          <div className="diya" />
          <div className="diya" />
          <div className="diya" />
        </div>
      </div>

      <div className="woman">
        <div className="body">
          <div className="sari" />
          <div className="upper-body">
            <div className="hair" />
            <div className="sindoor" />
          </div>
          <div className="hands">
            <div className="hand left" />
            <div className="hand right" />
          </div>
        </div>
      </div>

      <div className="incense" aria-hidden>
        <div className="stick">
          <div className="smoke">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

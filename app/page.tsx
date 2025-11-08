import { AnimatedScene } from "./components/AnimatedScene";

export default function Page() {
  return (
    <main className="scene-wrapper">
      <AnimatedScene />

      <article className="info-card">
        <h1>Kamakhya Temple Morning Puja</h1>
        <p>
          A barefoot devotee, draped in vermilion silk, moves in graceful arcs
          before the sanctum. Sindoor rests at her hairline, eyes closed,
          whispering mantras that rise with incense threads into the ancient
          domes of Nilachal Hill. She offers marigolds, vermillion, and a
          brass-tipped aarti, illuminating the stone carvings with flickering
          amber light.
        </p>
        <p>
          This hand-crafted animation evokes the serenity of the dawn ritual:
          the soft glow of diyas, fragrant smoke curling skyward, and petals
          gently drifting through the temple courtyard. Listen inward, feel the
          rhythm of bells, and let the devotion guide your breath.
        </p>
        <a
          className="cta"
          href="https://en.wikipedia.org/wiki/Kamakhya_Temple"
          target="_blank"
          rel="noreferrer"
        >
          Explore Kamakhya Temple
        </a>
        <p className="subtext">
          Built as a web-native visual poem, blending CSS artistry and precise
          motion design to approximate a living, ceremonial video tableau.
        </p>
      </article>

      <p className="credits">
        Crafted with reverence using Next.js · Animation and illustration in
        pure CSS · Inspired by the sacred Shakti Peetha of Kamakhya.
      </p>
    </main>
  );
}

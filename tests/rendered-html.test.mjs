import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the TeCaiGO pitch deck", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>TeCaiGO \| Pitch de inversión 2026<\/title>/i);
  assert.match(html, /class="deck-shell/);
  assert.match(html, /Turismo conectado por TeCaiGO/);
  assert.match(html, /01(?:<!-- -->)?\s*\/(?:<!-- -->)?\s*(?:<!-- -->)?15/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Codex is working/i);
});

test("keeps slide 15 as the founder-and-product finale", async () => {
  const [slides, founderFinale, deck, assetFiles] = await Promise.all([
    readFile(new URL("../src/data/slides.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/components/FounderFinaleSlide.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/PitchDeck.tsx", import.meta.url), "utf8"),
    readdir(new URL("../public/assets/founder-carousel/", import.meta.url)),
  ]);

  assert.match(slides, /id:\s*15,[\s\S]*kind:\s*"founder"/);
  assert.match(slides, /"Ex tour operador"/);
  assert.match(slides, /"Contador Público"/);
  assert.match(slides, /"Maestro en Banca y Finanzas"/);
  assert.match(slides, /"Posgrado en Riesgos Bancarios y Financieros"/);
  assert.match(slides, /duration:\s*52/);
  assert.doesNotMatch(slides, /id:\s*16,/);

  assert.match(founderFinale, /CEO &amp; fundador de TeCaiGO/);
  assert.match(founderFinale, /Tour operadores/);
  assert.match(founderFinale, /Turistas/);
  assert.match(founderFinale, /Comercios turísticos/);
  assert.match(founderFinale, /Transporte/);
  assert.match(deck, /<FounderFinaleSlide slide=\{current\} reduceMotion=\{reduceMotion\}/);
  assert.equal(assetFiles.filter(file => file.endsWith(".jpg")).length, 37);
});

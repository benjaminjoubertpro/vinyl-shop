<template>
  <section class="about">
    <div class="container">
      <div class="grid">
        <div class="content">
          <p class="eyebrow">L’univers</p>
          <h2>Une boutique pensée pour les amoureux du son.</h2>
          <p>
            Ici, pas de catalogue interminable sans âme : on sélectionne des pressages qui sonnent juste.
            Classiques, raretés, rééditions propres et nouveautés essentielles — tout est choisi pour sa
            qualité et son histoire.
          </p>
          <p>
            L’objectif est simple : te faire vivre une expérience d’écoute authentique, du premier crackle
            jusqu’au dernier refrain.
          </p>

          <div class="chips">
            <span class="chip">Éditions limitées</span>
            <span class="chip">Recommandations</span>
            <span class="chip">Qualité contrôlée</span>
            <span class="chip">Emballage renforcé</span>
          </div>
        </div>

        <div class="card" aria-hidden="true">
          <div class="card-inner">
            <p class="card-title">Digger’s pick</p>
            <p class="card-text">Chaque semaine, une sélection courte et nerveuse. 6 disques, 6 coups de cœur.</p>
            <div class="swatches">
              <span class="swatch s1"></span>
              <span class="swatch s2"></span>
              <span class="swatch s3"></span>
              <span class="swatch s4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  padding: 5rem 0;
  background:
    radial-gradient(900px 300px at 15% 25%, rgba(249, 115, 22, 0.16), transparent 60%),
    radial-gradient(800px 280px at 85% 15%, rgba(124, 58, 237, 0.16), transparent 60%),
    linear-gradient(180deg, rgba(250, 250, 250, 1), rgba(255, 255, 255, 1));
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
}

.content {
  max-width: 70ch;
}

.eyebrow {
  margin: 0 0 0.6rem;
  display: inline-flex;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.72);
  background: rgba(6, 182, 212, 0.12);
  border: 1px solid rgba(6, 182, 212, 0.16);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

h2 {
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  font-weight: 950;
  margin: 0 0 1rem;
  color: var(--color-black);
  letter-spacing: -0.02em;
}

p {
  margin: 0 0 1rem;
  line-height: 1.7;
  color: #333;
}

.chips {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.85rem;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.82);
}

.card {
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.22), rgba(6, 182, 212, 0.14), rgba(249, 115, 22, 0.14));
  border: 1px solid rgba(0, 0, 0, 0.06);
  padding: 1px;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.12);
}

.card-inner {
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.85);
  padding: 1.5rem;
}

.card-title {
  margin: 0;
  font-weight: 950;
  letter-spacing: -0.02em;
  font-size: 1.2rem;
}

.card-text {
  margin: 0.75rem 0 0;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

.swatches {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.swatch {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.s1 { background: rgba(124, 58, 237, 0.55); }
.s2 { background: rgba(6, 182, 212, 0.45); }
.s3 { background: rgba(249, 115, 22, 0.45); }
.s4 { background: rgba(0, 0, 0, 0.08); }

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

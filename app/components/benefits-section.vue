<template>
  <section class="benefits">
    <div class="container">
      <span class="eyebrow">Nos engagements</span>
      <h2>Un service premium, sans compromis.</h2>

      <div class="grid">
        <article class="item">
          <span class="number">01</span>
          <h3>Sélection soignée</h3>
          <p class="item-desc">
            Chaque vinyle est choisi pour sa qualité audio, son état
            et son intérêt musical. Rien n'est laissé au hasard.
          </p>
        </article>

        <article class="item">
          <span class="number">02</span>
          <h3>Expédition protégée</h3>
          <p class="item-desc">
            Emballage renforcé spécial vinyle pour que tes disques
            arrivent impeccables, sans coins écrasés.
          </p>
        </article>

        <article class="item">
          <span class="number">03</span>
          <h3>Conseil passionné</h3>
          <p class="item-desc">
            Besoin d'une recommandation ? Notre équipe t'aide à trouver
            l'édition ou le style qui te correspond.
          </p>
        </article>

        <article class="item">
          <span class="number">04</span>
          <h3>Retours simplifiés</h3>
          <p class="item-desc">
            Un souci avec ta commande ? On trouve une solution
            rapidement. Satisfait ou remboursé sous 14 jours.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  width: 100%;
  padding: 6rem 0;
  background: #0e0e0e;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.container {
  width: min(1100px, calc(100% - 3rem));
  margin: 0 auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c9a96e;
  margin-bottom: 0.75rem;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.4vw, 2.2rem);
  font-weight: 500;
  margin: 0 0 3rem;
  color: #f5f0eb;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.item {
  padding: 1.75rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin: -0.5px;
  min-width: 0;
}

.number {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 0.85rem;
  color: #c9a96e;
  margin-bottom: 1rem;
  font-weight: 500;
}

h3 {
  margin: 0 0 0.6rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #f5f0eb;
  letter-spacing: 0.01em;
}

.item-desc {
  margin: 0;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.82rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

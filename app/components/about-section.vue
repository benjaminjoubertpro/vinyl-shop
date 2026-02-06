<template>
  <section class="about">
    <div class="container">
      <span class="eyebrow">Notre histoire</span>
      <div class="grid">
        <div class="content">
          <h2>Une sélection pensée pour les amoureux du son.</h2>
          <p class="desc">
            Ici, pas de catalogue interminable sans âme. On sélectionne des pressages
            qui sonnent juste — classiques, raretés, rééditions soignées et nouveautés
            essentielles. Chaque vinyle est choisi pour sa qualité sonore et son histoire.
          </p>
          <p class="desc">
            L'objectif est simple : te faire vivre une expérience d'écoute authentique,
            du premier crackle jusqu'au dernier refrain.
          </p>
          <a class="about-link" href="/contact">En savoir plus →</a>
        </div>

        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">2 500+</span>
            <span class="stat-label">Vinyles vendus</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">350+</span>
            <span class="stat-label">Références au catalogue</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">98%</span>
            <span class="stat-label">Clients satisfaits</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">48h</span>
            <span class="stat-label">Délai de livraison</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  width: 100%;
  padding: 6rem 0;
  background: #0a0a0a;
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
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

.content {
  max-width: 55ch;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.4vw, 2.2rem);
  font-weight: 500;
  margin: 0 0 1.5rem;
  color: #f5f0eb;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.desc {
  margin: 0 0 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.9rem;
}

.about-link {
  display: inline-block;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.about-link:hover {
  color: #c9a96e;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.stat-item {
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin: -0.5px;
}

.stat-value {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #f5f0eb;
  margin-bottom: 0.3rem;
}

.stat-label {
  display: block;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 500;
  letter-spacing: 0.02em;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .stats {
    grid-template-columns: 1fr;
  }
}
</style>

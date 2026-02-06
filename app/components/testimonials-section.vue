<template>
  <section class="testimonials">
    <div class="container">
      <span class="eyebrow">Témoignages</span>
      <h2>Ce que nos clients en pensent.</h2>

      <div class="grid">
        <article class="review">
          <p class="review-text">
            "Emballage impeccable, vinyle en parfait état. La sélection est vraiment
            pointue, on sent la passion derrière chaque choix."
          </p>
          <div class="reviewer">
            <span class="reviewer-name">Marie L.</span>
            <span class="reviewer-sep">—</span>
            <span class="reviewer-detail">Cliente depuis 2024</span>
          </div>
        </article>

        <article class="review">
          <p class="review-text">
            "J'ai découvert des pépites grâce à leurs recommandations. Le service
            client est top et la livraison toujours rapide."
          </p>
          <div class="reviewer">
            <span class="reviewer-name">Thomas R.</span>
            <span class="reviewer-sep">—</span>
            <span class="reviewer-detail">Client depuis 2023</span>
          </div>
        </article>

        <article class="review">
          <p class="review-text">
            "Super qualité des pressages et un catalogue qui donne envie.
            Mes vinyles arrivent toujours nickel. Bravo l'équipe !"
          </p>
          <div class="reviewer">
            <span class="reviewer-name">Sophie D.</span>
            <span class="reviewer-sep">—</span>
            <span class="reviewer-detail">Cliente depuis 2024</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
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
  margin-bottom: 0.75rem;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.2vw, 2.2rem);
  font-weight: 500;
  margin: 0 0 3rem;
  color: #f5f0eb;
  letter-spacing: -0.01em;
  line-height: 1.2;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.review {
  padding: 2rem 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin: -0.5px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.review-text {
  margin: 0;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.88rem;
  font-style: italic;
  font-family: 'Playfair Display', serif;
}

.reviewer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
}

.reviewer-name {
  font-weight: 600;
  font-size: 0.8rem;
  color: #f5f0eb;
}

.reviewer-sep {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
}

.reviewer-detail {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.3);
  font-weight: 400;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

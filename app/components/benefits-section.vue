<template>
  <section class="benefits">
    <div class="container">
      <div class="head">
        <p class="eyebrow">Avantages</p>
        <h2>Tout pour une expérience vinyle sans friction.</h2>
        <p class="subtitle">Du choix à la livraison, on optimise chaque étape pour que tu profites — simplement.</p>
      </div>

      <div class="grid">
        <article class="item">
          <div class="icon i1" aria-hidden="true">✦</div>
          <h3>Sélection soignée</h3>
          <p>Des disques choisis pour leur qualité audio, leur état et leur intérêt musical.</p>
        </article>

        <article class="item">
          <div class="icon i2" aria-hidden="true">⟡</div>
          <h3>Expédition protégée</h3>
          <p>Emballage renforcé pour que tes vinyles arrivent impeccables, sans coins écrasés.</p>
        </article>

        <article class="item">
          <div class="icon i3" aria-hidden="true">◎</div>
          <h3>Conseil passionné</h3>
          <p>Besoin d’une reco ? On t’aide à trouver l’édition ou le style qui te correspond.</p>
        </article>

        <article class="item">
          <div class="icon i4" aria-hidden="true">➜</div>
          <h3>Retours simplifiés</h3>
          <p>Un souci ? On trouve une solution rapidement, sans prise de tête.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  width: 100%;
  padding: 5rem 0;
  background:
    radial-gradient(900px 280px at 10% 0%, rgba(6, 182, 212, 0.14), transparent 60%),
    radial-gradient(800px 260px at 90% 20%, rgba(249, 115, 22, 0.14), transparent 60%);
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.head {
  max-width: 75ch;
  margin-bottom: 1.75rem;
}

.eyebrow {
  margin: 0 0 0.6rem;
  display: inline-flex;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.72);
  background: rgba(249, 115, 22, 0.14);
  border: 1px solid rgba(249, 115, 22, 0.18);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

h2 {
  font-size: clamp(1.5rem, 2.4vw, 2.05rem);
  font-weight: 950;
  margin: 0;
  color: var(--color-black);
  letter-spacing: -0.02em;
}

.subtitle {
  margin: 0.75rem 0 0;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.item {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  min-width: 0;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.06);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.item:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: #000;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);
}

.i1 {
  background: linear-gradient(135deg, rgba(124, 58, 237, 1), rgba(6, 182, 212, 1));
}

.i2 {
  background: linear-gradient(135deg, rgba(6, 182, 212, 1), rgba(34, 197, 94, 1));
}

.i3 {
  background: linear-gradient(135deg, rgba(249, 115, 22, 1), rgba(239, 68, 68, 1));
}

.i4 {
  background: linear-gradient(135deg, rgba(14, 165, 233, 1), rgba(124, 58, 237, 1));
}

h3 {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  font-weight: 950;
  color: var(--color-black);
}

p {
  margin: 0;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.95rem;
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

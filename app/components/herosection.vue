<template>
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <span class="eyebrow">Collection exclusive</span>
        <h1>L'art du vinyle,<br>pour les oreilles exigeantes.</h1>
        <p class="subtitle">
          Pressages originaux, éditions limitées et raretés — une sélection
          pensée pour les vrais amateurs de musique.
        </p>
        <div class="hero-actions">
          <a class="btn-primary" href="/catalogue">Découvrir la collection</a>
          <a class="btn" href="#produits">Meilleures ventes</a>
        </div>
      </div>
    </div>
    <div class="hero-bottom">
      <div class="container">
        <div class="proof">
          <div class="stat">
            <span class="stat-value">2 500+</span>
            <span class="stat-label">Vinyles vendus</span>
          </div>
          <div class="divider"></div>
          <div class="stat">
            <span class="stat-value">4.8/5</span>
            <span class="stat-label">Avis clients</span>
          </div>
          <div class="divider"></div>
          <div class="stat">
            <span class="stat-value">48h</span>
            <span class="stat-label">Livraison</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('assets/img/fondhero.png');
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.6) 0%,
    rgba(10, 10, 10, 0.75) 50%,
    rgba(10, 10, 10, 0.95) 100%
  );
}

.container {
  width: min(1100px, calc(100% - 3rem));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-content {
  max-width: 600px;
  padding: 6rem 0 4rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 1.5rem;
}

h1 {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 500;
  line-height: 1.1;
  color: var(--color-cream);
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
}

.subtitle {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-soft);
  margin: 0 0 2.5rem;
  max-width: 440px;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-bottom {
  position: relative;
  z-index: 1;
  padding-bottom: 3rem;
}

.proof {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border-mid);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-value {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-cream);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--color-text-lighter);
  font-weight: 500;
  letter-spacing: 0.03em;
}

.divider {
  width: 1px;
  height: 32px;
  background: var(--color-border-strong);
}

@media (max-width: 768px) {
  .hero-content {
    padding: 5rem 0 3rem;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn-primary,
  .hero-actions .btn {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .proof {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .divider {
    width: 40px;
    height: 1px;
  }
}
</style>
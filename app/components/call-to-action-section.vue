<template>
  <section class="cta">
    <div class="container">
      <div class="cta-inner">
        <span class="eyebrow">Explorer</span>
        <h2>Prêt à trouver votre<br>prochain coup de cœur ?</h2>
        <p class="lead">
          Plus de 350 références vous attendent. Pressages originaux,
          éditions limitées et raretés — explorez notre catalogue complet.
        </p>
        <div class="cta-actions">
          <a class="btn-primary" href="/catalogue">Découvrir la collection</a>
          <a class="btn" href="/contact">Nous contacter</a>
        </div>
      </div>

      <div class="newsletter">
        <div class="newsletter-inner">
          <div class="newsletter-text">
            <h3>Restez informé</h3>
            <p class="newsletter-desc">
              Recevez notre sélection hebdomadaire et nos nouveautés.
            </p>
          </div>
          <div class="newsletter-form">
            <input
              type="email"
              class="newsletter-input"
              placeholder="votre@email.com"
              aria-label="Adresse email"
            >
            <button type="button" class="btn-primary newsletter-btn">S'inscrire</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  width: 100%;
  padding: 6rem 0;
  background: var(--color-bg-alt);
  border-top: 1px solid var(--color-border);
}

.container {
  width: min(1100px, calc(100% - 3rem));
  margin: 0 auto;
}

.cta-inner {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 1.25rem;
}

h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 500;
  color: var(--color-cream);
  margin: 0 0 1.25rem;
  letter-spacing: -0.01em;
  line-height: 1.15;
}

.lead {
  margin: 0 0 2rem;
  color: var(--color-text-light);
  line-height: 1.7;
  font-size: 0.9rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* --- Newsletter --- */
.newsletter {
  border-top: 1px solid var(--color-border);
  padding-top: 3rem;
}

.newsletter-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.newsletter-text {
  min-width: 0;
}

h3 {
  font-family: var(--font-serif);
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-cream);
}

.newsletter-desc {
  margin: 0;
  color: var(--color-text-lighter);
  font-size: 0.85rem;
  line-height: 1.6;
}

.newsletter-form {
  flex: 0 0 auto;
  display: flex;
  gap: 0;
}

.newsletter-input {
  padding: 0.7rem 1rem;
  border: 1px solid var(--color-border-strong);
  border-right: none;
  border-radius: 0;
  font-size: 0.85rem;
  font-family: inherit;
  background: transparent;
  color: var(--color-cream);
  min-width: 240px;
}

.newsletter-input::placeholder {
  color: var(--color-text-ghost);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--color-gold);
}

.newsletter-btn {
  white-space: nowrap;
  border-left: none;
}

@media (max-width: 768px) {
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn-primary,
  .cta-actions .btn {
    width: 100%;
    max-width: 300px;
    text-align: center;
  }

  .newsletter-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .newsletter-form {
    width: 100%;
    flex-direction: column;
  }

  .newsletter-input {
    min-width: 0;
    width: 100%;
    border-right: 1px solid var(--color-border-strong);
    border-bottom: none;
  }

  .newsletter-btn {
    width: 100%;
    border-left: 1px solid var(--color-cream);
  }
}
</style>

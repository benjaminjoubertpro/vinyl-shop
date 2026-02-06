<template>
  <appheader />

  <main class="page">
    <div class="container">
      <header class="hero">
        <span class="eyebrow">Compte</span>
        <h1>Connexion</h1>
        <p class="subtitle">Retrouvez vos favoris et vos commandes.</p>
      </header>

      <div class="layout">
        <section class="card" aria-label="Formulaire de connexion">
          <h2 class="card-title">Se connecter</h2>

          <form class="form" @submit.prevent>
            <div class="field">
              <label class="label" for="email">Email</label>
              <input id="email" class="input" type="email" placeholder="votre@email.com" />
            </div>

            <div class="field">
              <div class="row-head">
                <label class="label" for="password">Mot de passe</label>
                <a class="helper" href="#">Mot de passe oublié ?</a>
              </div>
              <input id="password" class="input" type="password" placeholder="••••••••" />
            </div>

            <label class="check"><input type="checkbox" /> Rester connecté</label>

            <div class="actions">
              <button class="btn-primary" type="submit">Connexion</button>
              <a class="btn" href="/inscription">Créer un compte</a>
            </div>

            <div class="divider"><span>ou</span></div>

            <div class="social">
              <button class="social-btn" type="button">Continuer avec Google</button>
              <button class="social-btn" type="button">Continuer avec Apple</button>
            </div>
          </form>
        </section>

        <aside class="side" aria-label="Informations">
          <div class="side-card">
            <h3 class="side-title">Pourquoi créer un compte ?</h3>
            <ul class="bullets">
              <li>Suivi de commande en temps réel</li>
              <li>Liste de favoris personnalisée</li>
              <li>Recommandations sur mesure</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </main>

  <app-footer />
</template>

<style scoped>
.page {
  width: 100%;
  padding: 2.5rem 0 5rem;
  background: var(--color-bg);
  min-height: 80vh;
}

.container {
  width: min(900px, calc(100% - 3rem));
  margin: 0 auto;
}

.hero {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

h1 {
  font-family: var(--font-serif);
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.01em;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: var(--color-cream);
  line-height: 1.15;
}

.subtitle {
  margin: 0.75rem 0 0;
  color: var(--color-text-lighter);
  line-height: 1.6;
  font-size: 0.88rem;
}

.layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: start;
}

.card {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  overflow: hidden;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-cream);
  margin: 0;
  padding: 1.25rem 1.5rem 1rem;
  border-bottom: 1px solid var(--color-border);
}

.form {
  padding: 1.5rem;
  display: grid;
  gap: 1.1rem;
}

.field {
  display: grid;
  gap: 0.3rem;
}

.row-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}

.label {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--color-text-lighter);
}

.helper {
  color: var(--color-text-faint);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.75rem;
  transition: color 0.2s ease;
}

.helper:hover {
  color: var(--color-gold);
}

.input {
  width: 100%;
  border: 1px solid var(--color-border-mid);
  padding: 0.7rem 0.85rem;
  background: transparent;
  color: var(--color-cream);
  outline: none;
  font-family: inherit;
  font-size: 0.85rem;
}

.input::placeholder {
  color: var(--color-text-dim);
}

.input:focus {
  border-color: var(--color-gold);
}

.check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-light);
  font-weight: 500;
  font-size: 0.82rem;
}

.actions {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
}

.actions .btn,
.actions .btn-primary {
  flex: 1 1 180px;
  text-align: center;
}

.divider {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-dim);
  font-weight: 500;
  font-size: 0.8rem;
}

.divider::before,
.divider::after {
  content: '';
  height: 1px;
  background: var(--color-border);
}

.social {
  display: grid;
  gap: 0.5rem;
}

.social-btn {
  width: 100%;
  border: 1px solid var(--color-border-mid);
  padding: 0.7rem;
  background: transparent;
  color: var(--color-text-soft);
  font-weight: 500;
  font-size: 0.82rem;
  font-family: inherit;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.social-btn:hover {
  color: var(--color-cream);
  border-color: var(--color-border-hover);
}

.side-card {
  border: 1px solid var(--color-border);
  padding: 1.75rem;
}

.side-title {
  font-family: var(--font-serif);
  margin: 0 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  color: var(--color-cream);
}

.bullets {
  margin: 0;
  padding-left: 1rem;
  color: var(--color-text-lighter);
  line-height: 1.9;
  font-size: 0.85rem;
  font-weight: 400;
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .row-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
    flex-direction: column;
  }

  .actions .btn,
  .actions .btn-primary {
    width: 100%;
    flex: 1 1 auto;
  }
}
</style>

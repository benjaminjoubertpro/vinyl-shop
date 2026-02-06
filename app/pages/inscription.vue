<template>
  <appheader />

  <main class="page">
    <div class="container">
      <header class="hero">
        <span class="eyebrow">Compte</span>
        <h1>Inscription</h1>
        <p class="subtitle">Créez votre compte en quelques instants.</p>
      </header>

      <div class="layout">
        <section class="card" aria-label="Formulaire d'inscription">
          <h2 class="card-title">Créer un compte</h2>

          <form class="form" @submit.prevent>
            <div class="row">
              <div class="field">
                <label class="label" for="first">Prénom</label>
                <input id="first" class="input" type="text" placeholder="Prénom" />
              </div>
              <div class="field">
                <label class="label" for="last">Nom</label>
                <input id="last" class="input" type="text" placeholder="Nom" />
              </div>
            </div>

            <div class="field">
              <label class="label" for="email">Email</label>
              <input id="email" class="input" type="email" placeholder="votre@email.com" />
            </div>

            <div class="row">
              <div class="field">
                <label class="label" for="password">Mot de passe</label>
                <input id="password" class="input" type="password" placeholder="••••••••" />
              </div>
              <div class="field">
                <label class="label" for="password2">Confirmer</label>
                <input id="password2" class="input" type="password" placeholder="••••••••" />
              </div>
            </div>

            <label class="check"><input type="checkbox" /> J'accepte les conditions d'utilisation.</label>
            <label class="check"><input type="checkbox" /> Je souhaite recevoir les nouveautés (optionnel).</label>

            <div class="actions">
              <button class="btn-primary" type="submit">Créer mon compte</button>
              <a class="btn" href="/connexion">J'ai déjà un compte</a>
            </div>
          </form>
        </section>

        <aside class="side" aria-label="Conseils">
          <div class="side-card">
            <h3 class="side-title">Conseil</h3>
            <p class="side-text">
              Un bon mot de passe contient au moins 8 caractères,
              une majuscule et un chiffre.
            </p>
          </div>

          <div class="side-card">
            <h3 class="side-title">Avantages</h3>
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
  background: #0a0a0a;
  min-height: 80vh;
}

.container {
  width: min(900px, calc(100% - 3rem));
  margin: 0 auto;
}

.hero {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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

h1 {
  font-family: 'Playfair Display', serif;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.01em;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: #f5f0eb;
  line-height: 1.15;
}

.subtitle {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.35);
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
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #111;
  overflow: hidden;
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-weight: 500;
  color: #f5f0eb;
  margin: 0;
  padding: 1.25rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.form {
  padding: 1.5rem;
  display: grid;
  gap: 1.1rem;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.field {
  display: grid;
  gap: 0.3rem;
}

.label {
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
}

.input {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.7rem 0.85rem;
  background: transparent;
  color: #f5f0eb;
  outline: none;
  font-family: inherit;
  font-size: 0.85rem;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.input:focus {
  border-color: #c9a96e;
}

.check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  font-size: 0.82rem;
}

.actions {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  padding-top: 0.25rem;
}

.actions .btn,
.actions .btn-primary {
  flex: 1 1 180px;
  text-align: center;
}

.side-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.75rem;
  margin-bottom: -1px;
}

.side-title {
  font-family: 'Playfair Display', serif;
  margin: 0 0 0.75rem;
  font-weight: 500;
  font-size: 1rem;
  color: #f5f0eb;
}

.side-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.7;
  font-size: 0.85rem;
}

.bullets {
  margin: 0;
  padding-left: 1rem;
  color: rgba(255, 255, 255, 0.35);
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
  .row {
    grid-template-columns: 1fr;
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

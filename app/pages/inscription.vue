<template>
  <appheader />

  <main class="page">
    <div class="container">
      <header class="hero">
        <p class="eyebrow">Compte</p>
        <h1>Inscription</h1>
        <p class="subtitle">Crée ton compte en 1 minute. (UI only)</p>
      </header>

      <div class="layout">
        <section class="card" aria-label="Formulaire d'inscription">
          <div class="card-head">
            <h2>Créer un compte</h2>
            <p>Quelques infos et c’est parti.</p>
          </div>

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
              <input id="email" class="input" type="email" placeholder="ton@email.com" />
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

            <label class="check"><input type="checkbox" /> J’accepte les conditions d’utilisation.</label>
            <label class="check"><input type="checkbox" /> Je veux recevoir des nouveautés (optionnel).</label>

            <div class="actions">
              <button class="btn2" type="submit">Créer mon compte</button>
              <a class="btn" href="/connexion">J’ai déjà un compte</a>
            </div>

            <p class="footnote">UI only : tu brancheras la validation et la création de compte ensuite.</p>
          </form>
        </section>

        <aside class="side" aria-label="Conseils">
          <div class="side-card" aria-hidden="true">
            <div class="side-card-inner">
              <p class="side-title">Astuce</p>
              <p class="side-text">Un bon mot de passe = 8+ caractères, 1 majuscule, 1 chiffre.</p>
              <div class="tags">
                <span class="tag">Favoris</span>
                <span class="tag">Recommandations</span>
                <span class="tag">Suivi</span>
              </div>
            </div>
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
  padding: 2.25rem 0 5rem;
  background:
    radial-gradient(900px 320px at 10% 0%, rgba(124, 58, 237, 0.28), transparent 60%),
    radial-gradient(800px 300px at 90% 0%, rgba(6, 182, 212, 0.22), transparent 60%),
    radial-gradient(700px 260px at 70% 65%, rgba(249, 115, 22, 0.14), transparent 60%),
    linear-gradient(180deg, #060608 0%, #0a0a0f 55%, #0b0b10 100%);
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
  height: 80vh;
}

.hero {
  margin-bottom: 1.25rem;
}

.eyebrow {
  margin: 0 0 0.6rem;
  display: inline-flex;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
  background: rgba(124, 58, 237, 0.18);
  border: 1px solid rgba(124, 58, 237, 0.28);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

h1 {
  margin: 0;
  font-weight: 950;
  letter-spacing: -0.02em;
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  color: rgba(255, 255, 255, 0.95);
}

.subtitle {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  max-width: 75ch;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 1.25rem;
  align-items: start;
}

.card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.card-head {
  padding: 1.15rem 1.15rem 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(600px 200px at 20% 20%, rgba(6, 182, 212, 0.18), transparent 60%),
    radial-gradient(520px 180px at 80% 30%, rgba(124, 58, 237, 0.18), transparent 60%);
}

.card-head h2 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

.card-head p {
  margin: 0.45rem 0 0;
  color: rgba(255, 255, 255, 0.68);
}

.form {
  padding: 1.15rem;
  display: grid;
  gap: 1rem;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
}

.field {
  display: grid;
  gap: 0.35rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.78);
}

.input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.8rem 0.85rem;
  background: rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.check {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 800;
}

.actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 0.25rem;
}

.actions .btn,
.actions .btn2 {
  flex: 1 1 220px;
  text-align: center;
}

.footnote {
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-size: 0.9rem;
}

.side-card {
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.22), rgba(6, 182, 212, 0.14), rgba(249, 115, 22, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);
}

.side-card-inner {
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  padding: 1.25rem;
}

.side-title {
  margin: 0;
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

.side-text {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  display: inline-flex;
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.86);
  font-weight: 900;
  font-size: 0.85rem;
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 1.75rem 0 4rem;
  }

  .row {
    grid-template-columns: 1fr;
  }

  .actions {
    flex-direction: column;
  }

  .actions .btn,
  .actions .btn2 {
    width: 100%;
    flex: 1 1 auto;
  }
}
</style>

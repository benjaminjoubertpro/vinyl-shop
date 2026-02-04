<template>
  <appheader />

  <main class="page">
    <div class="container">
      <header class="hero">
        <p class="eyebrow">Compte</p>
        <h1>Connexion</h1>
        <p class="subtitle">Accède à ton compte pour retrouver tes favoris et tes commandes. (UI only)</p>
      </header>

      <div class="layout">
        <section class="card" aria-label="Formulaire de connexion">
          <div class="card-head">
            <h2>Se connecter</h2>
            <p>Renseigne tes identifiants.</p>
          </div>

          <form class="form" @submit.prevent>
            <div class="field">
              <label class="label" for="email">Email</label>
              <input id="email" class="input" type="email" placeholder="ton@email.com" />
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
              <button class="btn2" type="submit">Connexion</button>
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
          <div class="side-card" aria-hidden="true">
            <div class="side-card-inner">
              <p class="side-title">Pourquoi créer un compte ?</p>
              <ul class="bullets">
                <li>Suivi de commande</li>
                <li>Favoris</li>
                <li>Recommandations</li>
              </ul>
              <div class="tags">
                <span class="tag">Rapide</span>
                <span class="tag">Simple</span>
                <span class="tag">Sécurisé</span>
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

.field {
  display: grid;
  gap: 0.35rem;
}

.row-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.78);
}

.helper {
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  font-weight: 800;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
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
}

.actions .btn,
.actions .btn2 {
  flex: 1 1 220px;
  text-align: center;
}

.divider {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 900;
}

.divider::before,
.divider::after {
  content: '';
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
}

.social {
  display: grid;
  gap: 0.75rem;
}

.social-btn {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.85rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 900;
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

.bullets {
  margin: 0.9rem 0 0;
  padding-left: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  font-weight: 800;
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

  .row-head {
    flex-direction: column;
    align-items: flex-start;
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

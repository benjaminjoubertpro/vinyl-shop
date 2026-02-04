<template>
  <appheader />

  <main class="page">
    <div class="container">
      <header class="hero">
        <div class="hero-text">
          <p class="eyebrow">Contact</p>
          <h1>Une question ? On te répond vite.</h1>
          <p class="subtitle">
            Besoin d’une recommandation, d’une édition précise ou d’un conseil sur un pressage ?
            Écris-nous — on adore parler musique.
          </p>
        </div>
        <div class="hero-card" aria-hidden="true">
          <div class="hero-card-inner">
            <p class="hero-card-title">Support</p>
            <p class="hero-card-text">Réponse sous 24–48h ouvrées.</p>
            <div class="hero-tags">
              <span class="tag">Conseil</span>
              <span class="tag">Commande</span>
              <span class="tag">Stock</span>
            </div>
          </div>
        </div>
      </header>

      <section class="grid">
        <aside class="left">
          <div class="card">
            <div class="card-head">
              <h2>Nos coordonnées</h2>
              <p>Tout ce qu’il faut, au même endroit.</p>
            </div>

            <div class="info">
              <div class="info-item">
                <div class="icon i1" aria-hidden="true">✉</div>
                <div class="info-text">
                  <p class="label">Email</p>
                  <p class="value">contact@vinylshop.fr</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon i2" aria-hidden="true">☎</div>
                <div class="info-text">
                  <p class="label">Téléphone</p>
                  <p class="value">+33 6 00 00 00 00</p>
                </div>
              </div>

              <div class="info-item">
                <div class="icon i3" aria-hidden="true">⌁</div>
                <div class="info-text">
                  <p class="label">Adresse</p>
                  <p class="value">12 Rue du Groove, 75000 Paris</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-head">
              <h2>Horaires</h2>
              <p>Ouverture boutique (exemple).</p>
            </div>

            <div class="hours">
              <div class="hour"><span>Lun–Ven</span><span>10:00 – 19:00</span></div>
              <div class="hour"><span>Sam</span><span>11:00 – 19:00</span></div>
              <div class="hour"><span>Dim</span><span>Fermé</span></div>
            </div>
          </div>

          <div class="map">
            <div class="map-inner">
              <p class="map-title">Carte</p>
              <p class="map-text">Placeholder (tu brancheras une vraie map plus tard).</p>
            </div>
          </div>
        </aside>

        <section class="right" aria-label="Formulaire de contact">
          <div class="form-card">
            <div class="form-head">
              <h2>Écris-nous</h2>
              <p>UI only : pas d’envoi, tu brancheras la logique ensuite.</p>
            </div>

            <form class="form" @submit.prevent>
              <div class="row">
                <div class="field">
                  <label class="f-label" for="name">Nom</label>
                  <input id="name" class="input" type="text" placeholder="Ton nom" />
                </div>

                <div class="field">
                  <label class="f-label" for="email">Email</label>
                  <input id="email" class="input" type="email" placeholder="ton@email.com" />
                </div>
              </div>

              <div class="row">
                <div class="field">
                  <label class="f-label" for="topic">Sujet</label>
                  <select id="topic" class="select">
                    <option>Commande</option>
                    <option>Stock / disponibilité</option>
                    <option>Recommandation</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div class="field">
                  <label class="f-label" for="order">N° commande</label>
                  <input id="order" class="input" type="text" placeholder="#000000" />
                </div>
              </div>

              <div class="field">
                <label class="f-label" for="message">Message</label>
                <textarea id="message" class="textarea" rows="6" placeholder="Dis-nous ce que tu recherches…"></textarea>
              </div>

              <div class="consent">
                <label class="check"><input type="checkbox" /> J’accepte d’être recontacté par email.</label>
              </div>

              <div class="actions">
                <button class="btn2" type="submit">Envoyer</button>
                <button class="btn" type="button">Effacer</button>
              </div>

              <p class="footnote">En envoyant, tu acceptes que nous utilisions tes infos uniquement pour te répondre.</p>
            </form>
          </div>
        </section>
      </section>
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
  width: min(1200px, calc(100% - 2rem));
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.25rem;
  align-items: stretch;
  margin-bottom: 1.5rem;
}

.hero-text {
  padding: 1.25rem 0;
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
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  color: rgba(255, 255, 255, 0.95);
}

.subtitle {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  max-width: 75ch;
}

.hero-card {
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.22), rgba(6, 182, 212, 0.14), rgba(249, 115, 22, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 1px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);
}

.hero-card-inner {
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  padding: 1.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
}

.hero-card-title {
  margin: 0;
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

.hero-card-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
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

.grid {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 1.25rem;
  align-items: start;
}

.left,
.right {
  min-width: 0;
}

.card,
.form-card {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.card + .card,
.card + .map {
  margin-top: 1.25rem;
}

.card-head,
.form-head {
  padding: 1.15rem 1.15rem 0.95rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(600px 200px at 20% 20%, rgba(6, 182, 212, 0.18), transparent 60%),
    radial-gradient(520px 180px at 80% 30%, rgba(124, 58, 237, 0.18), transparent 60%);
}

.card-head h2,
.form-head h2 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

.card-head p,
.form-head p {
  margin: 0.45rem 0 0;
  color: rgba(255, 255, 255, 0.68);
}

.info {
  padding: 1.05rem 1.15rem 1.2rem;
  display: grid;
  gap: 0.85rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 900;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

.i1 { background: linear-gradient(135deg, rgba(124, 58, 237, 1), rgba(6, 182, 212, 1)); }
.i2 { background: linear-gradient(135deg, rgba(6, 182, 212, 1), rgba(34, 197, 94, 1)); }
.i3 { background: linear-gradient(135deg, rgba(249, 115, 22, 1), rgba(239, 68, 68, 1)); }

.info-text {
  min-width: 0;
}

.label {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.7);
}

.value {
  margin: 0.2rem 0 0;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.92);
}

.hours {
  padding: 1.05rem 1.15rem 1.2rem;
  display: grid;
  gap: 0.65rem;
}

.hour {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.82);
  font-weight: 800;
  padding: 0.75rem 0.85rem;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.map {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.map-inner {
  padding: 1.25rem;
  min-height: 220px;
  display: grid;
  align-content: center;
  gap: 0.5rem;
  background:
    radial-gradient(700px 220px at 20% 20%, rgba(124, 58, 237, 0.18), transparent 60%),
    radial-gradient(600px 200px at 80% 30%, rgba(6, 182, 212, 0.14), transparent 60%),
    rgba(0, 0, 0, 0.22);
}

.map-title {
  margin: 0;
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

.map-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
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

.f-label {
  font-size: 0.85rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.78);
}

.input,
.select,
.textarea {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.8rem 0.85rem;
  background: rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
}

.textarea {
  resize: vertical;
}

.input::placeholder,
.textarea::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.consent {
  padding-top: 0.25rem;
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

@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .hero-card-inner {
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .page {
    padding: 1.75rem 0 4rem;
  }

  .row {
    grid-template-columns: 1fr;
  }

  .hour {
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
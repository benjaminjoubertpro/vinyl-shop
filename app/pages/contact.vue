<template>
  <appheader />

  <main class="page">
    <div class="container">
      <header class="hero">
        <span class="eyebrow">Contact</span>
        <h1>Une question ? Écrivez-nous.</h1>
        <p class="subtitle">
          Besoin d'une recommandation, d'une édition précise ou d'un conseil ?
          Nous répondons sous 24 à 48h ouvrées.
        </p>
      </header>

      <section class="grid">
        <aside class="left">
          <div class="info-block">
            <h2 class="block-title">Coordonnées</h2>
            <div class="info-list">
              <div class="info-item">
                <span class="info-label">Email</span>
                <span class="info-value">contact@vinylshop.fr</span>
              </div>
              <div class="info-item">
                <span class="info-label">Téléphone</span>
                <span class="info-value">+33 6 00 00 00 00</span>
              </div>
              <div class="info-item">
                <span class="info-label">Adresse</span>
                <span class="info-value">12 Rue du Groove, 75000 Paris</span>
              </div>
            </div>
          </div>

          <div class="info-block">
            <h2 class="block-title">Horaires</h2>
            <div class="hours">
              <div class="hour"><span>Lun – Ven</span><span>10:00 – 19:00</span></div>
              <div class="hour"><span>Sam</span><span>11:00 – 19:00</span></div>
              <div class="hour"><span>Dim</span><span>Fermé</span></div>
            </div>
          </div>

          <div class="map-placeholder">
            <p class="map-text">Carte — à intégrer ultérieurement.</p>
          </div>
        </aside>

        <section class="right" aria-label="Formulaire de contact">
          <div class="form-card">
            <h2 class="form-title">Écrivez-nous</h2>

            <form class="form" @submit.prevent>
              <div class="row">
                <div class="field">
                  <label class="f-label" for="name">Nom</label>
                  <input id="name" class="input" type="text" placeholder="Votre nom" />
                </div>
                <div class="field">
                  <label class="f-label" for="email">Email</label>
                  <input id="email" class="input" type="email" placeholder="votre@email.com" />
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
                <textarea id="message" class="textarea" rows="6" placeholder="Décrivez votre demande…"></textarea>
              </div>

              <div class="consent">
                <label class="check"><input type="checkbox" /> J'accepte d'être recontacté par email.</label>
              </div>

              <div class="actions">
                <button class="btn-primary" type="submit">Envoyer</button>
                <button class="btn" type="button">Effacer</button>
              </div>

              <p class="footnote">Vos informations sont utilisées uniquement pour répondre à votre demande.</p>
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
  padding: 2.5rem 0 5rem;
  background: #0a0a0a;
}

.container {
  width: min(1100px, calc(100% - 3rem));
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
  line-height: 1.65;
  max-width: 55ch;
  font-size: 0.88rem;
}

.grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 3rem;
  align-items: start;
}

.left,
.right {
  min-width: 0;
}

.info-block {
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 1px;
}

.block-title {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #f5f0eb;
  margin: 0;
  padding: 1.25rem 1.25rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.info-list {
  padding: 1rem 1.25rem 1.25rem;
  display: grid;
  gap: 1rem;
}

.info-item {
  display: grid;
  gap: 0.15rem;
}

.info-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.info-value {
  font-size: 0.88rem;
  color: #f5f0eb;
  font-weight: 400;
}

.hours {
  padding: 1rem 1.25rem 1.25rem;
  display: grid;
  gap: 0;
}

.hour {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
  font-size: 0.85rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.hour:last-child {
  border-bottom: none;
}

.map-placeholder {
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.5rem 1.25rem;
  min-height: 160px;
  display: grid;
  align-content: center;
  margin-top: -1px;
}

.map-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.82rem;
  font-style: italic;
}

.form-card {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #111;
  overflow: hidden;
}

.form-title {
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

.f-label {
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
}

.input,
.select,
.textarea {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.7rem 0.85rem;
  background: transparent;
  color: #f5f0eb;
  outline: none;
  font-family: inherit;
  font-size: 0.85rem;
}

.select {
  background: #111;
}

.textarea {
  resize: vertical;
}

.input::placeholder,
.textarea::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.input:focus,
.select:focus,
.textarea:focus {
  border-color: #c9a96e;
}

.consent {
  padding-top: 0.15rem;
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
}

.actions .btn,
.actions .btn-primary {
  flex: 1 1 180px;
  text-align: center;
}

.footnote {
  margin: 0;
  color: rgba(255, 255, 255, 0.2);
  line-height: 1.6;
  font-size: 0.78rem;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .row {
    grid-template-columns: 1fr;
  }

  .hour {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
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
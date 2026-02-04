<template>
  <section class="cta">
    <div class="container">
      <div class="card">
        <div class="text">
          <p class="eyebrow">Let’s go</p>
          <h2>Prêt à digger ton prochain coup de cœur ?</h2>
          <p class="lead">Explore le catalogue complet et trouve l’album qui va tourner en boucle cette semaine.</p>

          <div class="reassurance">
            <span class="pill">Expédition protégée</span>
            <span class="pill">Sélection premium</span>
            <span class="pill">Support rapide</span>
          </div>
        </div>

        <div class="actions">
          <a class="btn2" href="#">Voir le catalogue</a>
          <a class="btn" href="#">Voir les best-sellers</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  width: 100%;
  padding: 5rem 0;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.card {
  color: #fff;
  border-radius: 16px;
  padding: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background:
    radial-gradient(900px 260px at 15% 30%, rgba(255, 255, 255, 0.18), transparent 60%),
    linear-gradient(135deg, rgba(124, 58, 237, 1) 0%, rgba(6, 182, 212, 1) 55%, rgba(249, 115, 22, 1) 100%);
  box-shadow: 0 24px 70px rgba(124, 58, 237, 0.25);
}

.text {
  min-width: 0;
}

.eyebrow {
  margin: 0 0 0.65rem;
  display: inline-flex;
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

h2 {
  margin: 0 0 0.6rem;
  font-size: clamp(1.6rem, 2.7vw, 2.2rem);
  font-weight: 950;
  letter-spacing: -0.02em;
}

.lead {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.reassurance {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.pill {
  display: inline-flex;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 800;
  font-size: 0.85rem;
}

.actions {
  flex: 0 0 auto;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

@media (max-width: 640px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
  }

  .actions {
    width: 100%;
    justify-content: flex-start;
  }

  .btn2,
  .btn {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
}
</style>

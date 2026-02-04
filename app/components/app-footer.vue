<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand">
          <strong>Vinyl Shop</strong>
          <p>La sélection qui donne envie de remettre la face A… puis la face B.</p>
        </div>

        <nav class="links" aria-label="Pied de page">
          <a href="#">Catalogue</a>
          <a href="#">Contact</a>
          <a href="#">Mentions</a>
        </nav>
      </div>

      <div class="bottom">
        <small>© {{ year }} Vinyl Shop — Tous droits réservés</small>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  width: 100%;
  color: #f0f0f0;
  padding: 3rem 0;
  background:
    radial-gradient(900px 280px at 15% 20%, rgba(124, 58, 237, 0.22), transparent 60%),
    radial-gradient(800px 260px at 85% 20%, rgba(6, 182, 212, 0.18), transparent 60%),
    #070707;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, rgba(124, 58, 237, 1), rgba(6, 182, 212, 1), rgba(249, 115, 22, 1));
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.brand strong {
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.brand p {
  margin: 0.5rem 0 0;
  color: #bdbdbd;
  line-height: 1.6;
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.links a {
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  border-radius: 999px;
  padding: 0.45rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  transition: transform 0.15s ease, background 0.15s ease;
}

.links a:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.bottom {
  padding-top: 1rem;
  color: #bdbdbd;
}

@media (max-width: 640px) {
  .top {
    flex-direction: column;
  }

  .links {
    justify-content: flex-start;
  }
}
</style>

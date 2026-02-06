<template>
  <footer class="footer">
    <div class="container">
      <div class="top">
        <div class="brand">
          <strong class="brand-name">Vinyl Shop</strong>
          <p class="brand-desc">
            Vinyles neufs, rééditions et raretés depuis 2023.
            Une sélection pensée pour les amateurs exigeants.
          </p>
        </div>

        <div class="footer-columns">
          <div class="footer-col">
            <h4>Navigation</h4>
            <nav aria-label="Navigation footer">
              <a href="/">Accueil</a>
              <a href="/catalogue">Catalogue</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>

          <div class="footer-col">
            <h4>Compte</h4>
            <nav aria-label="Compte footer">
              <a href="/connexion">Connexion</a>
              <a href="/inscription">Inscription</a>
            </nav>
          </div>

          <div class="footer-col">
            <h4>Informations</h4>
            <nav aria-label="Informations footer">
              <a href="#">Mentions légales</a>
              <a href="#">CGV</a>
              <a href="#">Confidentialité</a>
            </nav>
          </div>
        </div>
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
  padding: 3.5rem 0 2rem;
  background: #070707;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.container {
  width: min(1100px, calc(100% - 3rem));
  margin: 0 auto;
}

.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.brand {
  max-width: 260px;
}

.brand-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #f5f0eb;
  letter-spacing: 0.01em;
}

.brand-desc {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1.7;
  font-size: 0.8rem;
}

.footer-columns {
  display: flex;
  gap: 3.5rem;
}

.footer-col h4 {
  margin: 0 0 0.85rem;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(255, 255, 255, 0.25);
}

.footer-col nav {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.footer-col nav a {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 400;
  padding: 0.15rem 0;
  transition: color 0.2s ease;
}

.footer-col nav a:hover {
  color: #f5f0eb;
}

.bottom {
  padding-top: 1.5rem;
}

.bottom small {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .top {
    flex-direction: column;
    gap: 2.5rem;
  }

  .brand {
    max-width: 100%;
  }

  .footer-columns {
    gap: 2rem;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .footer-columns {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>

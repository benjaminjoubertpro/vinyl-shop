<template>
  <header class="header">
    <div class="bar">
      <div class="container">
        <a class="brand" href="/">
          <img class="logo" src="assets/img/logovinyl.png" alt="Logo">
          <span class="name">Vinyl Shop</span>
        </a>

        <nav class="nav" aria-label="Navigation principale">
          <ul class="nav-list">
            <li><a class="nav-link" href="/">Accueil</a></li>
            <li><a class="nav-link" href="/catalogue">Catalogue</a></li>
            <li><a class="nav-link" href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div class="right">
          <a class="header-link" href="/connexion">Connexion</a>
          <a class="btn" href="/inscription">Inscription</a>

          <button
            class="burger"
            type="button"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            @click="isOpen = !isOpen"
          >
            <span class="sr">Menu</span>
            <span class="burger-lines" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>

    <div v-show="isOpen" id="mobile-menu" class="mobile" @click="isOpen = false">
      <div class="mobile-panel" @click.stop>
        <nav aria-label="Navigation mobile">
          <a class="mobile-link" href="/">Accueil</a>
          <a class="mobile-link" href="/catalogue">Catalogue</a>
          <a class="mobile-link" href="/contact">Contact</a>
        </nav>
        <div class="mobile-actions">
          <a class="header-link" href="/connexion">Connexion</a>
          <a class="btn" href="/inscription">Inscription</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
}

.bar {
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--color-cream);
}

.logo {
  width: 38px;
  height: auto;
}

.name {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.nav-list {
  display: flex;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-link {
  color: var(--color-text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  padding: 0.4rem 0.7rem;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--color-cream);
}

.right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-link {
  color: var(--color-text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
  transition: color 0.2s ease;
}

.header-link:hover {
  color: var(--color-cream);
}

.burger {
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border-strong);
  border-radius: 0;
  background: transparent;
  color: var(--color-cream);
  cursor: pointer;
}

.burger-lines {
  display: block;
  width: 18px;
  height: 1px;
  background: currentColor;
  margin: 0 auto;
  position: relative;
}

.burger-lines::before,
.burger-lines::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: currentColor;
}

.burger-lines::before { top: -5px; }
.burger-lines::after { top: 5px; }

.sr {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.mobile {
  display: none;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .right .header-link,
  .right .btn {
    display: none;
  }

  .burger {
    display: inline-grid;
    place-items: center;
  }

  .mobile {
    display: block;
    position: fixed;
    inset: 70px 0 0 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    padding: 1rem;
  }

  .mobile-panel {
    width: min(400px, 100%);
    margin-left: auto;
    background: var(--color-surface);
    border: 1px solid var(--color-border-mid);
    padding: 1.25rem;
  }

  .mobile-link {
    display: block;
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--color-border);
    transition: color 0.2s ease;
  }

  .mobile-link:hover {
    color: var(--color-cream);
  }

  .mobile-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 1rem;
    margin-top: 0.5rem;
  }

  .mobile-actions .btn,
  .mobile-actions .header-link {
    width: 100%;
    text-align: center;
  }
}
</style>
<template>
  <appheader />

  <main class="page">
    <div class="container">
      <div class="topbar">
        <div class="titles">
          <span class="eyebrow">Catalogue</span>
          <h1>Explorez la collection</h1>
          <p class="subtitle">Parcourez notre sélection de vinyles — filtrez par genre, prix ou format.</p>
        </div>

        <button class="filter-btn" type="button" @click="filtersOpen = true">
          Filtres
        </button>
      </div>

      <div class="layout">
        <aside class="sidebar" aria-label="Filtres">
          <div class="panel">
            <h2 class="panel-title">Filtres</h2>

            <div class="group">
              <h3>Recherche</h3>
              <div class="field">
                <label class="label" for="q">Mot-clé</label>
                <input id="q" class="input" type="search" placeholder="Artiste, album…" />
              </div>
            </div>

            <div class="group">
              <h3>Prix</h3>
              <div class="row">
                <div class="field">
                  <label class="label" for="min">Min</label>
                  <input id="min" class="input" type="text" placeholder="10€" />
                </div>
                <div class="field">
                  <label class="label" for="max">Max</label>
                  <input id="max" class="input" type="text" placeholder="40€" />
                </div>
              </div>
            </div>

            <div class="group">
              <h3>Genre</h3>
              <div class="chips">
                <button class="chip" type="button">Rock</button>
                <button class="chip" type="button">Rap</button>
                <button class="chip" type="button">Jazz</button>
                <button class="chip" type="button">Electro</button>
              </div>
            </div>

            <div class="group">
              <h3>Format</h3>
              <div class="checks">
                <label class="check"><input type="checkbox" /> 33T</label>
                <label class="check"><input type="checkbox" /> 45T</label>
                <label class="check"><input type="checkbox" /> EP</label>
              </div>
            </div>

            <div class="panel-actions">
              <button class="btn-primary" type="button">Appliquer</button>
              <button class="btn" type="button">Réinitialiser</button>
            </div>
          </div>
        </aside>

        <section class="results" aria-label="Résultats">
          <div class="toolbar">
            <input class="search-input" type="search" placeholder="Rechercher…" />
            <div class="controls">
              <div class="select-wrap">
                <label class="label" for="sort">Trier</label>
                <select id="sort" class="select-input">
                  <option>Populaire</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Nouveautés</option>
                </select>
              </div>
            </div>
          </div>

          <div class="meta">
            <p class="count">48 résultats</p>
            <div class="active-filters">
              <span class="tag">Rock</span>
              <span class="tag">20–40€</span>
              <span class="tag">33T</span>
            </div>
          </div>

          <div class="grid">
            <product-card v-for="p in featuredProducts" :key="p.id" :product="p" />
          </div>

          <div class="pagination" aria-label="Pagination">
            <button class="btn" type="button">Précédent</button>
            <div class="pages">
              <button class="page-btn is-active" type="button">1</button>
              <button class="page-btn" type="button">2</button>
              <button class="page-btn" type="button">3</button>
              <span class="dots">…</span>
              <button class="page-btn" type="button">8</button>
            </div>
            <button class="btn" type="button">Suivant</button>
          </div>
        </section>
      </div>
    </div>

    <div v-show="filtersOpen" class="drawer" @click="filtersOpen = false">
      <div class="drawer-panel" @click.stop>
        <div class="drawer-head">
          <strong>Filtres</strong>
          <button class="drawer-close" type="button" @click="filtersOpen = false">Fermer</button>
        </div>
        <div class="drawer-body">
          <div class="group">
            <h3>Recherche</h3>
            <div class="field">
              <label class="label" for="q2">Mot-clé</label>
              <input id="q2" class="input" type="search" placeholder="Artiste, album…" />
            </div>
          </div>

          <div class="group">
            <h3>Genre</h3>
            <div class="chips">
              <button class="chip" type="button">Rock</button>
              <button class="chip" type="button">Rap</button>
              <button class="chip" type="button">Jazz</button>
              <button class="chip" type="button">Electro</button>
            </div>
          </div>

          <div class="group">
            <h3>Format</h3>
            <div class="checks">
              <label class="check"><input type="checkbox" /> 33T</label>
              <label class="check"><input type="checkbox" /> 45T</label>
              <label class="check"><input type="checkbox" /> EP</label>
            </div>
          </div>

          <div class="panel-actions">
            <button class="btn-primary" type="button">Appliquer</button>
            <button class="btn" type="button">Réinitialiser</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { featuredProducts } from '../logic/product'

const filtersOpen = ref(false)
</script>

<style scoped>
.page {
  width: 100%;
  padding: 2.5rem 0 5rem;
  background: #0a0a0a;
}

.container {
  width: min(1200px, calc(100% - 3rem));
  margin: 0 auto;
}

.topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
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
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  color: #f5f0eb;
  line-height: 1.15;
}

.subtitle {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.6;
  max-width: 50ch;
  font-size: 0.88rem;
}

.filter-btn {
  display: none;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.filter-btn:hover {
  color: #f5f0eb;
  border-color: rgba(255, 255, 255, 0.2);
}

.layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
}

.sidebar,
.results {
  min-width: 0;
}

.panel {
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #111;
  overflow: hidden;
  position: sticky;
  top: 86px;
}

.panel-title {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 500;
  color: #f5f0eb;
  margin: 0;
  padding: 1.25rem 1.25rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.group {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.group:last-of-type {
  border-bottom: none;
}

.group h3 {
  margin: 0 0 0.65rem;
  font-weight: 600;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.65rem;
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
  padding: 0.6rem 0.75rem;
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

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.chip {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  padding: 0.4rem 0.65rem;
  font-weight: 500;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.chip:hover {
  color: #f5f0eb;
  border-color: rgba(255, 255, 255, 0.2);
}

.checks {
  display: grid;
  gap: 0.45rem;
}

.check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
  font-size: 0.82rem;
}

.panel-actions {
  padding: 1rem 1.25rem 1.25rem;
  display: grid;
  gap: 0.5rem;
}

.panel-actions .btn,
.panel-actions .btn-primary {
  width: 100%;
  text-align: center;
}

.toolbar {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.search-input {
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.65rem 0.85rem;
  background: transparent;
  color: #f5f0eb;
  outline: none;
  font-family: inherit;
  font-size: 0.85rem;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.search-input:focus {
  border-color: #c9a96e;
}

.controls {
  flex: 0 0 auto;
}

.select-wrap {
  display: grid;
  gap: 0.3rem;
}

.select-input {
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0.65rem 0.75rem;
  background: #111;
  color: rgba(255, 255, 255, 0.6);
  outline: none;
  font-family: inherit;
  font-size: 0.82rem;
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.count {
  margin: 0;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  font-size: 0.82rem;
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: flex-end;
}

.tag {
  display: inline-flex;
  padding: 0.3rem 0.55rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.pages {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  justify-content: center;
}

.page-btn {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  font-weight: 500;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.page-btn:hover {
  color: #f5f0eb;
  border-color: rgba(255, 255, 255, 0.15);
}

.page-btn.is-active {
  color: #0a0a0a;
  background: #f5f0eb;
  border-color: #f5f0eb;
}

.dots {
  color: rgba(255, 255, 255, 0.25);
  font-size: 0.85rem;
}

.drawer {
  display: none;
}

@media (max-width: 1024px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }

  .filter-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .drawer {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    padding: 1rem;
    z-index: 50;
  }

  .drawer-panel {
    width: min(400px, 100%);
    height: calc(100vh - 2rem);
    margin-left: auto;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .drawer-head strong {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    color: #f5f0eb;
  }

  .drawer-close {
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: transparent;
    padding: 0.45rem 0.7rem;
    font-weight: 500;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
  }

  .drawer-body {
    overflow: auto;
  }
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .toolbar {
    flex-direction: column;
  }

  .pagination .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
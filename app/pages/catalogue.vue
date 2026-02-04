<template>
  <appheader />

  <main class="page">
    <div class="container">
      <div class="topbar">
        <div class="titles">
          <p class="eyebrow">Catalogue</p>
          <h1>Trouve ton prochain vinyle</h1>
          <p class="subtitle">Recherche, filtres et tri — la logique viendra ensuite, ici c’est le design.</p>
        </div>

        <button class="filter-btn" type="button" @click="filtersOpen = true">
          Filtres
        </button>
      </div>

      <div class="layout">
        <aside class="sidebar" aria-label="Filtres">
          <div class="panel">
            <div class="panel-head">
              <h2>Filtres</h2>
              <p>Affinage rapide</p>
            </div>

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

            <div class="actions">
              <button class="btn2" type="button">Appliquer</button>
              <button class="btn" type="button">Réinitialiser</button>
            </div>
          </div>
        </aside>

        <section class="results" aria-label="Résultats">
          <div class="toolbar">
            <div class="search">
              <span class="search-icon" aria-hidden="true">⌕</span>
              <input class="search-input" type="search" placeholder="Rechercher dans les résultats…" />
            </div>

            <div class="controls">
              <div class="select">
                <label class="label" for="sort">Trier</label>
                <select id="sort" class="select-input">
                  <option>Populaire</option>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Nouveautés</option>
                </select>
              </div>

              <div class="select">
                <label class="label" for="per">Afficher</label>
                <select id="per" class="select-input">
                  <option>12</option>
                  <option>24</option>
                  <option>48</option>
                </select>
              </div>
            </div>
          </div>

          <div class="meta">
            <p class="count">48 résultats</p>
            <div class="active-filters">
              <span class="tag">Rock</span>
              <span class="tag">20€ - 40€</span>
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

          <div class="actions">
            <button class="btn2" type="button">Appliquer</button>
            <button class="btn" type="button">Réinitialiser</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

import { ref } from 'vue'

const filtersOpen = ref(false)

import { featuredProducts } from '../logic/product'
</script>


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

.topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  margin: 0.6rem 0 0;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.6;
  max-width: 75ch;
}

.filter-btn {
  display: none;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 0.6rem 0.9rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.9);
}

.layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.25rem;
  align-items: start;
}

.sidebar,
.results {
  min-width: 0;
}

.panel {
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  position: sticky;
  top: 88px;
  backdrop-filter: blur(12px);
}

.panel-head {
  padding: 1.1rem 1.1rem 0.9rem;
  background:
    radial-gradient(600px 200px at 20% 20%, rgba(6, 182, 212, 0.22), transparent 60%),
    radial-gradient(520px 180px at 80% 30%, rgba(124, 58, 237, 0.22), transparent 60%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.panel-head h2 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 950;
  color: rgba(255, 255, 255, 0.92);
}

.panel-head p {
  margin: 0.35rem 0 0;
  color: rgba(255, 255, 255, 0.68);
}

.group {
  padding: 1.05rem 1.1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.group:last-of-type {
  border-bottom: none;
}

.group h3 {
  margin: 0 0 0.75rem;
  font-weight: 950;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.field {
  display: grid;
  gap: 0.35rem;
}

.label {
  font-size: 0.85rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.75);
}

.input {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.7rem 0.8rem;
  background: rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 0.9);
  outline: none;
}

.input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  padding: 0.5rem 0.7rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.86);
}

.checks {
  display: grid;
  gap: 0.5rem;
}

.check {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 700;
}

.actions {
  padding: 1.05rem 1.1rem 1.2rem;
  display: grid;
  gap: 0.75rem;
}

.actions .btn,
.actions .btn2 {
  width: 100%;
  text-align: center;
}

.toolbar {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: 0.9rem;
  margin-bottom: 1rem;
}

.search {
  position: relative;
  flex: 1 1 auto;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.65);
  font-weight: 900;
}

.search-input {
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.85rem 0.9rem 0.85rem 2.2rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.35);
  outline: none;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.controls {
  display: flex;
  gap: 0.75rem;
  flex: 0 0 auto;
}

.select {
  display: grid;
  gap: 0.35rem;
}

.select-input {
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 0.75rem 0.8rem;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.9);
  outline: none;
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 0.75rem 0 1.25rem;
  padding: 0.9rem 1rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.count {
  margin: 0;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 800;
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
}

.tag {
  display: inline-flex;
  padding: 0.4rem 0.65rem;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.18);
  border: 1px solid rgba(124, 58, 237, 0.28);
  font-weight: 900;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.85rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

/* Dark variant for ProductCard ONLY on catalogue page */
.page :deep(.product-card) {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.35);
}

.page :deep(.product-card::before) {
  opacity: 0.18;
}

.page :deep(.media) {
  background: radial-gradient(520px 190px at 20% 20%, rgba(124, 58, 237, 0.22), transparent 65%),
    radial-gradient(420px 160px at 80% 20%, rgba(6, 182, 212, 0.18), transparent 60%);
}

.page :deep(.title) {
  color: rgba(255, 255, 255, 0.92);
}

.page :deep(.artist) {
  color: rgba(255, 255, 255, 0.68);
}

.page :deep(.price) {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(124, 58, 237, 0.18);
  border: 1px solid rgba(124, 58, 237, 0.28);
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
  margin-top: 1.75rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.pages {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.page-btn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  font-weight: 950;
  color: rgba(255, 255, 255, 0.86);
}

.page-btn.is-active {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
}

.dots {
  color: rgba(255, 255, 255, 0.55);
  font-weight: 900;
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
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);
    padding: 1rem;
    z-index: 50;
  }

  .drawer-panel {
    width: min(520px, 100%);
    height: calc(100vh - 2rem);
    margin-left: auto;
    background: rgba(10, 10, 16, 0.92);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
    display: grid;
    grid-template-rows: auto 1fr;
  }

  .drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background:
      radial-gradient(600px 200px at 20% 20%, rgba(6, 182, 212, 0.14), transparent 60%),
      radial-gradient(520px 180px at 80% 30%, rgba(124, 58, 237, 0.14), transparent 60%);
  }

  .drawer-head strong {
    color: rgba(255, 255, 255, 0.92);
  }

  .drawer-close {
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    padding: 0.5rem 0.75rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.9);
  }

  .drawer-body {
    overflow: auto;
  }
}

@media (max-width: 640px) {
  .topbar {
    align-items: flex-start;
  }

  .toolbar {
    grid-template-columns: 1fr;
    align-items: stretch;
  }

  .controls {
    width: 100%;
  }

  .pagination .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
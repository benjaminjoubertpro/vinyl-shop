<template>
  <appheader />

  <!-- Produit trouvé -->
  <main v-if="product" class="page">
    <div class="container">

      <!-- Fil d'Ariane -->
      <nav class="breadcrumb">
        <NuxtLink to="/">Accueil</NuxtLink>
        <span class="sep">/</span>
        <NuxtLink to="/catalogue">Catalogue</NuxtLink>
        <span class="sep">/</span>
        <span class="current">{{ product.title }}</span>
      </nav>

      <!-- Section principale : image + infos -->
      <section class="product-top">
        <div class="product-image">
          <img :src="product.image" :alt="product.title" @error="(e) => e.target.src = '/img/placeholder.svg'" />
        </div>

        <div class="product-info">
          <span class="eyebrow">{{ product.genre }}</span>
          <h1>{{ product.title }}</h1>
          <p class="artist">{{ product.artist }}</p>

          <div class="price-row">
            <span class="price">{{ product.price.toFixed(2) }}&euro;</span>
            <span class="stock" :class="stockClass">{{ stockLabel }}</span>
          </div>

          <p class="description">{{ product.description }}</p>

          <div class="actions">
            <button class="btn-primary" :disabled="product.stock === 'out_of_stock'">
              Ajouter au panier
            </button>
            <NuxtLink to="/catalogue" class="btn">Continuer mes achats</NuxtLink>
          </div>

          <!-- Messages rassurants -->
          <ul class="reassurance">
            <li>Expédition sous 24-48h ouvrées</li>
            <li>Emballage soigné spécial vinyle</li>
            <li>Retours gratuits sous 14 jours</li>
            <li>Paiement sécurisé</li>
          </ul>
        </div>
      </section>

      <!-- Détails techniques -->
      <section class="details-section">
        <h2 class="section-title">Détails du vinyle</h2>
        <div class="details-grid">
          <div class="detail">
            <span class="detail-label">Artiste</span>
            <span class="detail-value">{{ product.artist }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Année</span>
            <span class="detail-value">{{ product.year }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Genre</span>
            <span class="detail-value">{{ product.genre }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Label</span>
            <span class="detail-value">{{ product.label }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Format</span>
            <span class="detail-value">{{ product.format }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Pays</span>
            <span class="detail-value">{{ product.country }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Pressage</span>
            <span class="detail-value">{{ product.pressing }}</span>
          </div>
          <div class="detail">
            <span class="detail-label">Support</span>
            <span class="detail-value">Vinyle 33 tours</span>
          </div>
        </div>
      </section>

      <!-- Tracklist -->
      <section v-if="product.tracklist && product.tracklist.length" class="tracklist-section">
        <h2 class="section-title">Tracklist</h2>
        <ol class="tracklist">
          <li v-for="(track, i) in product.tracklist" :key="i">
            <span class="track-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="track-name">{{ track }}</span>
          </li>
        </ol>
      </section>

      <!-- Produits similaires -->
      <section v-if="related.length" class="related-section">
        <h2 class="section-title">Vous aimerez aussi</h2>
        <div class="related-grid">
          <product-card
            v-for="item in related"
            :key="item.id"
            :product="item"
          />
        </div>
      </section>

    </div>
  </main>

  <!-- Produit non trouvé -->
  <main v-else class="page">
    <div class="container not-found">
      <span class="eyebrow">Erreur 404</span>
      <h1>Produit introuvable</h1>
      <p class="subtitle">Ce vinyle n'existe pas ou a été retiré de notre catalogue.</p>
      <NuxtLink to="/catalogue" class="btn">Retour au catalogue</NuxtLink>
    </div>
  </main>

  <app-footer />
</template>

<script setup>
import { getProductBySlug, getRelatedProducts, getStockLabel } from '~/logic/product'

// Récupérer le slug depuis l'URL
const route = useRoute()
const slug = route.params.slug

// Trouver le produit correspondant
const product = getProductBySlug(slug)

// Trouver les produits similaires
const related = getRelatedProducts(product, 4)

// Texte et classe CSS pour le stock
const stockLabel = product ? getStockLabel(product.stock) : ''
const stockClass = product ? product.stock : ''

// SEO : titre de la page dynamique
useHead({
  title: product ? `${product.title} — ${product.artist}` : 'Produit introuvable'
})
</script>

<style scoped>
.page {
  width: 100%;
  padding: 2rem 0 5rem;
  background: var(--color-bg);
  min-height: 80vh;
}

.container {
  width: min(1200px, calc(100% - 3rem));
  margin: 0 auto;
}

/* ---- Breadcrumb ---- */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
  font-size: 0.78rem;
  font-weight: 500;
}

.breadcrumb a {
  color: var(--color-text-light);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb a:hover {
  color: var(--color-cream);
}

.sep {
  color: var(--color-text-ghost);
}

.current {
  color: var(--color-text-lighter);
}

/* ---- Section principale ---- */
.product-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}

.product-image {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-bg-alt);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

h1 {
  font-family: var(--font-serif);
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.01em;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: var(--color-cream);
  line-height: 1.15;
}

.artist {
  margin: 0.4rem 0 0;
  color: var(--color-text-lighter);
  font-size: 0.95rem;
  font-weight: 500;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.price {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-cream);
}

.stock {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.3rem 0.65rem;
  border: 1px solid var(--color-border-strong);
}

.stock.in_stock {
  color: #6ec96e;
  border-color: rgba(110, 201, 110, 0.25);
}

.stock.limited {
  color: var(--color-gold);
  border-color: rgba(201, 169, 110, 0.25);
}

.stock.out_of_stock {
  color: #c96e6e;
  border-color: rgba(201, 110, 110, 0.25);
}

.description {
  margin: 0 0 1.5rem;
  color: var(--color-text);
  line-height: 1.75;
  font-size: 0.88rem;
}

.actions {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.actions .btn,
.actions .btn-primary {
  flex: 1 1 180px;
  text-align: center;
}

.actions .btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.reassurance {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.5rem;
}

.reassurance li {
  position: relative;
  padding-left: 1.1rem;
  color: var(--color-text-lighter);
  font-size: 0.82rem;
  font-weight: 500;
}

.reassurance li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-gold);
}

/* ---- Détails ---- */
.section-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--color-cream);
  margin: 0 0 1.5rem;
}

.details-section {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.detail-label {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-faint);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.detail-value {
  font-size: 0.88rem;
  color: var(--color-cream);
  font-weight: 500;
}

/* ---- Tracklist ---- */
.tracklist-section {
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
}

.tracklist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.tracklist li {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.85rem;
}

.track-num {
  color: var(--color-text-ghost);
  font-weight: 600;
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
}

.track-name {
  color: var(--color-text);
  font-weight: 500;
}

/* ---- Produits similaires ---- */
.related-section {
  margin-bottom: 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
}

/* ---- 404 ---- */
.not-found {
  text-align: center;
  padding: 6rem 0;
}

.not-found h1 {
  margin-bottom: 1rem;
}

.not-found .subtitle {
  color: var(--color-text-lighter);
  margin: 0 0 2rem;
  font-size: 0.9rem;
}

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .product-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .details-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .details-grid {
    grid-template-columns: 1fr;
  }

  .tracklist {
    grid-template-columns: 1fr;
  }

  .related-grid {
    grid-template-columns: 1fr;
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

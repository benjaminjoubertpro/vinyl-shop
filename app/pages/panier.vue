<template>
  <appheader />

  <main class="page">
    <div class="container">

      <nav class="breadcrumb">
        <NuxtLink to="/">Accueil</NuxtLink>
        <span class="sep">/</span>
        <span class="current">Panier</span>
      </nav>

      <h1>Mon panier</h1>

      <!-- Panier vide -->
      <div v-if="cart.length === 0" class="empty">
        <div class="empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </div>
        <p class="empty-text">Votre panier est vide</p>
        <NuxtLink to="/catalogue" class="btn">Parcourir le catalogue</NuxtLink>
      </div>

      <!-- Panier avec articles -->
      <div v-else class="cart-layout">

        <!-- Liste des articles -->
        <div class="cart-items">
          <div class="cart-item" v-for="item in cart" :key="item.id">
            <NuxtLink :to="`/produit/${item.slug}`" class="item-image">
              <img :src="item.image" :alt="item.title" @error="(e) => e.target.src = '/img/placeholder.svg'" />
            </NuxtLink>

            <div class="item-info">
              <NuxtLink :to="`/produit/${item.slug}`" class="item-title">{{ item.title }}</NuxtLink>
              <p class="item-artist">{{ item.artist }}</p>
              <span class="item-price-mobile">{{ item.price.toFixed(2) }}&euro;</span>
            </div>

            <div class="item-quantity">
              <button class="qty-btn" @click="updateQuantity(item.id, item.quantity - 1)" aria-label="Réduire">−</button>
              <span class="qty-value">{{ item.quantity }}</span>
              <button class="qty-btn" @click="updateQuantity(item.id, item.quantity + 1)" aria-label="Augmenter">+</button>
            </div>

            <div class="item-price">
              {{ (item.price * item.quantity).toFixed(2) }}&euro;
            </div>

            <button class="item-remove" @click="removeFromCart(item.id)" aria-label="Supprimer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Résumé -->
        <aside class="cart-summary">
          <h2 class="summary-title">Résumé</h2>

          <div class="summary-row">
            <span>Articles ({{ totalItems }})</span>
            <span>{{ totalPrice.toFixed(2) }}&euro;</span>
          </div>
          <div class="summary-row">
            <span>Livraison</span>
            <span class="free">Gratuite</span>
          </div>

          <div class="summary-total">
            <span>Total</span>
            <span>{{ totalPrice.toFixed(2) }}&euro;</span>
          </div>

          <button class="btn-primary full" disabled>Passer commande</button>
          <p class="summary-note">Paiement sécurisé — Livraison sous 48h</p>

          <button class="clear-btn" @click="clearCart">Vider le panier</button>
        </aside>

      </div>
    </div>
  </main>

  <app-footer />
</template>

<script setup>
// On importe la fonction du panier (même fichier que dans le header et la page produit)
import { useCart } from '~/composables/useCart'

// On récupère tout ce dont on a besoin depuis useCart :
//   - cart          = le tableau des articles dans le panier
//   - totalItems    = le nombre total d'articles (ex: 3)
//   - totalPrice    = le prix total (ex: 85.88)
//   - updateQuantity = pour changer la quantité d'un article (+1 ou -1)
//   - removeFromCart = pour supprimer un article
//   - clearCart      = pour vider tout le panier
const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart()

// Titre de la page dans l'onglet du navigateur
useHead({ title: 'Mon panier — Vinyl Shop' })
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
  margin-bottom: 2rem;
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

.sep { color: var(--color-text-ghost); }
.current { color: var(--color-text-lighter); }

h1 {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: var(--color-cream);
  margin: 0 0 2rem;
}

/* ---- Panier vide ---- */
.empty {
  text-align: center;
  padding: 4rem 0;
}

.empty-icon {
  color: var(--color-text-ghost);
  margin-bottom: 1.5rem;
}

.empty-text {
  color: var(--color-text-lighter);
  font-size: 1rem;
  margin: 0 0 2rem;
}

/* ---- Layout panier ---- */
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 2rem;
  align-items: start;
}

/* ---- Articles ---- */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto auto auto;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-border);
}

.cart-item:first-child {
  border-top: 1px solid var(--color-border);
}

.item-image {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-bg-alt);
  flex-shrink: 0;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.item-info {
  min-width: 0;
}

.item-title {
  display: block;
  color: var(--color-cream);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-title:hover {
  color: var(--color-gold);
}

.item-artist {
  margin: 0.2rem 0 0;
  color: var(--color-text-lighter);
  font-size: 0.8rem;
  font-weight: 500;
}

.item-price-mobile {
  display: none;
}

/* ---- Quantité ---- */
.item-quantity {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid var(--color-border-strong);
}

.qty-btn {
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: var(--color-text-lighter);
  font-size: 1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: color 0.2s ease, background 0.2s ease;
}

.qty-btn:hover {
  color: var(--color-cream);
  background: var(--color-surface);
}

.qty-value {
  width: 32px;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-cream);
  font-variant-numeric: tabular-nums;
}

/* ---- Prix ---- */
.item-price {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-cream);
  min-width: 70px;
  text-align: right;
}

/* ---- Supprimer ---- */
.item-remove {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-ghost);
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.item-remove:hover {
  color: #c96e6e;
  border-color: rgba(201, 110, 110, 0.4);
}

/* ---- Résumé ---- */
.cart-summary {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 1.5rem;
  position: sticky;
  top: 90px;
}

.summary-title {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--color-cream);
  margin: 0 0 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--color-text-lighter);
  font-weight: 500;
  margin-bottom: 0.65rem;
}

.free {
  color: #6ec96e;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--color-cream);
  padding-top: 1rem;
  margin-top: 0.75rem;
  margin-bottom: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.full {
  width: 100%;
  text-align: center;
}

.summary-note {
  text-align: center;
  font-size: 0.72rem;
  color: var(--color-text-ghost);
  margin: 0.75rem 0 0;
  font-weight: 500;
}

.clear-btn {
  display: block;
  width: 100%;
  margin-top: 1rem;
  padding: 0.6rem;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-ghost);
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.clear-btn:hover {
  color: #c96e6e;
  border-color: rgba(201, 110, 110, 0.3);
}

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .cart-layout {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }
}

@media (max-width: 640px) {
  .cart-item {
    grid-template-columns: 64px 1fr auto;
    gap: 0.75rem;
  }

  .item-image {
    width: 64px;
    height: 64px;
  }

  .item-price {
    display: none;
  }

  .item-price-mobile {
    display: block;
    color: var(--color-gold);
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 0.2rem;
  }

  .item-remove {
    grid-column: 3;
    grid-row: 1;
    justify-self: end;
  }

  .item-quantity {
    grid-column: 1 / -1;
    justify-self: start;
  }
}
</style>

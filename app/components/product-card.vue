<template>
  <article class="product-card">
    <NuxtLink :to="`/produit/${product.slug}`" class="media">
      <img :src="product.image" :alt="product.title" @error="(e) => e.target.src = '/img/placeholder.svg'">
    </NuxtLink>
    <div class="body">
      <div class="info">
        <p class="artist">{{ product.artist }}</p>
        <h3 class="title">{{ product.title }}</h3>
      </div>
      <div class="bottom">
        <span class="price">{{ product.price }}&euro;</span>
        <NuxtLink class="card-link" :to="`/produit/${product.slug}`">Voir plus →</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.product-card:hover {
  border-color: var(--color-border-strong);
}

.media {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--color-bg-alt);
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.product-card:hover .media img {
  transform: scale(1.03);
}

.body {
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1 1 auto;
}

.info {
  min-width: 0;
}

.artist {
  margin: 0 0 0.2rem;
  color: var(--color-text-lighter);
  font-weight: 500;
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-cream);
  line-height: 1.25;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
}

.price {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-cream);
}

.card-link {
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.card-link:hover {
  color: var(--color-gold);
}
</style>

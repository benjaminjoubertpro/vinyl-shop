<template>
  <article class="product-card">
    <div class="media">
      <img :src="product.image" :alt="product.title">
    </div>
    <div class="body">
      <div class="info">
        <p class="artist">{{ product.artist }}</p>
        <h3 class="title">{{ product.title }}</h3>
      </div>
      <div class="bottom">
        <span class="price">{{ product.price }}&euro;</span>
        <a class="card-link" href="#">Voir plus →</a>
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
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.product-card:hover {
  border-color: rgba(255, 255, 255, 0.12);
}

.media {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #0e0e0e;
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
  color: rgba(255, 255, 255, 0.35);
  font-weight: 500;
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.title {
  font-family: 'Playfair Display', serif;
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  color: #f5f0eb;
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
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.price {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #f5f0eb;
}

.card-link {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.card-link:hover {
  color: #c9a96e;
}
</style>

<template>
  <section id="produits" class="featured">
    <div class="container">
      <div class="header">
        <div class="heading">
          <span class="eyebrow">Collection</span>
          <h2>{{ title }}</h2>
          <p class="subtitle">
            Des pressages sélectionnés pour leur qualité sonore et leur histoire.
            Chaque vinyle est un choix éditorial.
          </p>
        </div>

        <a v-if="linkLabel" class="link" :href="linkHref">{{ linkLabel }} →</a>
      </div>

      <product-list :products="products" />

      <div class="bottom-cta">
        <a class="btn" href="/catalogue">Voir toute la collection</a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Produits en vedette'
  },
  products: {
    type: Array,
    required: true
  },
  linkLabel: {
    type: String,
    default: ''
  },
  linkHref: {
    type: String,
    default: '#'
  }
})
</script>

<style scoped>
.featured {
  width: 100%;
  padding: 6rem 0;
  background: #0a0a0a;
}

.container {
  width: min(1100px, calc(100% - 3rem));
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.heading {
  min-width: 0;
  max-width: 50ch;
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

h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 500;
  color: #f5f0eb;
  margin: 0;
  letter-spacing: -0.01em;
  line-height: 1.15;
}

.subtitle {
  margin: 0.75rem 0 0;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.65;
  font-size: 0.88rem;
}

.link {
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition: color 0.2s ease;
}

.link:hover {
  color: #c9a96e;
}

.bottom-cta {
  margin-top: 3rem;
  text-align: center;
}

@media (max-width: 640px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>

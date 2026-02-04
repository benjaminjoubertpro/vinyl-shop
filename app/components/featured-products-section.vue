<template>
  <section class="featured">
    <div class="container">
      <div class="header">
        <div class="heading">
          <p class="eyebrow">En ce moment</p>
          <h2>{{ title }}</h2>
          <p class="subtitle">Les pressages que la communauté écoute en boucle — sélection courte, impact maximal.</p>
        </div>

        <div class="cta">
          <a v-if="linkLabel" class="link" :href="linkHref">{{ linkLabel }}</a>
        </div>
      </div>

      <product-list :products="products" />
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
  padding: 5rem 0;
  background:
    radial-gradient(800px 260px at 10% 20%, rgba(124, 58, 237, 0.12), transparent 60%),
    radial-gradient(700px 240px at 85% 10%, rgba(6, 182, 212, 0.12), transparent 60%);
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.heading {
  min-width: 0;
  max-width: 72ch;
}

.eyebrow {
  margin: 0 0 0.6rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 900;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.72);
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.18);
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

h2 {
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  font-weight: 900;
  color: var(--color-black);
  margin: 0;
  letter-spacing: -0.02em;
}

.subtitle {
  margin: 0.6rem 0 0;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
}

.cta {
  flex: 0 0 auto;
}

.link {
  color: var(--color-black);
  text-decoration: none;
  font-weight: 900;
  border-radius: 999px;
  padding: 0.65rem 1rem;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.15s ease, background 0.15s ease;
}

.link:hover {
  background: rgba(0, 0, 0, 0.09);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta {
    width: 100%;
  }

  .link {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
}
</style>

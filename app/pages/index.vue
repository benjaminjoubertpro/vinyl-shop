<template>
  <appheader />
  <main>
    <herosection />
    <div class="section section--white">
      <featured-products-section
        title="Les meilleures ventes"
        :products="featuredProducts"
        link-label="Voir tout"
        link-href="#"
      />
    </div>
    <div class="section section--white">
      <about-section />
    </div>
    <div class="section section--white">
      <benefits-section />
    </div>
    <div class="section section--white">
      <call-to-action-section />
    </div>
  </main>
  <app-footer />
</template>


<script setup>
import { featuredProducts } from '~/logic/product'
</script>

<style scoped>
main {
  width: 100%;
}

.section {
  width: 100%;
}

.section--white {
  background: #ffffff;
}
</style>
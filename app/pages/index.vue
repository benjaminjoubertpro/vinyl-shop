<template>
  <appheader />
  <main>
    <herosection />

    <featured-products-section
      title="Notre sélection"
      :products="featuredProducts"
      link-label="Voir tout"
      link-href="/catalogue"
    />

    <about-section />

    <benefits-section />

    <testimonials-section />

    <call-to-action-section />
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
</style>
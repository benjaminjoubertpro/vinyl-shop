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
const featuredProducts = [
  {
    id: 1,
    title: 'Thriller',
    artist: 'Michael Jackson',
    price: 29.99,
    image: '/img/thriller.jpg'
  },
  {
    id: 2,
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    price: 24.99,
    image: '/img/thriller.jpg'
  },
  {
    id: 3,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 27.5,
    image: '/img/thriller.jpg'
  },
  {
    id: 4,
    title: 'Discovery',
    artist: 'Daft Punk',
    price: 26.0,
    image: '/img/thriller.jpg'
  },
  {
    id: 5,
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    price: 22.9,
    image: '/img/thriller.jpg'
  },
  {
    id: 6,
    title: 'Back to Black',
    artist: 'Amy Winehouse',
    price: 21.9,
    image: '/img/thriller.jpg'
  }
]
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
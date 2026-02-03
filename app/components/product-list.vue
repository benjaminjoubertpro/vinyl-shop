<template>
    <section>
        <div class="container">
            <h2>Our Products</h2>
            <div class="product-grid">
                <product-card v-for="product in products" :key="product.id" :product="product" />
                <product-card v-for="product in products" :key="product.id" :product="product" />

            </div>
        </div>
    </section>
</template>

<script setup>
const products = [
    {
        id: 1,
        title: "Album Title",
        artist: "Artist Name",
        price: 29.99,
        image: "img/thriller.jpg"
    },

    {
        id: 2,
        title: "Album Title",
        artist: "Artist Name",
        price: 19.99,
        image: "img/thriller.jpg"
    }

]
</script>

<style scoped>
section {
    width: 100%;
    margin: 2rem auto;
    max-width: 1920px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}
</style>

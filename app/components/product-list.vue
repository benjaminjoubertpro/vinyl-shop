<template>
    <section>
        <div class="container">
            <div v-if="title" class="head">
                <h2>{{ title }}</h2>
                <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
            </div>
            <div class="product-grid">
                <product-card v-for="product in products" :key="product.id" :product="product" />

            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    products: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        default: ''
    },
    subtitle: {
        type: String,
        default: ''
    }
})
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

.container {
    width: min(1100px, calc(100% - 2rem));
    margin: 0 auto;
}

.head {
    margin-bottom: 1.5rem;
}

h2 {
    text-align: left;
    margin: 0;
    font-size: clamp(1.35rem, 2.1vw, 1.85rem);
    font-weight: 900;
    color: var(--color-black);
}

.subtitle {
    margin: 0.65rem 0 0;
    color: rgba(0, 0, 0, 0.7);
    line-height: 1.6;
    max-width: 70ch;
}

.product-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    align-items: stretch;
}

@media (min-width: 640px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>

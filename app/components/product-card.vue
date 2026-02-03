<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.title">
        <h3>{{ product.title }}</h3>
        <p>{{ product.artist }}</p>
        <p>{{ product.price }}</p>
        <div class="btn-product">
            <a class="btn" href="#">Voir Plus</a>
            <a class="btn2" href="#">Ajouter au panier</a>
        </div>
    </div>
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
    align-items: center;
    gap: 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background: #fff;
    transition: transform 0.2s, box-shadow 0.2s;
}


.product-card img {
    width: auto;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
}

.product-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.product-card p {
    margin: 0.25rem 0;
    color: #666;
}

.btn-product {
    display: flex;
    padding-bottom: 1rem;
    gap: 0.5rem;
}
</style>

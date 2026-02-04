<template>
    <article class="product-card">
        <div class="media">
            <img :src="product.image" :alt="product.title">
        </div>

        <div class="body">
            <div class="top">
                <div class="text">
                    <h3 class="title">{{ product.title }}</h3>
                    <p class="artist">{{ product.artist }}</p>
                </div>

                <p class="price">{{ product.price }}€</p>
            </div>

            <div class="btn-product">
                <a class="btn" href="#">Voir Plus</a>
                <a class="btn2" href="#">Ajouter au panier</a>
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
    gap: 0;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.9);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;
    position: relative;
}

.product-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.5), rgba(6, 182, 212, 0.35), rgba(249, 115, 22, 0.35));
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.product-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
}

.product-card:hover::before {
    opacity: 1;
}

.media {
    position: relative;
    background: radial-gradient(500px 180px at 20% 20%, rgba(124, 58, 237, 0.14), transparent 65%),
        radial-gradient(420px 160px at 80% 20%, rgba(6, 182, 212, 0.12), transparent 60%);
}

.media img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
}

.body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    flex: 1 1 auto;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
}

.text {
    min-width: 0;
}

.title {
    font-size: 1.05rem;
    font-weight: 900;
    margin: 0;
    color: #0b0b0b;
    line-height: 1.2;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.artist {
    margin: 0.35rem 0 0;
    color: rgba(0, 0, 0, 0.65);
    font-weight: 600;
    font-size: 0.95rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.price {
    margin: 0;
    font-weight: 950;
    color: #0b0b0b;
    background: rgba(124, 58, 237, 0.12);
    border: 1px solid rgba(124, 58, 237, 0.18);
    padding: 0.35rem 0.6rem;
    border-radius: 999px;
    white-space: nowrap;
}

.btn-product {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: auto;
}

@media (max-width: 640px) {
    .btn-product {
        width: 100%;
    }

    .btn,
    .btn2 {
        flex: 1 1 100%;
        text-align: center;
    }
}
</style>

<template>
    <header class="header">
        <div class="bar">
            <div class="container">
                <div class="left">
                    <a class="brand" href="#">
                        <img class="logo" src="assets/img/logovinyl.png" alt="Logo">
                        <span class="name">Vinyl Shop</span>
                    </a>

                    <nav class="nav" aria-label="Navigation principale">
                        <ul class="nav-list">
                            <li><a class="nav-link" href="/">Accueil</a></li>
                            <li><a class="nav-link" href="/catalogue">Catalogue</a></li>
                            <li><a class="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="right">
                    <div class="actions">
                        <a class="btn" href="/connexion">Connexion</a>
                        <a class="btn2" href="/inscription">Inscription</a>
                    </div>

                    <button class="burger" type="button" :aria-expanded="isOpen" aria-controls="mobile-menu"
                        @click="isOpen = !isOpen">
                        <span class="sr">Menu</span>
                        <span class="burger-lines" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>

        <div v-show="isOpen" id="mobile-menu" class="mobile" @click="isOpen = false">
            <div class="mobile-panel" @click.stop>
                <nav aria-label="Navigation mobile">
                    <a class="mobile-link" href="/">Accueil</a>
                    <a class="mobile-link" href="/catalogue">Catalogue</a>
                    <a class="mobile-link" href="/contact">Contact</a>
                </nav>
                <div class="mobile-actions">
                    <a class="btn" href="/connexion">Connexion</a>
                    <a class="btn2" href="/inscription">Inscription</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 20;
}

.bar {
    background: rgba(0, 0, 0, 0.85);
    color: #fff;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.container {
    width: min(1100px, calc(100% - 2rem));
    margin: 0 auto;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.left {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    min-width: 0;
}

.brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: inherit;
}

.logo {
    width: 44px;
    height: auto;
}

.name {
    font-weight: 800;
    letter-spacing: 0.02em;
    font-size: 0.95rem;
    text-transform: uppercase;
    white-space: nowrap;
}

.nav-list {
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-link {
    color: #e8e8e8;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    padding: 0.4rem 0.5rem;
    border-radius: 10px;
    transition: background 0.15s ease, color 0.15s ease;
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
}

.right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.actions {
    display: flex;
    gap: 0.75rem;
}

.burger {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
}

.burger-lines {
    display: block;
    width: 18px;
    height: 2px;
    background: currentColor;
    margin: 0 auto;
    position: relative;
}

.burger-lines::before,
.burger-lines::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: currentColor;
}

.burger-lines::before {
    top: -6px;
}

.burger-lines::after {
    top: 6px;
}

.sr {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.mobile {
    display: none;
}

@media (max-width: 768px) {
    .nav {
        display: none;
    }

    .actions {
        display: none;
    }

    .burger {
        display: inline-grid;
        place-items: center;
    }

    .mobile {
        display: block;
        position: fixed;
        inset: 72px 0 0 0;
        background: rgba(0, 0, 0, 0.55);
        backdrop-filter: blur(4px);
        padding: 1rem;
    }

    .mobile-panel {
        width: min(520px, 100%);
        margin-left: auto;
        background: #0b0b0b;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 16px;
        padding: 1rem;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
    }

    .mobile-link {
        display: block;
        color: #fff;
        text-decoration: none;
        font-weight: 700;
        padding: 0.85rem 0.75rem;
        border-radius: 12px;
    }

    .mobile-link:hover {
        background: rgba(255, 255, 255, 0.08);
    }

    .mobile-actions {
        display: grid;
        gap: 0.75rem;
        padding-top: 0.75rem;
        border-top: 1px solid rgba(255, 255, 255, 0.12);
        margin-top: 0.5rem;
    }

    .mobile-actions .btn,
    .mobile-actions .btn2 {
        width: 100%;
        text-align: center;
    }
}
</style>
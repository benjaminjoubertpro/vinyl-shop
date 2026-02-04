<template>
    <section class="hero">
        <div class="container">
            <div class="hero-inner">
                <div class="texthero">
                    <p class="badge">Sélection premium • Pressages & éditions cultes</p>
                    <h1>Le meilleur du vinyle, pour les oreilles exigeantes.</h1>
                    <p class="subtitle">Classiques incontournables, raretés et nouveautés — choisis avec passion, expédiés avec soin.</p>

                    <div class="herobtn">
                        <a class="btn2" href="#">Découvrir le catalogue</a>
                        <a class="btn" href="#">Nos meilleures ventes</a>
                    </div>

                    <div class="proof">
                        <div class="stat">
                            <span class="value">24h</span>
                            <span class="label">Préparation</span>
                        </div>
                        <div class="stat">
                            <span class="value">4.8/5</span>
                            <span class="label">Avis clients</span>
                        </div>
                        <div class="stat">
                            <span class="value">100%</span>
                            <span class="label">Emballage protégé</span>
                        </div>
                    </div>
                </div>

                <div class="visual" aria-hidden="true">
                    <div class="vinyl">
                        <div class="vinyl-inner"></div>
                    </div>
                    <div class="sleeve"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    width: 100%;
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: stretch;
    background-image: url('assets/img/fondhero.png');
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 5.5rem 0 3.5rem;
}

.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.65) 45%, rgba(0, 0, 0, 0.35) 100%);
}

.container {
    width: min(1100px, calc(100% - 2rem));
    margin: 0 auto;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
}

.hero-inner {
    width: 100%;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3rem;
    align-items: center;
}

.texthero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 62ch;
}

.badge {
    margin: 0 0 1rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.92);
    font-size: 0.9rem;
    letter-spacing: 0.02em;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    padding: 0.4rem 0.75rem;
    border-radius: 999px;
}

h1 {
    margin: 0 0 1rem;
    font-size: clamp(2rem, 4.2vw, 3.3rem);
    line-height: 1.05;
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.02em;
}

.subtitle {
    margin: 0 0 1.5rem;
    font-size: clamp(1rem, 1.4vw, 1.25rem);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.82);
}

.herobtn {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
    margin-bottom: 1.75rem;
}

.proof {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    width: 100%;
}

.stat {
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(0, 0, 0, 0.35);
    border-radius: 14px;
    padding: 0.85rem 0.9rem;
    min-width: 0;
}

.value {
    display: block;
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.01em;
}

.label {
    display: block;
    margin-top: 0.15rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.72);
}

.visual {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 380px;
}

.sleeve {
    width: min(360px, 100%);
    aspect-ratio: 1 / 1;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.55);
    transform: rotate(-6deg);
}

.vinyl {
    position: absolute;
    right: -10px;
    width: min(320px, 85%);
    aspect-ratio: 1 / 1;
    border-radius: 999px;
    background:
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0 8%, rgba(0, 0, 0, 0.95) 9% 32%, rgba(255, 255, 255, 0.08) 33% 34%, rgba(0, 0, 0, 0.92) 35% 58%, rgba(255, 255, 255, 0.06) 59% 60%, rgba(0, 0, 0, 0.9) 61% 100%);
    box-shadow: 0 18px 60px rgba(0, 0, 0, 0.6);
    transform: rotate(10deg);
}

.vinyl-inner {
    position: absolute;
    inset: 18%;
    border-radius: 999px;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9) 0 10%, rgba(180, 60, 60, 0.9) 11% 25%, rgba(0, 0, 0, 0.9) 26% 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
    .hero-inner {
        grid-template-columns: 1fr;
        gap: 2.25rem;
    }

    .visual {
        min-height: 320px;
        justify-items: end;
    }

    .vinyl {
        right: 10px;
    }
}

@media (max-width: 640px) {
    .hero {
        padding: 4.75rem 0 3rem;
    }

    .proof {
        grid-template-columns: 1fr;
    }

    .herobtn .btn,
    .herobtn .btn2 {
        width: 100%;
        text-align: center;
    }

    .visual {
        min-height: 260px;
    }

    .sleeve {
        width: min(320px, 100%);
    }
}
</style>
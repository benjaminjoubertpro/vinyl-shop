<template>
    <section>
        <div class="texthero">
            <h1>Discover Rare Vinyl Records</h1>
            <p>Curated selection of premium vinyl releases</p>
            <div class="herobtn">
                <a class="btn" href="#">Shop Now</a>
                <a class="btn2" href="#">Learn More</a>
            </div>
        </div>
    </section>
</template>

<style scoped>


section {
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    height: 100vh;
    background-image: url('assets/img/fondhero.png');
    background-size: cover;
    background-position: center;
    object-fit: cover;
    
    .texthero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        text-align: center;
        max-width: 80%;
        margin: 0 auto;
        
        h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        
        p {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .herobtn {
            display: flex;
            gap: 1rem;
        }
    }
}
</style>
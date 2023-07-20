<template>
    <div>
        <h2 id="title-design-models">Modelos para elegir</h2>
    </div>
    <section class="hero-section">
        <div class="card">
            <div class="phone">
                <div class="screen">
                    <img src="../../assets/Product/imagen1.png" alt="Imagen 1">
                    <img src="../../assets/Product/imagen2.jpg" alt="Imagen 2">
                    <img src="../../assets/Product/imagen3.jpg" alt="Imagen 3">
                </div>
            </div>
            <div class="hero-section-card">
                <div class="card-description">
                    <h6>Clásica</h6>
                    <p> Invitaciones digitales con un toque clásico para celebrar vuestro gran día! Estamos encantados de presentaros una opción elegante y sofisticada para anunciar vuestro enlace matrimonial a familiares y amigos de una manera moderna y única.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="phone">
                <div class="screen">
                    <img src="../../assets/Product/imagen1.png" alt="Imagen 1">
                    <img src="../../assets/Product/imagen2.jpg" alt="Imagen 2">
                    <img src="../../assets/Product/imagen3.jpg" alt="Imagen 3">
                </div>
            </div>
            <div class="hero-section-card">
                <div class="card-description" >
                    <h6>Clásica</h6>
                    <p> Invitaciones digitales con un toque clásico para celebrar vuestro gran día! Estamos encantados de presentaros una opción elegante y sofisticada para anunciar vuestro enlace matrimonial a familiares y amigos de una manera moderna y única.</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="phone">
                <div class="screen">
                    <img src="../../assets/Product/imagen1.png" alt="Imagen 1">
                    <img src="../../assets/Product/imagen2.jpg" alt="Imagen 2">
                    <img src="../../assets/Product/imagen3.jpg" alt="Imagen 3">
                </div>
            </div>
            <div class="hero-section-card">
                <div class="card-description"  >
                    <h6>Clásica</h6>
                    <p> Invitaciones digitales con un toque clásico para celebrar vuestro gran día! Estamos encantados de presentaros una opción elegante y sofisticada para anunciar vuestro enlace matrimonial a familiares y amigos de una manera moderna y única.</p>
                </div>
            </div>
        </div>
    </section>
    
    
  </template>
  
  <script setup>
 
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";


#title-design-models{
  text-align: center;
  margin-bottom: 1.2rem;
}
h2{
    font-size: 50px;
    font-weight: bold;
    color: $colour_one;
}

.hero-section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-content: space-between;
   
}

.hero-section-card{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    width: 175%;
}

.card {
    width: 50%;
    padding: 2%;
    align-items: center;
    margin:2%;
}
.card-description{
    width: 50%;
    padding: 2%;
    align-items: center;
    margin:2%;
    text-align: center;
    border: none;
}

.phone {
    width: 300px;
    height: 600px;
    background-color: black;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.screen {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 10px;
    box-sizing: border-box;
}
.screen::-webkit-scrollbar {
    width: 8px;
}

.screen::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
}

.screen::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.description {
    margin-top: 20px;
    text-align: center;
}

.description h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.description p {
    font-size: 16px;
}
  </style>
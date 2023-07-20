<template>
  <div>
        <h2 id="title-how-to-get-it">Como comprar</h2>
    </div>
    <section class="hero-section">
        <div class="card-grid">
            <div class="card">
                <div class="card__background">
                  <img src="../../assets/HowGetIt/svg/fase1.svg" alt="how-to-get-it">
                </div>
                <div class="card__content">
                    <p class="card__category">Elige tu modelo y clica en el carrito</p>
                </div>
            </div>
            <div class="card">
                <div class="card__background">
                  <img src="../../assets/HowGetIt/svg/fase2.svg" alt="how-to-get-it">
                </div>
                <div class="card__content">
                    <p class="card__category">Rellena los datos</p>
                </div>
              </div>
              <div class="card">
                <div class="card__background">
                  <img src="../../assets/HowGetIt/svg/fase3.svg" alt="how-to-get-it">
                </div>
                <div class="card__content">
                    <p class="card__category">Recibirás un email con un usuario y contraseña</p>
                </div>
              </div>
              <div class="card">
                <div class="card__background">
                  <img src="../../assets/HowGetIt/svg/fase4.svg" alt="how-to-get-it">
                </div>
                <div class="card__content">
                    <p class="card__category">Loguearte para poder rellenar todos los datos</p>
                </div>
              </div>
              <div class="card">
                <div class="card__background">
                  <img src="../../assets/HowGetIt/svg/fase6.svg" alt="how-to-get-it">
                </div>
                <div class="card__content">
                    <p class="card__category">Abonar el importe</p>
                </div>
              </div>
              <div class="card">
                <div class="card__background">
                  <img src="../../assets/HowGetIt/svg/fase7.svg" alt="how-to-get-it">
                </div>
                <div class="card__content">
                    <p class="card__category">Recibe la invitación</p>
                </div>
              </div>   
        </div>
    </section>
</template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";
  // $lato: 'Lato', sans-serif
// $opensans: 'Open Sans', serif
// $inter: 'Inter', serif

// //VARIABLES
// $colour_one: #921734
// $colour_two: #ae5871
// $colour_three: #e5827d
// $colour_four: #ffde9e
// $colour_five: #ffe56c

// $colour_six: #fffcee
:root{
  --background-dark: #2d3548;
  --text-light: rgba(255,255,255,0.6);
  --text-lighter: rgba(255,255,255,0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 1200px;
}

#title-how-to-get-it{
  margin: rem 0;
  text-align: center;
}
h2{
    font-size: 57px;
    font-weight: bold;
    color: $colour_one;
    padding-top: 2rem;
}
.hero-section{
  align-items: flex-start;
  display: flex;
  min-height: 100%;
  justify-content: center;
  padding: 24px 20px;
}

.card-grid{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  justify-content: space-around;
  margin: 0;
  max-width: 100%;
  width: 100%;
}

@media(min-width: 600px){
  .card-grid{
    grid-template-columns: repeat(2, 1fr); 
  }
}

@media(min-width: 990px){
  .card-grid{
    grid-template-columns: repeat(6, 1fr); 
  }
}

.card{
  list-style: none;
  position: relative;
  height: 87%;
}

.card:before{
  content: '';
  display: block;
  padding-bottom: 150%;
  width: 100%;
}

.card__background{
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  bottom: 0;
  filter: brightness(1) saturate(1) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transition: 
  transform 200ms linear;
  margin-top: 5rem;
}

.card:hover .card__background{
  transform: scale(1.05) translateZ(0);
}

.card__content{
  left: 0;
  padding: 24px;
  position: absolute;
  top: 0;
  text-align: center;
}

.card__category{
  color: $colour_one;
  font-size: 1.3rem;
  font-family: $lato;
  font-weight: 700;
  text-align: center;
}

@media(max-width: 1650px){
.card__category{
  font-size: 1rem;
  font-weight: 900;
}
}
</style>
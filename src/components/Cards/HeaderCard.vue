<template>
  <div class="section">
      <div class="left-div">
            <h1>La magia de tu boda en un clic  <br> <span>Invitaciones digitales que celebran tu amor</span></h1>
      </div>
      <div class="right-div">
         <li type="button" class="button">Diseños
            <span></span><span></span><span></span><span></span>
         </li>
      </div>
  </div>
</template>
  
<script setup>
  
</script>
  
<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";
// @import "@/assets/Sass/--parcial.scss"
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

h1 span{
   font-size: 1.1rem;
}
.section {
    background-image: url('../../assets/Header/imagen.png');
    background-size:contain;
    background-position: center;
    width: 100%;
    height: 20rem; 
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

  }
  .left-div {
    width: 50%;
    h1 {
    font-family: $inter;
    color: $colour_six; 
    font-size: 2rem; 
  }
  }
  
  .right-div {
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;

   li {
      --c:  white;
      color: var(--c);
      font-size: 24px;
      border: 0.1em solid var(--c);
      border-radius: 0.5em;
      width: 9em;
      font-weight: bold;
      font-family: $lato;
      text-align: center;
      line-height: 2.1em;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: 0.5s;
      margin: 1em;
      text-transform: uppercase;
   }
   li span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: $colour_one;
      transform: translateY(150%);
      border-radius: 50%;
      left: calc((var(--n) - 1) * 25%);
      transition: 0.5s;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      z-index: -1;
   }

   li:hover {
      color: $colour_six;
      border: none;
   }
   li:hover span {
      transform: translateY(0) scale(2);
   }
   li span:nth-child(1) {
      --n: 1;
   }
   span:nth-child(2) {
      --n: 2;
   }
   li span:nth-child(3) {
      --n: 3;
   }
   li span:nth-child(4) {
      --n: 4;
   }


}


</style>
<template>
    <div class="page">
      <div class="container">
        <div class="left">
          <div class="login">Contáctanos</div>
          <div class="eula">Estamos encantados de ayudarte con cualquier duda o consulta que puedas tener. Si tienes alguna pregunta sobre nuestros productos o servicios, no dudes en ponerte en contacto con nosotros.</div>
          <div class="eula">Para comunicarte con nosotros, rellena el formulario. Nos pondremos en contacto contigo tan pronto como recibamos tu solicitud.</div>
          <div class="eula">Si tienes alguna idea para mejorar nuestro sitio web o nuestros servicios, no dudes en compartirla con nosotros. Estamos constantemente buscando formas de crecer y brindar una mejor experiencia a nuestros usuarios.</div>
        </div>
        <div class="right">
          <div class="form">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" /> 
            <!-- v-model="" -->
            <label for="telefono">Teléfono</label>
            <input type="tel" id="telefono" />
            <!-- v-model="" -->
            <label for="email">Email</label>
            <input type="email" id="email" />
            <!-- v-model="" -->
            <label for="comentario">Texto para comentar</label>
            <input type="texterea" id="comentario" cols="20" rows="5" />
            <!-- v-model="" -->
            <input type="submit" id="submit" value="Submit" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>

//   import { onMounted } from 'vue';

//   onMounted(() => {
//    ;
//   });
  
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

 
.page {
  display: flex;
  flex-direction: column;
}
@media (max-width: 767px) {
.page {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
.container {
  display: flex;
  margin: 2rem auto;
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 1030px;
    width: 350px;
    margin: 2rem 3.5rem;
  }
}
.left {
  background: white;
  top: 20px;
  position: relative;
  width: 100%;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 8px rgba(0,0,0,0.1);
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 1px;
    width: 150%;
    max-height: 540px;
  }
}
.login {
  font-size: 50px;
  font-weight: 900;
  font-family: $inter;
  margin: 50px 40px 40px;
}
.eula {
  color: #999;
  font-size: 15px;
  line-height: 1.5;
  margin: 40px;
}
.right {
  background: $colour_four;
  color: #F1F1F2;
  position: relative;
  top: 50px;
  height: 470px;
  width: 100%;
  border-radius: 10px;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    top: 10px;
    width: 151%;
  }
}
.form {
  margin: 40px;
  position: absolute;
}
label {
color: #999;
  display: block;
  font-size: 20px;
  height: 16px;
  margin-top: 20px;
  margin-bottom: 15px;
}
input {
  background: transparent;
  border: 0;
  color: $colour_six;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
input::-moz-focus-inner { 
  border: 0; 
}
#submit {
  color: $colour_one;
  margin-top: 40px;
  transition: color 300ms;
}
#submit:focus {
  color: $colour_three;
}
#submit:active {
  color: $colour_one;
}

  </style>
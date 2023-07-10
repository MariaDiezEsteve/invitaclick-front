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
            <label for="comentario">Pregúntanos</label>
            <textarea rows="4" cols="70" name="textarea" placeholder="Escribe aquí..." maxlength="1000"></textarea>

            <!-- v-model="" -->
            <input type="submit" id="submit" value="Enviar" />
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
  color: $colour_one;
}
.eula {
  color: #999;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 40px;
}

@media (max-width: 767px) {
  .eula {
    font-size: 0.9rem;
  }
}
.right {
  background: $colour_four;
  color: #F1F1F2;
  position: relative;
  top: 50px;
  height: 550px;
  width: 100%;
  border-radius: 10px;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    top: 10px;
    width: 150%;
  }
}
.form {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
label {
    color: $colour_one;
    display: block;
    font-size: 20px;
    height: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 15px;
    font-family: $inter;
}
input{
  background: white;
  border: 0;
  color: #999;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
  font-family: $inter;
  border-radius: 0.5rem;
}
input::-moz-focus-inner { 
  border: 0; 
  color: #999;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
}

textarea{
    border-radius: 0.5rem;
    width: 300px;
    height: 150px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid transparent;
    border-radius: 5px;
    resize: vertical;
    font-family: $inter;
    color: #999;
}

textarea:focu{
    border: none; 
}

#submit{
    margin-top: 2rem;
    border-radius: 8px;
    color: #ffffff;
    background: $colour_one;
    border: 1px solid transparent;
    text-align: center;
    font-family: $inter;
    width: 50%;
    height: 100%;
}

#submit:hover {
    background: $colour_two;
}

  </style>
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
                    <li type="button" class="button" @click="showForm">Lo quiero
                        <span></span><span></span><span></span><span></span>
                    </li>
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
                    <li type="button" class="button" @click="showForm">Lo quiero
                        <span></span><span></span><span></span><span></span>
                    </li>
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
                    <li type="button" class="button" @click="showForm">Lo quiero
                        <span></span><span></span><span></span><span></span>
                    </li>
                </div>
            </div>
        </div>
    </section>

<div v-show="hiddenForm" class="wrapper">
    <div class="form-wrapper sign-in">
        <form @submit.prevent id="myform">
            <h3>Completa tus datos</h3>
            <div class="input-group">
                <input type="text" required name="name" v-model="name">
                <label >Nombre</label>
            </div>
            <div class="input-group">
                <input type="email" required name="email" v-model="email">
                <label>Email</label>
            </div>
            <div class="input-group">
                <input type="password" required name="password" v-model="password">
                <label>Password</label>
            </div>
            <button type="submit" @click="sendForm" class="btn">Login</button>
        </form>
    </div>
</div>

    
</template>
  
<script setup>
  import { ref } from "vue";
  import axios from "axios";

  const hiddenForm = ref(false);
  
  const name = ref('');
  const email = ref('');
  const password = ref('');

  const showForm = () => {
      hiddenForm.value = true;
    };
  const sendForm = async () => {
    try {
 await axios.post("http://127.0.0.1:5000/users/create", {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  hiddenForm.value = true;
} catch (error) {
  console.log(error);
}
}



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


#title-design-models{
  text-align: center;
  margin-bottom: 1.2rem;
}
h2{
    font-size: 50px;
    font-weight: bold;
    color: $colour_one;
}
h3{
    font-size: 30px;
    font-weight: bold;
    color: $colour_one;
    margin-top: 2rem;
    text-align: center;
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

// Button Style
li {
      color: $colour_one;
      font-size: 24px;
      border: 0.2em solid $colour_one;
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
      background-color: $colour_five;
      transform: translateY(150%);
      border-radius: 50%;
      left: calc((var(--n) - 1) * 25%);
      transition: 0.5s;
      transition-delay: calc((var(--n) - 1) * 0.1s);
      z-index: -1;
   }

   li:hover {
      color: $colour_two;
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

//    Form Style
 .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;  
    font-family: $lato;
}

.form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
}

form{
    height: 100%;
}
   
.input-group {
    width: 250px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.input-group label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 0.9rem;
    color: #333;
    padding: 0 3px;
    pointer-events: none;
    transition: .5s;
}

.input-group input {
    width: 100%;
    height: 30px;
    font-size: 1.5rem;
    color: #333;
    padding: 0 10px;
    background: transparent;
    border: 1px solid #333;
    outline: none;
    border-radius: 0.5rem;
}

.input-group input:focus~label,
.input-group input:valid~label {
    top: 0;
    font-size: 12px;
    background: #fff;
}

.btn {
    position: relative;
    width: 35%;
    height: 40px;
    background: linear-gradient(to right, $colour_five, $colour_one);
    box-shadow: 0 2px 10px rgba(0, 0, 0, .4);
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-left: 100px;
    margin-bottom: 2rem;
}

  </style>
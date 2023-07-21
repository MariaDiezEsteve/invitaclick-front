<template>
     <div class="wrapper">
        <div class="form-wrapper sign-in">
            <form @submit.prevent>
                <h2>Accede a tu perfil</h2>
                <div class="input-group">
                    <input type="email" required name="email" v-model="email">
                    <label for="">Correo</label>
                </div>
                <div class="input-group">
                    <input type="password" required name="password" v-model="password">
                    <label for="">Contraseña</label>
                </div>
                <button type="submit" class="btn" @click="sessionStart">Login</button>
                <div class="sign-link">
                    <a>Todavía no tienes cuenta, selecciona un diseño y dejanos tus datos. </a>
                </div>
            </form>
        </div>
    </div>

  </template>
  
<script setup>
import { ref } from 'vue';
import axios from 'axios';  
import { useRouter } from 'vue-router';

const $router = useRouter();



// Log In
const user_email = ref('');
const user_password =ref('');


const sessionStart= async () => { 
      
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email: user_email.value,
        password: user_password.value,
      });
  
      const data = response.data;
      console.log("esto es data de loguin", data)
  
      if (data === data) {
        // Inicio de sesión exitoso
        const id_user = data; 
        console.log('ID del usuario:', id_user);
        const id = id_user['Login successful'] 
        console.log('Inicio de sesión exitoso');
        $router.push({ path:`/user/${id}`, params: { id } })

      } else if (data === 'Login failed') {
        // Credenciales inválidas
        console.log('Credenciales inválidas. Inténtalo de nuevo.');
      } else if (data === 'User not found') {
        // Usuario no encontrado
        alert("Usuario no encontrado o contraseña no correcta")
        console.log('Usuario no encontrado.');
      }
    } catch (error) {
      console.error(error);
    }
};
   
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
   
h2 {
    font-size: 20px;
    color: $colour_one;
    text-align: center;
    margin-top: 25px;
    margin-right:px;
    
}

.input-group {
    width: 250px;
    margin: 30px 0 30px 150px;
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
    font-size: 10px;
    color: #333;
    padding: 0 3px;
    pointer-events: none;
    transition: .5s;
}

.input-group input {
    width: 100%;
    height: 30px;
    font-size: 16px;
    color: #333;
    padding: 0 10px;
    background: transparent;
    border: 1px solid #333;
    outline: none;
    border-radius: 3px;
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
    margin-left: 185px;
}

.sign-link{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    margin: 40px;
    text-align: center;
}
a{
    padding-left: 20px;
}




</style>
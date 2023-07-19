<template>
  <div class="page">
    <div class="container">
      <div class="left">
            <div class="login">Cuéntanos sobre la boda</div>
            <div class="eula">Estamos encantados de ayudarte con cualquier duda o consulta que puedas tener. Si tienes alguna pregunta sobre nuestros productos o servicios, no dudes en ponerte en contacto con nosotros.</div>
            <div class="eula">Para comunicarte con nosotros, rellena el formulario. Nos pondremos en contacto contigo tan pronto como recibamos tu solicitud.</div>
            <div class="eula">Si tienes alguna idea para mejorar nuestro sitio web o nuestros servicios, no dudes en compartirla con nosotros. Estamos constantemente buscando formas de crecer y brindar una mejor experiencia a nuestros usuarios.</div>
      </div>
      <div class="right">
        <form @submit.prevent>
            <input type="text" v-model="formData.name_one" placeholder="Nombre Pareja 1">
            <input type="text" v-model="formData.lastname_one" placeholder="Apellido Pareja 1">
            <input type="text" v-model="formData.name_two" placeholder="Nombre Pareja 2">
            <input type="text" v-model="formData.lastname_two" placeholder="Apellido Pareja 1">
            <div class="upload-container">
                <input type="file" class="file" ref="fileInput" multiple @change="handleFiles($event)">
            </div>
            <input type="text" v-model="formData.event_location" placeholder="Localización evento">
            <input type="date" v-model="formData.event_date" placeholder="Día del evento">
            <textarea rows="4" cols="70" name="textarea" placeholder="Escribe aquí tu historia ..." maxlength="1000"  v-model="formData.comment"></textarea>
            <input type="submit" id="submit" @click="submitDataFrom" value="Enviar" />
          </form>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

const formData = reactive({
  "name_one": "",
  "lastname_one": "",
  "name_two": "",
  "lastname_two": "",
  "event_location": "",
  "event_date": "",
  "comment": "",
});

const  imageFiles = ref([]);

const handleFiles = (event) => {
const files = event.target.files;
imageFiles.value = Array.from(files);
console.log('description', imageFiles.value);
};




const submitDataFrom = async () => {
  let isError = false;
  const filePromises = imageFiles.value.map(file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // Obtener los datos del archivo leído
      const fileData = event.target.result;
      resolve(fileData);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file); // Leer el archivo como una URL de datos
  });
});

  try {
    const filesData = await Promise.all(filePromises);
   await axios.post("http://127.0.0.1:5000/sheets/create", {
      name_one: formData.name_one,
      lastname_one: formData.lastname_one,
      name_two: formData.name_two,
      lastname_two: formData.lastname_two,
      event_location: formData.event_location,
      event_date: formData.event_date,
      comment: formData.comment,
      files: filesData, 
      id_guest: null, 
      id_product: null,
      id_user: null
    });
    
    location.reload();
  } catch (error) {
    isError = true;
    console.error(error);
  }

  return isError;
};



  </script>
  
  <style lang="scss" scoped>
 @import "@/assets/Sass/--parcial.scss";
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
  margin: 2rem 15rem;
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
  width: 122%;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 8px rgba(0,0,0,0.1);
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 1px;
    width: 150%;
    max-height: 60%;
  }
}
.login {
  font-size: 50px;
  font-weight: 900;
  font-family: $inter;
  margin: 50px 40px 40px;
  color: $colour_one;
}

@media (max-width: 767px) {
  .login{
    font-size: 2rem;
  }
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
  height: 614px;
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
form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

input {
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
  margin-bottom: 10px; 
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
.upload-container > input {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    color: #ffffff;
    background: $colour_one;
    border: 1px solid transparent;
    font-family: $inter;
    width: 100%;
    height: 150%;
    margin-bottom: 1rem;
}

</style>
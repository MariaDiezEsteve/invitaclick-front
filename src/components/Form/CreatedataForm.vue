<template>
    <div>
    <h2>Cuéntanos sobre la boda</h2>
    <form @submit.prevent="submitData">
      <input type="text" v-model="formData.name_one" placeholder="Nombre Pareja 1">
      <input type="text" v-model="formData.lastname_one" placeholder="Apellido Pareja 1">
      <input type="text" v-model="formData.name_two" placeholder="Nombre Pareja 2">
      <input type="text" v-model="formData.lastname_two" placeholder="Apellido Pareja 1">
      <input type="file" ref="fileInput" multiple @change="handleFiles($event)">
      <input type="text" v-model="formData.event_location" placeholder="Localización evento">
      <input type="date" v-model="formData.event_date" placeholder="Día del evento">
      <input type="text" v-model="formData.comment" placeholder="Comentario">
      <button>Guardar</button>
    </form>
  </div>
  </template>
  
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';

const fileInput = ref(null);

const formData = reactive({
  "name_one": "",
  "lastname_one": "",
  "name_two": "",
  "lastname_two": "",
  "event_location": "",
  "event_date": "",
  "comment": "",
});

let jsonData = ref(null); 

const handleFiles = (event) => {
  const files = event.target.files;
  if (files.length === 0) {
    console.log('No se seleccionaron archivos.');
    return;
  }

  const photosData = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function (event) {
      const photoData = {
        name: file.name,
        type: file.type,
        size: file.size,
        dataURL: event.target.result
      };

      photosData.push(photoData);

      if (photosData.length === files.length) {
        const dataToSave = {
          photos: photosData
        };

        jsonData.value = JSON.stringify(dataToSave); 
        console.log("imagenes guardadas", jsonData);
      }
    };
    reader.readAsDataURL(file);
  }
};

const submitData = async () => {
  let isError = false;
  const files = fileInput.value.files;

  try {
   await axios.post("http://127.0.0.1:5000/sheets/create", {
      name_one: formData.name_one,
      lastname_one: formData.lastname_one,
      name_two: formData.name_two,
      lastname_two: formData.lastname_two,
      event_location: formData.event_location,
      event_date: formData.event_date,
      comment: formData.comment,
      files: jsonData.value,
      id_guest: null, 
      id_product: null,
      id_user: null
    });
  } catch (error) {
    isError = true;
    console.error(error);
  }

  return isError;
};



  </script>
  
  <style lang="scss" scoped>
  
  </style>
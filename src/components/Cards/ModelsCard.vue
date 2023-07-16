<template>
    <div>
        <h1>Modelos para elegir</h1>
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
        </div>
        <div class="card">
            <div class="phone">
                <div class="screen">
                    <img src="../../assets/Product/imagen1.png" alt="Imagen 1">
                    <img src="../../assets/Product/imagen2.jpg" alt="Imagen 2">
                    <img src="../../assets/Product/imagen3.jpg" alt="Imagen 3">
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
        </div>
    </section>
    <section class="hero-section">
        <div class="card" v-for="dat in data.data" :key="dat.id" >
            <h2>{{ dat.name }}</h2>
            <p>{{ dat.description }} </p>
        </div>
    </section>
    
    
  </template>
  
  <script setup>
   import {defineProps} from 'vue';

 defineProps({
        data: Object,
    })
  
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";

.hero-section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    align-content: space-between;
   
}

.card {
    width: 50%;
    background-color: #f0f0f0;
    padding: 2%;
    height: 50%;
    align-items: center;
    margin:2%;
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
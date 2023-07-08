<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand branding" href="/"><img src="@/assets/Logo/logo.png" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Diseños</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Como comprar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.branding{
        display: flex;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        height: fit-content;
        img {
          width: 90px; 
          height: 40px;
          object-fit: fill;        }
    }
</style>
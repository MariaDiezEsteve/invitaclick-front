<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <a class="navbar-brand branding" href="/"><img src="@/assets/Logo/logo.png" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/#title-design-models">Diseños</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#title-how-to-get-it">Como comprar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contacto</a>
        </li>
      </ul>
    </div>
  <!-- Avatar -->
  <div class="dropdown">
        <a
        class="dropdown-toggle photo"
          href="/login"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
      </div>
   <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
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

.branding{
        display: flex;
        align-items: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        height: fit-content;
        img {
          width: 90px; 
          height: 40px;
          object-fit: fill;
        }
        svg{fill:$colour_one}
    }
    .photo{
        margin-right: 130px;
    }
    .dropdown-toggle::after {
    content: none;
  }
 
  .nav-link{
    margin-right: 2rem;
    // border: 2px solid $colour_one;
    font-family: $lato;
    font-weight: 600;
    border-radius: 5px;
    color: $colour_one;
    -webkit-transition-duration: 0.3s; 
    transition-duration: 0.3s;  
    font-size: 1.3rem;  
  }

  .nav-link:hover{
    color: $colour_six;
    background-color: $colour_one;
  }
  .navbar-collapse {
    flex-grow: 0;
    align-items: center;
  }

  @media (max-width: 767px) {
    .nav-link{
      width: 20%;
    }
    
    .nav-link:hover{
    color: $colour_six;
    background-color: $colour_one;
    width: 20%;
  }
}

.custom-toggler.navbar-toggler {
    border-color: lightgreen;
}

</style>
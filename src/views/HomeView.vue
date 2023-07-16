<template>
  <div>
    <Navbar />
  </div>
  <div>
    <Header />
  </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffe56c" fill-opacity="1" d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
  <div>
      <Including />
  </div>
  <div>
    <HowToGetIt />
  </div>
  <div>
    <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
        <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!data.isError && !isLoading" >
          <ModelsCard :data="data"/>
        </div>
  </div>
  <div>
    <img v-if="dataReviews.isError" src="@/assets/images/error.jpeg" alt="error">
        <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!dataReviews.isError && !isLoading" >
          <ReviewCard :dataReviews="dataReviews"/>
        </div>
  </div>
  <div>
    <FooterNav />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/NavbarNav.vue'
import Header from '@/components/Cards/HeaderCard.vue'
import HowToGetIt from '@/components/Cards/HowtogetitCard.vue'
import Including from '@/components/Cards/IncludingCard.vue'
import ModelsCard from '@/components/Cards/ModelsCard.vue'
import ReviewCard from '@/components/Cards/ReviewCard.vue'
import FooterNav from '@/components/Navbar/FooterNav.vue'

import info from '@/dataInfo/productsGetData'
import reviews from '@/dataInfo/reviewsGetData'
import {ref, onMounted} from "vue";

let isLoading = ref(true) 


let data = ref(onMounted(async () => {
  data.value = await info.getData()
  
  if( !data.value.isLoading){
    isLoading.value = false
  }
})) 

let dataReviews = ref(onMounted(async () => {
  dataReviews.value = await reviews.getDataReviews()
  
  if( !dataReviews.value.isLoading){
    isLoading.value = false
  }
})) 
console.log(dataReviews.value);

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

svg{
  width:100%;
  height: 100%;
}

</style>


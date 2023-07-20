<template>
  <div>
    <Navbar />
  </div>
  <div>
    <Header />
  </div>
  <div>
    <Including />
  </div>
  <div>
    <HowToGetIt />
  </div>
  <div>
    <ModelsCard />
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

import reviews from '@/dataInfo/reviewsGetData'
import {ref, onMounted} from "vue";

let isLoading = ref(true) 

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

</style>


<template>
     <div>
        <NavLogin  />
    </div>
    <div class="profile-view">
        <ProfileView />
    </div>
    <div>
        <CreateForm />
    </div>
    <div>
        <FooterNav />
    </div>
</template>

<script setup>
import ProfileView from '../components/Profile/ProfileUser.vue'
import NavLogin from '../components/Navbar/NavbarLogin.vue'
import CreateForm from '@/components/Form/CreatedataForm.vue'
import FooterNav from '@/components/Navbar/FooterNav.vue'

import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router"; // Importa useRoute desde vue-router
import axios from "axios";

const isLoading = ref(true);
const userId = ref(null);
const id = ref(null);
const dataInfo = ref({ isError: false, isLoading: true, data: null });

const route = useRoute(); 

onBeforeMount(async () => {
  id.value = route.params.id,
  userId.value = id.value,

  await fetchData();
});

async function fetchData() {
  try {
    const answer = await axios.get(`http://127.0.0.1:5000/users/${id.value}`);
    dataInfo.value.data = answer.data;
    isLoading.value = false;
  } catch (err) {
    dataInfo.value.isError = true;
    isLoading.value = false;
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

.profile-view{
    margin-top: 1.5rem;
}

</style>
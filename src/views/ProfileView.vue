<template>
     <div>
        <NavLogin  />
    </div>
    <div>
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


</script>
   
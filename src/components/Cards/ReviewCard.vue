<template>
    <section id="testimonials">
        <div class="testimonila-heading">
            <h1>Lo que los clientes dicen</h1>
        </div>
        <div class="testimonial-box-container">
            <div class="testimonial-box" v-for="dat in dataReviews.data" :key="dat.id">
                <div class="box-top">
                    <div class="name-user">
                        <h3>{{ dat.user_name }}</h3>
                    </div>
                    <div>
                        <p>{{ dat.comment }}</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
  
<script setup>
import {defineProps} from 'vue';

defineProps({
       dataReviews: Object,
   })
  
  
</script>
  
<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

#testimonials{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.testimonila-heading{
    letter-spacing: 1px;
    margin: 30px 0px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.testimonial-heading h1{
    font-size: 2px;
    font-weight: 500;
    background-color: #202020;
    color: #fff;
    padding: 10px 20px;
}

.testimonial-box-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.testimonial-box{
    width: 500px;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    padding: 20px;
    margin: 15px;
    cursor: pointer;
    height: 292px; 
    overflow: hidden; 
}

.box-top{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 100%; 
    height: 100%; 
    overflow-y: auto; 
    padding: 10px; 
}



.client-comment p{
  font-size: 0.9rem;
  color:#4b4b4b4b;
}

.testimonial-box:hover{
    transform: translateY(-10px);
    transition: all ease 0.3s;
}

@media(max-width: 1060px){
    #testimonial-box{
        width:45%;
        padding: 10px;
    }
}

@media(max-width: 790px){
    #testimonial-box{
        width:100%;
        padding: 10px;
    }
    .testimonial-heading h1{
        font-size: 1.4rem;
    }
}

@media(max-width: 340px){
    .box-top{
        flex-wrap: wrap;
        margin-bottom: 10px ;
    }
}


</style>
<template>
<div class="body">
    <div class="user-card">
        <span class="avatar-holder">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0Mzk4NjU1Mw&ixlib=rb-1.2.1&q=80&w=200" alt="Avatar">
            </span>
            <span class="user-info-holder">
                <h2 class="name">David Grant</h2>
                <span class="skill">email</span>
                <span class="skill">password</span>
            <span class="button">
            <button class="show-more-btn">Show More</button>
            </span>
        </span>
    </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";



.body {
  width: 100vw;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-card {
  max-width: 31.25rem;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: #fff;
  border-radius: 0.5rem;
  gap: 1rem;
  box-shadow: 0px 0px 10px #80808080;
}

.avatar-holder img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: #e6effa;
  padding: 0.5rem;
  position: relative;
  display: block;
  object-fit: cover;
}

.user-info-holder {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
}

.name {
  font-size: 1.625rem;
  color: #1c2b62;
  font-weight: bold;
  font-family: "Merriweather", sans-serif;
}

.skill {
  font-size: 1rem;
  color: #1c2b62;
}

.evaluations {
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  color: #1c2b62;
}

.evaluation-icon svg {
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
}

.desc {
  color: #1c2b62;
  font-weight: 300;
}

.show-more-btn {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #1c2b62;
  font-size: 1rem;
  font-weight: 600;
  color: #1c2b62;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease 0s;
}

.show-more-btn:hover,
.show-more-btn:focus {
  background: #1c2b62;
  color: #fff;
}


</style>
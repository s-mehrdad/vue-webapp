<!-- =========================================================================
/// <summary>
/// HelloWorld.vue
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 06.06.2023
/// </summary>
/// <created>ʆϒʅ, 06.06.2023</created>
/// <changed>ʆϒʅ, 03.07.2023</changed>
========================================================================== -->

<script setup>
  // import { ref } from 'vue'

  // properties
  defineProps({
    // const props = defineProps({
    msg: {
      type: String,
      required: true,
    },
    canSee: {
      type: String,
      required: false,
      default() {
        // return "visibility: " +"hidden";
        return "visible";
      },
    },
  });
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
    <h4
      id="greet-msg"
      :style="{ visibility: canSee }"
      style="color: rgb(13, 157, 235)"
    >
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h4>
  </div>
</template>

<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }

  #greet-msg {
    visibility: "$canSee";
  }
</style>

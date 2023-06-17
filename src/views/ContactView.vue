
<script setup>
  // --------------------------------------------------------------------------------
  /// <summary>
  /// ContactView.vue
  /// vue-webapp
  /// created by Mehrdad Soleimanimajd on 06.06.2023
  /// </summary>
  /// <created>ʆϒʅ, 06.06.2023</created>
  /// <changed>ʆϒʅ, 17.06.2023</changed>
  // --------------------------------------------------------------------------------

  import { ref } from 'vue'
  import HelloWorld from '../components/HelloWorld.vue'

  // provide dynamic state of properties
  const styleState = ref('collapse')
</script>

<template>
  <main>
    <HelloWorld msg="A view is a view!" />
    <HelloWorld msg="So contact vue!" :canSee="styleState" />
  </main>
</template>

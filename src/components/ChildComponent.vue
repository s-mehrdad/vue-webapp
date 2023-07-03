<!-- =========================================================================
/// <summary>
/// HelloWorld.vue
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 17.06.2023
/// </summary>
/// <created>ʆϒʅ, 17.06.2023</created>
/// <changed>ʆϒʅ, 03.07.2023</changed>
========================================================================== -->

<script setup>
  import { ref, computed } from "vue";

  const props = defineProps({
    castVar: [Number, Boolean, String],
  });

  // const wEnabled = ref(castVar.value)

  const stated = ref([
    { tested: false, test: "one" },
    { tested: true, test: "two" },
  ]);
  // class container to vue reference
  class wContainer {
    constructor(stateObj) {
      stated.value[0].tested = stateObj;
    }
    render() {
      console.log(stated.value[0]);
    }
  }
  class wEnabled extends wContainer {
    constructor(obj, stateObj) {
      super(stateObj);
      this.seemsTrue = obj;
    }
    wEnabled() {
      this.render();
      return this.seemsTrue ? "enable" : "disable";
    }
    wEnabledT(param) {
      return param == "test" ? "testFlight" : "testFlight";
    }
  }
  let aa = new wEnabled(props.castVar, 111 + " flight tested");
</script>

<template>
  <div class="child">
    <h2 class="bg-blend-color-dodge">
      {{ castVar }}: then {{ aa.wEnabled() }} features of this tag and
      {{ aa.wEnabledT("testD") }} features of again this tag
    </h2>
  </div>
</template>

<style scoped></style>

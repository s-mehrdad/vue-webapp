<!-- =========================================================================
/// <summary>
/// HelloWorld.vue
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 17.06.2023
/// </summary>
/// <created>ʆϒʅ, 17.06.2023</created>
/// <changed>ʆϒʅ, 06.11.2023</changed>
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
            return param == "test" ? "testFlight" : "testFlight2";
        }
    }
    let aa = new wEnabled(props.castVar, 111 + " flight tested");

    const aEmit = defineEmits(["response", "increment"]);
    aEmit("response", "hi");
    aEmit("increment", 1);

    function onTestFlight() {
        console.log(props.castVar);
    }
</script>

<template>
    <div class="child">
        <h2 class="bg-blend-color-dodge">
            {{ castVar }}: then {{ aa.wEnabled() }} features of this tag and
            {{ aa.wEnabledT("testD") }} features of again this tag
        </h2>
        <button
            class="border border-red-500"
            @click.exact="$emit('callCast', Boolean('true'), 3)"
            @mouseenter="$emit('callIncrement')"
            @click.alt="onTestFlight"
        >
            call cast
        </button>
    </div>
    <!-- <div slot="test">aaa</div> -->
    <slot>Fallback</slot>
</template>

<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


</style>

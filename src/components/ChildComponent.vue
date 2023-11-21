<!-- =========================================================================
/// <summary>
/// HelloWorld.vue
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 17.06.2023
/// </summary>
/// <created>ʆϒʅ, 17.06.2023</created>
/// <changed>ʆϒʅ, 21.11.2023</changed>
========================================================================== -->

<script setup>
    import { ref, computed } from "vue";
    import { watch } from "vue";

    // export default {
    // emits: ['callCast']
    // }
    // defineEmits(["callCast"]);
    const props = defineProps({
        castVar: [Number, Boolean, String],
    });

    // const attEnabled = ref(castVar.value)

    const stated = ref([
        { tested: false, test: "one" },
        { tested: true, test: "two" },
    ]);
    // class container to vue reference
    class featureContainer {
        constructor(stateObj) {
            stated.value[0].tested = stateObj;
        }
        render() {
            console.log(stated.value[0]);
        }
    }
    class featureEnabled extends featureContainer {
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
    let aa = new featureEnabled(props.castVar, 111 + " flight tested");

    // watch reactive property changes
    const testWatch = ref("a ref");
    watch(testWatch, async (newOne, oldOne) => {
        console.log("old value: " + oldOne + "  -  new value: " + newOne);
    });
    testWatch.value = "ref new value";

    const allEmits = defineEmits([
        "response",
        "increment",
        "callCast",
        "callIncrement",
        "differentCast",
    ]);
    allEmits("response", "hi");
    allEmits("increment", 1);

    function featureTest() {
        console.log(props.castVar);
        allEmits("differentCast", Boolean("true"), "different");
    }
</script>

<template>
    <div class="child">
        <!-- defined boolean attribute -->
        <h2 class="bg-blend-color-dodge">
            {{ castVar }}: then {{ aa.wEnabled() }} features of this tag and
            {{ aa.wEnabledT("testD") }} features of again this tag
        </h2>

        <!-- emitted events -->
        <button
            class="border border-red-500"
            @click.exact="$emit('callCast', Boolean('true'), 'clicked')"
            @mouseenter="$emit('callIncrement')"
            @click.alt="featureTest"
        >
            call cast
        </button>
    </div>

    <!-- component fragments receive element -->
    <slot>Fallback</slot>
    <!-- <div slot="test">aaa</div> -->
</template>

<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

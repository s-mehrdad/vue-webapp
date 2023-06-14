
<script setup>
// --------------------------------------------------------------------------------
/// <summary>
/// ContactView.vue
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 06.06.2023
/// </summary>
/// <created>ʆϒʅ, 06.06.2023</created>
/// <changed>ʆϒʅ, 14.06.2023</changed>
// --------------------------------------------------------------------------------


import { ref } from 'vue'
// import { reactive } from 'vue'
import { computed } from 'vue'
import { onMounted } from 'vue'

let debug = false;
let dev = true;

const aVariable = ref('')
aVariable.value = 'one Variable'
const aComputedVariable = computed(
    () => {
        return aVariable.value.split('')
        //TODO: create an effect on each character
    })

let indexTopic = 0;
const hideDeals = ref('false')
const aArray = ref([
    { topic: indexTopic++, sentence: 'first Sentence', dealt: false },
    { topic: indexTopic++, sentence: 'second Sentence', dealt: true },
    { topic: indexTopic++, sentence: 'third Sentence', dealt: false }
])
function unneededFunc() {
    // let i = 0;
    // // aArray.value.filter((t) => {
    // //     t.topic = i++;
    // // })
    // console.log(aArray.value[0].topic)
    // for (i; i <= 2; i++)
    // {
    //     aArray.value[i].topic = aArray.value[i].topic + 1
    //     // console.log(aArray.value[i].topic)
    // }
    aArray.value.forEach(item => {
        item.topic += 1
    })
}

function dealThen(obj) {
    aArray.value = aArray.value.filter((t) => {
        t == obj ? t.dealt = !t.dealt : t.dealt
        // t != obj
        if (t == obj)
            alert(t.sentence + obj.sentence)
    })
}

const objChange = ref('')
function toBeChanged(e) {
    item.sentence = e.target.value
}

const filteredDeals = computed(() => {
    return hideDeals.value == 'true' ? aArray.value.filter((t) => !t.dealt) : aArray.value
})

const arrayItem = ref(aArray.value[0].sentence)

const applyClass = ref('apply')
const applyStyle = ref('color: red;')

const buttonClass = ref('buttonC')

const pTagReference = ref(null);
const toShowFlag = ref(true);
const toShow = computed(() => {
    // if ((toShowFlag == true) && (pTagReference.value != null)) {
    //     // console.log(elem.getClientRects()[0].top);
    //     return pTagReference.getClientRects()[0].top.toString();
    // } else {
    //     return 'aaa'
    // }

    return (toShowFlag.value == true) && (pTagReference.value != null) ? pTagReference.value.getClientRects()[0].left.toString() : "Didn't ref"
});

onMounted(() => {
    // pTagReference.value.textContent = 'rendered';
    pTagReference.value.id = "aaa";
    // document.getElementById("aaa").innerHTML = 'rendered';
    pTagReference.value.innerHTML = 'rendered';
})

</script>

<template>
    <p :class="applyClass">{{ aVariable }}</p>
    <p>{{ aArray[0].sentence }}</p>
    <p>{{ arrayItem }}</p>
    <button class="w-fit border border-spacing-1 border-green-500 p-2" @click="unneededFunc()">unneededTheseToo</button>
    <p class="text-4xl font-light my-5" :style="applyStyle">{{ aComputedVariable }}</p>
    <br />
    <ul>
        <li v-for="(item, index) in filteredDeals" :key="item.topic">
            <table>
                <!-- tab -->
                <tr>
                    <td class="w-3/5">
                        {{ item.topic }}: {{ item.sentence }} --- {{ item.dealt ? 'dealt' : 'notYet' }}
                        <input type="checkbox" v-model="item.dealt">
                        <button class="w-fit border" v-on:click.shift="item.dealt = !item.dealt">
                            {{ item.dealt ? '#free' : '#dealt!' }}
                        </button>&nbsp;&nbsp;
                    </td>
                    <td>
                        <input class="w-fit border border-zinc-900" v-model="item.sentence" placeholder="editThen" />
                        <!-- <input :value="item.sentence" @input="toBeChanged" placeholder="editThen" /> -->
                    </td>
                </tr>
            </table>
        </li>
        <form name="showHide">
            <label name="showHide">&nbsp;&nbsp;&nbsp;hide deals:</label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" id="hide" value="true" v-model="hideDeals" name="showHide">
            <label for="hide">&nbsp;hide&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="radio" id="show" value="false" v-model="hideDeals" name="showHide" checked>
            <label for="show">&nbsp;show</label>
            <p v-if="debug" :class="applyClass">{{ item }}</p>
            <p v-else-if="dev" :class="applyClass">development</p>
            <p v-else :class="applyClass" ref="reference">awesome</p>
            <p ref="pTagReference">awesome-d</p>
            <p>&nbsp;&nbsp;&nbsp;{{ toShow }}&nbsp;&nbsp;&nbsp;</p>
            <p>{{ toShowFlag }}</p>
            <input type="checkbox" v-model="toShowFlag">
        </form>
    </ul>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.apply {
    color: rgba(0, 208, 255, 0.59);
}
</style>

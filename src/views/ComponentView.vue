<!-- =========================================================================
/// <summary>
/// ContactView.vue
/// vue-webapp
/// created by Mehrdad Soleimanimajd on 08.06.2023
/// </summary>
/// <created>ʆϒʅ, 08.06.2023</created>
/// <changed>ʆϒʅ, 21.11.2023</changed>
========================================================================== -->

<script setup>
    import { ref } from "vue";
    // import { reactive } from 'vue'
    import { computed } from "vue";
    import { onMounted } from "vue";
    import ChildComponent from "../components/ChildComponent.vue";

    //TODO: break to small components

    let debug = false;
    let dev = true;

    // props
    const props = defineProps({
        castString: [Boolean, String],
    });

    // reactive variables
    const aVariable = ref("");
    aVariable.value = "one Variable";
    const aComputedVariable = computed(() => {
        return aVariable.value.split("");
        //TODO: create an effect on each character
    });

    // reactive array
    const firstArray = ref([
        { topic: 1, category: "audio", content: "-_-_-_-" },
    ]);
    const arrayItem = ref(firstArray.value[0].content);

    // reactivity
    let indexTopic = 0;
    const hideDeals = ref("false");
    const aArray = ref([
        { topic: indexTopic++, sentence: "first Sentence", dealt: false },
        { topic: indexTopic++, sentence: "second Sentence", dealt: true },
        { topic: indexTopic++, sentence: "third Sentence", dealt: false },
    ]);
    function unneededFunc(param) {
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
        if (param == "down")
            aArray.value.forEach((item) => {
                item.topic -= 1;
            });
        if (param == "up")
            aArray.value.forEach((item) => {
                item.topic += 1;
            });
    }
    const newSentence = ref("");
    function addNewItem() {
        aArray.value.push({
            topic: aArray.value[aArray.value.length - 1].topic + 1,
            sentence: newSentence.value,
            dealt: false,
        });
    }
    function dealThen(obj) {
        aArray.value = aArray.value.filter((t) => {
            t == obj ? (t.dealt = !t.dealt) : t.dealt;
            // t != obj
            if (t == obj) alert(t.sentence + obj.sentence);
        });
    }
    const objChange = ref("");
    function toBeChanged(e) {
        item.sentence = e.target.value;
    }
    const filteredDeals = computed(() => {
        return hideDeals.value == "true"
            ? aArray.value.filter((t) => !t.dealt)
            : aArray.value;
    });

    // referenced attributes
    const applyClass = ref("apply");
    const applyStyle = ref("color: red;");

    const buttonClass = ref("buttonC");

    // reference
    const pTagReference = ref(null);
    const toShowFlag = ref(true);
    const toShow = computed(() => {
        // if ((toShowFlag == true) && (pTagReference.value != null)) {
        //     // console.log(elem.getClientRects()[0].top);
        //     return pTagReference.getClientRects()[0].top.toString();
        // } else {
        //     return 'aaa'
        // }

        return toShowFlag.value == true && pTagReference.value != null
            ? pTagReference.value.getClientRects()[0].left.toString()
            : "Didn't ref";
    });

    onMounted(() => {
        // pTagReference.value.textContent = 'rendered';
        pTagReference.value.id = "aaa";
        // document.getElementById("aaa").innerHTML = 'rendered';
        pTagReference.value.innerHTML = "rendered";
    });

    const childResponse = ref("no response");
    const responseIncrement = ref(0);
    function calledOnCast(obj, addTo) {
        console.log(obj);
        if (obj == true) {
            childResponse.value = addTo;
        }
    }
</script>

<template>
    <div class="component">
        <!-- reactive variables and arrays -->
        <div>
            <p :class="applyClass">{{ aVariable }}</p>
            <p>{{ aArray[0].sentence }}</p>
            <p class="text-3xl font-light my-5" :style="applyStyle">
                {{ aComputedVariable }}
            </p>
            <p>{{ arrayItem }}</p>
            <br />
        </div>

        <!-- reactivity -->
        <div>
            <button
                class="w-fit border-4 border-spacing-0 border-green-500 p-1"
                @click="unneededFunc('down')"
            >
                One Step Backward</button
            ><br />
            <button
                class="w-fit border border-spacing-1 border-green-500 p-2"
                @click="unneededFunc('up')"
            >
                One Topic Forward
            </button>
            <input
                typw="text"
                class="border border-rose-500"
                v-model="newSentence"
                placeholder="type here then"
            />
            <button
                class="w-fit border border-spacing-1 border-green-500 p-2"
                @click="addNewItem()"
            >
                One New Sentence
            </button>
            <br />

            <ul>
                <p class="border-2 border-yellow-300">
                    sEnTeNcEd: sentenced ...
                </p>
                <li v-for="(item, index) in filteredDeals" :key="item.topic">
                    <table>
                        <!-- tab -->
                        <tr>
                            <td class="w-3/5">
                                {{ item.topic }}: {{ item.sentence }} ---
                                {{ item.dealt ? "dealt" : "notYet" }}
                                <input type="checkbox" v-model="item.dealt" />
                                <button
                                    class="w-fit border"
                                    v-on:click.shift="item.dealt = !item.dealt"
                                >
                                    {{
                                        item.dealt ? "#free" : "#dealt!"
                                    }}</button
                                >&nbsp;&nbsp;
                            </td>
                            <td>
                                <input
                                    class="w-fit border border-zinc-900"
                                    v-model="item.sentence"
                                    placeholder="editThen"
                                />
                                <!-- <input :value="item.sentence" @input="toBeChanged" placeholder="editThen" /> -->
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
            <form name="showHide">
                <label name="showHide"
                    >&nbsp;&nbsp;&nbsp;&nbsp;--hide deals:</label
                >
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="radio"
                    id="hide"
                    value="true"
                    v-model="hideDeals"
                    name="showHide"
                />
                <label for="hide"
                    >&nbsp;hide&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label
                >
                <input
                    type="radio"
                    id="show"
                    value="false"
                    v-model="hideDeals"
                    name="showHide"
                    checked
                />
                <label for="show">&nbsp;show</label>
            </form>
            <br />
        </div>

        <!-- conditionals and template refs -->
        <form name="templateRefs">
            <p v-if="debug" :class="applyClass">{{ item }}</p>
            <p v-else-if="dev" :class="applyClass">development</p>
            <p v-else :class="applyClass" ref="reference">awesome</p>

            <p ref="pTagReference">initial content</p>
            <p>awesome-d</p>

            <p>&nbsp;&nbsp;&nbsp;{{ toShow }}&nbsp;&nbsp;&nbsp;</p>
            <p>{{ toShowFlag }}</p>
            <input type="checkbox" v-model="toShowFlag" name="templateRefs" />
        </form>
        <br />

        <!--
          documentation:

          * castVar -> special props, at presence can trigger special features
          
          * response and increment -> normal emits events
          * call-cast and call-increment -> defined on built-in $emit method
          * differentCast -> normal emit in function
          -->
        <ChildComponent
            castVar
            v-on:response="
                (res) => {
                    childResponse = res;
                }
            "
            @increment="
                (prm) => {
                    responseIncrement = prm;
                }
            "
            @call-cast="calledOnCast"
            @call-increment="responseIncrement++"
            @differentCast="calledOnCast"
        >
            <!-- passed component's template fragments through <slot> element -->
            Content
        </ChildComponent>

        <p>{{ childResponse }}: {{ responseIncrement }}</p>
    </div>
</template>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .component {
        /* display: block; */
    }

    .apply {
        color: rgba(0, 208, 255, 0.59);
    }
</style>

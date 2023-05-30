<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class=" text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal">

        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong>Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong>Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags:</strong> {{ meal.strTags }}
            </div>
        </div>

        <div>
            {{ meal.strInstructions  }}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div>
                <h2 class="text-2xl font-semibold mb-2">Ingrediants</h2>
                <ul>
                    <template v-for="(el,ind) of new Array(20)" :key="ind">
                        <li v-if="meal[`strIngredient${ind+1}`]">
                           {{ ind + 1 }}. {{ meal[`strIngredient${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                    <template v-for="(el,ind) of new Array(20)" :key="ind">
                        <li v-if="meal[`strMeasure${ind+1}`]">
                          {{ meal[`strMeasure${ind+1}`] }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="mt-4">
                <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                <ViewDetailsButton :href="meal.strSource">View Orignal Source</ViewDetailsButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";
import ViewDetailsButton from "../components/ViewDetailsButton.vue";

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`/lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            // debugger;
            meal.value = data.meals[0] || {}
        })
})
</script>

<style lang="scss" scoped></style>
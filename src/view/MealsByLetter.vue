<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Meals By Letter</h1>
    </div>
    <div class=" flex justify-center mt-3 gap-2">
        <router-link :to="{name: 'byLetter',params:{letter}}" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import store from "../store"
import MealItem from "../components/MealItem.vue";


const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.searchByLetter)

watch(route, () => {
    store.dispatch('searchByLetter',route.params.letter)
})
onMounted(() => {
    store.dispatch('searchByLetter',route.params.letter)
})
</script>

<style lang="scss" scoped>

</style>
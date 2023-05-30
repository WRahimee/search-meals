<template>
    <div class="p-8">
        <div class="p-8 pb-0 text-orange-500">
            <h1 class="text-4xl font-bold mb-4">Meals By Ingredients</h1>
        </div>
        <div class="p-8 pb-0">
            <input type="text" 
            class="rounded border-2 border-gray-300 w-full focus:ring-orange-500 focus:border-orange-500"
            placeholder="Search for Ingredients" v-model="keyword"
            >
        </div>
        <router-link 
        :to="{name: 'byIngrediant' ,
        params: {ingrediant: ingrediant.strIngredient}}"
        v-for="ingrediant in computedIngredients"
        :key="ingrediant.idIngredient" 
         class="block bg-white rounded p-3 mb-3 shadow">
            <h3 class="mb-2 text-2xl font-bold">{{ ingrediant.strIngredient }}</h3>
            <p>{{ ingrediant.strDescription }} </p>
        </router-link>
    </div>
</template>

<script setup>
import { ref,onMounted, computed } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref('')
const ingrediants = ref([])
const computedIngredients = computed(() => {
    if(!computedIngredients) return ingrediants; 
    return ingrediants.value.filter((i) => {
   return i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
    })
})
onMounted(() => {
    axiosClient.get('/list.php?i=list')
    .then(({data}) => {
        ingrediants.value = data.meals
    })
})
</script>

<style lang="scss" scoped>

</style>
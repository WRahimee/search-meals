<template>
        <div class="bg-white shadow rounded-xl">
            <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" rounded-t-2xl h-48 w-full object-cover">
            </router-link>
            <div class="p-3">
                <h3 class="font-semibold">{{ meal.strMeal }}</h3>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quas ratione, animi nihil,
                </p>
                <div class="flex items-center justify-between">
                    <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
                    <router-link :to="{name:'mealDetails',params:{id:meal.idMeal}}" class="px-3 py-2 rounded border-2 border-green-600 hover:bg-green-500 hover:text-white transition-colors">
                        View
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";

const {meal} = defineProps({
    meal: {
        required : true,
        type : Object
    }
})
</script>

<style lang="scss" scoped>

</style>
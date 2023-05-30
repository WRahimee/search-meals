<template>
    <Meal :meals="meals"></Meal>
</template>

<script setup>
import { ref,onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meal from '../components/Meals.vue'
const route = useRoute();
const meals = computed(() => store.state.searchByIngredient)

onMounted(() => {
    store.dispatch('searchByIngredient',route.params.ingrediant)
})
</script>

<style lang="scss" scoped>

</style>
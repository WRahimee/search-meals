<template>
    <div class="p-8 pb-0">
        <input type="text" class="rounded border-2 border-gray-300 w-full focus:ring-orange-500 focus:border-orange-500" placeholder="Search for meals" v-model="keyword"
            @change="searchMeasl">
    </div>
        <Meals :meals="meals"></Meals>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
const keyword = ref('');
function searchMeasl() {
    if(keyword.value){
        store.dispatch('searchMeals', keyword.value)
    }
    else{
        store.commit('setSearchMeals',keyword.value)
    }
    
}
onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeasl();
    }
})
</script>

<style lang="scss" scoped></style>
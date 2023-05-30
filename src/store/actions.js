import axiosClient from "../axiosClient";

export function searchMeals({commit},keyword){
    axiosClient.get(`/search.php?s=${keyword}`)
    .then(({data}) => {
        // debugger;
        commit('setSearchMeals',data.meals)
    })
}
export function searchByLetter({commit},letter){
    axiosClient.get(`/search.php?f=${letter}`)
    .then(({data}) => {
        // debugger;
        commit('setMealsByLetter',data.meals)
    })
}
export function searchByIngredient({commit},Ingredient){
    axiosClient.get(`/filter.php?i=${Ingredient}`)
    .then(({data}) => {
        // debugger;
        commit('setMealsByIngredient',data.meals)
    })
}
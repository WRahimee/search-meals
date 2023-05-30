export function setSearchMeals(state,meals) {
    state.searchedMeals = meals || []
}
export function setMealsByLetter(state,meals) {
    state.searchByLetter = meals
}
export function setMealsByIngredient(state,meal) {
    state.searchByIngredient = meal
}

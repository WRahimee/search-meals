<template>
    <header class=" bg-white shadow h-16 flex justify-between items-stretch">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5 hover:bg-green-200">
          Home
        </router-link>
        <div class="flex items-center gap-2">
          <router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-200">
            Search Meals
          </router-link>
          <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-200">
            Meals By Letter
          </router-link>
          <router-link :to="{name: 'Ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-green-200">
            Meals By Ingrediants
          </router-link>
        </div>
      </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
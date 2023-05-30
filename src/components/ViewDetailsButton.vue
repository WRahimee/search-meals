<template>
    <a  :href="href" target="_blank" class="ml-1 px-3 py-2 rounded border-2 border-green-600 hover:bg-green-500 hover:text-white transition-colors">
        <slot></slot>
    </a>
</template>

<script setup>

const props = defineProps({
    href : String
})
</script>

<style lang="scss" scoped>

</style>
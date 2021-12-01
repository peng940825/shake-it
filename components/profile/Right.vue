<script>
export default {
  computed: {
    isColorBlockOpen() {
      return this.$store.getters.isColorBlockOpen
    },
  },
}
</script>

<template>
  <div class="right" :class="{ 'bg-cyan-700': isColorBlockOpen }">
    <NuxtChild />
  </div>
</template>

<style lang="postcss" scoped>
.right {
  @apply w-[80%] <xl:w-[75%] <md:w-full;
}
</style>

<script>
export default {
  methods: {
    handleColorBlock() {
      this.$store.commit('handleColorBlock')
    },
  },
  computed: {
    isColorBlockOpen() {
      return this.$store.getters.isColorBlockOpen
    },
  },
}
</script>

<template>
  <div>
    <div class="banner bg-pink-700" @click="handleColorBlock"></div>

    <div class="profile" :class="{ 'bg-gray-700': isColorBlockOpen }">
      <div class="left bg-amber-700"></div>
      <div class="right" :class="{ 'bg-cyan-700': isColorBlockOpen }">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.banner {
  @apply w-full h-[240px];
}

.profile {
  @apply w-full max-w-[1600px] flex mx-auto;

  .left {
    @apply min-w-[240px] mr-[100px] <md:hidden;
  }

  .right {
    @apply w-full;
  }
}
</style>

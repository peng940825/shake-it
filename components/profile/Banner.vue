<script>
export default {
  methods: {
    handleColorBlock() {
      this.$store.commit('handleColorBlock')
    },
  },
}
</script>

<template>
  <div class="banner" @click="handleColorBlock">
    <img src="@/assets/banner.jpg" />
  </div>
</template>

<style lang="postcss" scoped>
.banner {
  @apply h-[240px];

  img {
    @apply w-full h-full object-cover;
  }
}
</style>

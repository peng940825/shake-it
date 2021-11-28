<script>
import Banner from '@/components/profile/Banner.vue'
import Left from '@/components/profile/Left.vue'
import Right from '@/components/profile/Right.vue'

export default {
  components: { Banner, Left, Right },
  computed: {
    isColorBlockOpen() {
      return this.$store.getters.isColorBlockOpen
    },
  },
}
</script>

<template>
  <div>
    <Banner />

    <div class="profile" :class="{ 'bg-gray-700': isColorBlockOpen }">
      <Left />
      <Right />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.profile {
  @apply w-full max-w-[1600px] flex mx-auto;
}
</style>

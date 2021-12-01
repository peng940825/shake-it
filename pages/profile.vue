<script>
import Banner from '@/components/profile/Banner.vue'
import Left from '@/components/profile/Left.vue'
import Right from '@/components/profile/Right.vue'

export default {
  components: { Banner, Left, Right },
  methods: {
    setWindowWidth() {
      // this.$store.commit('setWindowWidth', document.body.clientWidth)
      this.$store.commit('setWindowWidth', window.innerWidth)
    },
  },
  computed: {
    windowWidth() {
      return this.$store.getters.windowWidth
    },
    isColorBlockOpen() {
      return this.$store.getters.isColorBlockOpen
    },
  },
  mounted() {
    this.setWindowWidth()
    window.addEventListener('resize', this.setWindowWidth)
  },
}
</script>

<template>
  <div>
    <Banner />

    <div
      class="profile"
      :class="[
        { flex: windowWidth > 767 },
        { 'bg-gray-700': isColorBlockOpen },
      ]"
    >
      <Left />
      <Right />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.profile {
  @apply w-full max-w-[1600px] mx-auto;
}
</style>

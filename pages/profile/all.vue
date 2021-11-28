<script>
import ProductCard from '@/components/profile/ProductCard.vue'

export default {
  components: { ProductCard },
}
</script>

<template>
  <div class="all">
    <div class="banana" v-for="item in 21" :key="item">
      <ProductCard />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.all {
  @apply flex flex-wrap;

  .banana {
    @apply w-[calc(100%/4)] p-[8px];
  }
}

@media (max-width: 1536px) {
  .all > .banana {
    @apply w-[calc(100%/3)];
  }
}

@media (max-width: 1024px) {
  .all > .banana {
    @apply w-[calc(100%/2)];
  }
}
</style>

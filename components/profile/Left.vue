<script>
export default {
  computed: {
    windowWidth() {
      return this.$store.getters.windowWidth
    },
    isColorBlockOpen() {
      return this.$store.getters.isColorBlockOpen
    },
    leftClass() {
      return this.windowWidth > 767 ? 'left-desktop' : 'left-mobile'
    },
  },
}
</script>

<template>
  <div :class="[leftClass, { 'bg-amber-700': isColorBlockOpen }]">
    <div class="avatar">
      <img src="@/assets/avatar-500.jpg" />
    </div>

    <div class="feature-information">
      <div class="button-box-1">
        <button type="button">送禮</button>
        <button type="button">私訊</button>
      </div>

      <div class="button-box-2">
        <button type="button">送禮</button>
        <button type="button">私訊</button>
      </div>

      <button v-if="leftClass === 'left-desktop'" class="subscribe">
        已訂閱
      </button>

      <p v-if="leftClass === 'left-mobile'" class="host-name">比特啾啾</p>
      <div class="host-info">162 ・ 32/24/31 ・ 手天使</div>

      <div class="badges">
        <img src="@/assets/badges/badge-1.png" />
        <img src="@/assets/badges/badge-2.png" />
      </div>

      <div v-if="leftClass === 'left-mobile'" class="subscribe">
        <button type="button">已訂閱</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.left-desktop {
  @apply flex flex-col items-center justify-start;
  @apply w-[15%] mx-[2.5%] <xl:w-[20%] <md:hidden;

  .avatar {
    @apply w-[80%];
    transform: translateY(-50%);

    img {
      @apply border-3 rounded-1/2;
    }
  }

  .feature-information {
    @apply w-full -mt-[-70px] <2xl:-mt-[-60px] <lg:-mt-[-40px];

    /* 快速搭搭 */

    .button-box-1,
    .button-box-2 {
      @apply flex justify-between text-white mb-[16px];

      button {
        @apply w-[47.5%] h-[36px] bg-[#e84989] rounded-[50px];
      }
    }

    .subscribe {
      @apply w-full h-[42px] mb-[16px] border border-[#e84989] text-[#e84989] rounded-[50px];
    }

    .host-info {
      @apply text-xs text-[#919191] text-center mb-[16px];
    }

    .badges {
      @apply flex;

      img {
        @apply w-[36px] mr-[8px];
      }
    }
  }
}

.left-mobile {
  @apply p-[16px];

  .avatar {
    @apply w-[40%] max-w-[200px] absolute;
    transform: translateY(-50%);

    img {
      @apply border-3 rounded-1/2;
    }
  }

  .feature-information {
    @apply relative;

    .button-box-1 {
      @apply mb-[8px];
    }

    .button-box-1,
    .button-box-2 {
      @apply w-[50%] flex justify-between text-white ml-auto;

      button {
        @apply w-[47.5%] h-[36px] rounded-[50px] bg-[#e84989];
      }
    }

    .host-name {
      @apply mt-[24px] mb-[8px];
    }

    .subscribe {
      @apply pt-[12px] border-t-[1px] border-[#d6d6d6];

      button {
        @apply w-full h-[42px] text-[#e84989] border border-[#e84989] rounded-[50px];
      }
    }

    .host-info {
      @apply text-xs text-[#919191];
    }

    .badges {
      @apply flex my-[16px];

      img {
        @apply w-[36px] mr-[8px];
      }
    }
  }
}
</style>

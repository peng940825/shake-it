<template>
  <div class="product-card">
    <div class="header">
      <div class="information">
        <img class="avatar" src="@/assets/avatar.jpg" />
        <p class="name">比特啾啾</p>
      </div>

      <div class="cooperation-models-num">
        <span>12+</span>
      </div>
    </div>

    <div class="media">
      <div class="product-video-length">
        <span>1:33:26</span>
      </div>
      <div class="product-num">
        <span>112P</span>
      </div>
      <div class="hidden-product-video-length">
        <span>10:35</span>
      </div>
      <div class="hidden-product-num">
        <span>69P</span>
      </div>

      <img src="@/assets/product.jpg" />
    </div>

    <div class="footer">
      <p class="product-title">
        【美少女比特獨家阿嘿顏】美人搜查官 比特啾啾 極速性快感快樂中毒
        藥物不明失神！/隱藏版9min(重點) 火熱 身体腦內麻痺自摸
      </p>

      <div class="product-detail">
        <div class="top">
          <div class="purchase-quantity">
            <img src="@/assets/icon-bought.svg" />
            <span>2.9k / 888</span>
          </div>

          <span class="old-price">$19.99</span>
        </div>

        <div class="bottom">
          <div class="views">
            <img src="@/assets/icon-watched.svg" />
            <span>33k</span>
          </div>

          <span class="current-price">$9.99</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.product-card {
  @apply border border-[#e0e0e0] rounded-[10px] bg-white;

  .header {
    @apply flex items-center justify-between px-[8px] py-[4px];

    .information {
      @apply flex items-center;

      .avatar {
        @apply w-[24px] rounded-1/2;
      }

      .name {
        @apply text-xs font-bold ml-[8px];
      }
    }

    .cooperation-models-num {
      @apply w-[24px] h-[24px] flex items-center justify-center text-xs text-white rounded-1/2 bg-[#d6d6d6];
    }
  }

  .media {
    @apply relative text-xs text-white;

    .product-video-length,
    .product-num,
    .hidden-product-video-length,
    .hidden-product-num {
      @apply w-[50px] h-[20px] absolute flex items-center justify-center rounded-[12px];
    }

    .product-video-length,
    .product-num {
      @apply bg-[#272b36] bg-opacity-70;
    }

    .hidden-product-video-length,
    .hidden-product-num {
      @apply bg-[#e84989] bg-opacity-70;
    }

    .product-video-length {
      @apply bottom-[30px] left-[5px];
    }

    .product-num {
      @apply bottom-[5px] left-[5px];
    }

    .hidden-product-video-length {
      @apply bottom-[30px] left-[60px];
    }

    .hidden-product-num {
      @apply bottom-[5px] left-[60px];
    }
  }

  .footer {
    @apply p-[8px];

    .product-title {
      @apply h-[32px] text-xs font-bold overflow-hidden;
    }

    .product-detail {
      @apply font-bold mt-[4px];

      .top,
      .bottom {
        @apply flex justify-between px-[4px];

        .purchase-quantity,
        .views {
          @apply flex items-center;

          img {
            @apply w-[16px] mr-[8px];
          }

          span {
            @apply text-xs text-[#b2b2b2];
          }
        }

        .old-price {
          @apply line-through text-[#e0e0e0];
        }

        .current-price {
          @apply text-[#e84989];
          /* @apply text-[#919191]; */
        }
      }
    }
  }
}
</style>

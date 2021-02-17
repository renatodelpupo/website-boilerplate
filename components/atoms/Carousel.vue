<template>
  <div ref="carousel" class="carousel swiper-container">
    <div class="swiper-wrapper">
      <div v-for="image in images" :key="image.alt" class="swiper-slide">
        <img
          :alt="image.alt"
          class="carousel-image"
          :src="image.src ? require(image.src) : ''"
        />
      </div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev">
      <i class="fas fa-angle-left" />
    </div>
    <div class="swiper-button-next">
      <i class="fas fa-angle-right" />
    </div>
  </div>
</template>

<script>
import { Autoplay, Navigation, Pagination, Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Autoplay, Navigation, Pagination])

export default {
  name: 'Carousel',

  props: {
    images: {
      required: true,
      type: Array,
    },
  },

  mounted() {
    this.mountCarousel()
  },

  methods: {
    mountCarousel() {
      const carouselContainer = this.$refs.carousel
      const swiper = new Swiper(carouselContainer, {
        autoplay: {
          disableOnInteraction: true,
        },
        centeredSlides: true,
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {
          clickable: true,
          el: '.swiper-pagination',
        },
      })

      carouselContainer?.addEventListener('mouseenter', () => {
        swiper.autoplay.stop()
      })

      carouselContainer?.addEventListener('mouseleave', () => {
        swiper.autoplay.start()
      })
    },
  },
}
</script>

<style scoped>
.swiper-container {
  border: 1px solid #007aff;
}

.swiper-slide {
  align-items: center;
  color: #007aff;
  display: flex;
  font-family: sans-serif;
  font-weight: bold;
  height: 250px;
  justify-content: center;
}
</style>

<template>
  <div class="home">
    <carousel @next="next" @prev="prev">
      <carousel-slide
        v-for="(slide, index) in slides"
        :key="slide"
        :index="index"
        :visibleSlide="visibleSlide"
        :direction="direction"
      >
        <img :src="slide" />
      </carousel-slide>
    </carousel>
    <div class="product-card-wrap">
      <div class="container">
        <h3>Browse some recent items by our members</h3>
        <div class="product-cards">
          <ProductCard
            :post="post"
            v-for="(post, index) in productPosts"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>
          Never miss the latest uploads. Register for your free account today!
        </h2>
        <router-link class="router-button" :to="{ name: 'Register' }">
          Register for Kin-Bech <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import Arrow from '../assets/Icons/arrow-right-light.svg'
import Carousel from '../components/Carousel'
import CarouselSlide from '../components/CarouselSlide'

export default {
  name: 'Home',
  components: {
    ProductCard,
    Carousel: Carousel,
    CarouselSlide: CarouselSlide,
    Arrow,
  },
  data() {
    return {
      slides: [
        require('@/assets/banner/kin.gif'),
        require('@/assets/banner/Cars.png'),
        require('@/assets/banner/Furniture.png'),
        require('@/assets/banner/Phone.gif'),
        require('@/assets/banner/Shoes.gif'),
      ],
      visibleSlide: 0,
      direction: 'left',
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length
    },
    productPostsFeed() {
      return this.$store.getters.productPostsFeed
    },
    productPosts() {
      return this.$store.state.productPosts
    },
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
      this.direction = 'left'
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1
      } else {
        this.visibleSlide--
      }
      this.direction = 'right'
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>

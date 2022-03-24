<template>
  <div class="post-view" v-if="currentProduct">
    <div class="container quillWrapper">
      <h2>{{ this.currentProduct[0].productTitle }}</h2>
      <h4>
        Posted on:
        {{
          new Date(this.currentProduct[0].productDate).toLocaleString('en-us', {
            dateStyle: 'long',
          })
        }}
      </h4>
      <img :src="this.currentProduct[0].productCoverPhoto" alt="" />
      <div
        class="post-content ql-editor"
        v-html="this.currentProduct[0].productHTML"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewProduct',
  data() {
    return {
      currentProduct: null,
    }
  },
  async mounted() {
    this.currentProduct = await this.$store.state.productPosts.filter(
      (post) => {
        return post.productID === this.$route.params.productid
      }
    )
  },
}
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}
</style>

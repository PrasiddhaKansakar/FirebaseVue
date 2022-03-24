<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.productTitle }}</h2>
      <img :src="productCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="productHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPreview',
  computed: {
    productTitle() {
      return this.$store.state.productTitle
    },
    productHTML() {
      return this.$store.state.productHTML
    },
    productCoverPhoto() {
      return this.$store.state.productPhotoFileURL
    },
  },
}
</script>

<style lang="scss">
.post-view {
  min-height: 100%;
  .container {
    max-width: 1000px;
    padding: 60px 25px;
  }
  .ql-editor {
    padding: 0;
  }
  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }
  img {
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>

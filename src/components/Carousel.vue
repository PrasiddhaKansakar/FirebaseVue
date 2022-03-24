<template>
  <div class="carousel">
    <slot></slot>
    <button @click="next" id="btn1" class="next">
      &rarr;
    </button>
    <button @click="prev" id="btn1" class="prev">
      &larr;
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
  },
}
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.carousel img {
  max-width: 100%;
  margin: auto;
  height: 500px;
  display: block;
}
@media (min-width: 800px) {
  .carousel {
    width: 100%;
  }
}
#btn1 {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50%);
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  color: #fff;
}
#btn1:focus,
#btn1:hover {
  outline: none;
  cursor: pointer;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
</style>

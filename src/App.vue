<template>
  <div id="app">
    <div class="mb-10">
      <h1 class="text-4xl font-bold">F.O.M.O Wall</h1>
    </div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-distance="500"
      class="flex flex-wrap justify-center items-start mx-auto"
    >
      <blobber :key="i" v-for="i in blobberCount" />
    </div>
  </div>
</template>

<script>
import { generator } from "./util/generator";
import Blobber from "./components/Blobber";

const changeBlob = function () {
  const { path, id } = generator({
    edges: this.defaultBlob.edges,
    growth: this.defaultBlob.growth,
    size: this.defaultBlob.size,
  });
  this.defaultBlob.path = path;
  this.defaultBlob.id = id;
};

export default {
  name: "App",
  components: {
    Blobber,
  },
  data() {
    return {
      blobberCount: 24,
      busy: false,
    };
  },
  methods: {
    changeBlob,
    loadMore: function () {
      this.blobberCount += 12;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

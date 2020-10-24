<template>
  <div id="app">
    <div class="control mb-10">
      <button class="bg-primary px-4 py-2 text-white" @click="changeBlob">Change Blob</button>
      <div class="mt-10">
        <div>Growth</div>
        <input
          @change="changeBlob"
          v-model="defaultBlob.growth"
          type="range"
          min="2"
          max="9"
          value="7"
          class="slider mr-4"
          id="growth-range"
        />
      </div>

      <div class="mt-4">
        <div>Edges</div>
        <input
          @change="changeBlob"
          v-model="defaultBlob.edges"
          type="range"
          min="3"
          max="20"
          value="6"
          class="slider"
          id="edge-range"
        />
      </div>

      <div class="mt-6">
        <input
          @change="changeBlob"
          class="border border-gray-12 px-4 py-2"
          type="number"
          v-model="defaultBlob.edges"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-center items-start mx-auto">
        <blobber :defaultBlob="defaultBlob" :key="i" v-for="i in blobberCount" />
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
      defaultBlob: {
        edges: 6,
        growth: 7,
        size: 500,
        path: "",
        id: "",
      },
      blobberCount:10
    }
  },
  methods: {
    changeBlob,
  }
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

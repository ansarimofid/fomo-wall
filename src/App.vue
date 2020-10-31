<template>
  <div id="app" class="bg-black text-white text-base">
    <section class="pt-12 sm:pt-20 md:pt-24 lg:pt-32">
      <div class="max-w-4xl mx-auto px-4">

        <img
          class="h-10 sm:h-16 md:h-20 inline-block"
          :src="require('@/assets/img/logo.svg')"
          alt=""
        />
        <h1 class="text-center leading-snug mt-4">
          <span class="text-xl md:text-2xl block">
            Vibe up with amazing
            <span class="text-primary">unlimited</span> & <span class="text-primary">unique</span> wallpapers.
          </span>
        </h1>
      </div>
    </section>

    <section class="mt-12 sm:mt-20 md:mt-24 lg:mt-32">
      <div
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="500"
        class="flex flex-wrap justify-center items-start mx-auto -ml-4"
      >
        <blobber :key="i" v-for="i in blobberCount" />
      </div>
    </section>
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
      blobberCount: 12,
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
}
</style>

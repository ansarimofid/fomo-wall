<template>
  <div class="pl-6 mb-8">
    <div
      class="w-72 h-72 bg-gray-245 blob-canvas mx-auto relative overflow-hidden"
      :style="containerStyle"
    >
      <blob
        :blob="blob"
        :gradient="gradient"
        :gradientId="gradientId"
        :key="i"
        v-for="i in count"
      />

      <div :key="i+getRandomInt(13232,22333)" v-for="i in 4" class="absolute z-10" :style="getCircleStyle()">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle fill="white" cx="50" cy="50" r="50" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Blob from "./Blob";

import { getRandomInt } from "../util/common.util";
import gradients from "../util/gradients";

export default {
  name: "blobber",
  props: {
    blob: Object,
  },
  components: {
    Blob,
  },
  data() {
    return {
      gradient: gradients[getRandomInt(0, gradients.length)],
      count: 15,
      gradientId: getRandomInt(100000, 500000),
      circleStyle: {
        left: getRandomInt(-20, 100) + "%",
        top: getRandomInt(-20, 100) + "%",
        transform: `rotateZ(${getRandomInt(0, 360)}deg)`,
      },
    };
  },
  computed: {
    containerStyle: function () {
      return {
        background: `linear-gradient(45deg, ${this.gradient[0]}, ${this.gradient[1]})`,
      };
    },
  },

  methods: {
    getCircleStyle:function(){
      let circleSize = getRandomInt(15, 100);

      console.log(circleSize);
      return {
        left: getRandomInt(-20, 100) + "%",
        top: getRandomInt(-20, 100) + "%",
        transform: `rotateZ(${getRandomInt(0, 360)}deg)`,
        width:`${circleSize}px`,
        height:`${circleSize}px`,
      }
    },
    getRandomInt
  },
};
</script>

<style scoped>
.blob-canvas {
  width: 700px;
  height: 900px;
}
</style>
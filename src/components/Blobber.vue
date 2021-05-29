<template>
  <div class="pl-4 mb-2 sm:mb-4">
    <div class="cursor-pointer"  :id="domId" @click="getImage">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        ref="imgRef"
        class="w-72 h-72 bg-gray-245 blob-canvas mx-auto relative overflow-hidden"
        :style="containerStyle"
      >
        <blob
          :gradient="gradient"
          :gradientId="gradientId"
          :key="i"
          v-for="i in count"
        />
        <dot v-for="i in circleCount" :key="i + getRandomInt(13232, 22333)" />
      </svg>
    </div>
  </div>
</template>

<script>
import Blob from "./Blob";
import Dot from "./Dot";

import { getRandomInt } from "../util/common.util";
import gradients from "../util/gradients";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default {
  name: "blobber",
  components: {
    Blob,
    Dot,
  },
  data() {
    return {
      gradient: gradients[getRandomInt(0, gradients.length)].colors,
      count: 10,
      circleCount:0,
      gradientId: getRandomInt(100000, 500000),
      domId: getRandomInt(500000, 800000),
      circleStyle: {
        transform: `rotateZ(${getRandomInt(0, 360)}deg),transform: translate(${getRandomInt(-80, 80) + "%"}, ${getRandomInt(-80, 80) + "%"})`,
      },
    };
  },
  computed: {
    containerStyle: function () {
      return {
        background: `linear-gradient(${this.getRandomInt(0, 360)}deg, ${
          this.gradient[0]
        }, ${this.gradient[1]})`,
      };
    },
  },

  methods: {
    getCircleStyle: function () {
      let circleSize = getRandomInt(2, 10);
      return {
        left: getRandomInt(-20, 100) + "%",
        top: getRandomInt(-20, 100) + "%",
        transform: `rotateZ(${getRandomInt(0, 360)}deg)`,
        width: `${circleSize}%`,
        height: `${circleSize}%`,
      };
    },
    getRandomInt,
    getImage: function () {
      let img = document.getElementById(this.domId);

      let childNode = img.childNodes[0];

      let childHeight = childNode.style.height;
      let childWidth = childNode.style.width;

      childNode.style.width = "1400px";
      childNode.style.height = "1800px";

      domtoimage.toBlob(img).then((blob) => {
        childNode.style.width = childWidth;
        childNode.style.height = childHeight;
        saveAs(blob, `wallpaper-${this.domId}`);
      });

      domtoimage.toSvg(img).then((dataURL) => {
       console.log(dataURL);
      });
    },
  },
};
</script>

<style scoped>
.blob-canvas {
  width: 100vw;
  height: calc(100vw * 1.778);
}

@media screen and (min-width: 640px) {
  .blob-canvas {
    width: 350px;
    height: 450px;
  }
}

@media screen and (min-width: 768px) {
  .blob-canvas {
    width: 525px;
    height: 675px;
  }
}

@media screen and (min-width: 1280px) {
  .blob-canvas {
    width: 700px;
    height: 900px;
  }
}
</style>
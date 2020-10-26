<template>
  <g :width="`${getRandomInt(100, 300)}%`" id="blobSvg" :style="style">
    <defs>
      <linearGradient :id="this.gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" :style="{ stopColor: this.gradient[0] }" />
        <stop offset="100%" :style="{ stopColor: this.gradient[1] }" />
      </linearGradient>
    </defs>
    <path :fill="`url(#${this.gradientId})`" :id="blob.id" :d="blob.path" />
  </g>
</template>

<script>
import { generator } from "../util/generator";
import { getRandomInt } from "../util/common.util";

export default {
  name: "blobs",
  props: {
    gradient: Array,
    gradientId: Number,
  },
  data() {
    return {
      style: {
        // left: getRandomInt(-70, 60) + "%",
        // top: getRandomInt(-70, 60) + "%",
        // position:'absolute',
        transform: `rotate(${getRandomInt(0, 360)}deg) translate(${
          getRandomInt(-80, 80) + "%"
        }, ${getRandomInt(-80, 80) + "%"}) scale(${getRandomInt(100, 300)*0.01})`,
        transformOrigin:'50% 50%'
      },
      blob: {
        edges: "",
        growth: "",
        path: "",
        id: "",
        size: 500,
        x: getRandomInt(0, 700),
        y: getRandomInt(0, 900),
      },
    };
  },
  mounted() {
    this.initBlob();
  },
  methods: {
    getRandomInt,
    initBlob: function () {
      let edges = getRandomInt(2, 20);
      let growth = getRandomInt(2, 9);

      const { path, id } = generator({
        edges,
        growth,
        size: this.blob.size,
      });

      this.blob.path = path;
      this.blob.id = id;

      this.blob = {
        ...this.blob,
        edges,
        growth,
        path,
        id,
      };
    },
  },
};
</script>
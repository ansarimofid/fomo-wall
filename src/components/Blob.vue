<template>
  <div class="absolute w-full" :style="style">
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      :width="`${getRandomInt(100, 300)}%`"
      id="blobSvg"
    >
      <defs>
        <linearGradient :id="this.gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :style="{ stopColor: this.gradient[0] }" />
          <stop offset="100%" :style="{ stopColor: this.gradient[1] }" />
        </linearGradient>
      </defs>
      <path :fill="`url(#${this.gradientId})`" :id="blob.id" :d="blob.path" />
    </svg>
  </div>
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
        left: getRandomInt(-20, 100) + "%",
        top: getRandomInt(-20, 100) + "%",
        transform: `rotateZ(${getRandomInt(0, 360)}deg)`,
      },
      blob: {
        edges: "",
        growth: "",
        path: "",
        id: "",
        size: 500,
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
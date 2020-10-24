<template>
  <div class="absolute w-full" :style="style">
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      id="blobSvg"
    >
      <defs>
        <linearGradient :id="this.gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" :style="{stopColor:this.gradient[0]}" />
          <stop offset="100%" :style="{stopColor:this.gradient[1]}" />
        </linearGradient>
      </defs>
      <path :fill="`url(#${this.gradientId})`" :id="blob.id" :d="blob.path" />
    </svg>

    <div class="control hidden">
      <button @click="changeBlob" class="bg-primary px-4 py-2 text-white">
        Change Blob
      </button>
      <div class="mt-10">
        <div>Growth</div>
        <input
          @change="changeBlob"
          v-model="blob.growth"
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
          v-model="blob.edges"
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
          class="border border-gray-12 px-4 py-2"
          @change="changeBlob"
          type="number"
          v-model="blob.edges"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { generator } from "../util/generator";

import {getRandomInt} from "../util/common.util";

const changeBlob = function () {
  const { path, id } = generator({
    edges: this.blob.edges,
    growth: this.blob.growth,
    size: this.blob.size,
  });
  this.blob.path = path;
  this.blob.id = id;
};

export default {
  name: "blobs",
  props: {
    gradient: Array,
    gradientId:Number,
    blob:Object
  },
  data() {
    return {
      // blob: {
      //   edges: 6,
      //   growth: 7,
      //   size: 500,
      //   path: "",
      //   id: "",
      // },
      style: {
        left: getRandomInt(-20, 100) + "%",
        top: getRandomInt(-20, 100) + "%",
        transform: `rotateZ(${getRandomInt(0, 360)}deg)`,
      },
    };
  },
  mounted() {
    this.changeBlob();
  },
  methods: {
    changeBlob,
  }
};
</script>
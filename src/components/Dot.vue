<template>
  <g
      :style="style"
      :width="`${getRandomInt(2, 10)}%`"
    >
      <circle fill="white" cx="50" cy="50" r="50" />
    </g>
</template>

<script>
import { getRandomInt } from "../util/common.util";

export default {
  name: "dot",
  data() {
    return {
      circleSize:getRandomInt(2, 10),
      style: {
        transform: `translate(${
          getRandomInt(-6, 96) + "%"
        }, ${getRandomInt(-6, 96) + "%"}) scale(${getRandomInt(100, 300)*0.001})`,
        position:'absolute',
        zIndex:'1'
      }
    };
  },
  methods: {
    getRandomInt
  },
  computed :{
    circleWidth:function() {
      console.log(getRandomInt(2, 10));
      return getRandomInt(2, 10);
    }
  }
};
</script>
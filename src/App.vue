<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in slideDatas"
        :key="index"
      >
        <components :is="item.componentName"></components>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import SlideOne from "./components/slideOne.vue";
import SlideTwo from "./components/slideTwo.vue";
export default {
  data() {
    return {
      slideDatas: [
        {
          componentName: "slide-one",
        },
        {
          componentName: "slide-two",
        },
      ],
    };
  },
  components: {
    "slide-one": SlideOne,
    "slide-two": SlideTwo,
  },
  mounted() {
    new Swiper(this.$refs.swiperContainer, {
      direction: "vertical", // 垂直切换选项
      loop: false, // 循环模式选项
      on: {
        init: function () {
          window.swiperAnimateCache(this); //隐藏动画元素
          window.swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
          window.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        },
      },
    });
  },
};
</script>
<style scoped>
.swiper-container {
  height: 100%;
}
.swiper-slide {
  position: relative;
}
</style>
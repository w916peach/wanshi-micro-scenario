<template>
  <div class="box">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">
          <p
            class="ani"
            swiper-animate-effect="rotateIn"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.3s"
          >
            内容
          </p>
        </div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(this.$refs.swiperContainer, {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
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
  height: 100vh;
}
</style>
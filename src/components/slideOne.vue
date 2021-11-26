<template>
  <div class="slide-one">
    <!-- 学校照片 -->
    <div
      class="ani index-img"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <img src="../assets/img/index.png" alt="" />
    </div>
    <!-- 蒙版图片 -->
    <div class="index-bg">
      <img src="../assets/img/index_bg.png" alt="" />
    </div>
    <!-- 文案展示 -->
    <div class="word">
      <div
        class="logo ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <img src="../assets/img/logo.png" alt="" />
      </div>

      <div
        class="logo1 ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <img src="../assets/img/logo1.png" alt="" />
      </div>

      <div
        class="title ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <img src="../assets/img/title.png" alt="" />
      </div>

      <div
        class="title1 ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <img src="../assets/img/title1.png" alt="" />
      </div>

      <div
        class="title2 ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <img src="../assets/img/title2.png" alt="" />
      </div>

      <div
        class="xinzi ani"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <img src="../assets/img/xinzi.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100%;
}
.slide-one {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #1231b5;
}
.index-img {
  height: 100%;
}
.index-img img {
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
}
.index-bg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
}
.index-bg img {
  width: 100%;
  height: 110%;
  display: block;
}
.word {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.logo {
  width: 2.87rem;
  height: 0.74rem;
  position: absolute;
  left: 0.23rem;
  top: 0.34rem;
}
.logo1 {
  width: 2.44rem;
  height: 0.8rem;
  position: absolute;
  right: 0.46rem;
  top: 0.78rem;
}
.title {
  width: 3.62rem;
  height: 0.46rem;
  position: absolute;
  right: 0.47rem;
  top: 1.91rem;
}
.title1 {
  width: 4.03rem;
  height: 0.34rem;
  position: absolute;
  left: 0.31rem;
  top: 5.26rem;
}
.title2 {
  width: 2.93rem;
  height: 0.35rem;
  position: absolute;
  left: 0.33rem;
  top: 6.24rem;
}
.xinzi {
  width: 4.54rem;
  height: 0.4rem;
  position: absolute;
  right: 0.4rem;
  bottom: 1.3rem;
}
</style>
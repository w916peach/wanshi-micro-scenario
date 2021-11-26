<template>
  <div class="slide-two">
    <div class="bg">
      <img src="../assets/img/page2-bg.png" alt="" />
    </div>
    <!-- 序号图标1 -->
    <div
      class="ani sort1"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <img src="../assets/img/page2-1.png" alt="" />
    </div>
    <!-- 顽石科教集团大标题 -->
    <div
      class="ani title"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <img src="../assets/img/page2-title.png" alt="" />
    </div>
    <!-- 集团介绍左侧小图标 -->
    <div
      class="ani icon"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <img src="../assets/img/page2-icon.png" alt="" />
    </div>
    <!-- 集团介绍标题 -->
    <div
      class="ani text"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <img src="../assets/img/page2-text.png" alt="" />
    </div>
    <!-- 集团介绍文字 -->
    <div
      class="ani intru-text"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <p>
        顽石科教集团，成立于2014年，集团深耕IT行业，战略核心业务包括智慧城市数字化系统集成、软件产品研发与外包服务、数字化网络营销、产教融合职业教育等。旗下河北顽石教育科技有限公司，是一家集产品研发与企业内训为一体的高技术科技型公司，历经多年发展，开拓创新，不断调整企业管理机制丰富自主产品研发内容，建立极具竞争力的技术体系。为教育行业，企事业单位，政府部门客户提供一流的全面解决方案和全方位的技术支持。集团始终坚持更新迭代，保持与时俱进，立足于市场需求并持续发展，致力于为社会培养更多、更实用、更优秀的互联网专业人才。从2014年至2021年，连续多年被浪潮集团、启明星辰信息技术集团股份有限公司、中科恒运股份有限公司、北京超图软件股份有限公司评定为战略合作伙伴。
      </p>
      <p>
        在我们的努力下，和各大政府单位有着良好的合作关系，尤其是气象、粮食、农业等部门已经达成了长期合作伙伴关系，得到了客户的认可。经过多年努力我公司已与中国气象科学研究院、国家粮食局、国家农业部等多部委达成多年合作意向。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slide-two {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #1231b5;
}
.bg img {
  margin-top: -1.5rem;
  width: 110%;
}
img {
  width: 100%;
}
.sort1 {
  width: 1.4rem;
  height: 1.12rem;
  position: absolute;
  left: 0.2rem;
  top: 0.39rem;
}
.title {
  position: absolute;
  left: 1.68rem;
  top: 1.03rem;
  width: 2.81rem;
  height: 0.36rem;
}
.icon {
  position: absolute;
  left: 0.26rem;
  top: 1.91rem;
  width: 0.46rem;
  height: 0.46rem;
}
.text {
  position: absolute;
  left: 0.85rem;
  top: 1.95rem;
  width: 1.39rem;
  height: 0.27rem;
}
.intru-text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  top: 2.78rem;
  width: 7rem;
  line-height: 0.45rem;
  /* letter-spacing: 1px; */
  text-indent: 2em;
}
.intru-text p {
  margin: 0;
  font-family: FZHTJW;
}
.intru-text p:nth-child(2) {
  padding-top: 0.3rem;
}
</style>
<template>
  <div class="slide-three">
    <div class="bg">
      <img src="../assets/img/page3-bg.png" alt="" />
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
    <!-- 集团优势标题 -->
    <div
      class="ani title"
      swiper-animate-effect="zoomIn"
      swiper-animate-duration="0.5s"
      swiper-animate-delay="0s"
    >
      <img src="../assets/img/page3-title.png" alt="" />
    </div>
    <!-- 优势详细介绍 -->
    <div class="detail-box">
      <div
        v-for="(item, index) in mainTexts"
        :key="index"
        class="ani item"
        swiper-animate-effect="zoomIn"
        swiper-animate-duration="0.5s"
        swiper-animate-delay="0s"
      >
        <div class="letter-title">
          <img
            :src="require(`../assets/img/page3-${index + 1}.png`)"
            :style="{ width: item.tittleW }"
            alt=""
          />
        </div>
        <img src="../assets/img/page3-bg2.png" alt="" />
        <p :style="{ width: item.width, top: item.top }">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainTexts: [
        {
          text: "以公司的管理制度严格要求学员，实施企业化管理，培养学员的良性竞争意识，激发学员学习的积极性和主动性，学习中体验企业文化氛围，促进学员步入企业后发展，提升责任意识。",
          width: "2.1rem",
          tittleW: "2.15rem",
          top: "1rem",
        },
        {
          text: "10+年行业项目经理和20年经验的顶尖讲师组成的教学科研团队成功培养出8000余名软件工程师",
          width: "1.52rem",
          tittleW: "2.46rem",
          top: "1.5rem",
        },
        {
          text: "以公司的管理制度严格要求学员，实施企业化管理，培养学员的良性竞争意识，激发学员学习的积极性和主动性，学习中体验企业文化氛围，促进学员步入企业后发展，提升责任意识。",
          width: "2.27rem",
          tittleW: "2.15rem",
          top: "1.5rem",
        },
        {
          text: "日考+周考+月考每天了解每个学生的掌握情况保证每个学生学到真正的技术不放弃每一个学生考试未通过免费重修。",
          width: "1.49rem",
          tittleW: "2.15rem",
          top: "1.5rem",
        },
        {
          text: "全程小班授课项目化教学教学+辅导培优补差，量身栽培",
          width: "0.69rem",
          tittleW: "2.15rem",
          top: "1.5rem",
        },
        {
          text: "为学员设定了职业导向训练课程，学员不但能学习高端的技能，还能提升个人修养和职业素养，在家是懂事的孩子，在外是 优秀员工，做到成人成才双丰收。",
          width: "2.02rem",
          tittleW: "2.77rem",
          top: "1.5rem",
        },
      ],
    };
  },
};
</script>

<style scoped>
.slide-three {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #1231b5;
}
img {
  width: 100%;
  display: block;
}
.title {
  position: absolute;
  left: 0.85rem;
  top: 0.5rem;
  width: 1.39rem;
  height: 0.27rem;
}
.icon {
  position: absolute;
  left: 0.26rem;
  top: 0.45rem;
  width: 0.46rem;
  height: 0.46rem;
}
.detail-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 1rem;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
}
.detail-box .item {
  width: 50%;
  height: 3.8rem;
  position: relative;
}
.detail-box .item img {
  width: 125%;
  margin-left: -0.7rem;
}
.detail-box .item p {
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  font-family: DengXian;
}
.letter-title {
  position: relative;
  top: 0.2rem;
}
.detail-box .item .letter-title img {
  width: 100%;
  width: 2.15rem;
  margin: 0 auto;
}
</style>
<template >
  <div class="detailssjd">
    <layout-header></layout-header>
    <!-- 返回按钮 -->
    <div class="back" @click="goback">
      <i class="el-icon-back"></i>
      <p style="margin: 0">返回</p>
    </div>
    <!-- 信息介绍 -->
    <div class="box-card">
      <div class="banner">
        <img src="../../assets/img/logo.png" alt />
        <span>河湖处-第一管理所-三家店拦河闸</span>
      </div>
      <div class="area-length">
        永定河三家店拦河闸，位于北京市门头沟区三家店村西侧，是永定河引水工程渠首枢纽的重要组成部分，主要功能是拦蓄永定河上游包括官厅水库下泄水量，经调节后均匀向市区供水，满足城市工业用水、生活用水，补充城市河湖损耗水量，改善河湖水质。调节池的容量和水环境直接影响到进入市区的水质和水量。<br>
          三家店拦河闸于1956年1月～1957年3月建成。
        <p class="more"><a href="#">详细</a></p>
      </div>
    </div>
    <infos-sanjiadian></infos-sanjiadian>
  </div>
  <!-- 三家店信息表 -->

</template>

<script>
import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
import SJD from '@/components/tables/infos-sanjiadian'
export default {
  components: {
    'layout-header': LayoutHeader,
    'infos-sanjiadian': SJD
  },
  data () {
    return {

    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.detailssjd {
  background-image: url("../../assets/img/三家店.png");
  padding-top: 80px;
  height: 100vh;
  background-size: cover;
  .back {
    width: 80px;
    height: 80px;
    color: #ffffff;
    margin-left: 10px;
    text-align: center;
    // border: 1px solid red;
    i {
      font-size: 40px;
      color: rgba(0, 0, 139, 0.3);
    }
  }
  .box-card {
    background: rgba(0, 0, 0, 0.5);
    width: 300px;
    color: #ffffff;
    height: 220px;
    margin-left: 10px;
    border: 1px solid #ffffff;

    .banner {
      height: 35px;
      font-size: 15px;
      background: rgba(0, 0, 139, 0.3);
      border-bottom: 1px solid #ffffff;
      img {
        height: 34px;
        width: 35px;
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
      }
    }
    .area-length {
      float: left;
      font-size: 5px;
      text-indent: 4em;
      width: 260px;
      height: 80px;
      margin-left: 10px;
      margin-top: 10px;
      // border: 1px solid red;
      .more {
        // float: right;
        padding-top: 13px;
        // border: 1px solid red;
        // text-align: center;
        margin: 0;
        float: right;
        font-size: 15px;
        // color: #1E90FF;
      }
    }
  }
}
</style>

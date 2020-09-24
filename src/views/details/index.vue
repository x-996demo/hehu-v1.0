<template>
  <div class="details">
    <layout-header></layout-header>
    <!-- 河湖处-第三管理所-龙潭闸 -->
    <!-- 返回按钮 -->
    <div class="back" @click="goback">
      <i class="el-icon-back"></i>
      <p style="margin:0">返回</p>
    </div>
    <div class="box-card">
      <div class="banner">
        <img src="../../assets/img/logo.png" alt />
        <span>河湖处-第三管理所-龙潭闸</span>
      </div>
      <div
        class="area-length"
      >龙潭节制闸始建于1966年，改建于2013年。改建后
      的龙潭节制闸共3孔，每孔设有宽7米、高4.2米的平板舌瓣钢闸门，
      设计泄洪流量216立方米每秒，校核流量285立方米每秒，其主要功能是泄洪和调节水位。
      <p class="more"><a href="#">详细</a></p>
      </div>

    </div>
    <!-- 信息统计 -->
    <infos-LT></infos-LT>
  </div>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
import infosLT from '@/components/infos/infos-LT'
export default {
  components: {
    'layout-header': LayoutHeader,
    'infos-LT': infosLT
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
.details {
  background-image: url("../../assets/img/龙潭闸.png");
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
    i{
      font-size: 40px;
      color:  rgba(0, 0, 139, 0.3);
    }
  }
  .box-card {
    background: rgba(0, 0, 0, 0.5);
    width: 300px;
    color: #ffffff;
    height: 150px;
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

<template>
<div>
  <!-- 北京城市河湖管理处 -->
  <span class="home">
    <!-- 北京市城市河湖管理处 -->
    <div class="box-card">
      <div class="banner">
        <img src="../../assets/img/logo.png" alt />
        <span>北京市城市河湖管理处</span>
      </div>
      <div class="area-length">
        <div class="area">
          <span class="area-tit">管辖面积</span>
          <span class="area-num">125.8</span>
          <span class="area-num-last">km2</span>
        </div>
        <div class="length">
          <span class="length-tit">河渠长度</span>
          <span class="length-num">125.31</span>
          <span class="length-num-last">km2</span>
        </div>
      </div>
    </div>
  </span>
  <!-- 信息统计 -->
  <info-spliders></info-spliders>
  <!-- tabs表格 -->
  <!-- <infos-tabone></infos-tabone> -->
</div>
</template>

<script>
import infosplider from '@/components/infos/info-spliders' // 引入信息统计组件
// import tabone from '@/components/tables/infos-tabone'
export default {
  components: {
    'info-spliders': infosplider
    // 'infos-tabone': tabone
  }
}
</script>

<style lang='less' scoped>
.home {
  position: absolute;
  top: 80px;
  left: 10px;
  .box-card {
    background: rgba(0, 0, 0, 0.3);
    width: 300px;
    color: #ffffff;
    height: 100px;
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
      position: relative;
      width: 260px;
      height: 50px;
      margin-left: 24px;
      margin-top: 10px;
      // border: 1px solid red;
      .area {
        width: 120px;
        height: 50px;
        // border: 1px solid red;
        .area-tit {
          float: left;
          display: block;
          width: 10px;
          font-size: 15px;
          width: 38px;
        }
        .area-num {
          display: block;
          float: left;
          margin-top: 10px;
          width: 30px;
          font-size: 20px;
        }
        .area-num-last {
          float: right;
          margin-top: 20px;
          font-size: 5px;
        }
      }
      .length {
        position: absolute;
        right: 0;
        top: 0;
        width: 130px;
        height: 50px;
        // border: 1px solid red;
        .length-tit {
          float: left;
          display: block;
          width: 10px;
          font-size: 15px;
          width: 38px;
        }
        .length-num {
          display: block;
          float: left;
          margin-top: 10px;
          width: 30px;
          font-size: 20px;
        }
        .length-num-last {
          float: right;
          margin-top: 20px;
          font-size: 5px;
        }
      }
    }
  }
}
</style>

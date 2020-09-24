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
   <div class="infos">
    <div class="infos-tit">信息统计</div>
    <el-menu
      class="el-menu-demo"
      default-active="1"
      text-color="#fff"
      mode="horizontal"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" style @click="ManagementOffice">
        <span class="btn">管理所</span>
        <span slot="title" style="font-size:20px">
          7
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
<!-- tabone 开始-->
<!-- <infos-tabone></infos-tabone> -->
<!-- tabone 结束-->

      <el-menu-item index="2" style @click="river">
        <span class="btn">河渠</span>
        <span slot="title" style="font-size:20px">
          13
          <i style="color:#ffffff;font-size:5px">条</i>
        </span>
      </el-menu-item>
      <!-- tabtwo 开始-->

<!-- <infos-tabtwo></infos-tabtwo> -->

  <!-- tabtwo 结束-->
      <el-menu-item index="3" style @click="cancel" >
        <span class="btn">闸坝</span>
        <span slot="title" style="font-size:20px">
          24
          <i style="color:#ffffff;font-size:5px">座</i>
        </span>
      </el-menu-item>
       <!-- tabthree 开始-->
<!-- <infos-tabthree></infos-tabthree>  -->
  <!-- tabthree 结束-->
      <el-menu-item index="4" style>
        <span class="btn">水文站</span>
        <span slot="title" style="font-size:20px">
          4
          <i style="color:#ffffff;font-size:5px">座</i>
        </span>
      </el-menu-item>
      <el-menu-item index="5" style>
        <span class="btn">场区</span>
        <span slot="title" style="font-size:20px">
          7
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
      <el-menu-item index="6" style>
        <span class="btn">打捞船</span>
        <span slot="title" style="font-size:20px">
          25
          <i style="color:#ffffff;font-size:5px">艘</i>
        </span>
      </el-menu-item>
      <el-menu-item index="7" style>
        <span class="btn">绿化</span>
        <span slot="title" style="font-size:20px">
          78.1
          <i style="color:#ffffff;font-size:5px">km2</i>
        </span>
      </el-menu-item>
      <el-menu-item index="8" style>
        <span class="btn">树木</span>
        <span slot="title" style="font-size:20px">
          141
          <i style="color:#ffffff;font-size:5px">棵</i>
        </span>
      </el-menu-item>
    </el-menu>
  </div>
  <!-- tabs表格 -->
  <infos-tabone v-show="show"></infos-tabone>
  <infos-tabtwo v-show="showtwo"></infos-tabtwo>
  <infos-tabthree v-show="showthree"></infos-tabthree>
</div>
</template>

<script>
// import infosplider from '@/components/infos/info-spliders' // 引入信息统计组件
// import tabone from '@/components/tables/infos-tabone'
import tabone from '@/components/tables/infos-tabone' // 引入管理所表组件
import tabtwo from '@/components/tables/infos-tabtwo' // 引入河渠表组件
import tabthree from '@/components/tables/infos-tabthree' // 引入河渠表组件
export default {
  components: {
    // 'info-spliders': infosplider,
    'infos-tabone': tabone,
    'infos-tabtwo': tabtwo,
    'infos-tabthree': tabthree
    // 'infos-tabone': tabone
  },
  data () {
    return {
      show: false,
      showtwo: false,
      showthree: false
    }
  },
  methods: {
    ManagementOffice () {
      this.show = !this.show
      this.showtwo = false
      this.showthree = false
      // this.showtwo = !this.showtwo
    },
    river () {
      this.showthree = false
      this.show = false
      this.showtwo = !this.showtwo
    },
    cancel () {
      this.showthree = !this.showthree
      this.show = false
      this.showtwo = false
    }
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
.infos {
  position: absolute;
  top: 200px;
  left: 10px;
  color: #ffffff;
  width: 300px;
  height: 272px;
  border: 1px solid #ffffff;
  cursor: pointer;
//  /deep/ .el-drawer__container{
//     top: 80px;
//     bottom: 80px;
//     height: 70%;
//     width: 115%;
//   }
 /deep/ section {

  width: 0;

}
/deep/ .el-drawer.rtl {
  width: 20%!important;
}
 /deep/ .el-drawer{
    // background: rgba(0, 0, 0, .3);
    background: transparent;
  }

/deep/  .el-drawer.btt, .el-drawer.ttb, .el-drawer__container {
    width: 50%;
  }
  /deep/ .el-drawer__wrapper {
   bottom: 60px!important;
  //  left: 120px!important;
  }
  .infos-tit {
    height: 30px;
    // line-height: 30px;
    padding-left: 5px;
    background: rgba(0, 0, 139, 0.3);
    border-bottom: 1px solid #ffffff;
    .num {
      font-size: 25px;
      color: blue;
    }
  }
  .el-menu {
    background: rgba(0, 0, 0, 0.3);
  }
  li.el-menu-item {
    width: 148px;
    .btn {
      display: inline-block;
      width: 60px;
      line-height: 50px;
      text-align: center;
      height: 50px;
      border-radius: 5px;
      background: rgba(0, 0, 139, 0.3);
      border: 1px solid #4a7849;
    }
  }
  li.el-menu-item:is-active,
  el-menu-item:active {
    background: rgba(0, 0, 0, 0.3);
  }
  li.el-menu-item:focus {
    background: rgba(0, 0, 0, 0.3);
  }
  .el-menu-item {
    background: rgba(0, 0, 0, 0.3);
  }

  li.el-menu-item:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;

    text-align: center;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
   /deep/ .el-table tr {
    background-color: transparent;
}
}
</style>

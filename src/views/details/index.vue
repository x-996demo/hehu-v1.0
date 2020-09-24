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
    <div class="infos">
    <div class="infos-tit">信息统计</div>
     <el-menu
      class="el-menu-demo"
      default-active="1"
      text-color="#fff"
      mode="horizontal"
      active-text-color="#ffd04b"
    >
    <el-menu-item index="1" style @click="house" >
        <span class="btn">房屋</span>
        <span slot="title" style="font-size:20px">
          24
          <i style="color:#ffffff;font-size:5px">间</i>
        </span>
      </el-menu-item>
       <el-menu-item index="2" style  @click="gate">
        <span class="btn">闸门</span>
        <span slot="title" style="font-size:20px">
          3
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="3" style  >
        <span class="btn">启闭机</span>
        <span slot="title" style="font-size:20px">
          3
          <i style="color:#ffffff;font-size:5px">组</i>
        </span>
      </el-menu-item>
       <el-menu-item index="4" style  >
        <span class="btn">配电箱</span>
        <span slot="title" style="font-size:20px">
          9
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="5" style  >
        <span class="btn">摄像头</span>
        <span slot="title" style="font-size:20px">
          4
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="6" style  >
        <span class="btn">发电机</span>
        <span slot="title" style="font-size:20px">
          3
          <i style="color:#ffffff;font-size:5px">台</i>
        </span>
      </el-menu-item>
       <el-menu-item index="7" style  >
        <span class="btn">雨量站</span>
        <span slot="title" style="font-size:20px">
          1
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="8" style  >
        <span class="btn">水位站</span>
        <span slot="title" style="font-size:20px">
          1
          <i style="color:#ffffff;font-size:5px">艘</i>
        </span>
      </el-menu-item>
       <el-menu-item index="9" style  >
        <span class="btn">场区</span>
        <span slot="title" style="font-size:20px">
          1
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="10" style  >
        <span class="btn">打捞船</span>
        <span slot="title" style="font-size:20px">
          3
          <i style="color:#ffffff;font-size:5px">艘</i>
        </span>
      </el-menu-item>
       <el-menu-item index="11" style  >
        <span class="btn">绿化</span>
        <span slot="title" style="font-size:20px">
          3.3
          <i style="color:#ffffff;font-size:5px">km2</i>
        </span>
      </el-menu-item>
       <el-menu-item index="12" style  >
        <span class="btn">树木</span>
        <span slot="title" style="font-size:20px">
          113
          <i style="color:#ffffff;font-size:5px">棵</i>
        </span>
      </el-menu-item>

     </el-menu>

  </div>
    <!-- 房屋-工程信息 -->
    <infos-house v-show="showhouse"></infos-house>
    <!-- 闸门-工程信息 -->
    <infos-gate v-show="showgate"></infos-gate>
  </div>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
// import infosLT from '@/components/infos/infos-LT'
import tabhouse from '@/components/tables/infos-house' // 引入房屋表组件
import tabgate from '@/components/tables/infos-gate'
export default {
  components: {
    'layout-header': LayoutHeader,
    // 'infos-LT': infosLT,
    'infos-house': tabhouse,
    'infos-gate': tabgate
  },
  data () {
    return {
      showhouse: false,
      showgate: false
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    house () {
      this.showhouse = !this.showhouse
      this.showgate = false
    },
    gate () {
      this.showgate = !this.showgate
      this.showhouse = false
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
.infos {
  position: absolute;
  top: 320px;
  left: 10px;
  color: #ffffff;
  width: 300px;
  height: 392px;
  border: 1px solid #ffffff;
  cursor: pointer;
//   background: rgba(0, 0, 0, 0.4);
  .infos-tit {
    height: 30px;
    // line-height: 30px;
    padding-left: 5px;
    background: rgba(0, 0, 139, 0.6);
    border-bottom: 1px solid #ffffff;
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
}
</style>

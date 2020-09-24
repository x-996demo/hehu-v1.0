<template>
  <div class="infos">
    <div class="infos-tit">信息统计</div>
    <el-menu
      class="el-menu-demo"
      default-active="1"
      text-color="#fff"
      mode="horizontal"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" style @click="ManagementOffice=!ManagementOffice">
        <span class="btn">管理所</span>
        <span slot="title" style="font-size:20px">
          7
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
<!-- tabone 开始-->
<!-- <infos-tabone></infos-tabone> -->
<!-- tabone 结束-->

      <el-menu-item index="2" style @click="Canal = true">
        <span class="btn">河渠</span>
        <span slot="title" style="font-size:20px">
          13
          <i style="color:#ffffff;font-size:5px">条</i>
        </span>
      </el-menu-item>
      <!-- tabtwo 开始-->

<!-- <infos-tabtwo></infos-tabtwo> -->

  <!-- tabtwo 结束-->
      <el-menu-item index="3" style  @click="Sluicedam">
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

</template>

<script>
// import tabone from '@/components/tables/infos-tabone' // 引入管理所表组件
// import tabtwo from '@/components/tables/infos-tabtwo' // 引入河渠表组件
// import tabthree from '@/components/tables/infos-tabthree' // 引入河渠表组件
export default {
  // components: {
  //   'infos-tabone': tabone,
  //   'infos-tabtwo': tabtwo,
  //   'infos-tabthree': tabthree
  // },
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>

<style lang='less' scoped>
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

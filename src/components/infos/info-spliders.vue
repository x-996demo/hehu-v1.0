<template>
  <div class="infos">
    <div class="infos-tit">信息统计</div>
    <el-menu
    class="el-menu-demo"
    default-active="1"
    text-color="#fff"
      active-text-color="#ffd04b"
    >

  <el-menu-item index="1" style="">

        <span slot="title">导航二<i>123</i></span>
      </el-menu-item>
      <el-menu-item index="2">

        <span slot="title">导航二</span>
      </el-menu-item>
        <el-menu-item index="3">

        <span slot="title">导航二</span>

      </el-menu-item>
        <el-menu-item index="4">

        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {

}
</script>

<style lang='less' scoped>
.infos {
  position: absolute;
  top: 200px;
  left: 10px;
  color: #ffffff;
  width: 300px;
  height: 350px;
  border: 1px solid #ffffff;
  cursor: pointer;
    .infos-tit {
    height: 30px;
    // line-height: 30px;
    padding-left: 5px;
    background: rgba(0, 0, 139, 0.3);
    border-bottom: 1px solid #ffffff;
  }
  .el-menu {
background: rgba(0,0, 0, .3);
  }
  li.el-menu-item {
    width: 100px;
  }
   li.el-menu-item:is-active,
   el-menu-item:active {
    background: rgba(0,0, 0, .3);
  }
  li.el-menu-item:focus,
   el-menu-item:hover {
    background: rgba(0,0, 0, .3);
  }
  .el-menu-item {
    background: rgba(0,0, 0, .3);
  }
}
</style>

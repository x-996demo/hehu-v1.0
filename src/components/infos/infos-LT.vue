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
    <el-menu-item index="1" style @click="house" >
        <span class="btn">房屋</span>
        <span slot="title" style="font-size:20px">
          24
          <i style="color:#ffffff;font-size:5px">间</i>
        </span>
      </el-menu-item>
       <el-menu-item index="2" style  >
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
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
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

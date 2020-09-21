<template>
  <div class="bottom">
      <el-row>
        <router-link  to="/home"><el-button type="primary" plain>资产管理</el-button></router-link>
        <router-link class="btn" to="/maintain"><el-button type="primary" plain>运行维护</el-button></router-link>

      </el-row>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .bottom {
       left: 0;
       position: fixed;
       bottom: 0;
       width: 100%;
       height: 60px;
       text-align: center;
       background: rgba(0, 0, 0, .3);
     .btn{
       margin-left: 30px;
     }

  }
</style>

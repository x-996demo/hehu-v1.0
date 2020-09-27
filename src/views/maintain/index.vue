<template>
  <div class="maintain">
      <layout-header></layout-header>
<!-- 返回按钮 -->
    <div class="back" @click="goback">
      <i class="el-icon-back"></i>
      <p style="margin:0">返回</p>
    </div>
      </div>
</template>

<script>

import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
export default {
  components: {
    'layout-header': LayoutHeader
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
.maintain{
  background-image: url("../../assets/img/运行维护.png");
  padding-top: 80px;
  height: 100vh;

  background-size: cover;
  .back {
    width: 80px;
    height: 80px;
    color: #ffffff;
    margin-left: 10px;
    text-align: center;
    i{
      font-size: 40px;
      color:  rgba(0, 0, 139, 0.3);
    }
  }

}
</style>

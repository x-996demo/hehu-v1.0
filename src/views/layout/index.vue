<template>
  <div class="container">
    <!-- 顶部栏组件 -->

    <layout-header></layout-header>

    <!-- 中间容器 -->
    <div class="my-wrapper">
        <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
import LayoutFooter from '@/components/home/layout-footer' // 引入底部组件
export default {
  components: {
    'layout-header': LayoutHeader,
    'layout-footer': LayoutFooter
  }
}
</script>

<style lang='less' scoped>
.container {
  background-image: url("../../assets/img/b2.png");
  height: 100vh;
  background-size: cover;
  .my-wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      box-sizing: border-box;
  }
}
</style>

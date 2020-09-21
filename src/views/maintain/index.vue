<template>
  <div class="maintain">
      <layout-header></layout-header>
      运行维护页面
      </div>
</template>

<script>
import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
export default {
  components: {
    'layout-header': LayoutHeader
  }
}
</script>

<style lang='less' scoped>
.maintain{
  background-image: url("../../assets/img/运行维护.png");
  padding-top: 80px;
  height: 100vh;

  background-size: cover;

}
</style>

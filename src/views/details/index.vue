<template>
  <div class="details">
       <layout-header></layout-header>
      龙潭闸详情
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
.details{
  background-image: url("../../assets/img/龙潭闸.png");
  padding-top: 80px;
  height: 100vh;
  background-size: cover;

}
</style>

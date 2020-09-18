<template>
  <div class="bottom">这里是要悬浮的内容</div>
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
       height: 100px;
       background: rgba(0, 0, 0, .3);
   }
</style>

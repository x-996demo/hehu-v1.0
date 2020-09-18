<template>
<!-- 头部组件 -->
  <div class="top">
      <div class="toptitle">
          <span>城市河湖管理处--</span>
          <span>水利工程BIM运行管理系统</span>
      </div>
      <div class="userinfos">
          用户: <span>张三</span>
          <span>河湖处</span>
          <span>2020年7月6日</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
   .top {
       position: relative;
       left: 0;
       position: fixed;
       top: 0;
       width: 100%;
       height: 60px;
       background: rgba(0, 0, 0, .3);
       .toptitle{

           color: #ffffff;
           line-height: 60px;
           text-align: center;
           letter-spacing: 3px;
           span:nth-child(1) {
               font-size: 20px;
           }
           span:nth-child(2) {
           font-size: 30px;
       }
       }
       .userinfos {
           position: absolute;
           right: 50px;
           top: 30px;
           color: #ffffff;
           width: 300px;
           height: 30px;
        //    border: 1px solid red;
           span {
               margin-right: 20px;
           }
       }

   }
</style>

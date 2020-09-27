<template>
  <div  class="content">
      <span>工程信息</span>
      <div class="container">
     <table width="499">
       <tr>
         <th class="col">序号</th>
         <th class="col">名称</th>
         <th class="col"> 单位</th>
         <th class="col">内容</th>
         <th class="col">备注</th>
       </tr>
     </table>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.content {
  border: 1px solid #ffffff;
  width: 540px;
  height: 650px;
   margin-right: 10px;
   float: right;
  // margin-left: 200px;
 margin-top: -200px;
  background-color: rgba(0, 0, 0, 0.3);
  .el-tooltip__popper{max-width: 90px}
  span {
    font-size: 20px;
     color: #ffffff;
    margin-left: 20px;
  }
  .container {
    width: 500px;
    height: 600px;
    border: 1px solid #ffffff;
    margin-left: 20px;
    margin-top: 10px;
     table,
td, th {
    border: 1px solid #ffff;
    /* 合并相邻的边框 */
    border-collapse: collapse;
    font-size: 8px;
    color: #ffffff;
    text-align: center;
}
.col:nth-child(1){
  width: 30px;
}
.col:nth-child(3){
  width: 80px;
}
.col:nth-child(4){
  width: 120px;
}
.col:nth-child(5){
  width: 30px;
}
  }
}
</style>

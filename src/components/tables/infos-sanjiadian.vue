<template>
  <div  class="content">
      <span>工程信息</span>
      <div class="container">
     <table width="549">
      <thead>
         <tr>
         <th class="col">序号</th>
         <th class="col" colspan="3">名称</th>

         <th class="col"> 单位</th>
         <th class="col" >内容</th>
         <th class="col">备注</th>
       </tr>
      </thead>
      <tbody>
         <tr>
         <th class="col">1</th>
         <th class="col" colspan="3">水文</th>

         <th class="col"> </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">1.1</th>
         <th class="col" colspan="3">闸上游流域面积</th>

         <th class="col">km2</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">1.2</th>
          <th class="col" rowspan="2" width='80'>流量</th>
         <th class="col" colspan="2">1000年一遇设计</th>
         <th class="col">m3/s</th>
         <th class="col"></th>

       </tr>
        <tr>
         <th class="col">1.3</th>
         <th class="col" colspan="2">1000年一遇校核</th>
         <th class="col">m3/s</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">1.4</th>
          <th class="col" rowspan="5">水位</th>
         <th class="col" colspan="2">闸上正常水位</th>

         <th class="col">m</th>
         <th class="col"></th>

       </tr>
        <tr>
         <th class="col">1.5</th>
         <th class="col" rowspan="2" width='100'>1000年一遇洪水位</th>
         <th class="col">闸上</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">1.6</th>

         <th class="col">闸下</th>
         <th class="col">m</th>
         <th class="col"></th>

       </tr>
          <tr>
         <th class="col">1.7</th>
         <th class="col" rowspan="2">1000年一遇洪水位</th>
         <th class="col">闸上</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">1.8</th>

         <th class="col">闸下</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>

       </tr>
        <tr>
         <th class="col">2</th>
         <th class="col" colspan="3">工程规模,等级和标准</th>

         <th class="col"> </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">2.1</th>
         <th class="col" colspan="3">工程规模</th>

         <th class="col">型 </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
           <tr>
         <th class="col">2.2</th>
         <th class="col" colspan="3">工程等别</th>

         <th class="col">等 </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
         <tr>
         <th class="col">2.3</th>
         <th class="col" colspan="3">主要建筑物级别</th>

         <th class="col">级 </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">2.4</th>
         <th class="col" colspan="3">地震设防烈度</th>

         <th class="col">度</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">3</th>
         <th class="col" colspan="3">主要建筑物</th>

         <th class="col"></th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.1</th>
         <th class="col" colspan="3">闸室总净宽</th>

         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">3.2</th>
         <th class="col" colspan="3">孔数=孔宽×孔高</th>

         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">3.3</th>
          <th class="col" rowspan="3" width='80'>顺水流方向工程布置</th>
         <th class="col" colspan="2">上游连接段</th>
         <th class="col">m</th>
         <th class="col">内容(长度):</th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.4</th>

         <th class="col" colspan="2">闸室段</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.5</th>

         <th class="col" colspan="2">下游连接段</th>
         <th class="col">m</th>
         <th class="col">内容(长度):</th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.6</th>
         <th class="col" rowspan="4" width='80'>高程</th>
         <th class="col" colspan="2">闸室底板</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.7</th>

         <th class="col" colspan="2">墩顶</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.8</th>

         <th class="col" colspan="2">工作桥面</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.9</th>

         <th class="col" colspan="2">机架桥桥面</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">3.10</th>

         <th class="col" colspan="2">翼墙顶</th>
         <th class="col">m</th>
         <th class="col"></th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
          <tr>
         <th class="col">4</th>
         <th class="col" colspan="3">主要设备</th>

         <th class="col"> </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">4.1</th>
         <th class="col" colspan="3">闸门形式</th>

         <th class="col"></th>
         <th class="col">尺寸:</th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">4.2</th>
         <th class="col" colspan="3">启闭机类型</th>

         <th class="col"></th>
         <th class="col">型号:</th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">4.3</th>
          <th class="col" rowspan="3" width='80'>供电系统</th>
         <th class="col" colspan="2">市电1</th>
         <th class="col">KV</th>
         <th class="col">名称:</th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">4.4</th>

         <th class="col" colspan="2">市电2</th>
         <th class="col">KV</th>
         <th class="col">名称:</th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">4.5</th>

         <th class="col" colspan="2">发电车</th>
         <th class="col">KW</th>
         <th class="col">型号:</th>
         <th class="col"></th>
       </tr>
       <tr>
         <th class="col">4.6</th>
          <th class="col" rowspan="3" width='80'>闸控系统</th>
         <th class="col" colspan="2">现地控制柜</th>
         <th class="col"></th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">4.7</th>

         <th class="col" colspan="2">远程控制柜</th>
         <th class="col"></th>
         <th class="col">形式:</th>
         <th class="col"></th>
       </tr>
        <tr>
         <th class="col">4.8</th>

         <th class="col" colspan="2">自动化控制</th>
         <th class="col"></th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
         <tr>
         <th class="col">5</th>
         <th class="col" colspan="3">其他</th>

         <th class="col"> </th>
         <th class="col"></th>
         <th class="col"></th>
       </tr>
      </tbody>
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
  width: 580px;
  height: 650px;
   margin-right: 10px;
   float: right;
  // margin-left: 200px;
 margin-top: -250px;
  background-color: rgba(0, 0, 0, 0.5);
  .el-tooltip__popper{max-width: 90px}
  span {
    font-size: 20px;
     color: #ffffff;
    margin-left: 20px;
  }
  .container {
    width: 550px;
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
table ,thead tbody {
  display: block;
        height: 600px;
        width: 549px;
        overflow-y: scroll;
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
.col:nth-child(6){
  width: 80px;
}
  }
}
</style>

<template>
  <div class="content">
    <span>工程信息</span>

    <el-table
      height="400"
      :data="tableData"
      border
      style="width: 310px; padding:5px;margin-left:10px;margin-top:10px"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
      @row-click="openDialog"
    >
      <el-table-column prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="闸坝名称" width="100" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="address" label="管理单位" width="90" :show-overflow-tooltip="true"></el-table-column>

      <el-table-column prop="details" label="详细" width="69"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background: rgba(0, 0, 0, .1);color:#ffffff;'
    }
  }

}
</script>

<style lang='less' scoped>
.content {
  border: 1px solid #ffffff;
  width: 340px;
  height: 450px;
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

  .el-table thead,
  .el-table {
    font-size: 5px;

  }
}
/deep/ .el-card__body {
  padding: 0;
}
.tebale_card {
  background-color: rgba(0, 0, 0, 0.3);
  margin-right: 20px;
  margin-top: 10px;
  margin-left: 10px;

  // span{
  //     position: absolute;
  // }
}
/deep/ .el-table tbody tr:hover > td {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
.el-table,
.el-table__expanded-cell {
  background-color: #3f5c6d2c;
  color: #ffffff;
}
 /deep/.el-table tr {
  background: transparent!important;
}
</style>

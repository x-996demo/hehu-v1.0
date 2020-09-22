<template>
  <div class="content">
    <span>管理所</span>

    <el-table
      height="400"
      :data="tableData"
      border
      style="width: 310px; padding:5px;margin-left:10px;margin-top:10px"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
    >
      <el-table-column prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="管理所" width="95" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="address" label="位置" width="100" :show-overflow-tooltip="true"></el-table-column>

      <el-table-column prop="details" label="详细" width="60"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          num: '1',
          name: '第一管理所',
          address: '门头沟三家店',
          details: '详细'
        },
        {
          num: '2',
          name: '第二管理所',
          address: '西城天宁寺',
          details: '详细'
        },
        {
          num: '3',
          name: '第一管理所',
          address: '东城区龙潭闸',
          details: '详细'
        },
        {
          num: '4',
          name: '第四管理所',
          address: '石景山引渠南路',
          details: '详细'
        },
        {
          num: '5',
          name: '北环水系管理所',
          address: '海淀区德胜门',
          details: '详细'
        },
        {
          num: '6',
          name: '土城河道管理所',
          address: '海淀区土城',
          details: '详细'
        },
        {
          num: '7',
          name: '通惠河管理所',
          address: '通州区高碑店',
          details: '详细'
        }

      ]
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
  background-color: rgba(0, 0, 0, 0.3);
  .el-tooltip__popper{max-width: 90px}
  span {
    font-size: 20px;
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
</style>

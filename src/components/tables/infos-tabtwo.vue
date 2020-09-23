<template>
  <div class="content">
    <span>河渠</span>

    <el-table
      height="400"
      :data="tableData"
      border
      style="width: 350px; padding:5px;margin-left:10px;margin-top:10px"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
    >
      <el-table-column prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="河名" width="80" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="length" label="长度(km)" width="60" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="address" label="管理单位" width="90" :show-overflow-tooltip="true"></el-table-column>
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
          name: '永定河引水渠',
          length: '35.23',
          address: '第一管理所',
          details: '详细'
        },
        {
          num: '2',
          name: '昆玉河',
          length: '9.18',
          address: '第四管理所',
          details: '详细'
        },
        {
          num: '3',
          name: '南长河',
          length: '8.76',
          address: '第四管理所',
          details: '详细'
        },
        {
          num: '4',
          name: '转河',
          length: '3.45',
          address: '第四管理所',
          details: '详细'
        },
        {
          num: '5',
          name: '双紫支渠',
          length: '2.54',
          address: '第四管理所',
          details: '详细'
        },
        {
          num: '6',
          name: '南护城河',
          length: '21.67',
          address: '第三管理所',
          details: '详细'
        },
        {
          num: '7',
          name: '北护城河',
          length: '8.13',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '8',
          name: '小月河',
          length: '4.76',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '9',
          name: '东土城沟',
          length: '4.12',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '10',
          name: '西土城沟',
          length: '3.5',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '11',
          name: '筒子河',
          length: '4.11',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '12',
          name: '通惠河',
          length: '14.73',
          address: '通惠河管理所',
          details: '详细'
        },
        {
          num: '13',
          name: '二道沟',
          length: '4.13',
          address: '通惠河管理所',
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
  width: 370px;
  height: 450px;
  // margin-left: 200px;
  margin-top: 80px;
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

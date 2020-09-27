<template>

    <div class="content">
    <span>闸坝</span>

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
      tableData: [
        {
          num: '1',
          name: '三家店拦河闸',
          address: '第一管理所',
          details: '详细'
        },
        {
          num: '2',
          name: '高井闸',
          address: '第二管理所',
          details: '详细'
        },
        {
          num: '3',
          name: '团城湖南闸',
          address: '第二管理所',
          details: '详细'
        },
        {
          num: '4',
          name: '玉渊潭进水闸',
          address: '第二管理所',
          details: '详细'
        },
        {
          num: '5',
          name: '玉渊潭船闸',
          address: '第二管理所',
          details: '详细'
        },
        {
          num: '6',
          name: '玉渊潭泄水闸',
          address: '第二管理所',
          details: '详细'
        },
        {
          num: '7',
          name: '二热闸',
          address: '第二管理所',
          details: '详细'
        },
        {
          num: '8',
          name: '太平街橡胶坝',
          address: '第三管理所',
          details: '详细'
        },
        {
          id: '9',
          num: '9',
          name: '龙潭闸',
          address: '第三管理所',
          details: '详细'
        },
        {
          num: '10',
          name: '右安门橡胶坝',
          address: '第三管理所',
          details: '详细'
        },
        {
          num: '11',
          name: '东便门橡胶坝',
          address: '第三管理所',
          details: '详细'
        },
        {
          num: '12',
          name: '长河闸',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '13',
          name: '紫御湾船闸',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '14',
          name: '北展闸',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '15',
          name: '松林闸',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '16',
          name: '安定门闸',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '17',
          name: '东直门闸',
          address: '北环水系管理所',
          details: '详细'
        },
        {
          num: '18',
          name: '祁家裕进水闸',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '19',
          name: '小关闸',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '20',
          name: '土城沟出口闸',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '21',
          name: '学清闸',
          address: '土城河道管理所',
          details: '详细'
        },
        {
          num: '22',
          name: '大北窑橡胶坝',
          address: '通惠河管理所',
          details: '详细'
        },
        {
          num: '23',
          name: '高碑店闸',
          address: '通惠河管理所',
          details: '详细'
        },
        {
          num: '24',
          name: '普济闸',
          address: '通惠河管理所',
          details: '详细'
        },
        {
          num: '25',
          name: '显塔寺闸',
          address: '通惠河管理所',
          details: '详细'
        },
        {
          num: '26',
          name: '二道沟闸',
          address: '通惠河管理所',
          details: '详细'
        }

      ]
    }
  },
  methods: {
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background: rgba(0, 0, 0, .1);color:#ffffff;'
    },
    openDialog (row) {
      if (row.num === '9') {
        this.$router.push({
          path: '/details'
        })
      } else if (row.num === '1') {
        this.$router.push({
          path: '/detailsSJD'
        })
      } else {
        return false
      }
    }
  }

}
</script>

<style lang='less' scoped>

.content {
  border: 1px solid #ffffff;
  float: right;
  margin-right: 10px;
  width: 340px;
  height: 450px;
  // margin-left: 200px;
  margin-top: 80px;
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

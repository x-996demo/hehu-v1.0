<template>
  <div class="content">
    <span>工程信息</span>

    <el-table
      height="600"
      :data="tableData"
      border
      style="width: 310px; padding:5px;margin-left:10px;margin-top:10px"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
      lazy
      :load="load"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :cell-style="{padding: '4px'}"
      :span-method="arraySpanMethod"
    >

      <el-table-column prop="name" label="项目" width="110" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="content" label="内容" width="129" :show-overflow-tooltip="true"></el-table-column>

      <el-table-column prop="details" label="备注" width="70"></el-table-column>
      <!-- <el-table-column prop="" label="水工建筑师" width="319"></el-table-column> -->

    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: '项目名称',
          content: '龙潭闸节制间'
        }, {
          id: 2,
          name: '工程位置',
          content: '北京市崇文区龙潭路4号'
        },
        {
          id: 3,
          name: '工程投资总额(万元)',
          content: '298.75'
        }, {
          id: 4,
          name: '投资来源',
          content: '国家财政拨款'
        },
        {
          id: 5,
          name: '立项建议书审批文号',
          content: 'GJSZ19640705'
        }, {
          id: 6,
          name: '立项建议书批准部门',
          content: '水利部'
        },
        {
          id: 7,
          name: '可行性研究报告审批文号',
          content: 'GJSZ19640915'
        }, {
          id: 8,
          name: '可行性研究报告审批准部门',
          content: '北京市水利局'
        },
        {
          id: 9,
          name: '初步设计审批(文号)',
          content: 'GJSZ19641209'
        }, {
          id: 10,
          name: '开完工日期',
          content: '1966.8.8'
        },
        {
          id: 11,
          name: '质量监督单位',
          content: ''
        }, {
          id: 12,
          name: '安全监督单位',
          content: ''
        },
        {
          id: 13,
          name: '项目法人',
          content: '北京市城市河湖处'
        }, {
          id: 14,
          name: '勘察单位',
          content: ''
        },
        {
          id: 15,
          name: '设计单位',
          content: '北京市水利设计院'
        }, {
          id: 16,
          name: '监理单位',
          content: ''
        },
        {
          id: 17,
          name: '施工单位1',
          content: ''
        }, {
          id: 18,
          name: '施工单位2',
          content: ''
        },
        {
          id: 19,
          name: '施工单位3',
          content: ''
        }, {
          id: 20,
          name: '其他',
          content: ''
        },
        {
          id: 21,
          name: '工程改建',
          content: ''
        }, {
          id: 22,
          name: '工程投资总额(万元)',
          content: '2697.76'
        },
        {
          id: 23,
          name: '投资来源',
          content: '国家财政拨款'
        }, {
          id: 24,
          name: '初步设计审批(文号)',
          content: 'GJSZ20110108'
        },
        {
          id: 25,
          name: '开完工日期',
          content: '2013.7.6'
        },
        {
          id: 26,
          name: '质量监督单位',
          content: ''
        },
        {
          id: 27,
          name: '安全监督单位',
          content: ''
        },
        {
          id: 28,
          name: '水工建筑物',
          content: '',
          hasChildren: true
        },
        {
          id: 29,
          name: '闸门及配套',
          content: '',
          hasChildren: true
        },
        {
          id: 30,
          name: '供电控制系统',
          content: '',
          hasChildren: true
        },
        {
          id: 31,
          name: '水工建筑物监测系统',
          content: '',
          hasChildren: true
        },
        {
          id: 32,
          name: '其他',
          content: '',
          hasChildren: true
        }

      ],
      activeNames: ['']
    }
  },
  methods: {
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background: rgba(0, 0, 0, .1);color:#ffffff;'
    },
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 27) {
        if (columnIndex === 0) {
          return [1, 3]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    load (tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 33,
            name: '1',
            content: ''
          }, {
            id: 34,
            name: '2',
            content: ''
          }
        ])
      }, 1000)
    },
    handleChange (val) {
      console.log(val)
    }
  }

}
</script>

<style lang='less' scoped>
.content {
  border: 1px solid #ffffff;
  width: 340px;
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
 .el-table .success-row {
    background: #f0f9eb;
  }
</style>

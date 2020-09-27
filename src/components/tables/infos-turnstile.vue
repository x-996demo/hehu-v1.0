<template>
  <div class="content">
    <span>启闭机</span>
   <el-tabs :tab-position="tabPosition" style="height:460px;width:500px">
      <el-tab-pane label="设备信息">
        <el-table
      height="450"
      :data="tableData"
      border
      style="width: 320px; padding:5px;margin-left:10px;margin-top:10px"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
      lazy
      :load="load"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :cell-style="{padding: '4px'}"
       @row-click="rowClick(row)"
       :expand-row-keys="['1']"
        :span-method="arraySpanMethod"
    >

      <el-table-column prop="name" label="项目" width="170" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="content" label="内容" width="70" :show-overflow-tooltip="true"></el-table-column>

      <el-table-column prop="details" label="备注" width="70"></el-table-column>

    </el-table>
      </el-tab-pane>
    <el-tab-pane label="维护信息">维护信息</el-tab-pane>
   </el-tabs>
    <!-- <el-table
      height="450"
      :data="tableData"
      border
      style="width: 370px; padding:5px;margin-left:10px;margin-top:10px"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
      lazy
      :load="load"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :cell-style="{padding: '4px'}"
       @row-click="rowClick(row)"
       :expand-row-keys="['1']"
        :span-method="arraySpanMethod"
    >

      <el-table-column prop="name" label="项目" width="170" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="content" label="内容" width="129" :show-overflow-tooltip="true"></el-table-column>

      <el-table-column prop="details" label="备注" width="70"></el-table-column>

    </el-table> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabPosition: 'right',
      tableData: [
        {
          id: 1,
          name: '一号启闭机',
          content: '',
          hasChildren: true,
          children: [
            {
              id: 33,
              name: '1号启闭机编码',
              content: 'LTZ-QBJ001'
            }, {
              id: 34,
              name: '1号启闭机型号',
              content: 'KFC01-JD'
            },
            {
              id: 35,
              name: '1号启闭机长度(m)',
              content: '1.8'
            },
            {
              id: 36,
              name: '1号启闭机宽度(m)',
              content: '0.6'
            },
            {
              id: 37,
              name: '1号启闭机高度(m)',
              content: '1.5'
            },
            {
              id: 38,
              name: '1号启闭机重量(kg)',
              content: '1.2'
            },
            {
              id: 39,
              name: '购买时间',
              content: '2014'
            },
            {
              id: 40,
              name: '购买价格(元)',
              content: '280000'
            },
            {
              id: 41,
              name: '启闭机使用寿命(年)',
              content: '15'
            }
          ]
        },
        {
          id: 2,
          name: '二号启闭机',
          content: '',
          hasChildren: true,
          children: [
            {
              id: 222,
              name: '测试222',
              content: '280000'
            },
            {
              id: 2222,
              name: '测试2222',
              content: '280000'
            }

          ]
        },
        {
          id: 3,
          name: '三号启闭机',
          content: '',
          hasChildren: true,
          children: [
            {
              id: 333,
              name: '测试333',
              content: '280000'
            },
            {
              id: 3333,
              name: '测试3333',
              content: '280000'
            }

          ]
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
      if (row.id === 1 || row.id === 2 || row.id === 3) {
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
            name: '1号启闭机编码',
            content: 'LTZ-QBJ001'
          }, {
            id: 34,
            name: '1号启闭机型号',
            content: 'KFC01-JD'
          },
          {
            id: 35,
            name: '1号启闭机长度(m)',
            content: '1.8'
          },
          {
            id: 36,
            name: '1号启闭机宽度(m)',
            content: '0.6'
          },
          {
            id: 37,
            name: '1号启闭机高度(m)',
            content: '1.5'
          },
          {
            id: 38,
            name: '1号启闭机重量(kg)',
            content: '1.2'
          },
          {
            id: 39,
            name: '购买时间',
            content: '2014'
          },
          {
            id: 40,
            name: '购买价格(元)',
            content: '280000'
          },
          {
            id: 41,
            name: '启闭机使用寿命(年)',
            content: '15'
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
  width: 500px;
  height: 500px;
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
    // margin-left: 40px!important;
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
 /deep/ .el-tabs__item {
  padding: 0 0 0 5px!important;
  // width: 105px;
  color: #ffffff;
}
/deep/ .el-tabs__content {
  width: 400px!important;
}
/deep/ .el-tabs__item .is-right {
 width: 25px!important;
}
/deep/ .el-tabs__nav-scroll {
  width: 70px!important;
}
/deep/ .el-tabs__item:hover {
      color: #409EFF!important;
}
 /deep/ .el-tabs__item.is-active {
  color: #409EFF!important;
}
 .el-table .success-row {
    background: #f0f9eb;
  }
</style>

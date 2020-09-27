<template>
  <div :class="{details:chose1,details1:chose2}">
    <layout-header></layout-header>
    <!-- 河湖处-第三管理所-龙潭闸 -->
    <!-- 返回按钮 -->
    <div class="back" @click="goback">
      <i class="el-icon-back"></i>
      <p style="margin:0">返回</p>
    </div>
    <div class="box-card">
      <div class="banner">
        <img src="../../assets/img/logo.png" alt />
        <span>河湖处-第三管理所-龙潭闸</span>
      </div>
      <div
        class="area-length"
      >龙潭节制闸始建于1966年，改建于2013年。改建后
      的龙潭节制闸共3孔，每孔设有宽7米、高4.2米的平板舌瓣钢闸门，
      设计泄洪流量216立方米每秒，校核流量285立方米每秒，其主要功能是泄洪和调节水位。
      <p class="more"><a href="#">详细</a></p>
      </div>

    </div>
    <!-- 信息统计 -->
    <div class="infos">
    <div class="infos-tit">信息统计</div>
     <el-menu
      class="el-menu-demo"
      default-active="1"
      text-color="#fff"
      mode="horizontal"
      active-text-color="#ffd04b"
    >
    <el-menu-item index="1" style @click="house" >
        <span class="btn">房屋</span>
        <span slot="title" style="font-size:20px" class="title">
          24
          <i style="color:#ffffff;font-size:5px">间</i>
        </span>
      </el-menu-item>
       <el-menu-item index="2" style  @click="gate">
        <span class="btn">闸门</span>
        <span slot="title" style="font-size:20px" class="title">
          3
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="3" style @click="trunstile" >
        <span class="btn">启闭机</span>
        <span slot="title" style="font-size:20px" class="title">
          3
          <i style="color:#ffffff;font-size:5px">组</i>
        </span>
      </el-menu-item>
       <el-menu-item index="4" style  >
        <span class="btn">配电箱</span>
        <span slot="title" style="font-size:20px" class="title">
          9
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="5" style  >
        <span class="btn">摄像头</span>
        <span slot="title" style="font-size:20px" class="title">
          4
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="6" style  >
        <span class="btn">发电机</span>
        <span slot="title" style="font-size:20px" class="title">
          3
          <i style="color:#ffffff;font-size:5px">台</i>
        </span>
      </el-menu-item>
       <el-menu-item index="7" style  >
        <span class="btn">雨量站</span>
        <span slot="title" style="font-size:20px" class="title">
          1
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="8" style  >
        <span class="btn">水位站</span>
        <span slot="title" style="font-size:20px" class="title">
          1
          <i style="color:#ffffff;font-size:5px">艘</i>
        </span>
      </el-menu-item>
       <el-menu-item index="9" style  >
        <span class="btn">场区</span>
        <span slot="title" style="font-size:20px" class="title">
          1
          <i style="color:#ffffff;font-size:5px">个</i>
        </span>
      </el-menu-item>
       <el-menu-item index="10" style  >
        <span class="btn">打捞船</span>
        <span slot="title" style="font-size:20px" class="title">
          3
          <i style="color:#ffffff;font-size:5px">艘</i>
        </span>
      </el-menu-item>
       <el-menu-item index="11" style  >
        <span class="btn">绿化</span>
        <span slot="title" style="font-size:20px" class="title">
          3.3
          <i style="color:#ffffff;font-size:5px">km2</i>
        </span>
      </el-menu-item>
       <el-menu-item index="12" style  >
        <span class="btn">树木</span>
        <span slot="title" style="font-size:20px" class="title">
          113
          <i style="color:#ffffff;font-size:5px">棵</i>
        </span>
      </el-menu-item>

     </el-menu>

  </div>
    <!-- 房屋-工程信息 -->
    <infos-house v-show="showhouse"></infos-house>
    <!-- 闸门-工程信息 -->
    <!-- <infos-gate v-show="showgate"></infos-gate> -->
    <div class="content" v-show="showgate" >
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
      @row-click="dialog"

    >

      <el-table-column prop="name" label="项目" width="110" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="content" label="内容" width="129" :show-overflow-tooltip="true"></el-table-column>

      <el-table-column prop="details" label="备注" width="70"></el-table-column>
      <!-- <el-table-column prop="" label="水工建筑师" width="319"></el-table-column> -->

    </el-table>
    <!-- 弹层 -->

  </div>
    <!-- 启闭机 -->
    <infos-turnstile v-show="showturnstile"></infos-turnstile>
 <!-- 放置一个el-dialog组件 -->
 <el-dialog :visible="dialogVisible" @close="dialogVisible=false" >
   <!-- 放置走马灯组件 -->
   <el-carousel :interval="500000" indicator-position="otuside" height="400px" >
     <el-carousel-item  v-for="item in imgs" :key="item" >
       <!-- <img width="100%" height="100%" src="../../assets/img/启闭机.png" alt=""> -->
       <div class="demo-image__preview">
<el-image
    style="width: 100%; height: 100%"
    :src="item"

    :preview-src-list="srcList">
  </el-image>
       </div>

     </el-carousel-item>
   </el-carousel>
 </el-dialog>
  </div>
</template>

<script>
import picone from '../../assets/img/1.png'
import pictwo from '../../assets/img/2.png'
import picthree from '../../assets/img/3.png'
import picfour from '../../assets/img/4.png'
import picfive from '../../assets/img/5.png'
import LayoutHeader from '@/components/home/layout-header' // 引入头部组件
// import infosLT from '@/components/infos/infos-LT'
import tabhouse from '@/components/tables/infos-house' // 引入房屋表组件
// import tabgate from '@/components/tables/infos-gate' // 引入闸门组件
import turnstile from '@/components/tables/infos-turnstile' // 引入启闭机组件

export default {
  components: {
    'layout-header': LayoutHeader,
    // 'infos-LT': infosLT,
    'infos-house': tabhouse,
    // 'infos-gate': tabgate,
    'infos-turnstile': turnstile

  },
  data () {
    return {
      dialogVisible: false,
      showhouse: false,
      showgate: false,
      showturnstile: false,
      chose1: true,
      chose2: false,
      tableData: [
        {
          id: 1,
          name: '初步设计审批(文号)',
          content: 'GJSZ19641209'
        }, {
          id: 2,
          name: '开完工日期',
          content: '1996.8.8'
        },
        {
          id: 3,
          name: '质量监督单位',
          content: '298.75'
        }, {
          id: 4,
          name: '安全监督单位',
          content: ''
        },
        {
          id: 5,
          name: '项目法人',
          content: '北京市城市河湖处'
        }, {
          id: 6,
          name: '勘察单位',
          content: ''
        },
        {
          id: 7,
          name: '设计单位',
          content: '北京市水利设计院'
        }, {
          id: 8,
          name: '监理单位',
          content: ''
        },
        {
          id: 9,
          name: '施工单位1',
          content: ''
        }, {
          id: 10,
          name: '施工单位2',
          content: ''
        },
        {
          id: 11,
          name: '施工单位3',
          content: ''
        }, {
          id: 12,
          name: '安全监督单位',
          content: ''
        },
        {
          id: 13,
          name: '其他',
          content: ''
        }, {
          id: 14,
          name: '工程改建',
          content: ''
        },
        {
          id: 15,
          name: '工程投资总额(万元)',
          content: '2698.75'
        }, {
          id: 16,
          name: '投资来源',
          content: '国家财政拨款'
        },
        {
          id: 17,
          name: '初步设计审批(文号)',
          content: 'GJSZ20110108'
        }, {
          id: 18,
          name: '开完工日期',
          content: '2013.7.6'
        },
        {
          id: 19,
          name: '质量监督单位',
          content: ''
        }, {
          id: 20,
          name: '安全监督单位',
          content: ''
        },
        {
          id: 21,
          name: '项目法人',
          content: '北京市城市河湖处'
        }, {
          id: 22,
          name: '勘察单位',
          content: ''
        },
        {
          id: 23,
          name: '设计单位',
          content: '北京市水利规划设计院'
        }, {
          id: 24,
          name: '监理单位',
          content: ''
        },
        {
          id: 25,
          name: '监理单位1',
          content: ''
        },
        {
          id: 26,
          name: '监理单位2',
          content: ''
        },
        {
          id: 27,
          name: '监理单位3',
          content: ''
        },
        {
          id: 28,
          name: '其他',
          content: ''
        },
        {
          id: 29,
          name: '施工图纸',
          content: '详细'
        },
        {
          id: 30,
          name: '水工建筑物',
          content: '',
          hasChildren: true
        },
        {
          id: 31,
          name: '闸门及配套',
          content: '',
          hasChildren: true
        },
        {
          id: 32,
          name: '供电控制系统',
          content: '',
          hasChildren: true
        },
        {
          id: 33,
          name: '水工建筑物监测系统',
          content: '',
          hasChildren: true
        },
        {
          id: 34,
          name: '其他',
          content: '',
          hasChildren: true
        }

      ],
      activeNames: [''],
      // url: '../../assets/img/启闭机.png',
      imgs: [
        picone,
        pictwo,
        picthree,
        picfour,
        picfive

      ],
      srcList: [
        picone,
        pictwo,
        picthree,
        picfour,
        picfive
      ]
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    house () {
      this.chose1 = true
      this.chose2 = false
      this.showhouse = !this.showhouse
      this.showgate = false
      this.showturnstile = false
    },
    gate () {
      this.chose1 = true
      this.chose2 = false
      this.showgate = !this.showgate
      this.showhouse = false
      this.showturnstile = false
    },
    trunstile () {
      // this.style.backgroundImage = "url('../../assets/img/启闭机.png')"
      this.chose1 = !this.chose1
      this.chose2 = !this.chose2
      this.showturnstile = !this.showturnstile
      this.showgate = false
      this.showhouse = false
    },
    getRowClass ({ row, column, rowIndex, columnIndex }) {
      return 'background: rgba(0, 0, 0, .1);color:#ffffff;'
    },
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 29) {
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
            id: 35,
            name: '1',
            content: ''
          }, {
            id: 36,
            name: '2',
            content: ''
          }
        ])
      }, 1000)
    },
    handleChange (val) {
      console.log(val)
    },
    dialog (row) {
      if (row.name === '施工图纸') {
        this.dialogVisible = true
      }
    }
  }
}
</script>

<style lang='less' scoped>
.details {
  background-image: url("../../assets/img/龙潭闸.png");
  padding-top: 80px;
  height: 100vh;
  background-size: cover;
  .back {
    width: 80px;
    height: 80px;
    color: #ffffff;
    margin-left: 10px;
    text-align: center;
    // border: 1px solid red;
    i{
      font-size: 40px;
      color:  rgba(0, 0, 139, 0.3);
    }
  }
  .box-card {
    background: rgba(0, 0, 0, 0.5);
    width: 300px;
    color: #ffffff;
    height: 150px;
    margin-left: 10px;
    border: 1px solid #ffffff;

    .banner {
      height: 35px;
      font-size: 15px;
      background: rgba(0, 0, 139, 0.3);
      border-bottom: 1px solid #ffffff;
      img {
        height: 34px;
        width: 35px;
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
      }
    }
    .area-length {
      float: left;
      font-size: 5px;
      text-indent: 4em;
      width: 260px;
      height: 80px;
      margin-left: 10px;
      margin-top: 10px;
      // border: 1px solid red;
    .more {
      // float: right;
      padding-top: 13px;
      // border: 1px solid red;
      // text-align: center;
      margin: 0;
      float: right;
      font-size: 15px;
      // color: #1E90FF;
    }
    }
  }
}
.details1 {
  background-image: url("../../assets/img/启闭机.png");
  padding-top: 80px;
  height: 100vh;
  background-size: cover;
  .back {
    width: 80px;
    height: 80px;
    color: #ffffff;
    margin-left: 10px;
    text-align: center;
    // border: 1px solid red;
    i{
      font-size: 40px;
      color:  rgba(0, 0, 139, 0.3);
    }
  }
  .box-card {
    background: rgba(0, 0, 0, 0.5);
    width: 300px;
    color: #ffffff;
    height: 150px;
    margin-left: 10px;
    border: 1px solid #ffffff;

    .banner {
      height: 35px;
      font-size: 15px;
      background: rgba(0, 0, 139, 0.3);
      border-bottom: 1px solid #ffffff;
      img {
        height: 34px;
        width: 35px;
        vertical-align: middle;
      }
      span {
        margin-left: 10px;
      }
    }
    .area-length {
      float: left;
      font-size: 5px;
      text-indent: 4em;
      width: 260px;
      height: 80px;
      margin-left: 10px;
      margin-top: 10px;
      // border: 1px solid red;
    .more {
      // float: right;
      padding-top: 13px;
      // border: 1px solid red;
      // text-align: center;
      margin: 0;
      float: right;
      font-size: 15px;
      // color: #1E90FF;
    }
    }
  }
}
.infos {
  position: absolute;
  top: 320px;
  left: 10px;
  color: #ffffff;
  width: 300px;
  height: 392px;
  border: 1px solid #ffffff;
  cursor: pointer;
//   background: rgba(0, 0, 0, 0.4);
  .infos-tit {
    height: 30px;
    // line-height: 30px;
    padding-left: 5px;
    background: rgba(0, 0, 139, 0.6);
    border-bottom: 1px solid #ffffff;
  }
   .el-menu {
    background: rgba(0, 0, 0, 0.3);
  }
    li.el-menu-item {
    width: 148px;
    .btn {
      display: inline-block;
      width: 60px;
      line-height: 50px;
      text-align: center;
      height: 50px;
      border-radius: 5px;
      background: rgba(0, 0, 139, 0.3);
      border: 1px solid #4a7849;
    }
    .title {
      display: inline-block;
      width: 50px;
    }
  }
    li.el-menu-item:is-active,
  el-menu-item:active {
    background: rgba(0, 0, 0, 0.3);
  }
  li.el-menu-item:focus {
    background: rgba(0, 0, 0, 0.3);
  }
  .el-menu-item {
    background: rgba(0, 0, 0, 0.3);
  }

  li.el-menu-item:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;

    text-align: center;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
}
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
   /deep/ .el-dialog__wrapper {
    background: rgba(0, 0, 0, 0.9)!important;
  }
</style>

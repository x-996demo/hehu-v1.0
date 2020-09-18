<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login-card">
      <!-- 头部标题 -->
      <div class="login-title">河湖登录系统</div>
      <!-- 表单  rules绑定验证规则 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
        <!-- 表单容器 prop表示要校验的字段名 -->
        <el-form-item prop="mobile">
          <!-- 表单域 -->
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <!-- 表单域 -->
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:60%"></el-input>
          <!-- 放置一个按钮 -->
          <el-button style="float:right" type="primary">发送验证码</el-button>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item prop="checked">
          <!-- 是否同意隐私条款 -->
          <el-checkbox v-model="loginForm.checked" style="color:#ffffff">我已阅读同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单的数据
      loginForm: {
        mobile: '13911111111', // 手机号
        code: '123456', // 验证码
        checked: true // 是否同意用户协议和隐私条款
      },
      //   表单验证规则
      loginRules: {
        // required 如果为true表示该字段必填
        mobile: [
          { required: true, message: '老铁?您的手机号不能不填哦!' },
          {
            pattern: /^1[3-9]\d{9}$/, // 正则表达式
            message: '您的手机号格式不正确'
          }
        ],
        code: [
          { required: true, message: '您的验证码不能为空哦!' },
          {
            pattern: /^\d{6}$/, // 要求6个数字
            message: '验证码应该是6位数字'
          }
        ],
        // 自定义校验  required不能校验true/false
        checked: [
          {
            validator: function (rule, value, callback) {
              // rule是当前的校验规则
              // value是当前的要校验的字段的值
              // calllback是一个回调函数 不论成功或者失败都要执行
              // 成功执行callback 失败执行 callback(new Error('错误信息'))
              // 我们认为 如果 value 为true 就表示 校验成功 如果value 为false就表示校验失败
              // new Error(错误信息) 就是我们提示的错误信息
              value
                ? callback()
                : callback(new Error('您必须同意我们的的协议!!!!'))
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      //      this.$refs.loginForm 获取的就是el-form的对象实例
      //   第一种 回调函数 isOK, fields(没有校验通过的字段)
      //   this.$refs.loginForm.validate(function (isOK) {
      //     if (isOK) {
      //       console.log('校验通过')
      //     } else {
      //       console.log('校验未通过')
      //     }
      //   })
      // 第二种方式 promise
      this.$refs.loginForm.validate().then(() => {
        // 如果成功通过 校验就会到达 then
        // 通过校验之后 应该做什么事 -> 应该调用登录接口 看看手机号是否正常
        //   this.$axios.get/post/delete/put
        // 跳转到主页
        this.$router.push('/home') // push 和 router-link类似 to属性 可以直接是字符串 也可以是对象
      })
    }
  }
}
</script>

<style lang='less'>
.login {
  background-image: url("../../assets/img/b2.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  .login-card {
    background: rgba(0, 0, 0, .4);
    z-index: 2;
    color: #ffffff;
    width: 440px;
    height: 340px;
    border: 1px solid #ccc;
    .login-title {
      font-weight: 700;
      text-align: center;
      height: 30px;
      font-size: 25px;
      line-height: 30px;
      // border: 1px solid red;
    }
  }
}
</style>

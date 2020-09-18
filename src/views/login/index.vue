<template>
  <div class="login">
    <!-- 表单 -->
    <el-card class="login-card">
        <!-- 头部标题 -->
        <div class="login-title">
            河湖登录系统
        </div>
        <!-- 表单 -->
        <el-form style="margin-top:20px">
            <!-- 表单容器 -->
            <el-form-item>
                <!-- 表单域 -->
                <el-input placeholder='请输入手机号'></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item>
                <!-- 表单域 -->
                <el-input placeholder="请输入验证码" style="width:60%"></el-input>
                <!-- 放置一个按钮 -->
                <el-button style="float:right" type="primary">发送验证码</el-button>
            </el-form-item>
            <!-- 表单域 -->
            <el-form-item>
                <!-- 是否同意隐私条款 -->
                <el-checkbox>我已阅读同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
                <!-- 登录按钮 -->
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.login{
    background-image: url('../../assets/img/b2.jpg');
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    .login-card{
    background: rgba(0, 0, 0, 0);
    z-index: 2;
    width:440px;
    height: 340px;
    border: 1px solid #ccc;
    .login-title{
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

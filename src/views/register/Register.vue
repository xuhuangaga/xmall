<template>
  <div class="box flex-j-center a-center">
    <el-card class="box-card t-a-center">
      <div slot="header" class="clearfix">
        <span class="f-w-bold f-size20 title">注册 XMall 账号</span>
      </div>
      <div class="login_dv_ipt">
        <div>
          <el-input
            v-model.trim="username"
            placeholder="账号"
            class="m-t-b10 ipt"
          ></el-input>
        </div>
        <div>
          <el-input
            v-model.trim="password"
            placeholder="密码"
            class="ipt m-b10"
            type="password"
          ></el-input>
        </div>
        <div>
          <el-input
            v-model.trim="repPassword"
            placeholder="重复密码"
            class="ipt m-b10"
            type="password"
          ></el-input>
        </div>
        <div class=" flex-j-between">
          <div class="flex-j-center a-center f-size14">
            <div class="rem_psd">
              <el-checkbox v-model="isRead">我已阅读并同意遵守</el-checkbox>
            </div>
            <div
              class="c_blue m-lr5"
              @click="
                notify(
                  '法律声明',
                  '此仅为个人练习开源模仿项目，仅供学习参考，承担不起任何法律问题'
                )
              "
            >
              法律声明
            </div>
            <div class="and">和</div>
            <div
              class="c_blue m-lr5"
              @click="
                notify(
                  '隐约条款',
                  '本网站将不会严格遵守有关法律法规和本隐私政策所载明的内容收集、使用您的信息'
                )
              "
            >
              隐约条款
            </div>
          </div>
        </div>
        <div class=" m-t20">
          <el-button :type="type" :disabled="disabled" @click="login"
            >注册</el-button
          >
        </div>
        <div class="footer m-t20 flex-a-center f-size12 p-t20">
          <div>如果您已拥有 XMall 账号，则可在此</div>
          <div @click="goto('/login')" class="c_blue m-l10">登陆</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      repPassword: "",
      disabled: true,
      type: "info",
      isRead: false
    };
  },
  components: {},
  methods: {
    //右侧弹框提示 点击法律声明和隐约条款
    notify(title, message) {
      this.$notify.info({
        title: title,
        message: message
      });
    },
    //返回
    goto(path) {
      if (path) {
        this.$router.push(path);
      } else {
        this.$router.back();
      }
    },
    //点击登录
    login() {
      let flag = true;
      if (this.password !== this.repPassword) {
        this.$message.error("两次输入的密码不相同!");
        flag = false;
        return;
      }
      if (!this.isRead) {
        this.$message.error("您未勾选同意我们的相关注册协议!");
        flag = false;
        return;
      }
      // console.log(flag);
      if (flag) {
        axios
          .post("/api/users/register", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            // console.log(res);
            if (res.data.code === 200) {
              this.$message.success("注册成功");
              this.$router.push("/login");
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(error => {
            this.$message.error(`请求失败.${error}`);
          });
      }
    }
  },
  mounted() {},
  computed: {},
  watch: {
    //监听用户名
    username(val1, val2) {
      //查看输入值是否包含中文
      if (/.*[\u4e00-\u9fa5]+.*$/.test(val1)) {
        this.username=val2
      } else {
        if (val1 && this.password && this.repPassword) {
          this.disabled = false;
          this.type = "primary";
        } else {
          this.disabled = true;
          this.type = "info";
        }
      }
    },
    //监听密码
    password(val1, val2) {
      if (val1 && this.username && this.repPassword) {
        this.disabled = false;
        this.type = "primary";
      } else {
        this.disabled = true;
        this.type = "info";
      }
    },
    //监听重复密码
    repPassword(val1, val2) {
      if (val1 && this.username && this.password) {
        this.disabled = false;
        this.type = "primary";
      } else {
        this.disabled = true;
        this.type = "info";
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.box {
  background-image: url("../../assets/images/login_bg.png");
  min-height: 700px;
  .box-card {
    .title {
      color: rgb(102, 102, 102);
    }
    width: 450px;
    .login_dv_ipt {
      width: 370px;
      margin: 0 auto;
    }
    .footer {
      border-top: 1px solid rgb(204, 204, 204);
      color: #999;
      .iconfont {
        font-size: 20px;
      }
      .icon-weixin {
        font-size: 18px !important;
      }
    }
    .c_blue {
      color: rgb(80, 121, 217);
      cursor: pointer;
    }
    .and {
      color: #999;
    }
  }
}
</style>
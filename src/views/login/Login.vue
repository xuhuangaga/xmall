<template>
  <div class="box flex-j-center a-center">
    <el-card class="box-card t-a-center">
      <div class=" m-t20">
        <img src="../../assets/images/login.png" width="100" height="100" />
      </div>
      <div class=" f-size20 m-t-b10 m-b20">使用XMall账号 登录官网</div>
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
        <!-- <div>
          <el-input placeholder="点击进行验证" class="ipt m-b10"></el-input>
        </div> -->
        <div class="flex-j-between a-center f-size14">
          <div class="rem_psd"><el-checkbox>记住密码</el-checkbox></div>
          <div class="flex-a-center reg">
            <div class="reg_dv" @click="goto('/register')">注册XMall账号</div>
            <div
              class="forget_dv"
              @click="
                notify(
                  '找回密码',
                  '请联系作者邮箱找回密码或使用测试账号登录：test | test'
                )
              "
            >
              忘记密码 ？
            </div>
          </div>
        </div>
        <div class=" m-t20">
          <el-button :type="type" :disabled="disabled" @click="login"
            >登录</el-button
          >
        </div>
        <div class=" m-t-b10">
          <el-button class="back" @click="goto('')">返回</el-button>
        </div>
        <div class="footer m-t20 flex-a-center f-size12 p-t20">
          <div>其他方式登录:</div>
          <div class="m-l10" @click="notify('待开发', '待开发...')">
            <i class="iconfont icon-weixin"></i>
          </div>
          <div class="m-l10" @click="notify('待开发', '待开发...')">
            <i class="iconfont icon-changyonglogo29"></i>
          </div>
          <div class="m-l10" @click="notify('待开发', '待开发...')">
            <i class="iconfont icon-qq"></i>
          </div>
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
      disabled: true,
      type: "info"
    };
  },
  components: {},
  methods: {
    //右侧弹框
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
      axios
        .post("/api/users/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          // console.log(res);
          if (res.data.code === 200) {
            this.$message.success("登陆成功");
            //存入用户信息到localStorage
            localStorage.setItem("xmall_user", JSON.stringify(res.data.data.user));
            this.$router.push("/");
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(error => {
          this.$message.error(`请求失败.${error}`);
        });
    }
  },
  mounted() {
    //弹框
    this.notify("登录提示", "测试体验账号密码：test | test");
  },
  computed: {},
  watch: {
    //监听用户名
    username(val1, val2) {
      if (val1 && this.password) {
        this.disabled = false;
        this.type = "primary";
      } else {
        this.disabled = true;
        this.type = "info";
      }
    },
    //监听密码
    password(val1, val2) {
      if (val1 && this.username) {
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
    width: 450px;
    .login_dv_ipt {
      width: 370px;
      margin: 0 auto;
    }
    .reg {
      color: rgb(80, 121, 217);
      div {
        padding: 0 10px;
        cursor: pointer;
      }
      .reg_dv {
        border-right: 1px solid #999;
      }
      .forget_dv {
        padding-right: 0;
      }
    }
    .back:hover {
      background: #f1f1f1;
      color: rgb(96, 98, 102);
      border-color: #ccc;
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
  }
}
</style>
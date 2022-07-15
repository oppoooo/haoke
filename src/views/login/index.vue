<template>
  <div>
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="backPage"
    />

    <!-- 表单 -->
    <van-form class="form" @submit="login">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="userFormRules.username"
      />
      <van-field
        autocomplete
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="userFormRules.code"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
      <div class="am-flexbox-item">
        <a>还没有账号，去注册~</a>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      username: '',
      password: '',
      userFormRules: {
        username: [
          {
            requitren: true,
            message: '请填写用户名'
          }
          // {
          //   pattern: /^[0-9]{11}/,

          //   message: '请输入正确的用户名'
          // }
        ],
        code: [
          {
            requitren: true,
            message: '请填写密码'
          }
          // {
          //   pattern: /^[0-9]{11}$/,
          //   message: '请输入正确的用户名'
          // }
        ]
      }
    }
  },
  methods: {
    backPage () {
      console.log(this.$router)
      this.$router.back()
    },
    async login () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await login(this.username, this.password)
        // console.log(res)

        if (res.data.status === 200) {
          this.$store.commit('setUser', res.data.body)

          this.$toast.success(res.data.description)
          this.$router.push({ path: '/denglu' })
        } else {
          this.$toast.fail(res.data.description)
        }
      } catch (err) {
        console.log(err)

        const status = err.response.status
        // let message = err.response.
        // if ()
        const message = '登录错误，请刷新'
        if (status === 400) {
          this.$toast.fail('用户的账号密码错误')
        }
        this.$toast.fail(message)
      }
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon) {
    color: #fff;
  }
}
.form {
  .van-button {
    background-color: #21b97a;
  }
  :deep(.van-field__body) {
    padding: 20px 0;
  }
  .am-flexbox-item {
    text-align: center;
    font-size: 20px;
    color: #666;
    margin-top: 50px;
  }
}
</style>

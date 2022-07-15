<template>
  <!-- 顶部 -->

  <div>
    <router-view></router-view>
    <div>
      <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" @click="toHouse">找房</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/news"
          >资讯</van-tabbar-item
        >
        <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    toHouse () {
      // console.log(this.$route)
      // console.log(this.$router)
      this.$router.push({ path: '/house' })
    }
  }
}
</script>

<style lang="scss" scoped></style>

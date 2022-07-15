<template>
  <div>
    <van-nav-bar left-arrow @click-left="goBack" />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {}
  }
}
</script>

<style lang="scss" scoped></style>

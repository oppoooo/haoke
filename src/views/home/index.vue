<template>
  <div>
    <!-- <div>
      <van-search v-model="value" show-action placeholder="请输入搜索关键词">
        <template #label>
          <div>dizhi</div>
        </template>
        <template #action>
          <div>搜索</div>
        </template>
      </van-search>
    </div> -->
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in pic" :key="item.id"
          ><a href=""
            ><img
              src="http://liufusong.top:8080/img/swiper/3.png"
              alt="" /></a
        ></van-swipe-item>
      </van-swipe>
      <!-- 搜索 -->
      <div class="search-box">
        <van-search
          class="search"
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
        >
          <template #label>
            <span>{{ press }}</span>
            <van-icon name="arrow-down" />
            <span class="xian">|</span>
          </template>
          <template #action>
            <div @click="onSearch">
              <van-icon name="location-o" style="font-size: 20px" />
            </div>
          </template>
        </van-search>
      </div>
      <!-- 出租列表 -->
      <van-grid :border="false">
        <van-grid-item icon="photo-o" text="文字">
          <img src="@/assets/下载.png" alt="" /><span>整租</span>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字"
          ><img src="@/assets/下载 (1).png" alt="" /><span
            >合租</span
          ></van-grid-item
        >
        <van-grid-item icon="photo-o" text="文字"
          ><img src="@/assets/下载 (2).png" alt="" /><span
            >地图找房</span
          ></van-grid-item
        >
        <van-grid-item icon="photo-o" text="文字"
          ><img src="@/assets/下载 (3).png" alt="" /><span @click="btn"
            >去出租</span
          ></van-grid-item
        >
      </van-grid>
    </div>
  </div>
</template>

<script>
import { home } from '@/api/home'
export default {
  data () {
    return {
      value: '',
      press: '北京',
      pic: []
    }
  },
  methods: {
    onSearch () {},
    async btn () {
      // const res = await home()
      // console.log(res)
      console.log(this.pic[0].imgSrc)
    }
  },
  async created () {
    const res = await home()
    // console.log(res)
    // console.log(res.data.body)
    try {
      this.pic = res.data.body
      console.log(res)
      console.log(this.pic)
    } catch (e) {}
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #d020d0;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .lunbo {
    position: relative;
    img {
      width: 100%;

      vertical-align: top;
    }
    .search-box {
      position: absolute;
      top: 25px;
      width: 100%;
      text-align: center;
      .search {
        background: rgba(0, 0, 0, 0);
        .xian {
          margin: 0 15px;
        }
      }
      .van-search__label {
        padding: 0 0;
      }
      .van-search__content {
        padding-left: 10px;
      }
      .van-search__action {
        line-height: 10px;
      }
    }
  }

  // 出租列
  .van-grid {
    font-size: 14px;
    span {
      padding: 16px 0;
    }
    img {
      width: 120px;
      height: 120px;
    }
  }
}
</style>

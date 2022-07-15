<template>
  <div>
    <div class="my-title">
      <img src="@/assets/avatar.png" alt="" class="my-bg" />
      <div class="my-info">
        <div class="my_myIcon">
          <img
            class="my_touxiang"
            src="http://liufusong.top:8080/img/profile/avatar.png"
            alt=""
          />
        </div>
        <div class="my_user">
          <div class="my_name">游客</div>
          <div class="denglu">
            <a
              ><van-button
                @click="todenglu"
                size="small"
                class="denglu_btn"
                type="primary"
                ><span>去登录</span></van-button
              ></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div>
      <van-grid :column-num="3" :border="false">
        <van-grid-item icon="photo-o">
          <van-icon name="contact"><span class="text">我的收藏</span></van-icon>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <van-icon name="contact"
            ><span class="text" @click="btn">我的出租</span></van-icon
          >
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <van-icon name="clock-o"><span class="text">看房记录</span></van-icon>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <van-icon name="credit-pay"
            ><span class="text">成为房主</span></van-icon
          >
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <van-icon name="contact"><span class="text">个人资料</span></van-icon>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <van-icon name="contact"><span class="text">联系我们</span></van-icon>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- <van-grid :border="false" :column-num="3">
      <van-grid-item icon="photo-o">
        <van-icon name="contact"></van-icon>
        <span class="">wode</span>
      </van-grid-item>
      <van-grid-item icon="photo-o"></van-grid-item>
      <van-grid-item icon="photo-o"></van-grid-item>
      <van-grid-item icon="photo-o"></van-grid-item>
      <van-grid-item icon="photo-o"></van-grid-item>
      <van-grid-item icon="photo-o"></van-grid-item>
    </van-grid> -->
    <div class="haoke_pic">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { updateInfo, userInfo } from '@/api/user'
export default {
  methods: {
    todenglu () {
      this.$router.push({
        path: '/login'
      })
    },
    btn () {}
  },
  async mounted () {
    const res = await userInfo()
    const res1 = await updateInfo()
    console.log(res)
    console.log(res1)
    console.log(111)
  }
}
</script>

<style lang="less" scoped>
.my-title {
  min-height: 550px;
  position: relative;
  .my-bg {
    width: 100%;
  }
  .my-info {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 50%;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .my_myIcon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 120px;
      height: 120px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
    }
    .my_touxiang {
      width: 100%;
      border-radius: 50%;
    }
    .my_user {
      padding-top: 15px;
      .my_name {
        margin-top: -30px;
        margin-bottom: 10px;
      }
      .denglu {
        color: #999;
        font-size: 12px;
        margin-top: 45px;
        .denglu_btn {
          border-radius: 10px;
          span {
            padding: 0 10px;
          }
        }
      }
    }
  }
}
// .van-grid-item {
//   margin-top: 20px;
//   // :deep(.van-icon) {
//   //   flex-direction: column;
//   //   justify-content: space-evenly;
//   //   align-items: center;
//   // }
// }

:deep(.van-grid-item__content--center) {
  height: 120%;
  .van-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    font-size: 40px;
    .text {
      font-size: 16px;
    }
  }
}

.haoke_pic {
  text-align: center;
  margin-top: 25px;
  img {
    width: 92%;
  }
}
</style>

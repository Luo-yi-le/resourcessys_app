<template>
  <div id="self">
    <x-header :title="tit" style="height: 70px;" >
      <div slot="overwrite-left" class="left-arrow">
        <router-link to="" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/house/reserve" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <!--<img src="../../assets/images/me_more-my-album.png">-->
          </div>
          <div class="weui-cell__bd">
            <p>预定</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/home" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <!--<img src="../../assets/images/me_my-card-package-icon.png">-->
          </div>
          <div class="weui-cell__bd">
            <p>订单</p>
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/setting/setup" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <!--<img src="../../assets/images/me_more-setting.png">-->
          </div>
          <div class="weui-cell__bd">
            <p>相关</p>
          </div>
        </router-link>
      </div>
    </div>

    <footer class="footer">
      <view-box style="height:100%;">
        <router-view></router-view>
        <buttom-nav></buttom-nav>
      </view-box>
    </footer>
  </div>
</template>
<script>
  import BottomNav from "./../footer/BottomNav.vue";
  import ViewBox from "vux/src/components/view-box/index.vue";
  import XHeader from "vux/src/components/x-header/index.vue";

  var loginid = sessionStorage.getItem('loginid');

  export default {
    name: "My",
    components: {XHeader, ViewBox, 'buttom-nav': BottomNav},
    data() {
      return {
        loginid: loginid,
        tit: "设置"
      }
    },
    mounted() {
      // this.$store.commit("toggleTipsStatus", -1)
    },
    activated() {
      //this.$store.commit("toggleTipsStatus", -1)
    }
  }
</script>
<style>
  @import "../../../static/css/css/weui.min.css";

  #self .weui-cell__ft img {
    height: 25px;
    vertical-align: middle;
    margin-right: 10px
  }

  #self .weui-cell__hd img {
    width: 23px;
    margin-right: 8px;
    display: block
  }

  #self img.self-header {
    display: block;
    margin-right: 10px;
    border-radius: 4px;
    width: 60px;
    height: 60px
  }

  #self .self-nickname {
    font-size: 16px;
    margin-bottom: 5px
  }

  #self .self-wxid {
    font-size: 13px
  }

  .footer {
    width: 100%;
    height: 50px; /* footer的高度一定要是固定值*/
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #dddddd;
  }
  .left-arrow-a {
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
</style>

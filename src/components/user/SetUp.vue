<template>
  <!--设置 组件-->
  <div class="setting">
    <x-header :title="tit" style="height: 70px;">
      <div slot="overwrite-left" class="left-arrow">
        <router-link :to="{path:'/setting'}" class="left-arrow-a">返回</router-link>
      </div>
    </x-header>
    <section>
      <div class="weui-cells">
        <router-link to="" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">帐号与安全</div>
          <div class="weui-cell__ft" style="color: #2baee9">已保护</div>
        </router-link>
      </div>
      <div class="weui-cells">
        <router-link to="/setting/setup/notice" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">相关公告</div>
          <div class="weui-cell__ft"></div>
        </router-link>
        <router-link to="" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">隐私</div>
          <div class="weui-cell__ft"></div>
        </router-link>
        <router-link to="" class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">通用</div>
          <div class="weui-cell__ft"></div>
        </router-link>
      </div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="">
          <div class="weui-cell__bd">帮助与反馈</div>
          <div class="weui-cell__ft"></div>
        </a>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__bd">关于我们</div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div class="weui-btn-area">
        <button class="weui-btn weui-btn_warn" id="exitBtn" @click="exitBtn">退出登录</button>
      </div>
    </section>
  </div>
</template>
<script>
  import XHeader from "vux/src/components/x-header/index.vue";
  export default {
    name:'SetUp',
    components: {XHeader},
    data(){
      return{
        tit:'相关'
      }
    }
    ,methods:{
      exitBtn(){
        const  loginid=sessionStorage.getItem('loginid');
        if (loginid !==''||loginid.equals) {
          if (confirm('是否退出该账号？')){
            sessionStorage.removeItem('loginid');
            this.$router.push("/login");
          }
        }else {
          if (confirm('您还没登陆，是否登陆？')){
            //sessionStorage.removeItem('loginid');
            this.$router.push("/login");
          }
        }

      }
    }
  }
</script>
<style scoped>
  @import "../../../static/css/css/weui.min.css";
  .left-arrow-a {
    margin-left: 20px;
    position: absolute;
    width: 50px;
    margin-top: 5px;
  }
</style>

<template>
  <div class="orderRoom" style="height:780px;overflow:scroll;">
    <x-header :left-options="{showMore: false,backText:''}" :right-options="{showMore: false}" title="">
      <a href="">
        <img src="../img/selects.jpg">
      </a>
      <a href="">
        <img src="../img/types.jpg">
      </a>
      <a href="">
        <img src="../img/xinxi.jpg">
      </a>
      <a href="" style="margin-right: -30%">
        当前用户：<a>{{session_userName}}</a>
        <router-link to="/index/Login">
          <img src="../img/user.jpg">
        </router-link>

      </a>
    </x-header>
    <x-input></x-input>

    <Imglb></Imglb>

    <div class="PageHomePartCommodityCatalogs" style="background:#F2F2F2; margin-top: 40px">
      <div class="MuSectionWrapper">
        <div class="wrap">
          <div class="section-heading">
            <div class="section-title">衣服杂货</div>
            <div class="section-actions">
              <a href="javascript:void(0);">查看全部</a>
            </div>
          </div>
          <div class="section-content">
            <div class="MuCommodityCatalogList">
              <ul>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="男装" class="active animate"
                                                                                      src="../img/15277724651527499866woman.jpg"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      <router-link to="/index/Menwear">
                        男装
                      </router-link>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="女装" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277724651527499866woman.jpg?1527772466#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      <router-link to="/index/Womanwear">
                        女装
                      </router-link>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px;  background-color: rgb(255, 255, 255);">
                        <img alt="童装" class="active animate"
                             src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277724871527499878kids.jpg?1527772487#h"
                             style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      童装
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="服饰杂货" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277725241527499890ACC.jpg?1527772524#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      服饰杂货
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="鞋包" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277725391527499903bag.jpg?1527772540#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      鞋包
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; background-color: rgb(255, 255, 255);">
                        <img alt="内衣" class="active animate"
                             src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277725541527499916106.jpg?1527772555#h"
                             style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      内衣
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="MuSectionWrapper">
        <div class="wrap">
          <div class="section-heading">
            <div class="section-title">生活杂货</div>
            <div class="section-actions">
              <a href="javascript:void(0);">查看全部</a>
            </div>
          </div>
          <div class="section-content">
            <div class="MuCommodityCatalogList">
              <ul>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px;"><img alt="织品" class="active animate"
                                                                                     src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277726341527499928109.jpg?1527772635#h"
                                                                                     style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      织品
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px;  background-color: rgb(255, 255, 255);">
                        <img alt="家具" class="active animate"
                             src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277726501527499939110.jpg?1527772651#h"
                             style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      家具
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="电子产品" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277726751527499951111.jpg?1527772675#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      电子产品
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="居家用品" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277727021527499966112.jpg?1527772703#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      居家用品
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="文具" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277727311527499978113.jpg?1527772732#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      文具
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="卫生&amp;美容用品"
                                                                                      class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277727581527499989114.jpg?1527772759#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      卫生&amp;美容用品
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; ">
                        <img alt="户外用品" class="active animate"
                             src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277727871527500002115.jpg?1527772788#h"
                             style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      户外用品
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="IDEE" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/1533292657idee.jpg?1533292659#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      IDEE
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="MuSectionWrapper">
        <div class="wrap">
          <div class="section-heading">
            <div class="section-title">食品</div>
            <div class="section-actions">
              <a href="javascript:void(0);">查看全部</a>
            </div>
          </div>
          <div class="section-content">
            <div class="MuCommodityCatalogList">
              <ul>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 30px; "><img alt="食品" class="active animate"
                                                                                      src="https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-article/15277728051527057055food.jpg?1527772806#h"
                                                                                      style="height: 30px;"></div>
                    </div>
                    <div class="title">
                      食品
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="part-recommendations-wrap">
      <div class="MuSectionWrapper">
        <div class="wrap">
          <!--dddd-->
          <div class="section-heading">
            <div class="section-title">推荐商品</div>
            <div class="section-actions">
              <a href="javascript:void(0);">查看全部</a>
            </div>
          </div>
          <div class="section-content">
            <div class="MuCommodityList">
              <ul>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; ">
                        <img src="../img/4548718727797_400.jpg" alt="凝胶墨水圆珠笔" class="active animate"style="height: initial;">
                      </div>
                    </div>
                    <div class="title">
                      凝胶墨水圆珠笔
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥8</span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4547315901074_400.jpg" alt="凝胶墨水笔_0.5" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      凝胶墨水笔_0.5
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥10
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4549738307266_400.jpg" alt="扫除用品系列_地毯清洁纸" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      扫除用品系列_地毯清洁纸
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥24
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4548718151868_400.jpg" alt="凝胶墨水圆珠笔用笔芯" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      凝胶墨水圆珠笔用笔芯
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥7
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4549738671053_400.jpg" alt="迷你脆脆面_焦香酱油味" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      迷你脆脆面_焦香酱油味
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥3
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial;"><img
                        src="../img/4945247421347_400.jpg" alt="塑料橡皮" class="active animate" style="height: initial;">
                      </div>
                    </div>
                    <div class="title">
                      塑料橡皮
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥4
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: 187px; "><img
                        src="../img/4548718816019_400.jpg" alt="凝胶墨水笔替换芯_0.5" class="animate" style="height: initial;">
                      </div>
                    </div>
                    <div class="title">
                      凝胶墨水笔替换芯_0.5
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥8
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4548076316145_400.jpg" alt="原浆纸笔记本5册组" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      原浆纸笔记本5册组
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥23
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4547315259847_400.jpg" alt="ＰＰ洗涤用衣架・衬衫用・３个装" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      ＰＰ洗涤用衣架・衬衫用・３个装
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥16
    </span></div>
                  </div>
                </li>
                <li>
                  <div class="item">
                    <div class="image">
                      <div class="LazyImage" style="width: 100%; height: initial; "><img
                        src="../img/4550002422578_400.jpg" alt="聚丙烯_衣架・男士用" class="active animate"
                        style="height: initial;"></div>
                    </div>
                    <div class="title">
                      聚丙烯_衣架・男士用
                    </div>
                    <!---->
                    <div class="price"><span class="MuPriceTag">
      ¥20
    </span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view/><!--router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的-->

  </div>
</template>

<script>
  import XHeader from "vux/src/components/x-header/index.vue";
  import Tab from "vux/src/components/tab/tab.vue";
  import TabItem from "vux/src/components/tab/tab-item.vue";
  import XInput from "vux/src/components/x-input/index.vue";

  var userName = sessionStorage.getItem("userAn");
  export default {
    name: "Main",
    data() {
      return {
        session_userName: userName
      }
    },
    components: {XInput, TabItem, Tab, XHeader},
  }

</script>


<style scoped lang="less" rel="stylesheet/less">

  .orderRoom {
    width: 80%;
    margin: 0 auto;
  }

  .vux-header {
    background: #F9F9F9;
  }

  .vux-header-title-area, .vux-header .vux-header-title {
    margin: 0;
  }

  @media only screen and  (max-width: 800px) {
    .orderRoom {
      width: 100%;
      margin: 0 auto;
    }
  }
</style>

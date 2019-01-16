<template>
  <div class="z-page">
    <view-box class="z-content">
      <div class="search-result-searchbox">
				<span
          @click="backHandler"
          class="search-result-back zui-icon zui-icon-back">

				</span>
        <!-- <span
                    class="search-result-tool zui-icon zui-icon-SHOPPING-CART-EMPTY"></span> -->
        <search
          @result-click="resultClick"
          @on-change="getResult"
          :results="results"
          v-model="value"
          position="absolute"
          auto-scroll-to-top>
        </search>
        <!-- 设置结果面板的高度 min-height 623-->
      </div>
      <div
        class="search-result-tip"
        v-show="searchQuery">
        包含‘{{searchQuery}}’的所有小区:
      </div>
      <div class="search-result-wrap" v-show="resultData.length > 0">

        </div>
    </view-box>
    <div class="MuSectionWrapper">
      <div class="wrap">
        <div class="MuCommodityList">
          <ul>
            <li v-for="res of res_qua">
            <div class="item">
              <router-link :to="{path:'',query:{name:res.name}}">
              <div class="image">
                <div class="LazyImage" style="width:100%;height:initial;">
                  <img :src="'../../../static/img/res_qua/'+(res.pic)" :title="res.name" alt=""
                  class="active animate" style="height: initial">
                </div>
              </div>
                <div class="title">
                  小区: {{res.name}}
                </div>
                <div class="title">
                  竣工日期: {{res.completedate}}
                </div>
                <div class="title">
                  详细: {{res.detailed}}
                </div>
                <div class="price"><span class="MuPriceTag">是否出售：{{res.sell}}</span></div>
              </router-link>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //
  // import GoodGrid from '../../components/GoodGrid.vue'
  // import EndingTip from '../../components/EndingTip.vue'
  import {Search, ViewBox} from 'vux'
  import Req_res from "../req_res/Req_res.vue";

  import * as api from '../../control/axios/api.js'
  import axios from 'axios'
  export default {
    components: {
      "req_res": Req_res,
      Search,
      // GoodGrid,
      // EndingTip,
      ViewBox
    },
    data() {
      return {
        res_qua: [],
        searchQuery: '',
        results: [],
        value: '',
        defaultValue: 'hi',
        resultData: [],
      }
    },
    methods: {
      resultClick(item) {
        this.searchQuery = item.title
        this.resultData = searchResult
      },
      getResult(val) {
        this.results = val
          ? this._getResult(this.value)
          : this._getResult(this.defaultValue)
      },
      _getResult(val) {
        let rs = []
        for (let i = 0; i < 10; i++) {
          rs.push({
            title: `${val} 结果为: ${i + 1} `,
            other: i
          })
        }
        return rs
      },
      backHandler() {
        this.$router
          ? this.$router.back()
          : window.history.back()
      }
    },
    created: function () {
      var that = this;
      axios.post(api.req_res)
        .then(function (res) {
          that.res_qua = res.data;
          console.log(that.res_qua = res.data);

        })
    }

  }

</script>
<style scoped>
  @import "../../../static/css/css/show.css";
  @import "../../../static/css/less/searchResult.less";
</style>

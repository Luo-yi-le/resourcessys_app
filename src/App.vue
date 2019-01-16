<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    }
    , mounted() {
    }
    , metaInfo: {
      title: '住房app', // set a title
      meta: [{                 // set meta
        name: 'keyWords',
        content: 'My Example App'
      }],
      link: [{                 // set link
        rel: 'asstes',
        href: 'https://assets-cdn.github.com/'
      }]
    }
    , created() {
      console.log(this.getStatus(this.$route.path))
    }
    , watch: {
      '$route'(to, from) {
        console.log(this.getStatus(this.$route.path))
      }
    }
    , methods: {
      getStatus(urlStr) {
        var urlStrArr = urlStr.split('/')
        return urlStrArr[urlStrArr.length - 1]
      }
    }
  }
</script>

<style>
  #app {
  }

</style>

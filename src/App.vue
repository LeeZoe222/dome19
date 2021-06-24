<template>
  <div>
    <tabbar></tabbar>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'

// ES6 模块导出
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
</style>
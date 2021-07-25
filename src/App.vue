<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from './components/Tabbar.vue'
import { mapState } from 'vuex'  // export { mapState }
// import axios from 'axios'

// ES6 模块导出
export default {
  data () {
    return {

    }
  },

  computed: {
    ...mapState('TabbarModule',['isTabbarShow'])
  },

  mounted () {
    // console.log(mapState('TabbarModule',['isTabbarShow']))
  },

  components: {
    tabbar
  },
  // mounted() {
    // 1- 后端配置好 cors
    // axios.get("http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1621045513553&summary=14a9527dc01f666c6589d3f8cc0088b6&platform_code=H5").then
    // (res => {
    //   console.log(res.data)
    // })

    // 2- maoyan
    // axios.get("/ajax/comingList?ci=421&token=&limit=10&optimus_uuid=07AA0F60A57E11EB88568D1F879C99019FC9802E77D84CDB90FA12B4F414F4F2&optimus_risk_level=71&optimus_code=10").then
    // (res => {
    //   console.log(res.data.coming)
    // })

    // 3- maizuo
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=2514984',
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1621051243331159158390785"}',
    //     'X-Host': 'mall.film-ticket.film.list'
    //   },
    //   method: "get"
    // }).then(res => {
    //   console.log(res.data.data.films)
    // })
    
  // }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  html,body{
    height: 100%;
  }

  section{
    /* margin-bottom: 50px; */
    padding-bottom: 50px;
  }
</style>
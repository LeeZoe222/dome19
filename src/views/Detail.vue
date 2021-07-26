<template>
    <v-touch v-on:swiperight="onSwipeRight">
        <div v-if="filminfo">

            <detail-header v-top :title="filminfo.name"></detail-header>
            <div :style="{backgroundImage:'url('+filminfo.poster+')'}" style="height:200px;background-size:cover;background-position:center;"></div>

            <h3>{{ filminfo.name }}--{{ filminfo.filmType.name }}</h3>

            <div>{{ filminfo.category }}</div>

            <div>{{ filminfo.premiereAt | dateFilter }}上映</div>

            <div>{{ filminfo.nation }} | {{ filminfo.runtime }}分钟</div>

            <div :class=" isShow? '' : 'synopsis' ">{{ filminfo.synopsis }}</div>
            <div style="text-align:center;"><i @click="isShow=!isShow">--</i></div>

            <h4>演职人员</h4>
            <detail-swiper :perslide="4" swiperclass="swiper-actors">
                <div class="swiper-slide" v-for="(data,index) in filminfo.actors" :key="index">
                    <img :src="data.avatarAddress" alt="">
                    <div style="text-align:center;">
                        <div>{{ data.name }}</div>
                        <div>{{ data.role }}</div>
                    </div>
                </div>
            </detail-swiper>
            <h4>剧照</h4>
            <detail-swiper :perslide="3" swiperclass="swiper-photos">
                <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
                    <div :style="{backgroundImage:'url('+data+')'}" style="height:100px;background-size:cover;background-position:center;" @click="handlePreview(index)">

                    </div>
                </div>
            </detail-swiper>
        
        </div>
    </v-touch>
</template>

<script>
import Vue from 'vue'
import http from '@/util/http'  // 别名 @ ==> src的绝对路径
import moment from 'moment'
import detailSwiper from './detail/DetailSwiper.vue'
import detailHeader from './detail/DetailHeader.vue'

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
import { ImagePreview } from 'vant'
import { mapMutations } from 'vuex'

Vue.filter('dateFilter', (date)=> {
    // 日期处理函数 - moment
    return moment(date*1000).format('YYYY-MM-DD')
})

// 定义指令
Vue.directive("top",{
    inserted(el) {
        // console.log(el)
        el.style.display = 'none'
        window.onscroll = ()=>{
            // console.log(document.documentElement.scrollTop)
            if( (document.body.scrollTop || document.documentElement.scrollTop) > 40) {
                el.style.display = 'block'
            } else {
                el.style.display = 'none'
            }
        }
    },
    unbind() {
        window.onscroll = null
    }
})
export default {
    data() {
        return {
            filminfo: null,
            isShow: false
        }
    },
    components: {
        detailSwiper,
        detailHeader
    },
    methods: {
        ...mapMutations("TabbarModule", ["show", "hide"]),
        handlePreview(index) {
            ImagePreview({
                images: this.filminfo.photos,
                startPosition: index,
                loop: false,
                closeable: true,
                closeIconPosition: 'top-left'
            })
        },
        onSwipeRight() {
            // console.log("滑动")
            this.$router.back()
        }
    },
    mounted() {
        // this.$route  当前匹配的路由对象信息
        // console.log('利用获取的id，ajax请求后端接口',this.$route.params.myid)

        // console.log('利用获取的id，ajax请求后端接口',this.$route.query.id)

        // 隐藏
        // this.$store.commit("hide")
        this.hide()

        http({
            url: `/gateway?filmId=${this.$route.params.myid}&k=1693673`,
            headers: {
                'X-Host': 'mall.film-ticket.film.info'
            },
            method: 'get'
        }).then(res => {
            // console.log(res.data.data.film)
            this.filminfo = res.data.data.film
        })
        
    },

    beforeDestroy() {
        // 显示
        // this.$store.commit('show')
        this.show()
    }
}
</script>

<style lang="scss" scoped>
    .synopsis{
        height: 62px;
        overflow: hidden;
    }
</style>
<template>
    <div>
        <film-swiper>
            <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
                <div :style=" { backgroundImage: 'url('+data+')'} " style="height:200px; background-size:cover;"></div>
            </div>
        </film-swiper>
        <!-- 只有在 Vue 中，组件上写的 class,style 会自动传到组件的根节点上 -->
        <film-header style="position:sticky;top:0px; background:white;z-index:100;"></film-header>

        <router-view></router-view>
    </div>
</template>

<script>
import filmHeader from './film/FilmHeader.vue'
import filmSwiper from './film/FilmSwiper.vue'
export default {
    data(){
        return {
            imgList: ['https://pic.maizuo.com/usr/movie/aa22ce7e9aa175b6aed9046c0f9b7589.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70',
            'https://pic.maizuo.com/usr/movie/81d34625af66cb93180c173928c44983.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70',
            'https://pic.maizuo.com/usr/movie/7e71e9e03ccc26906d92cbd2495e0cf7.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70']
        }
    },

    components: {
        filmHeader,
        filmSwiper
    }
}
</script>
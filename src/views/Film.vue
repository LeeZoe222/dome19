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
            imgList: ['https://pic.maizuo.com/usr/movie/fe4692972b73ef0800c223e424a3d636.jpg',
            'https://pic.maizuo.com/usr/movie/a3d0ad7e62ec8949e54b814779443050.jpg',
            'https://pic.maizuo.com/usr/movie/bafd877a2772afce131ffa1a237cd766.jpg']
        }
    },

    components: {
        filmHeader,
        filmSwiper
    }
}
</script>
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper/bundle'  // 引入 swiper.js
import 'swiper/swiper-bundle.min.css'
export default {
    mounted () {
        new Swiper('.swiper-container',{
            // 需要分页器
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }
}
</script>

<style lang="scss" scoped>
    // .swiper-wrapper {
    //     img{
    //         width: 100%;
    //     }
    // }
</style>
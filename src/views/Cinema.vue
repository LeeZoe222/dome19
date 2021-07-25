<template>
    <div>
        <van-nav-bar title="影院" @click-left="handleLeft()" @click-right="handleRight()">
            <template #left>
                {{ cityName }}<van-icon name="arrow-down" color="#000"/>
            </template>
            <template #right>
                <van-icon name="search" size="24" color="#000"/>
            </template>
        </van-nav-bar>

        <div class="cinema" :style="{height:height}">
            <van-list>
                <van-cell v-for="data in cinemaList" :key="data.cinemaId">
                    <div>{{ data.name }}</div>
                    <div class="address">{{ data.address }}</div>
                </van-cell>
            </van-list>
        </div>
    </div>
</template>

<script>

import BetterScroll from 'better-scroll'
import Vue from 'vue';
import { NavBar, Icon, List, Cell } from 'vant';
import { mapActions, mapMutations, mapState } from 'vuex';
// import { Toast } from 'vant';
Vue.use(NavBar).use(Icon).use(List).use(Cell);
export default {
    data() {
        return {
            height: 0
        }
    },

    computed: {
        ...mapState('CinemaModule', ['cinemaList']),
        ...mapState('CityModule', ['cityId', 'cityName'])
    },

    mounted() {

        // 访问 cityName, cityId

        this.height = document.documentElement.clientHeight - 100 + 'px'

        if(this.cinemaList.length === 0) {
            // vuex 异步流程
            this.getCinemaList(this.cityId).then(res=>{
                this.$nextTick(() => {
                    new BetterScroll(".cinema", {
                        scrollbar: {
                            fade: true
                        }
                    })
                })
            })
        }else{
            console.log("缓存")

            this.$nextTick(() => {
                new BetterScroll(".cinema", {
                    scrollbar: {
                        fade: true
                    }
                })
            })
        }

                // // 状态立即更改，但是dom 异步渲染
    },

    methods: {
        ...mapActions('CinemaModule', ['getCinemaList']),
        ...mapMutations('CinemaModule', ['clearCinemaList']),
        handleLeft() {
            // 清空 cinemaList
            this.clearCinemaList()

            // console.log(111)
            this.$router.push('/city')
        },
        handleRight() {
            // console.log(111)
            this.$router.push('/cinema/search')
        },
    }
}
</script>

<style lang="scss" scoped>
    .cinema{
        overflow: hidden;
        height: 300px;
        position: relative;  // 修正滚动条效果
    }
    // li{
    //     padding: 8px;
    //     .address{
    //         font-size: 12px;
    //         color: lightslategray;
    //     }
    // }
</style>
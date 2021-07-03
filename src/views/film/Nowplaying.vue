<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster" alt="">
                <h3>{{ data.name }} {{ data.item.name }}</h3>
                <p style="overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;">主演：{{ data.actors | actorFilter }}</p>
                <p>{{ data.nation }} | {{ data.runtime }}分钟</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.filter("actorFilter", (actors)=> {
    if(actors===undefined) return "暂无主演"
    return actors.map(item => item.name).join(' ')
})
export default {
    data () {
        return {
            datalist: []
        }
    },

    mounted() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=2514984',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1621051243331159158390785"}',
                'X-Host': 'mall.film-ticket.film.list'
            },
            method: "get"
            }).then(res => {
            // console.log(res.data.data.films)
            this.datalist = res.data.data.films
        })
    },

    methods: {
        handleClick(id) {
            // console.log(id)
            // location.href = '#/center'

            // 1- 路径
            // this.$router.push(`/detail/${id}`)  // 编程式导航

            // 2- 路由名字
            this.$router.push({
                name: 'zoeDetail',
                params: {
                    myid: id
                }
            })

            // 3- query方式跳转详情
            // this.$router.push(`/detail?id=${id}`)
        }
    }
}
</script>

<style lang="scss" scoped>
    li{
        overflow: hidden;
        padding: 10px;
        img{
            float: left;
            width: 100px;
        }
    }
</style>
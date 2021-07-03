<template>
    <div>
        detail
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        // this.$route  当前匹配的路由对象信息
        // console.log('利用获取的id，ajax请求后端接口',this.$route.params.myid)

        // console.log('利用获取的id，ajax请求后端接口',this.$route.query.id)

        axios({
            url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=1693673`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1621051243331159158390785","bc":"440100"}',
                'X-Host': 'mall.film-ticket.film.info'
            },
            method: 'get'
        }).then(res => {
            console.log(res.data)
        })
    }
}
</script>
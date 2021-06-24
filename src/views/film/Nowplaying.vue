<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
                {{ data.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            datalist: [
                {
                    id: 111,
                    title: "赌神"
                },
                {
                    id: 222,
                    title: "花木兰"
                },
                {
                    id: 333,
                    title: "廉政风云"
                }
            ]
        }
    },
    methods: {
        handleClick(id) {
            // console.log(id)
            // location.href = '#/center'

            // 1- 路径
            // this.$router.push(`/detail/${id}`)  // 编程式导航

            // 2- 路由名字
            // this.$router.push({
            //     name: 'zoeDetail',
            //     params: {
            //         myid: id
            //     }
            // })

            // 3- query方式跳转详情
            this.$router.push(`/detail?id=${id}`)
        }
    }
}
</script>
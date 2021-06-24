<template>
    <div>
        <ul>
            <router-link to="/film" tag="li" active-class="zoeactive">电影</router-link>
            <router-link to="/cinema" tag="li" active-class="zoeactive">影院</router-link>
            <router-link to="/center" tag="li" active-class="zoeactive">我的</router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    ul{
        display: flex;
        li{
            flex: 1;
        }
    }
    .zoeactive{
        color: red;
    }
</style>
<template>
    <div>
        <nav>
            <ul>
                <router-link to="/film" tag="li" active-class="zoeactive">电影</router-link>
                <router-link to="/cinema" tag="li" active-class="zoeactive">影院</router-link>
                <router-link to="/center" tag="li" active-class="zoeactive">我的</router-link>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    nav{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: white;
        z-index: 99;
        ul{
            display: flex;
            li{
                flex: 1;
            }
        }
    }
    .zoeactive{
        color: red;
    }
</style>
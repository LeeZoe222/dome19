<template>
    <div>
        <div style="height:300px;background:pink">轮播</div>
        <film-header></film-header>

        <router-view></router-view>
    </div>
</template>

<script>
import filmHeader from './film/FilmHeader.vue'
export default {
    components: {
        filmHeader
    }
}
</script>
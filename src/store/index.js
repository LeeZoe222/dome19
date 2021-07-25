import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './module/CityModule'
import TabbarModule from './module/TabbarModule'
import CinemaModule from './module/CinemaModule'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// store "全局"的对象
export default new Vuex.Store({
    plugins: [createPersistedState()],

    // 公共状态
    state: {

    },
    // 集中式修改状态--被监控
    mutations: {

    },
    // 异步
    actions: {

    },
    // 各个模块
    modules: {
        CityModule,
        CinemaModule,
        TabbarModule
    }
})

// store 只是存在内存中

// store 配置持久化  不再更新
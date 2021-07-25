const module = {
    namespaced: true, // 命名空间
    state: {
        cityId: "440100",
        cityName: "广州",
    },

    mutations: {
        changeCityName(state, name) {
            // console.log("111")
            state.cityName = name
        },
        changeCityId(state, cityId) {
            state.cityId = cityId
        },
    },

    actions: {

    }
}

export default module
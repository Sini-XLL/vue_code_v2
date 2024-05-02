import { MovieInfo, PopularMovie } from "@/api/movie"

const state = {
}
const getters = {

}
const mutations = {



}
const actions = {
     popularmovie(content, data) {
        return new Promise((resolve, reject) => {
            // 接口
           PopularMovie(data).then((response) => {
                
                resolve(response)
            }).catch(error => {
                reject(error)

            })
        })
    },
    gemovieInfo(content, data) {
        return new Promise((resolve, reject) => {
            // 接口
          MovieInfo(data).then((response) => {
                
                resolve(response)
            }).catch(error => {
                reject(error)

            })
        })
    },
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
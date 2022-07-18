const { default: axiosClient } = require("./axiosClient")

const CategoryAPI = {
    getAll(params){
        const url = '/categories'
        return axiosClient.get(url, {params})
    },

}

export default CategoryAPI
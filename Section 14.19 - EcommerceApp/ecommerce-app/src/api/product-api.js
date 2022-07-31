import axiosClient from "./axiosClient";


const productAPI = {
    async getListProduct(params) {

       const pagingParams = {...params}
       
       pagingParams._start = !params._page || params._page <= 1 ? 0 : ((params._page - 1) * params._limit)

       delete pagingParams._page
        
       const data = await axiosClient.get('/products', {params: pagingParams})

       const count = await axiosClient.get('/products/count', {params: pagingParams})
    
       return {
          data: data,
          pagination: {
              page: params._page,
              total: count,
              limit: params._limit
          }
       }        
    },

    getById(productId){
        const url = `/products/${productId}`
        return axiosClient.get(url)
    }


};

export default productAPI;

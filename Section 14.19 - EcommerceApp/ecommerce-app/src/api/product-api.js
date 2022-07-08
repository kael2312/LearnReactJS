import axiosClient from "./axiosClient";

const qs = require("qs");

const productAPI = {
    async getListProduct(params) {
        const newParams = { ...params };
        newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
        
        // Remove un-needed key
        delete newParams._page;

        const listProduct = await axiosClient.get(`/products`, { params: newParams });
        const count =  await axiosClient.get(`/products/count`, { params: newParams });

        return{
            data: listProduct,
            pagination: {
                start: newParams._start,
                limit: newParams._limit,
                count: count
            }
        }
    },
};

export default productAPI;

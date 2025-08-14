import custimAxios from "@/services"


interface productType {
    name: string,
    price: number,
    stock: number,
    category: string,
    isActive: boolean,
    id?: number
}

export const productUtils = {
    getProducts: async ({ page = 0, size = 10 }) => {
        const { data } = await custimAxios.get("products", {
            params: { page, size, sortBy: "id", sortDir: "asc" }
        });
        return data;
    },
    getProductById: async (id: number) => {
        const { data } = await custimAxios.get(`products/${id}`)
        return data
    },
    addProduct: async ({ category, isActive, name, price, stock }: productType) => {
        const { data } = await custimAxios.post('products', { category, isActive, name, price, stock })
        return data
    },
    putProduct: async ({ category, isActive, name, price, stock, id }: productType) => {
        const { data } = await custimAxios.put(`products/${id}`, { category, isActive, name, price, stock })
        return data
    },
    deleteProduct: async (id: number) => {
        const { data } = await custimAxios.delete(`products/${id}`)
        return data
    }
}
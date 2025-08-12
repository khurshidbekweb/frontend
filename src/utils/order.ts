import custimAxios from "@/services"

interface orderItem {
    productId: number,
    quantity: number
}

interface orderType {
    customerName: string,
    customerEmail: string,
    orderItems: orderItem[]
}

export const orderUtls = {
    getOrder: async () => {
        const { data } = await custimAxios.get("orders")
        return data
    },
    getOrderById: async (id: number) => {
        const { data } = await custimAxios.get(`orders/${id}`)
        return data
    },
    getOrderByEmail: async (email: string) => {
        const { data } = await custimAxios.get(`orders/customer/${email}`)
        return data
    },
    postOrder: async ({ customerEmail, customerName, orderItems }: orderType) => {
        const { data } = await custimAxios.post('orders', { customerEmail, customerName, orderItems })
        return data
    },
    putOrder: async ({ id, status }: { id: number, status: string }) => {
        const { data } = await custimAxios.put(`orders/${id}/status`, { status })
        return data
    },
    deleteOrder: async (id: number) => {
        const { data } = await custimAxios.delete(`orders/${id}`)
        return data
    },
}
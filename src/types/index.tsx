export interface productType {
    category: string
    createdAt: string
    id: number,
    isActive: boolean,
    name: string,
    price: number,
    stock: number,
    quantity?: number
}

export interface OrderItem {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

export interface Order {
    id: number;
    customerName: string;
    customerEmail: string;
    orderDate: string;
    status: "PENDING" | "PROCESSING" | "COMPLETED" | "CANCELLED";
    totalAmount: number;
    orderItems: OrderItem[];
}
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Order } from "@/types";
import OrderMenu from "../menu/order-menu";



interface OrderCardProps {
    order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
    const statusColors = {
        PENDING: "bg-yellow-100 text-yellow-800",
        PROCESSING: "bg-blue-100 text-blue-800",
        COMPLETED: "bg-green-100 text-green-800",
        CANCELLED: "bg-red-100 text-red-800",
    };

    return (
        <Card className="w-full max-w-2xl hover:shadow-lg transition-shadow">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Order #{order.id}</CardTitle>
                        <CardDescription className="mt-1">
                            {format(new Date(order.orderDate), "MMMM d, yyyy 'at' h:mm a")}
                        </CardDescription>
                    </div>
                    <Badge className={`${statusColors[order.status]} uppercase`}>
                        {order.status.toLowerCase()}
                    </Badge>
                    <OrderMenu order={order} />
                </div>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-sm text-gray-500">CUSTOMER</h3>
                        <p className="text-sm mt-1">
                            {order.customerName} ({order.customerEmail})
                        </p>
                    </div>

                    <div>
                        <h3 className="font-medium text-sm text-gray-500">ITEMS</h3>
                        <div className="mt-2 space-y-2">
                            {order.orderItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center p-2 border rounded">
                                    <div>
                                        <p className="font-medium">{item.productName}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">${item.unitPrice.toFixed(2)}</p>
                                        <p className="text-sm text-gray-500">${item.totalPrice.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center border-t pt-4">
                <p className="text-sm text-gray-500">Total amount</p>
                <p className="text-lg font-bold">${order.totalAmount.toFixed(2)}</p>
            </CardFooter>
        </Card>
    );
}
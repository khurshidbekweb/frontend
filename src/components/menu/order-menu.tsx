import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Order } from "@/types";
import { orderUtls } from "@/utils/order";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EllipsisVertical, Trash } from "lucide-react";
import toast from "react-hot-toast";
import EditOrder from "../dialog/edit-order";


interface OrderCardProps {
    order: Order;
}

const OrderMenu = ({ order }: OrderCardProps) => {
    const queryClient = useQueryClient()

    const orderDelete = useMutation({
        mutationFn: orderUtls.deleteOrder,
        onSuccess: (data) => {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: ['orders'] })
        },
        onError: () => {
            toast.error('Something went wrong')
        }
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Order action</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><EditOrder id={order.id} status={order.status} /></DropdownMenuItem>
                <DropdownMenuItem onClick={() => orderDelete.mutate(order.id)}><Trash /> Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default OrderMenu;
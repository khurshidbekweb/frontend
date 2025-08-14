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
import { EllipsisVertical, PenIcon, Trash } from "lucide-react";
import toast from "react-hot-toast";
import EditOrder from "../dialog/edit-order";
import { useState } from "react";


interface OrderCardProps {
    order: Order;
}

const OrderMenu = ({ order }: OrderCardProps) => {
    const queryClient = useQueryClient()
    const [open, setOpen] = useState(false)

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

    const cancel = order.status === 'CANCELLED' || order.status === 'CONFIRMED'

    return (

        <>
            <DropdownMenu key={String(open)}>
                <DropdownMenuTrigger><EllipsisVertical /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Order action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setOpen(true)}><PenIcon /> Edit order </DropdownMenuItem>
                    <DropdownMenuItem disabled={cancel} onClick={() => orderDelete.mutate(order.id)}><Trash /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <EditOrder id={order.id} status={order.status} open={open} setOpen={setOpen} />
        </>

    );
};

export default OrderMenu;
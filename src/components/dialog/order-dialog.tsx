
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { orderUtls } from "@/utils/order";
import toast from "react-hot-toast";
import { productType } from "@/types";


const OrderDialog = () => {
    const orders = useSelector((state: RootState) => state.basket.items)
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const orderItems = orders.map((order: productType) => ({ productId: order?.id, quantity: order?.quantity ?? 0 }))

    console.log(orderItems);




    const orderMutation = useMutation({
        mutationFn: orderUtls.postOrder,
        onSuccess: () => {
            toast.success('Create order ')
            setEmail('')
            setName('')
            setTimeout(() => { setOpen(false) }, 500)
        },
        onError: (err) => {
            toast.error('Something went wrong')
            console.log(err);

        }
    })

    const handleOrder = () => {
        orderMutation.mutate({
            customerEmail: email,
            customerName: name,
            orderItems
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen(true)} className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl cursor-pointer text-xl font-bold my-5">To Order</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Your order 🧡</DialogTitle>
                    <div className="flex flex-col space-y-1 justify-between items-center">
                        <Input onChange={e => setName(e.target.value)} type="text" required placeholder="Enter your name" />
                        <Input onChange={e => setEmail(e.target.value)} type="email" required placeholder="Enter your email" />
                    </div>
                    <DialogDescription>
                        {orders?.length && orders.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <p className="text-xl font-semibold">{item.name}</p>
                                <span className="text-green-600 text-2xl">{item.quantity} ta</span>
                            </div>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <Button onClick={handleOrder}>Order</Button>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDialog;
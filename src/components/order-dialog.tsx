
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
import { Button } from "./ui/button";

const OrderDialog = () => {
    const order = useSelector((state: RootState) => state.basket.items)

    return (
        <Dialog>
            <DialogTrigger className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl cursor-pointer text-xl font-bold my-5">To Order</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Your order 🧡</DialogTitle>
                    <DialogDescription>
                        {order?.length && order.map(item => (
                            <div key={item.id} className="flex justify-between items-center">
                                <p className="text-xl font-semibold">{item.name}</p>
                                <span className="text-green-600 text-2xl">{item.quantity} ta</span>
                            </div>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <Button>Order</Button>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDialog;
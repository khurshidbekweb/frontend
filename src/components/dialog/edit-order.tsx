import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderUtls } from "@/utils/order";
import toast from "react-hot-toast";

interface orderProps {
    id: number,
    status: string,
    open: boolean,
    setOpen: (open: boolean) => void
}

const EditOrder = ({ id, status, open, setOpen }: orderProps) => {

    const orderStatus = ['PENDING', 'CONFIRMED', 'SHIPPED']
    const [editStatus, setStatus] = useState(status)

    const queryClient = useQueryClient()
    const statusFn = useMutation({
        mutationFn: orderUtls.putOrder,
        onSuccess: () => {
            toast.success("Success changet order status")
            queryClient.invalidateQueries({ queryKey: ['orders'] })
            setOpen(false)
        },
        onError: (err) => {
            console.log(err);
            toast.error('Something went wrong')

        }
    })

    const handleStatus = () => {
        statusFn.mutate({
            id,
            status: editStatus
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Procut 🧡</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>

                <Select defaultValue={status} onValueChange={value => setStatus(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose product status" />
                    </SelectTrigger>
                    <SelectContent>
                        {orderStatus.map((item: string) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                    </SelectContent>
                </Select>

                <Button onClick={handleStatus}>Edit Products</Button>
            </DialogContent>
        </Dialog>
    );
};

export default EditOrder;
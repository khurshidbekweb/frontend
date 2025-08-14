import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { PenIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orderUtls } from "@/utils/order";
import toast from "react-hot-toast";

interface orderProps {
    id: number,
    status: string
}

const EditOrder = ({ id, status }: orderProps) => {
    const [open, setOpen] = useState(false)
    const orderStatus = ['PENDING', 'PROCESSING', 'COMPLETED']
    const [editStatus, setStatus] = useState(status)
    const queryClient = useQueryClient()
    const statusFn = useMutation({
        mutationFn: orderUtls.putOrder,
        onSuccess: () => {
            toast.success("Success changet order status")
            queryClient.invalidateQueries({ queryKey: ['orders'] })
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
            <DialogTrigger onClick={() => setOpen(true)} className="w-full rounded-sm text-center cursor-pointer flex items-center gap-1"><PenIcon /> Edit status</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Procut 🧡</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>

                <Select defaultValue={editStatus} onValueChange={value => setStatus(value)}>
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
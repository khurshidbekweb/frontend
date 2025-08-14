import { useState } from "react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productUtils } from "@/utils/product";
import toast from "react-hot-toast";
import { Pen } from "lucide-react";

const EditProduct = () => {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({ name: '', price: '', stock: '', category: '', isActive: true });

    const queryClient = useQueryClient()

    const addProduct = useMutation({
        mutationFn: productUtils.addProduct,
        onSuccess: () => {
            toast.success('Add new product ')
            queryClient.invalidateQueries({ queryKey: ['products'] })
            setOpen(false)
            setFormData({ name: '', price: '', stock: '', category: '', isActive: true })
        },
        onError: (err) => {
            console.log(err);
            toast.error("Something went wrong")
        }
    })

    const handleProduct = () => {
        addProduct.mutate({
            category: formData.category,
            isActive: true,
            name: formData.name,
            price: Number(formData.price),
            stock: Number(formData.stock)
        })
    }

    const productCategories = [
        "Electronics",
        "Fashion",
        "Sports & Outdoors",
        "Health & Beauty",
        "Books",
        "Automotive",
        "Furniture",
        "Groceries",
        "Musical Instruments",
    ];

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen(true)} className="w-full rounded-sm text-center border cursor-pointer p-1"><Pen className="mx-auto" /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Procut 🧡</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-2">
                    <Input onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} type="text" placeholder="Enter product name" />
                    <div className="flex justify-between items-center gap-2">
                        <Input onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))} type="number" placeholder="Price (currency $)" />
                        <Input onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))} type="number" placeholder="Stock" />
                    </div>
                    <Select onValueChange={value => setFormData(pre => ({ ...pre, category: value }))}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose product category" />
                        </SelectTrigger>
                        <SelectContent>
                            {productCategories.map((item: string) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                <Button onClick={handleProduct}>Add Products</Button>
            </DialogContent>
        </Dialog>
    );
};

export default EditProduct;
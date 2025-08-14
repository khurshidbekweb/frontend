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
import { productType } from "@/types";

const EditProduct = (product: productType) => {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({ name: product.name, price: product.price, stock: product.stock, category: product.category, isActive: product.isActive });

    const queryClient = useQueryClient()
    console.log(product);

    const editProduct = useMutation({
        mutationFn: productUtils.putProduct,
        onSuccess: () => {
            toast.success('Add new product ')
            queryClient.invalidateQueries({ queryKey: ['products'] })
            setOpen(false)
            setFormData({ name: '', price: 0, stock: 0, category: '', isActive: true })
        },
        onError: (err) => {
            console.log(err);
            toast.error("Something went wrong")
        }
    })

    const handleProduct = () => {
        editProduct.mutate({
            id: product.id,
            category: formData.category,
            isActive: formData.isActive,
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
                    <Input defaultValue={product.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} type="text" placeholder="Enter product name" />
                    <div className="flex justify-between items-center gap-2">
                        <Input defaultValue={formData.price} onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))} type="number" placeholder="Price (currency $)" />
                        <Input defaultValue={formData.stock} onChange={(e) => setFormData(prev => ({ ...prev, stock: Number(e.target.value) }))} type="number" placeholder="Stock" />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <Select defaultValue={product.category} onValueChange={value => setFormData(pre => ({ ...pre, category: value }))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose product status" />
                            </SelectTrigger>
                            <SelectContent>
                                {productCategories.map((item: string) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select
                            defaultValue={formData.isActive ? "true" : "false"}
                            onValueChange={(value) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    isActive: value === "true"
                                }))
                            }
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose product status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="true">Active</SelectItem>
                                <SelectItem value="false">InActive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button onClick={handleProduct}>Edit Products</Button>
            </DialogContent>
        </Dialog>
    );
};

export default EditProduct;
import AddProduct from "@/components/dialog/add-product";
import PaginationControls from "@/components/pagination";
import ProductCard from "@/components/product-card";
import { productType } from "@/types";
import { productUtils } from "@/utils/product";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";



const Products = () => {
    const [page, setPage] = useState<number>(0);
    const size = 6;

    const { data: products, isLoading } = useQuery({
        queryKey: ["products", page, size],
        queryFn: () => productUtils.getProducts({ page, size }),
    });

    if (isLoading) return <p>Loading...</p>;

    const totalPages = products?.data?.totalPages || 0;


    return (
        <div className="w-full p-2">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-amber-600">Products</h1>
                <AddProduct />
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">
                {products?.success && products?.data.content.map((item: productType) => (<ProductCard {...item} key={item.id} />))}
            </div>

            <PaginationControls
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Products;
import ProductCard from "@/components/card/product-card";
import PaginationControls from "@/components/pagination";
import { productType } from "@/types";
import { productUtils } from "@/utils/product";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Home = () => {
    const [page, setPage] = useState<number>(0);
    const size = 12;

    const { data: allProducts, isLoading } = useQuery({
        queryKey: ["products", page, size],
        queryFn: () => productUtils.getProducts({ page, size }),
    });

    if (isLoading) return <p>Loading...</p>;

    const totalPages = allProducts?.data?.totalPages || 0;
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 my-7">
                {allProducts?.data?.content?.length && allProducts?.data?.content.map((el: productType) => <ProductCard {...el} key={el.id} />)}
            </div>

            <PaginationControls
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default Home;
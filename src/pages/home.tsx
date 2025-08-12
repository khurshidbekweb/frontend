import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import { productType } from "@/types";
import { productUtils } from "@/utils/product";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    const { data: allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: productUtils.getProducts
    })
    console.log(allProducts?.data?.content);

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 my-7">
                {allProducts?.data?.content?.length && allProducts?.data?.content.map((el: productType) => <ProductCard {...el} key={el.id} />)}
            </div>
        </>
    );
};

export default Home;
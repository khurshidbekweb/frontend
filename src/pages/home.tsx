import Navbar from "@/components/navbar";
import ProductCard from "@/components/product-card";
import { productUtils } from "@/utils/product";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    const { data: allProducts } = useQuery({
        queryKey: ['products'],
        queryFn: productUtils.getProducts
    })
    console.log(allProducts?.data?.content);

    return (
        <div>
            <Navbar />
            <div className=" m-5">
                <ProductCard />
            </div>
        </div>
    );
};

export default Home;
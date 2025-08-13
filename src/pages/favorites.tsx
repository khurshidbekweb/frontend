import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProductCard from "@/components/product-card";

function FovaritePage() {
    const favorites = useSelector((state: RootState) => state.favorites.items);
    console.log(favorites);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold my-5 text-amber-600">Favorites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 my-7">
                {favorites.map((item) => <ProductCard {...item} key={item.id} />)}
            </div>
        </div>
    );
}

export default FovaritePage;
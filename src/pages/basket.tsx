import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BasketCard from "@/components/basket-card";

const Basket = () => {
    const basket = useSelector((state: RootState) => state.basket.items);
    console.log(basket);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold my-5 text-amber-600">Basket</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 my-7">
                {basket.map((item) => <BasketCard {...item} key={item.id} />)}
            </div>
        </div>
    );
};

export default Basket;
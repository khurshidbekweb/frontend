import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BasketCard from "@/components/basket-card";
import { Minus } from "lucide-react";
import OrderDialog from "@/components/order-dialog";

const Basket = () => {
    const basket = useSelector((state: RootState) => state.basket.items);
    const totalSum = basket.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold my-5 text-amber-600">Basket</h2>
            <div className="flex justify-between items-start gap-x-2">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mb-7">
                    {basket.map((item) => <BasketCard {...item} key={item.id} />)}
                </div>
                <div className="flex-1 border p-2 rounded-xl shadow-2xl">
                    <p className="text-2xl font-bold text-green-500 pb-3">Product order</p>
                    <ul className="flex flex-col space-y-3 items-center justify-between w-full">
                        <li className="flex justify-between items-center w-full text-xl font-bold">TotalSum: <span className="font-semibold">${totalSum.toFixed(2)}</span></li>
                        <hr />
                        <li className="flex justify-between items-center w-full text-xl font-bold">Estimated delivery: <span className="font-semibold">$0</span></li>
                        <hr />
                        <li className="flex justify-between items-center w-full text-xl font-bold">Taxes: <span className="font-semibold"><Minus /></span></li>
                        <hr />
                    </ul>
                    <OrderDialog />
                </div>
            </div>
        </div>
    );
};

export default Basket;
import { OrderCard } from "@/components/card/order-card";
import PaginationControls from "@/components/pagination";
import { Order } from "@/types";
import { orderUtls } from "@/utils/order";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const UserOrder = () => {
    const [page, setPage] = useState<number>(0);
    const size = 6;


    const { data: orders, isLoading } = useQuery({
        queryKey: ["orders", page, size],
        queryFn: () => orderUtls.getOrder({ page, size }),
    });

    if (isLoading) return <p>Loading...</p>;

    const totalPages = orders?.data?.totalPages || 0;
    return (
        <div className="w-full p-2">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-amber-600">Orders</h1>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">
                {orders?.success && orders?.data.content.map((item: Order) => (<OrderCard order={item} key={item.id} />))}

            </div>

            <PaginationControls
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </div>
    );
};

export default UserOrder;
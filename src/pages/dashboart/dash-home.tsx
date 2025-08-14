import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orderUtls } from "@/utils/order";
import { productUtils } from "@/utils/product";
import { useQuery } from "@tanstack/react-query";
import { Package, ShoppingCart } from "lucide-react"

const DashHome = () => {
    const page = 0;
    const size = 100;
    const { data: products } = useQuery({
        queryKey: ["products", page, size],
        queryFn: () => productUtils.getProducts({ page, size }),
    });
    const { data: orders, } = useQuery({
        queryKey: ["orders", page, size],
        queryFn: () => orderUtls.getOrder({ page, size }),
    });
    return (
        <div className="w-full flex items-center gap-x-3 p-2">
            <Card>
                <CardHeader className="w-[300px] flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    <Package className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{products?.data?.content?.length}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="w-[300px] flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <ShoppingCart className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{orders?.data?.content?.length}</div>
                </CardContent>
            </Card>
        </div>

    );
};

export default DashHome;
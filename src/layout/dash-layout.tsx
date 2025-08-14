import { Button } from "@/components/ui/button";
import { Home, ListOrdered, PackageSearch } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashLayout = () => {

    const navigate = useNavigate()

    return (
        <div className="max-w-7xl mx-auto flex justify-between items-start h-[90vh]">
            <div className="w-[250px] border-r h-[100%] p-2 flex flex-col space-y-3">
                <NavLink to={'/dashboard'} end className="flex items-center gap-x-2 font-semibold hover:bg-blue-600 p-2 rounded-xl transition-all hover:text-white"><Home size={20} /> Home</NavLink>
                <NavLink to={'/dashboard/product'} className="flex items-center gap-x-2 font-semibold hover:bg-blue-600 p-2 rounded-xl transition-all hover:text-white"><PackageSearch size={20} /> Products</NavLink>
                <NavLink to={'/dashboard/order'} className="flex items-center gap-x-2 font-semibold hover:bg-blue-600 p-2 rounded-xl transition-all hover:text-white"> <ListOrdered size={20} /> Order</NavLink>


                <Button onClick={() => navigate('/')} className="bg-red-600 hover:bg-red-700 cursor-pointer mt-40">Log Out</Button>
            </div>
            <main className="container mx-auto flex-1" >
                <Outlet />
            </main>
        </div>
    );
};

export default DashLayout;
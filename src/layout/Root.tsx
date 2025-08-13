import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto">
                <Outlet />
            </main>
        </>
    );
};

export default Root;
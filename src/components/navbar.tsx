import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/i18n";

type Language = 'uz' | 'ru' | 'en';

const Navbar = () => {
    const { t } = useTranslation()
    const language = localStorage.getItem("language") || "uz";
    const token = localStorage.getItem('token')
    const naviagte = useNavigate()
    useEffect(() => {
        if (!token) {
            naviagte('/')
        }
    }, [naviagte, token])

    return (
        <div className="max-w-7xl mx-auto">
            <div className=" flex items-center justify-between my-2">
                <h1 className="text-2xl font-serif">{t('logo')}</h1>
                <div className="flex items-center gap-3">
                    <Select onValueChange={(value: string) => changeLanguage(value as Language)}>
                        <SelectTrigger className="w-[70px]">
                            <SelectValue placeholder={language} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="uz">uz</SelectItem>
                            <SelectItem value="ru">ru</SelectItem>
                            <SelectItem value="en">en</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={() => {
                        localStorage.removeItem('token')
                        window.location.reload()
                    }} className="bg-red-500 text-white cursor-pointer">{t('auth')} <LuLogOut size={35} />
                    </Button>
                </div>
            </div>
            <Separator />
        </div>
    );
};

export default Navbar;
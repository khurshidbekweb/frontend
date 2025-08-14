import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { CgTrash } from "react-icons/cg";

interface deleteModal {
    id: number
    fn: (id: number) => void
}

const DeleteRquest: React.FC<deleteModal> = ({ fn, id }: deleteModal) => {
    const { i18n } = useTranslation()
    return (
        <Dialog>
            <DialogTrigger className="w-full text-red-800 block border p-1 rounded-sm"><CgTrash className="mx-auto" size={26} /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center my-3">{i18n.language == 'uz' ? 'Rostdan ham o\'chirmoqchimisiz?' : 'Вы уверены, что хотите удалить?'}</DialogTitle>
                    <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </DialogHeader>
                <DialogContent aria-describedby={undefined}></DialogContent>
                <div className="flex justify-center items-center space-x-4">
                    <DialogClose>
                        <button type="button" className="py-2 px-3 text-sm font-medium text-white bg-red-500 rounded-lg border border-red-200 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-red-900 focus:z-10 dark:bg-red-700 dark:text-red-300 dark:border-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-600">
                            {i18n.language == 'uz' ? "Bekor qilish" : 'Отмена'}
                        </button>
                    </DialogClose>
                    <button onClick={() => fn(id)} type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-900">
                        {i18n.language == 'uz' ? "O'chirish" : 'Удалить'}
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteRquest;
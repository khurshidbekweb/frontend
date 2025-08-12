import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate()
    const [register, setRegister] = useState<"login" | 'register'>('login');
    // const auth = useMutation({
    //     mutationFn: authUtils.auth,
    //     onSuccess: () => {
    //         toast.success('Muvaffaqiyatli kirildi ✅')
    //         setTimeout(() => {
    //             navigate('/dashboard')
    //         }, 1000)
    //     },
    //     onError: (err) => {
    //         console.log(err);
    //         toast.error('Login yoki parolda xatolik ❌ ')            
    //     }
    // })


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        try {
            // auth.mutate({
            //     login: form.login.value,
            //     password: form.password.value,
            // })
            localStorage.setItem("token", 'sdwvewrverwvw');
            navigate('/dashboard')
            toast.success('Muvaffaqiyatli kirildi ✅', form.login.value)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="bg-gray-100 h-screen">
            <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto md:h-[85vh] lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            {register === 'login' ? 'Login' : 'Register'}
                        </h1>
                        {
                            register === 'login' && <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input autoCapitalize='username' type="text" name="login" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Login" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input autoComplete="current-password" type="password" name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-[18px] cursor-pointer">Login</button>
                                <div className="flex items-center gap-x-3 justify-center">
                                    <p className='text-sm text-black/50'>Don't have an accaunt ?</p>
                                    <p className='text-blue-700 cursor-pointer' onClick={() => setRegister('register')}>Register</p>
                                </div>
                            </form>
                        }
                        {
                            register === 'register' && <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                                <div>
                                    <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input autoCapitalize='username' type="text" name="login" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input autoComplete="current-password" type="password" name="password" id="password" placeholder="*********" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input autoComplete="current-email" type="email" name="email" id="password" placeholder="example@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-[18px] cursor-pointer">Register</button>
                                <div className="flex items-center gap-x-3 justify-center">
                                    <p className='text-sm text-black/50'>Already have an accaunt ?</p>
                                    <button type='button' className='text-blue-600' onClick={() => setRegister('login')}>Login</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
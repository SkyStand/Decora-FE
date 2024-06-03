"use client"
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ILogin from '../../../../data/interface/request/ILogin';
import AuthService from '../../../../data/services/AuthService';
import IToken from '../../../../data/interface/response/IToken';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

export default function Login() {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ILogin>({
        email: '',
        password: ''
    });
    const router = useRouter();

    function handleChanges(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }));
    }

    async function login() {
        try {
            setLoading(true);
            const token: IToken = await new AuthService().login(data);
            Cookies.set('authToken', token.token, { path: '/' });
            Swal.fire({
                title: 'Login Success!',
                text: 'Akun Berhasil Didaftarkan!',
                icon: 'success',
            }).then(() => {
                router.push('/');
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Akun Anda Tidak Terdaftar!',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        login();
    }

    return (
        <main className="overflow-y max-h-screen">
            <div className="w-full h-screen flex">
                <div className="w-1/2 flex flex-col items-center justify-center my-auto">
                    {/* ------- title -------- */}
                    <div className='flex items-center justify-center my-8'>
                        <div className='cursor-pointer'>
                            <svg width="40" height="40" viewBox="0 0 855 855" xmlns="http://www.w3.org/2000/svg">
                                <rect className='fill-blue-tua' x="29.4482" y="41.7975" width="69.3458" height="768.504"/>
                                <rect className='fill-blue-tua' x="221.337" y="41.7975" width="69.3458" height="768.504"/>
                                <rect className='fill-blue-tua' x="405.626" y="398.976" width="69.3458" height="411.325"/>
                                <rect className='fill-blue-tua' x="514.869" y="398.976" width="69.3458" height="411.325"/>
                                <rect className='fill-blue-tua' x="757.105" y="41.7975" width="69.3458" height="768.504"/>
                                <rect className='fill-blue-tua' x="29.5907" y="812.529" width="69.3458" height="445.523" transform="rotate(-90 29.5907 812.529)" />
                                <rect className='fill-blue-tua' x="29.5907" y="446.923" width="69.3458" height="445.523" transform="rotate(-90 29.5907 446.923)"/>
                                <rect className='fill-blue-tua' x="339.13" y="342.93" width="69.3458" height="360.978" transform="rotate(-90 339.13 342.93)"/>
                                <rect className='fill-blue-tua' x="628.862" y="111.143" width="69.3458" height="190.939" transform="rotate(-90 628.862 111.143)"/>
                                <rect className='fill-blue-tua' x="29.4482" y="111.143" width="69.3458" height="254.585" transform="rotate(-90 29.4482 111.143)"/>
                                <rect className='fill-blue-tua' x="514.869" y="446.473" width="69.3458" height="185.239" transform="rotate(-90 514.869 446.473)"/>
                                <rect className='fill-blue-tua' x="514.869" y="812.201" width="69.3458" height="311.581" transform="rotate(-90 514.869 812.201)"/>
                            </svg>
                        </div>
                        <a href="/"className='ml-2 font-crete text-4xl'>Decora</a>
                    </div>

                    {/* ------- form ----------- */}
                    <form onSubmit={handleSubmit} className='flex flex-col w-3/4 mx-auto font-worksans border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
                        <h2 className="text-2xl font-semibold mb-10 text-center">Masuk Akun</h2>
                        {/* -- */}
                        <input type="email" name="email" value={data.email} onChange={handleChanges} placeholder='Email' className='max-w-sm' required />
                        <input type="password" name="password" value={data.password} onChange={handleChanges} placeholder='Kata Sandi' className='max-w-sm' required />
                        <button type="submit" className='mt-8 max-w-sm' disabled={loading}>
                            {loading ? 'Loading...' : 'Masuk'}
                        </button>

                        {/* -- */}
                        <span className="horizontalLines text-gray-500 my-8">ATAU</span>
                        <div className="flex flex-col items-center justify-center">
                            <span>Tidak punya akun? <a href="/register" className="text-blue-500">Daftar</a></span>
                            <a href="/forgot-password" className="text-gray-500 mt-3 text-sm">Lupa kata sandi?</a>
                        </div>
                    </form>
                </div>

                {/* -------- image ----------*/}
                <div className="w-1/2 h-screen fixed right-0">
                    <Image src="/images/login.png" alt='login' layout='fill' />
                </div>
            </div>
        </main>
    );
}

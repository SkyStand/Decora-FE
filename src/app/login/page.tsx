"use client"
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import ILogin from '../../../data/interface/request/ILogin';
import AuthService from '../../../data/services/AuthService';
import IToken from '../../../data/interface/response/IToken';
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
                            <Image src="/images/logo.png" alt="logo" layout="responsive" width={73} height={50} objectFit='contain' />
                        </div>
                        <a href="/" className='ml-2 font-primary text-2xl font-bold'>DECORA</a>
                    </div>

                    {/* ------- form ----------- */}
                    <form onSubmit={handleSubmit} className='flex flex-col w-3/4 mx-auto border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
                        <h2 className="text-xl font-bold mb-6 text-center font-primary">Masuk Akun</h2>
                        {/* -- */}
                        <input type="email" name="email" value={data.email} onChange={handleChanges} placeholder='Email' className='font-secondary max-w-sm' required />
                        <input type="password" name="password" value={data.password} onChange={handleChanges} placeholder='Kata Sandi' className='font-secondary max-w-sm' required />
                        <button type="submit" className='mt-10 font-secondary max-w-sm' disabled={loading}>
                            {loading ? 'Loading...' : 'Masuk'}
                        </button>

                        {/* -- */}
                        <span className="horizontalLines text-gray-500 my-8 font-secondary">ATAU</span>
                        <div className="flex flex-col items-center justify-center font-secondary">
                            <span>Tidak punya akun? <a href="/register" className="text-blue-500">Daftar</a></span>
                            <a href="/forgot-password" className="text-gray-500 mt-3">Lupa kata sandi?</a>
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

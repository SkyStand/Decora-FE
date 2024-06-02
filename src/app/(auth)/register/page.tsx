"use client"
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IRegister from '../../../data/interface/request/IRegister';
import Swal from 'sweetalert2';
import AuthService from '../../../data/services/AuthService';

export default function Register() {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IRegister>({
    name: '',
    email: '',
    password: ''
  });
  const router = useRouter();

  async function register() {
    try {
      setLoading(true);
      const authservice = new AuthService();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await authservice.regis(data);
      console.log(response)
      Swal.fire({
        title: 'Register Success!',
        text: 'Akun Berhasil Didaftarkan!',
        icon: 'success',
      }).then(() => {
        router.push('/login');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Akun Tidak Berhasil Didaftarkan!',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  }

  function handleChanges(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    register();
  }

  return (
    <main className="overflow-y max-h-screen">
      <div className="w-full h-screen flex">
        <div className="w-1/2 flex flex-col items-center justify-center my-auto">
          {/* ------- title -------- */}
          <div className='flex items-center justify-center my-8'>
            <div className='relative cursor-pointer '>
              <Image src="/images/logo.png" alt="logo" layout="responsive" width={73} height={50} objectFit='contain' />
            </div>
            <a href="/" className='ml-2 font-primary text-2xl font-bold'>DECORA</a>
          </div>

          {/* ------- form ----------- */}
          <form onSubmit={handleSubmit} className='flex flex-col w-3/4 mx-auto border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
            <h2 className="text-xl font-bold mb-6 text-center font-primary">Buat Akun</h2>
            {/* -- */}
            <input type="text" name="name" value={data.name} onChange={handleChanges} placeholder='Nama' className='font-secondary max-w-sm' required />
            <input type="email" name="email" value={data.email} onChange={handleChanges} placeholder='Email' className='font-secondary max-w-sm' required />
            <input type="password" name="password" value={data.password} onChange={handleChanges} placeholder='Kata Sandi' className='font-secondary max-w-sm' required />
            {/* -- */}
            <span className="text-gray-500 max-w-sm mt-10 text-center">
              Dengan mendaftar, berarti anda setuju dengan
              <a href="#" className="text-black"> Ketentuan</a>,
              <a href="#" className="text-black"> Kebijakan Privasi</a> dan
              <a href="#" className="text-black"> Kebijakan Cookie</a> kami
            </span>
            {/* -- */}
            <button type="submit" className='mt-10 font-secondary max-w-sm' disabled={loading}>
              {loading ? 'Loading...' : 'Daftar'}
            </button>
            <span className="horizontalLines text-gray-500 my-8 font-secondary">ATAU</span>
            <span className='font-secondary text-center'>Punya akun? <a href="/login" className="text-blue-500">Masuk</a></span>
          </form>
        </div>

        {/* -------- image ----------*/}
        <div className="w-1/2 h-screen fixed right-0">
          <Image src="/images/register.png" alt='register' layout='fill' />
        </div>
      </div>
    </main>
  );
}

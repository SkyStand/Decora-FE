"use client"
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IRegister from '../../../../data/interface/request/IRegister';
import Swal from 'sweetalert2';
import AuthService from '../../../../data/services/AuthService';

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
            <a href="/" className='ml-2 font-crete text-4xl'>Decora</a>
          </div>

          {/* ------- form ----------- */}
          <form onSubmit={handleSubmit} className='flex flex-col w-3/4 mx-auto font-worksans border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
            <h2 className="text-2xl font-semibold mb-10 text-center">Buat Akun</h2>
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
            <button type="submit" className='mt-10 max-w-sm' disabled={loading}>
              {loading ? 'Loading...' : 'Daftar'}
            </button>
            <span className="horizontalLines text-gray-500 my-8">ATAU</span>
            <span className='text-center'>Punya akun? <a href="/login" className="text-blue-500">Masuk</a></span>
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

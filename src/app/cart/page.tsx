"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import CartService from '../../../data/services/CartService';
import ICartItems from '../../../data/interface/response/ICartItems';
import ProductService from '../../../data/services/ProductService';
import instance from '../../../helpers/AxiosInstance';

interface ICartItemsExtended extends ICartItems {
    selected: boolean;
}

const CartPage = () => {
    const [cartData, setCartData] = useState<ICartItemsExtended[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const router = useRouter();
    const [imagePath, setImagePath] = useState<string>("");

    const fetchData = async () => {
        try {
            const cartService = new CartService();
            const data = await cartService.fetch();
            console.log("Fetched cart data:", data); // Log fetched data
            const initializedData = data.map(item => ({ ...item, selected: false }));
            setCartData(initializedData);
        } catch (error) {
            console.log("Error in fetching data", error);
        }
    };

    useEffect(() => {
        new ProductService(instance).getImagePath().then((value) => {
            setImagePath(value);
        });
        fetchData();
    }, []);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setCartData(prevData => prevData.map(item => item.id === id ? { ...item, qty: newQuantity } : item));
    };

    const handleRemoveItem = (id: number) => {
        setCartData(prevData => prevData.filter(item => item.id !== id));
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        setCartData(prevData => prevData.map(item => ({ ...item, selected: !selectAll })));
    };

    const handleSelectItem = (id: number) => {
        setCartData(prevData => prevData.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
    };

    const handleRemoveSelectedItems = () => {
        setCartData(prevData => prevData.filter(item => !item.selected));
    };

    const handleCheckout = () => {
        router.push('/order');
    };

    const selectedItems = cartData.filter(item => item.selected);
    const subtotal = selectedItems.reduce((acc, item) => {
        if (!item.variants || item.variants.length === 0) {
            console.error(`Variants missing for item with id: ${item.id}`);
            return acc;
        }
        const variant = item.variants[0];
        const price = variant.diskon ? variant.diskon : variant.price;
        return acc + item.qty * price;
    }, 0);

    const serviceFee = 15000;
    const promoDiscount = selectedItems.reduce((acc, item) => {
        if (!item.variants || item.variants.length === 0) {
            return acc;
        }
        const variant = item.variants[0];
        return acc + (variant.price - (variant.diskon || variant.price)) * item.qty;
    }, 0);
    const totalPayment = subtotal - promoDiscount + serviceFee;
    const totalItems = selectedItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <main className="relative pt-16">
            <Navbar isHomePage={false} />
            <div className="container mx-auto py-8 font-worksans">
                <h1 className="text-2xl font-semibold mb-4">Keranjang Belanja</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-4 justify-between">
                            <div className='px-4'>
                                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} className="mr-2" />
                                <span>Pilih Semua</span>
                            </div>
                            <button onClick={handleRemoveSelectedItems} className="w-1/5 border-none flex justify-end text-red-500">Hapus Produk</button>
                        </div>
                        {cartData.map(item => (
                            <div key={item.id} className="border border-salmon-3 rounded-lg p-4 mb-4 flex">
                                <input type="checkbox" checked={item.selected} onChange={() => handleSelectItem(item.id)} className="mr-4" />
                                {item.variants && item.variants.length > 0 ? (
                                    <>
                                        <img src={item.variants[0].image.includes("http") ? item.variants[0].image : `${imagePath}/${item.variants[0].image}`} alt={item.variants[0].variant_name} width={700} height={600} className="w-[150px] h-[100px] object-cover rounded-lg" />
                                        <div className="ml-4 flex-1">
                                            <h2 className="text-lg font-medium">{item.variants[0].variant_name}</h2>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, Math.max(1, item.qty - 1))}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-gray-700">
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={item.qty}
                                                    onChange={(e) => handleQuantityChange(item.id, Math.max(1, parseInt(e.target.value)))}
                                                    className="w-12 text-center mx-2 bg-transparent border-none"
                                                    min={1}
                                                />
                                                <button
                                                    onClick={() => handleQuantityChange(item.id, item.qty + 1)}
                                                    className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded-full text-gray-700">
                                                    +
                                                </button>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-lg font-semibold text-blue-tua">{`Rp ${item.variants[0].price.toLocaleString('id-ID')},00`}</span>
                                                {item.variants[0].diskon && (
                                                    <span className="text-red-500 ml-2">{`Rp ${item.variants[0].diskon.toLocaleString('id-ID')},00`}</span>
                                                )}
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemoveItem(item.id)} className='w-1/3 mt-4 border-none bg-gray-200 rounded-full p-2'>
                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='ml-2'>
                                                <path d="M15 4H20V6H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V6H0V4H5V1C5 0.44772 5.44772 0 6 0H14C14.5523 0 15 0.44772 15 1V4ZM16 6H4V18H16V6ZM11.4142 11.9997L13.182 13.7675L11.7678 15.1817L10 13.4139L8.2322 15.1817L6.81802 13.7675L8.5858 11.9997L6.81802 10.232L8.2322 8.8178L10 10.5855L11.7678 8.8178L13.182 10.232L11.4142 11.9997ZM7 2V4H13V2H7Z" fill="black" />
                                            </svg>
                                        </button>
                                    </>
                                ) : (
                                    <div className="ml-4 flex-1">
                                        <h2 className="text-lg font-medium text-red-500">Variant missing</h2>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>
                    <div className="border border-salmon-3 rounded-lg p-4 flex flex-col h-auto">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Detail Rincian Pembayaran</h2>
                            <div className="flex justify-between mb-2">
                                <span>{`Subtotal Harga (${totalItems} produk)`}</span>
                                <span>{`Rp ${subtotal.toLocaleString('id-ID')},00`}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Promo Produk</span>
                                <span className="text-red-500">{`- Rp ${promoDiscount.toLocaleString('id-ID')},00`}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Biaya Layanan</span>
                                <span>{`Rp ${serviceFee.toLocaleString('id-ID')},00`}</span>
                            </div>
                            <hr className="mb-2 border-salmon-3" />
                            <div className="flex justify-between mb-4 font-semibold text-lg">
                                <span>Total Pembayaran</span>
                                <span>{`Rp ${totalPayment.toLocaleString('id-ID')},00`}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Belum termasuk ongkos kirim</p>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full p-3 bg-salmon-3 text-salmon-1 text-center font-semibold rounded-lg border-none">
                            Lanjut Bayar
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;

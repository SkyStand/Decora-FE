"use client"

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar'; 

const orders = [
    {
        id: 1,
        status: "Sedang Dikirim",
        date: "Tiba besok",
        time: "07.00 - 19.00",
        products: [
            {
                name: "Classic Chair",
                image: "/images/furniture/livingroom.png",
            },
        ],
    },
];

const OrderPage = () => {
    return (
        <main className="relative pt-16">
            <Navbar isHomePage={false} />
            <div className="container mx-auto py-8 font-worksans">
                <h1 className="text-2xl font-semibold mb-4">Histori Pesanan</h1>
                <p className="mb-8">{orders.length} pesanan</p>
                {orders.map(order => (
                    <div key={order.id} className="mb-8 border border-salmon-3 rounded-lg">
                        <div className="p-4 bg-salmon-2">
                            <h2 className="text-lg font-semibold">{order.status}</h2>
                            {order.status === "Dispatched" ? (
                                <p className="text-sm text-gray-500">{order.date} - {order.time}</p>
                            ) : (
                                <p className="text-sm text-gray-500">{order.date}</p>
                            )}
                        </div>
                        <div className="p-4 flex flex-col md:flex-row justify-between">
                            <div>
                                {order.products.map((product, index) => (
                                    <div key={index} className="flex items-center mb-4">
                                        <Image src={product.image} alt={product.name} width={70} height={70} className="w-[70px] h-[70px] object-cover rounded-lg" />
                                        <p className="ml-4">{product.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-start md:items-end">
                                {order.status === "Sedang Dikirim" ? (
                                    <>
                                        <button className="bg-salmon-3 text-salmon-1 px-4 py-2 mb-2 rounded-lg w-full border-none md:w-auto">Lacak pesanan</button>
                                        <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                                            <button className="bg-salmon-1 text-salmon-3 px-4 py-2 rounded-lg border border-salmon-3 w-full md:w-auto">Lihat detail pesanan</button>
                                            <button className="bg-salmon-1 text-salmon-3 px-4 py-2 rounded-lg border border-salmon-3 w-full md:w-auto">Cetak invoice</button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                                        <button className="bg-gray-100 text-salmon-3 px-4 py-2 rounded-lg border border-salmon-3 w-full md:w-auto">Lihat detail pesanan</button>
                                        <button className="bg-gray-100 text-salmon-3 px-4 py-2 rounded-lg border border-salmon-3 w-full md:w-auto">Cetak invoice</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default OrderPage;

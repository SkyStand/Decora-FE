"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar'; 
import CartConfirmation from '@/components/CartConfirmation';

const products = [
    {
        id: 1,
        name: "Classic Chair",
        style: "Classic",
        category: "chair",
        image: "/images/furniture/livingroom.png",
        price: 15189000,
        discount: "60%",
        discountedPrice: 6075600,
        description: "This chair is perfect for any classic-style living room.",
        colors: ["#C0C0C0", "#FFD700", "#8B0000", "#000000"],
        stock: 10,
        dimensions: "80cm x 60cm x 40cm",
        weight: "20kg"
    },
    {
        id: 2,
        name: "Modern Table",
        style: "Modern",
        category: "table",
        image: "/images/furniture/livingroom.png",
        price: 2599999,
        description: "A modern table that fits any modern living room.",
        colors: ["#C0C0C0", "#FFD700", "#8B0000", "#000000"],
        stock: 5,
        dimensions: "150cm x 75cm x 75cm",
        weight: "30kg"
    },
    {
        id: 3,
        name: "Minimalist Cabinet",
        style: "Minimalist",
        category: "cabinet",
        image: "/images/furniture/livingroom.png",
        price: 42899000,
        discount: "20%",
        discountedPrice: 34319200,
        description: "A minimalist cabinet with ample storage space.",
        colors: ["#C0C0C0", "#FFD700", "#8B0000", "#000000"],
        stock: 2,
        dimensions: "100cm x 50cm x 200cm",
        weight: "50kg"
    },
    {
        id: 4,
        name: "Classic Bed",
        style: "Classic",
        category: "bed",
        image: "/images/furniture/livingroom.png",
        price: 329000,
        discount: "10%",
        discountedPrice: 296100,
        description: "A classic bed that brings elegance to your bedroom.",
        colors: ["#C0C0C0", "#FFD700", "#8B0000", "#000000"],
        stock: 7,
        dimensions: "200cm x 180cm x 50cm",
        weight: "70kg"
    },
    {
        id: 5,
        name: "Modern Chair",
        style: "Modern",
        category: "chair",
        image: "/images/furniture/livingroom.png",
        price: 109999000,
        description: "A modern chair with a sleek design.",
        colors: ["#C0C0C0", "#FFD700", "#8B0000", "#000000"],
        stock: 0,
        dimensions: "90cm x 90cm x 90cm",
        weight: "15kg"
    }
];

const hexToColorName = (hex: string): string => {
    const colorNames: { [key: string]: string } = {
        "#C0C0C0": "Gray",
        "#FFD700": "Yellow",
        "#8B0000": "Dark Red",
        "#000000": "Black",
    };

    return colorNames[hex] || "Unknown Color";
};


const ProductDetail = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const product = products.find((p) => p.id === parseInt(id, 10));
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isDimensionsOpen, setDimensionsOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value))));
    };

    const addToCart = () => {
        if (!selectedColor) {
            setErrorMessage('Please select a color before adding to cart.');
            return;
        }
        setErrorMessage('');
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <main className="relative pt-16">
            <Navbar isHomePage={false} />
            <div className="w-full h-auto mx-auto flex flex-col lg:flex-row items-start py-8 gap-8">
                <div className="w-full lg:w-1/2">
                    <Image src={product.image} alt={product.name} width={700} height={600} className="w-full h-[600px] object-cover" />
                </div>
                <div className="w-full lg:w-1/2 font-worksans lg:pl-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                    <div className="mb-6">
                        {product.discountedPrice ? (
                            <>
                                <span className="text-xl font-semibold text-red-600 mr-2">{`Rp ${product.discountedPrice.toLocaleString('id-ID')},00`}</span>
                                <span className="text-lg text-gray-500 line-through mr-2">{`Rp ${product.price.toLocaleString('id-ID')},00`}</span>
                                <span className="text-lg text-red-500">{product.discount} Off</span>
                            </>
                        ) : (
                            <span className="text-xl font-semibold text-blue-tua">{`Rp ${product.price.toLocaleString('id-ID')},00`}</span>
                        )}
                    </div>

                    {/* ------------- color -------------  */}
                    <div className="mb-6 text-blue-tua">
                        <h2 className="text-lg font-medium mb-2">Pilih warna:</h2>
                        <div className="flex gap-2">
                            {product.colors.map((color, index) => (
                                <div 
                                    key={index} 
                                    className={`w-11 h-11 rounded-lg border flex items-center justify-center cursor-pointer ${color === selectedColor ? 'border-blue-tua' : ''}`} 
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                >
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ------------- quantity -------------  */}
                    <div className="mb-8 flex items-center text-blue-tua">
                        <h2 className="text-lg font-medium mr-10">Jumlah</h2>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-700">
                                    -
                            </button>
                            <input 
                                type="number" 
                                value={quantity} 
                                onChange={handleQuantityChange} 
                                className="w-16 text-center bg-transparent" 
                                min={1} 
                                max={product.stock} />
                            <button
                                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-700">
                                +
                            </button>
                        </div>
                    </div>

                    {/* ------------- Add to Cart button -------------  */}
                    <button 
                        onClick={addToCart} 
                        className="px-4 py-3 bg-salmon-3 text-salmon-1 text-lg font-medium rounded-2xl w-full border-none"
                        disabled={product.stock === 0}>
                            {product.stock === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
                    </button>

                    {errorMessage && (
                        <p className="text-red-600 mt-2">{errorMessage}</p>
                    )}

                    {/* ------------- description -------------  */}
                    <div className="mt-8">
                        <button
                            onClick={() => setDescriptionOpen(!isDescriptionOpen)}
                            className="flex items-center justify-between w-full text-lg font-medium mb-2 focus:outline-none"
                        >
                            <span>Deskripsi</span>
                            <span>{isDescriptionOpen ? '-' : '+'}</span>
                        </button>
                        {isDescriptionOpen && (
                            <p className="text-gray-600 mt-2">{product.description}</p>
                        )}
                    </div>

                    {/* ------------- dimension & weight -------------  */}
                    <div className="mt-4">
                        <button
                            onClick={() => setDimensionsOpen(!isDimensionsOpen)}
                            className="flex items-center justify-between w-full text-lg font-medium mb-2 focus:outline-none"
                        >
                            <span>Dimensi & Berat</span>
                            <span>{isDimensionsOpen ? '-' : '+'}</span>
                        </button>
                        {isDimensionsOpen && (
                            <div className="mt-2">
                                <p className="text-gray-600">Dimensi: {product.dimensions}</p>
                                <p className="text-gray-600">Berat: {product.weight}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ------------- Cart Confirmation -------------  */}
            <CartConfirmation isOpen={isModalOpen} onClose={closeModal} product={product} quantity={quantity} selectedColor={hexToColorName(selectedColor)}  />
        </main>
    );
};

export default ProductDetail;

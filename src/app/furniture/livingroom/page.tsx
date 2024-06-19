"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';

const products = [
    {
        id: 1,
        name: "Classic Chair",
        category: "chair",
        image: "/images/furniture/livingroom.png",
        price: 15189000,
        discount: "60%",
        discountedPrice: 6075600,
        description: "This chair is perfect for any classic-style living room."
    },
    {
        id: 2,
        name: "Modern Table",
        category: "table",
        image: "/images/furniture/livingroom.png",
        price: 2599999,
        description: "A modern table that fits any modern living room."
    },
];

const categories = [
    { label: "Kursi", value: "chair" },
    { label: "Meja", value: "table" },
    { label: "Kasur", value: "bed" },
    { label: "Kabinet", value: "cabinet" },
];

const sortOptions = [
    { label: "Paling Relevan", value: "relevant" },
    { label: "Harga Terendah", value: "priceLowHigh" },
    { label: "Harga Tertinggi", value: "priceHighLow" },
    { label: "Nama A-Z", value: "nameAZ" },
    { label: "Nama Z-A", value: "nameZA" },
];

const ITEMS_PER_PAGE = 30;

const LivingRoomPage: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState("relevant");
    const [currentPage, setCurrentPage] = useState(1);

    const handleCategoryChange = (value: string) => {
        setSelectedCategories(prev =>
            prev.includes(value)
                ? prev.filter(category => category !== value)
                : [...prev, value]
        );
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    const filteredProducts = () => {
        const productsByCategory = selectedCategories.length === 0
            ? products
            : products.filter(product => selectedCategories.includes(product.category));

        switch (sortOption) {
            case "priceLowHigh":
                return [...productsByCategory].sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
            case "priceHighLow":
                return [...productsByCategory].sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
            case "nameAZ":
                return [...productsByCategory].sort((a, b) => a.name.localeCompare(b.name));
            case "nameZA":
                return [...productsByCategory].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return productsByCategory;
        }
    };

    const paginatedProducts = (products: any[]) => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    };

    const totalPages = (products: any[]) => {
        return Math.ceil(products.length / ITEMS_PER_PAGE);
    };

    useEffect(() => {
        if (filteredProducts().length < ITEMS_PER_PAGE) {
            setCurrentPage(1);
        }
    }, [selectedCategories, sortOption]);

    return (
        <main>
            <Navbar isHomePage={false} />
            <div className="relative w-full h-[400px] mt-20">
                <Image 
                    src="/images/furniture/livingroom.png" 
                    alt="Living Room Furniture" 
                    layout="fill" 
                    objectFit="cover" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
                    <h1 className="text-white text-4xl ml-8 font-crete">Living Room Furniture</h1>
                </div>
            </div>
            <div className="container mx-auto py-8 flex">
                <div className="w-1/4">
                    <h2 className="font-worksans text-lg font-semibold mb-4">Kategori</h2>
                    {categories.map(({ label, value }) => (
                        <div key={value} className="mb-2 custom-checkbox">
                            <label className="flex items-center font-worksans">
                                <input
                                    type="checkbox"
                                    value={value}
                                    checked={selectedCategories.includes(value)}
                                    onChange={() => handleCategoryChange(value)}
                                    className="mr-2 accent-blue-tua"
                                />
                                {label}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="w-3/4 pl-8">
                    <div className="flex justify-between items-center mb-8 gap-6 font-worksans">
                        <p className="text-gray-700 text-base">{filteredProducts().length} produk</p>
                        <div className="flex items-center">
                            <select
                                className="bg-transparent"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                {sortOptions.map(({ label, value }) => (
                                    <option key={value} value={value}>{label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 font-worksans">
                        {paginatedProducts(filteredProducts()).map(product => (
                            <Link key={product.id} href={`/products/${product.id}`} legacyBehavior>
                                <a className="cursor-pointer">
                                    <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-[300px] object-cover mb-4 rounded-lg" />
                                    {product.discount && (
                                        <div className="text-red-500 font-medium">
                                            {product.discount} OFF
                                        </div>
                                    )}
                                    <h2 className="font-medium text-blue-tua ">{product.name}</h2>
                                    {product.discount ? (
                                        <div className="flex items-center">
                                            <p className="text-gray-500 font-medium line-through mr-4">{`Rp ${product.price.toLocaleString('id-ID')},00`}</p>
                                            <p className="text-red-500 font-medium">{`Rp ${product.discountedPrice.toLocaleString('id-ID')},00`}</p>
                                        </div>
                                    ) : (
                                        <p className="text-blue-tua font-medium">{`Rp ${product.price.toLocaleString('id-ID')},00`}</p>
                                    )}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center my-12 font-worksans font-semibold text-lg">
                        <div className='w-1/2 flex justify-center'>
                            {Array.from({ length: totalPages(filteredProducts()) }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-[18px] p-0 mx-4 border-none ${currentPage === i + 1 ? 'text-salmon-3' : 'text-gray-400'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LivingRoomPage;

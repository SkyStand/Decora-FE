"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IProduct from '../../../data/interface/response/IProduct';
import instance from '../../../helpers/AxiosInstance';
import ProductService from '../../../data/services/ProductService';

// const products = [
//     {
//         id: 1,
//         name: "Classic Chair",
//         style: "Classic",
//         category: "chair",
//         image: "/images/furniture/livingroom.png",
//         price: 15189000,
//         discount: "60%",
//         discountedPrice: 6075600,
//         description: "This chair is perfect for any classic-style living room."
//     },
//     {
//         id: 2,
//         name: "Modern Table",
//         style: "Modern",
//         category: "table",
//         image: "/images/furniture/livingroom.png",
//         price: 2599999,
//         description: "A modern table that fits any modern living room."
//     },
//     {
//         id: 3,
//         name: "Minimalist Cabinet",
//         style: "Minimalist",
//         category: "cabinet",
//         image: "/images/furniture/livingroom.png",
//         price: 42899000,
//         discount: "20%",
//         discountedPrice: 34319200,
//         description: "A minimalist cabinet with ample storage space."
//     },
//     {
//         id: 4,
//         name: "Classic Bed",
//         style: "Classic",
//         category: "bed",
//         image: "/images/furniture/livingroom.png",
//         price: 329000,
//         discount: "10%",
//         discountedPrice: 296100,
//         description: "A classic bed that brings elegance to your bedroom."
//     },
//     {
//         id: 5,
//         name: "Modern Chair",
//         style: "Modern",
//         category: "chair",
//         image: "/images/furniture/livingroom.png",
//         price: 109999000,
//         description: "A modern chair with a sleek design."
//     }
// ];

const categories = [
    { label: "Kursi", value: "kursi" },
    { label: "Meja", value: "meja" },
    { label: "Kasur", value: "kasur" },
    { label: "Kabinet", value: "kabinet" },
];

const sortOptions = [
    { label: "Paling Relevan", value: "relevant" },
    { label: "Harga Terendah", value: "priceLowHigh" },
    { label: "Harga Tertinggi", value: "priceHighLow" },
    { label: "Nama A-Z", value: "nameAZ" },
    { label: "Nama Z-A", value: "nameZA" },
];

const ITEMS_PER_PAGE = 30;

const ProductFilter: React.FC = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState("relevant");
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [imagePath, setImagePath] = useState<string>()
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

    const filteredProducts = useCallback(() => {
        const productsByCategory = selectedCategories.length === 0
            ? products
            : products.filter(product => selectedCategories.includes(product.category));

        switch (sortOption) {
            case "priceLowHigh":
                return [...productsByCategory].sort((a, b) => (a.variants[0]?.price - a.variants[0]?.diskon || a.variants[0]?.price) - (b.variants[0]?.price - b.variants[0]?.diskon || b.variants[0]?.price));
            case "priceHighLow":
                return [...productsByCategory].sort((a, b) => (b.variants[0]?.price - b.variants[0]?.diskon || b.variants[0]?.price) - (a.variants[0]?.price - a.variants[0]?.diskon || a.variants[0]?.price));
            case "nameAZ":
                return [...productsByCategory].sort((a, b) => a.name.localeCompare(b.name));
            case "nameZA":
                return [...productsByCategory].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return productsByCategory;
        }
    }, [products, selectedCategories, sortOption]);

    const paginatedProducts = (products: IProduct[]) => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    };

    const totalPages = (products: IProduct[]) => {
        return Math.ceil(products.length / ITEMS_PER_PAGE);
    };

    useEffect(() => {
        if (filteredProducts().length < ITEMS_PER_PAGE) {
            setCurrentPage(1);
        }
    }, [selectedCategories, sortOption, filteredProducts]);

    useEffect(() => {
        new ProductService(instance).fetch().then((value) => {
            setProducts(value)
        })
        new ProductService(instance).getImagePath().then((value) => {
            setImagePath(value)
        })
    }, [])

    return (
        <div className="flex">
            <div className="w-1/6">
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
            <div className="w-5/6">
                <div className="flex justify-end items-center mb-8 gap-6 font-worksans">
                    <div>
                        <p className="text-gray-700 text-base">
                            {filteredProducts().length} produk
                        </p>
                    </div>
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
                                <img src={product.image.includes("http") == true ? product.image : `${imagePath}/${product.image}`} alt={product.name} width={300} height={300} className="w-full h-[300px] object-cover mb-4 rounded-lg" />
                                {product.variants[0]?.diskon && (
                                    <div className="text-red-500 font-medium">
                                        {product.variants[0].diskon}% OFF
                                    </div>
                                )}
                                <h2 className="font-medium text-blue-tua ">{product.name}</h2>
                                {product.variants[0]?.diskon ? (
                                    <div className="flex items-center">
                                        <p className="text-gray-500 font-medium line-through mr-4">{`Rp ${product.variants[0]?.price.toLocaleString('id-ID')},00`}</p>
                                        <p className="text-red-500 font-medium">{`Rp ${(product.variants[0]?.price - (product.variants[0]?.price * product.variants[0]?.diskon / 100)).toLocaleString('id-ID')},00`}</p>
                                    </div>
                                ) : (
                                    <p className="text-blue-tua font-medium">{`Rp ${product.variants[0]?.price.toLocaleString('id-ID')},00`}</p>
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
    );
};

export default ProductFilter;

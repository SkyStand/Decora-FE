"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from '@material-tailwind/react';

// Sample product data
const products = [
    {
        id: 1,
        name: "Classic Chair",
        style: "classic",
        category: "chair",
        image: "/images/furniture/livingroom.png",
        price: "Rp 15.189.000,00",
        discount: "60%", 
        discountedPrice: "Rp 6.075.600,00"  
    },
    {
        id: 2,
        name: "Modern Table",
        style: "modern",
        category: "table",
        image: "/images/furniture/livingroom.png",
        price: "Rp 2.599.999,00",
    },
    {
        id: 3,
        name: "Minimalist Sofa",
        style: "minimalist",
        category: "sofa",
        image: "/images/furniture/livingroom.png",
        price: "Rp 42.899.000,00",
        discount: "20%",
        discountedPrice: "Rp 34.319.200,00"
    },
    {
        id: 4,
        name: "Classic Lamp",
        style: "classic",
        category: "lamp",
        image: "/images/furniture/livingroom.png",
        price: "Rp 329.000,00",
        discount: "10%",
        discountedPrice: "Rp 296.100,00"
    },
    {
        id: 5,
        name: "Modern Chair",
        style: "modern",
        category: "chair",
        image: "/images/furniture/livingroom.png",
        price: "Rp 109.999.000,00",
    },
];

const categories = [
    { label: "All", value: "All" },
    { label: "Classic", value: "classic" },
    { label: "Modern", value: "modern" },
    { label: "Minimalist", value: "minimalist" },
];

const TabsStyle: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = (value: string) => {
        return value === "All"
            ? products
            : products.filter(product => product.style === value);
    };

    return (
        <Tabs value={activeTab} onChange={(value: React.SetStateAction<string>) => setActiveTab(value)} >
            <TabsHeader className="mx-7">
                {categories.map(({ label, value }) => (
                    <Tab key={value} value={value} className='text-blue-tua font-crete text-lg'>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                }}
            >
                {categories.map(({ value }) => (
                    <TabPanel key={value} value={value}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 font-worksans">
                            {filteredProducts(value).map(product => (
                                <div key={product.id} className="p-4">
                                    <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-[300px] object-cover mb-4 rounded-lg" />
                                    {product.discount && (
                                        <div className="text-red-500 font-medium">
                                            {product.discount} OFF
                                        </div>
                                    )}
                                    <h2 className="font-medium text-blue-tua ">{product.name}</h2>
                                    {product.discount ? (
                                        <div className="flex items-center">
                                            <p className="text-gray-500 font-medium line-through mr-4">{product.price}</p>
                                            <p className="text-red-500 font-medium">{product.discountedPrice}</p>
                                        </div>
                                    ) : (
                                        <p className="text-blue-tua font-medium">{product.price}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
};

export default TabsStyle;

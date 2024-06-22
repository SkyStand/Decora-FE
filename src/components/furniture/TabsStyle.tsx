"use client"


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from '@material-tailwind/react';
import ProductService from '../../../data/services/ProductService';
import IProduct from '../../../data/interface/response/IProduct';

const categories = [
    { label: "All", value: "All" },
    { label: "Classic", value: "classic" },
    { label: "Modern", value: "modern" },
    { label: "Minimalist", value: "minimalist" },
];

const productService = new ProductService();

const TabsStyle: React.FC = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const products = await productService.fetch();
                setProducts(products);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Failed to fetch products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = (value: string) => {
        return value === "All"
            ? products
            : products.filter(product => product.style === value);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Tabs value={activeTab} onChange={setActiveTab} >
            <TabsHeader color="blue">
                {categories.map(({ label, value }) => (
                    <Tab key={value} value={value} className='text-blue-tua font-crete text-lg'>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {categories.map(({ value }) => (
                    <TabPanel key={value} value={value}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 font-worksans">
                            {filteredProducts(value).map(product => (
                                <div key={product.id} className="p-4">
                                    <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-[300px] object-cover mb-4 rounded-lg" />
                                    {product.variants.length > 0 && (
                                        <div className="text-red-500 font-medium">
                                            {product.variants[0].diskon}% OFF
                                        </div>
                                    )}
                                    <h2 className="font-medium text-blue-tua ">{product.name}</h2>
                                    {product.variants.length > 0 ? (
                                        <div className="flex items-center">
                                            <p className="text-gray-500 font-medium line-through mr-4">{`Rp ${product.variants[0].price.toLocaleString('id-ID')},00`}</p>
                                            <p className="text-red-500 font-medium">{`Rp ${(product.variants[0].price - (product.variants[0].price * product.variants[0].diskon / 100)).toLocaleString('id-ID')},00`}</p>
                                        </div>
                                    ) : (
                                        <p className="text-blue-tua font-medium">{`Rp ${product.variants[0].price.toLocaleString('id-ID')},00`}</p>
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

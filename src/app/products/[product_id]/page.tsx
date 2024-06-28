"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import CartConfirmation from '@/components/CartConfirmation';
import ProductService from '../../../../data/services/ProductService';
import IProductDetails from '../../../../data/interface/response/IProductDetails';
import CartService from '../../../../data/services/CartService';

interface ProductDetailProps {
    params: {
        product_id: number;
    };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
    const [products, setProducts] = useState<IProductDetails | null>(null);
    const [imagePath, setImagePath] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setQuantity(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productService = new ProductService();
                const productData = await productService.detail(params.product_id);
                setProducts(productData);

                const imagePathResponse = await productService.getImagePath();
                setImagePath(imagePathResponse);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [params.product_id]);

    const handleVariantChange = (index: number) => {
        setSelectedVariantIndex(index);
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
    };

    const addToCart = async () => {
        if (!products) {
            console.error('Product details are not available.');
            return;
        }

        try {
            const selectedVariant = products.variants[selectedVariantIndex];
            if (!selectedVariant) {
                setErrorMessage('Variant tidak tersedia');
                return;
            }

            const cartService = new CartService();
            const response = await cartService.insert(selectedVariant.id, quantity);
            console.log('Added to cart:', response);

            setModalOpen(true);
        } catch (error) {
            console.error('Error adding to cart:', error);
            setErrorMessage('Gagal menambahkan ke keranjang');
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (!products || !imagePath) {
        return <div>Loading...</div>;
    }

    const selectedVariant = products.variants[selectedVariantIndex];
    const discountedPrice = selectedVariant.price - (selectedVariant.price * (selectedVariant.diskon || 0) / 100);

    return (
        <main className="relative pt-16">
            <Navbar isHomePage={false} />
            <div className="w-full h-auto mx-auto flex flex-col lg:flex-row items-start py-8 gap-8">
                <div className="w-full lg:w-1/2">
                    <Image src={products.image} alt={products.name} width={700} height={600} className="w-full h-[600px] object-cover" />
                </div>
                <div className="w-full lg:w-1/2 font-worksans lg:pl-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold mb-2">{products.name}</h1>
                    <div className="mb-6 text-blue-tua">
                        <h2 className="text-lg font-medium mb-2">Pilih warna:</h2>
                        <div className="flex gap-2">
                            {products.variants.map((variant, index) => (
                                <div
                                    key={index}
                                    className={`w-11 h-11 rounded-lg border flex items-center justify-center cursor-pointer ${index === selectedVariantIndex ? 'border-blue-tua' : ''}`}
                                    onClick={() => handleVariantChange(index)}
                                >
                                    <Image src={variant.image} alt={variant.variant_name} width={40} height={40} className="object-cover rounded-lg" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        {selectedVariant.diskon ? (
                            <>
                                <span className="text-xl font-semibold text-red-600 mr-2">{`Rp ${discountedPrice.toLocaleString('id-ID')},00`}</span>
                                <span className="text-lg text-gray-500 line-through mr-2">{`Rp ${selectedVariant.price.toLocaleString('id-ID')},00`}</span>
                                <span className="text-lg text-red-500">{selectedVariant.diskon}% Off</span>
                            </>
                        ) : (
                            <span className="text-xl font-semibold text-blue-tua">{`Rp ${selectedVariant.price.toLocaleString('id-ID')},00`}</span>
                        )}
                    </div>

                    {/* Quantity selection */}
                    <div className="mb-8 flex items-center text-blue-tua">
                        <h2 className="text-lg font-medium mr-10">Jumlah</h2>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={handleDecrement}
                                className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-700"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-16 text-center bg-transparent"
                                min={1}
                                max={selectedVariant.qty || 1}
                            />
                            <button
                                onClick={handleIncrement}
                                className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-700"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart button */}
                    <button
                        onClick={addToCart}
                        className="px-4 py-3 bg-salmon-3 text-salmon-1 text-lg font-medium rounded-2xl w-full border-none"
                        disabled={!products || selectedVariant.qty === 0 || !selectedVariant}
                    >
                        {selectedVariant.qty === 0 ? 'Stok Habis' : 'Tambah ke Keranjang'}
                    </button>

                    {errorMessage && (
                        <p className="text-red-600 mt-2">{errorMessage}</p>
                    )}

                    {/* Cart confirmation modal */}
                    <CartConfirmation isOpen={isModalOpen} onClose={closeModal} product={products} quantity={quantity} selectedVariant={selectedVariant} />
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;

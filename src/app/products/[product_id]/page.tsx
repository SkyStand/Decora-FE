"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import CartConfirmation from "@/components/CartConfirmation";
import ProductService from "../../../../data/services/ProductService";
import IProductDetails, { Variant } from "../../../../data/interface/response/IProductDetails";
import CartService from "../../../../data/services/CartService";
import instance from "../../../../helpers/AxiosInstance";

interface ProductDetailProps {
    params: {
        product_id: number;
    };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params }) => {
    const [products, setProducts] = useState<IProductDetails | null>(null);
    const [imagePath, setImagePath] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
    const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isDimensionsOpen, setDimensionsOpen] = useState(false);


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
                setSelectedVariantIndex(0);
                const imagePathResponse = await productService.getImagePath();
                setImagePath(imagePathResponse);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params.product_id]);

    useEffect(() => {
        if (products) {
            const variant = products.variants[selectedVariantIndex];
            if (!variant) {
                setSelectedVariant(null);
                setDiscountedPrice(null);
                return;
            }
            const discountedPrice = variant.price - (variant.price * (variant.diskon || 0)) / 100;
            setSelectedVariant(variant);
            setDiscountedPrice(discountedPrice);
        }
        new ProductService(instance).getImagePath().then((value) => {
            setImagePath(value)
        })
    }, [selectedVariantIndex, products]);

    const handleVariantChange = (index: number) => {
        setSelectedVariantIndex(index);
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
    };

    const addToCart = async () => {
        if (!products || !selectedVariant) {
            console.error("Product details or variant are not available.");
            return;
        }

        try {
            const cartService = new CartService();
            const cartData = await cartService.fetch()
            const existingCartItem = cartData.find(item => item.variant_id === selectedVariant.id);

            if (existingCartItem) {
                const response = await cartService.update(selectedVariant.id, quantity, existingCartItem.id);
                console.log("Updated cart item:", response);
            } else {
                const response = await cartService.insert(selectedVariant.id, quantity);
                console.log("Added to cart:", response);
            }

            setModalOpen(true);
        } catch (error) {
            console.error("Error adding to cart:", error);
            setErrorMessage("Gagal menambahkan ke keranjang");
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (products == null || imagePath == null) {
        return <div>Loading...</div>;
    }

    return (
        <main className="relative pt-16">
            <Navbar isHomePage={false} />
            <div className="w-full h-auto mx-auto flex flex-col lg:flex-row items-start py-8 gap-8">
                <div className="w-full lg:w-1/2">
                    <img src={products.image.includes("http") == true ? products.image : `${imagePath}/${products.image}`}
                        alt={products.name}
                        width={700}
                        height={600}
                        className="w-full h-[600px] object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2 font-worksans lg:pl-8 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold mb-2">{products.name}</h1>

                    <div className="mb-6 mt-2">
                        {selectedVariant && selectedVariant.diskon ? (
                            <>
                                <span className="text-xl font-semibold text-red-600 mr-2">{`Rp ${discountedPrice?.toLocaleString(
                                    "id-ID"
                                )},00`}</span>
                                <span className="text-lg text-gray-500 line-through mr-2">{`Rp ${selectedVariant.price.toLocaleString(
                                    "id-ID"
                                )},00`}</span>
                                <span className="text-lg text-red-500">
                                    {selectedVariant.diskon}% Off
                                </span>
                            </>
                        ) : (
                            selectedVariant && (
                                <span className="text-xl font-semibold text-blue-tua">{`Rp ${selectedVariant.price.toLocaleString(
                                    "id-ID"
                                )},00`}</span>
                            )
                        )}
                    </div>
                    <div className="mb-6 text-blue-tua">
                        <h2 className="text-lg font-medium mb-2">Pilih warna:</h2>
                        <div className="flex gap-2">
                            {products.variants.map((variant, index) => (
                                <div
                                    key={index}
                                    className={`w-11 h-11 rounded-lg border-none flex items-center justify-center cursor-pointer ${index === selectedVariantIndex ? "border-blue-tua" : ""
                                        }`}
                                    onClick={() => handleVariantChange(index)}
                                >
                                    <img
                                        src={variant.image.includes("http") == true ? variant.image : `${imagePath}/${variant.image}`}
                                        alt={variant.variant_name}
                                        width={100}
                                        height={100}
                                        className="object-cover rounded-lg img-fluid"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


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
                                title="quantity"
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-16 text-center bg-transparent"
                                min={1}
                                max={selectedVariant?.qty || 1}
                            />
                            <button
                                onClick={handleIncrement}
                                className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full text-gray-700"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={addToCart}
                        className="px-4 py-3 bg-salmon-3 text-salmon-1 text-lg font-medium rounded-2xl w-full border-none"
                        disabled={
                            products == null ||
                            selectedVariant?.qty === 0 ||
                            selectedVariant == null
                        }
                    >
                        {selectedVariant?.qty === 0 ? "Stok Habis" : "Tambah ke Keranjang"}
                    </button>

                    {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
                    <div className="mt-8">
                        <button onClick={() => setDescriptionOpen(!isDescriptionOpen)}
                            className="flex items-center justify-between w-full text-lg font-medium mb-2 focus:outline-none">
                            <span>Deskripsi</span>
                            <span>{isDescriptionOpen ? '-' : '+'}</span>
                        </button>
                        {isDescriptionOpen && (
                            <p className="text-gray-600 mt-2">{products.description}</p>
                        )}
                    </div>

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
                                <p className="text-gray-600">Dimensi: {products.panjang_product} cm x {products.lebar_product} cm x {products.tinggi_product} cm</p>
                                <p className="text-gray-600">Berat: {products.berat} kg</p>
                            </div>
                        )}

                    </div>

                    <CartConfirmation
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        product={products}
                        quantity={quantity}
                        selectedVariant={selectedVariant!}
                    />
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;

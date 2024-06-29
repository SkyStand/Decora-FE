import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IProductDetails from '../../data/interface/response/IProductDetails';

interface CartConfirmationProps {
    isOpen: boolean;
    onClose: () => void;
    product: IProductDetails;
    quantity: number;
    selectedVariant: {
        id: number;
        product_id: number;
        image: string;
        variant_name: string;
        price: number;
        diskon: number;
        qty: number;
        created_at: string;
        updated_at: string;
    };
}

const CartConfirmation: React.FC<CartConfirmationProps> = ({ isOpen, onClose, product, quantity, selectedVariant }) => {
    if (!isOpen) return null;

    const unitPrice = (selectedVariant.price - selectedVariant.diskon) || selectedVariant.price;
    const subtotal = unitPrice * quantity;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-worksans">
            <div className="bg-white rounded-lg p-8 w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 w-8 border-none text-2xl mt-4 mr-8 text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4">Ditambahkan ke Keranjang</h2>
                <div className="flex items-center mb-8">
                    <Image src={product.image} alt={product.name} width={150} height={100} className="rounded-lg w-[150px] h-[100px] object-cover" />
                    <div className="ml-4">
                        <h3 className="text-lg font-medium">{product.name}</h3>
                        <p className="text-gray-500">{`Qty: ${quantity}`}</p>
                        <p className="text-gray-500">{`Warna: ${selectedVariant.variant_name}`}</p>
                        <p className="text-gray-500">{`Harga Satuan: Rp ${selectedVariant.price.toLocaleString('id-ID')},00`}</p>
                    </div>
                </div>
                <div className="flex justify-between mb-4">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">{`Rp ${subtotal.toLocaleString('id-ID')},00`}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <Link href="/cart" legacyBehavior>
                        <a
                            onClick={onClose}
                            className="w-full p-3 bg-salmon-3 text-salmon-1 text-center font-semibold rounded-lg"
                        >
                            Lihat Keranjang
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartConfirmation;

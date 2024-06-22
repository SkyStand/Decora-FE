
export default interface IProduct {
    id: number;
    image: string;
    name: string;
    description: string;
    type: string;
    category: string;
    style: string;
    berat?: number | null;
    panjang_product?: number | null;
    lebar_product?: number | null;
    tinggi_product?: number | null;
    variants: Variant[];
}

export interface Variant {
    id: number;
    product_id: number;
    image: string;
    variant_name: string;
    price: number;
    diskon: number;
    qty: number;
    created_at: string;
    updated_at: string;
}

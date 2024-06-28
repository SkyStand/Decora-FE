export default interface ICartItems {
    id: number
    user_id: number
    variant_id: number
    qty: number
    created_at: string
    updated_at: string
    variants: Variant[];
}

export interface Variant {
    id: number
    product_id: number
    image: string
    variant_name: string
    price: number
    diskon: number
    qty: number
    created_at: string
    updated_at: string
    product: Product
}

export interface Product {
    id: number
    image: string
    name: string
    description: string
    type: string
    category: string
    created_at: string
    updated_at: string
    style: string
    berat: number
    panjang_product: number
    lebar_product: number
    tinggi_product: number
}

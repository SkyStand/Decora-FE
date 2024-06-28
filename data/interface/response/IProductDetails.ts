export default interface IProductDetails {
    id: number
    image: string
    name: string
    description: string
    type: string
    category: string
    style: string
    berat: number
    panjang_product: number
    lebar_product: number
    tinggi_product: number
    variants: Variant[]
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
}

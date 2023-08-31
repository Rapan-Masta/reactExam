export type Product = {
    id: number
    title: string
    discription: string
    priceUSD: number
    priceEUR: number
    priceUAH: number
    priceJPY: number
}

const productsArr: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        discription: 'This is iPhone 12 ...',
        priceUSD: 700,
        priceEUR: 750,
        priceUAH: 15000,
        priceJPY: 25000,
    },
    {
        id: 2,
        title: 'iPhone 8',
        discription: 'This is iPhone 8 ...',
        priceUSD: 800,
        priceEUR: 850,
        priceUAH: 18000,
        priceJPY: 29000,
    },
    {
        id: 3,
        title: 'iPhone X',
        discription: 'This is iPhone X ...',
        priceUSD: 1100,
        priceEUR: 1250,
        priceUAH: 55000,
        priceJPY: 75000,
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArr

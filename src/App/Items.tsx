import { Product } from '../utils/productsArr'

type Props = {
    title: string
    discription: string
    price: number
    item: Product
    addItemToTotal: (count: number, item: Product) => void
}

const Items = ({ title, discription, price, addItemToTotal, item }: Props) => {
    return (
        <div className="item">
            <h2 className="name">{title}</h2>
            <p>{discription}</p>
            <p>{price}</p>
            <button onClick={() => addItemToTotal(1, item)}>BUY</button>
        </div>
    )
}
export default Items

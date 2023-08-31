type Props = {
    title: string
    discription: string
    price: number
    addItemToTotal: (count: number, price: number) => void
}

const Items = ({ title, discription, price, addItemToTotal }: Props) => {
    return (
        <div className="item">
            <h2 className="name">{title}</h2>
            <p>{discription}</p>
            <p>{price}</p>
            <button onClick={() => addItemToTotal(1, price)}>BUY</button>
        </div>
    )
}
export default Items

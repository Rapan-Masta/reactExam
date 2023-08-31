import { useState } from 'react'
import productsArr from '../utils/productsArr'
import './app-style.css'
import Items from './Items'

type Props = {}

type ItemsData = {
    counItems: number
    priceItems: number
}

const App = (props: Props) => {
    const [itemsTotal, setItemsTotal] = useState<ItemsData>({
        counItems: 0,
        priceItems: 0,
    })

    const addItemToTotal = (count: number, price: number) => {
        setItemsTotal((prevState) => ({
            counItems: prevState.counItems + count,
            priceItems: prevState.priceItems + price * count,
        }))
    }

    return (
        <div className="main">
            <h1>Shop page</h1>
            <div className="buttons">
                <button>usd</button>
                <button>eur</button>
                <button>uah</button>
                <button>jky</button>
            </div>
            <div className="items">
                {productsArr.map((item) => (
                    <div key={item.id}>
                        <Items
                            addItemToTotal={addItemToTotal}
                            title={item.title}
                            discription={item.discription}
                            price={item.priceUSD}
                        />
                    </div>
                ))}
            </div>
            <p>Total: {itemsTotal.priceItems}</p>
        </div>
    )
}
export default App

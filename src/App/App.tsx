import { useState } from 'react'
import productsArr from '../utils/productsArr'
import './app-style.css'
import Items from './Items'
import { Product } from '../utils/productsArr'

type Props = {}

type ItemsData = {
    counItems: number
    priceItems: number
    bucket: Product[]
    currency: string
}

const App = (props: Props) => {
    const [itemsTotal, setItemsTotal] = useState<ItemsData>({
        counItems: 0,
        priceItems: 0,
        bucket: [],
        currency: 'usd',
    })

    const addItemToTotal = (count: number, item: Product) => {
        setItemsTotal((prevState) => ({
            ...prevState,
            counItems: prevState.counItems + count,
            priceItems: prevState.priceItems + returnPrice(item) * count,
            bucket: [...prevState.bucket, item],
        }))
    }

    const calCurrency = (currency: string) => {
        let sum = 0
        itemsTotal.bucket.forEach((item: Product) => {
            switch (currency) {
                case 'usd':
                    sum = item.priceUSD + sum
                    break
                case 'eur':
                    sum = item.priceEUR + sum
                    break
                case 'uah':
                    sum = item.priceUAH + sum
                    break
                case 'jky':
                    sum = item.priceJPY + sum
                    break
                default:
                    sum = item.priceUSD + sum
                    break
            }
        })
        setItemsTotal((prevState) => ({
            ...prevState,
            priceItems: sum,
            currency: currency,
        }))
    }

    const returnPrice = (item: Product) => {
        let price = 0
        switch (itemsTotal.currency) {
            case 'usd':
                price = item.priceUSD
                break
            case 'eur':
                price = item.priceEUR
                break
            case 'uah':
                price = item.priceUAH
                break
            case 'jky':
                price = item.priceJPY
                break
            default:
                price = item.priceUSD
                break
        }
        return price
    }

    return (
        <div className="main">
            <h1>Shop page</h1>
            <div className="buttons">
                <button onClick={() => calCurrency('usd')}>usd</button>
                <button onClick={() => calCurrency('eur')}>eur</button>
                <button onClick={() => calCurrency('uah')}>uah</button>
                <button onClick={() => calCurrency('jky')}>jky</button>
            </div>
            <div className="items">
                {productsArr.map((item) => (
                    <div key={item.id}>
                        <Items
                            addItemToTotal={addItemToTotal}
                            title={item.title}
                            discription={item.discription}
                            price={returnPrice(item)}
                            item={item}
                        />
                    </div>
                ))}
            </div>
            <p>Total: {itemsTotal.priceItems}</p>
        </div>
    )
}
export default App

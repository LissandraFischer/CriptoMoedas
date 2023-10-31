import style from './detail.module.css'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

interface CoinProps{
    symbol: string;
    name: string;
    price: string;
    market_cap: string;
    low_24h: string;
    high_24h:string;
    total_volume_24h: string;
    delta_24h: string;
    volume_24h: string;
    formatedPrice: string;
    formatedMarket: string;
    formatedLowPrice:string;
    formatedHighPrice: string;
}
    


export function Detail (){
    const {cripto} = useParams();

    useEffect(() =>{
        function getData(){
            fetch(` https://sujeitoprogramador.com/api-cripto/coin/?key=cc333fdc79bbecb8&symbol=${cripto}`)
            .then(response => response.json())
            .then((data:CoinProps) => {

                let price = Intl.NumberFormat ("pt-BR",{

                    style: "currency",
                    currency:"BRL"
                })

                const resultData = {
                    ...data,
                    formatedPrice: price.format(Number(data.price)),
                    formatedMarket: price.format(Number(data.market_cap)),
                    formatedLowPrice: price.format(Number(data.low_24h)),
                    formatedHighPrice: price.format(Number(data.high_24h)),

                }
                console.log(resultData);

            })
        }
        getData();
    },[cripto])

    return(
        <div>
            <h1>Pagina de detalhes {cripto}</h1>
        </div>
    )
}
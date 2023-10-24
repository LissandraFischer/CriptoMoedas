import style from './detail.module.css'
import {useParams} from 'react-router-dom'

export function Detail (){
    const {cripto} = useParams();
    return(
        <div>
            <h1>Pagina de detalhes {cripto}</h1>
        </div>
    )
}
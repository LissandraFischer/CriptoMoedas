import styles from "./home.module.css"
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export function Home (){
    return(
        <main className={styles.container}>
            <form className={styles.form}>
                <input 
                placeholder="Digite o simbolo da moeda: BTC.."
                />
                <button type="submit">
                <HiMiniMagnifyingGlass size={30} color="#fff"/>
                </button>

            </form>


        </main>
    )
}
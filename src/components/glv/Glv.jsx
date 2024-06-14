import {Card} from '../Card/Card'
import Styles from '../glv/Glv.module.css'


export const GLAV = () => { 

    return (
        <div className={Styles.GLAV}>
            <Card
                color="#2CB448"
                link="/components/cards/gon/Gon.jsx"
                imgs={[
                    "/src/assets/gon/Group 1.png", "/src/assets/gon/Rectangle 5.png"]}
            />
            
            <Card
                color="#C93AA6"
                link="/"
                imgs={[
                    "/src/assets/hisoka/hisoka.png", "/src/assets/hisoka/Rectangle 6.png", "/public/icon.svg"]}
            />

            <Card
                color="#333C6C"
                link="/"
                imgs={[
                    "/src/assets/killua/kilal.png", "/src/assets/killua/Rectangle 7.png"]}
            />
        </div>
    )
}
import {Card} from '../Card/Card'
import Styles from '../glv/Glv.module.css'


export const GLAV = () => { 

    return (
        <div className={Styles.GLAV}>
            <Card
                color="#2CB448"
                link="/Gon"
                imgs={[
                    "/src/assets/Group 1 (1).png", "/src/assets/Rectangle 5.png"]}
            />
            
            <Card
                color="#C93AA6"
                link="/Hisoka"
                imgs={[
                    "/src/assets/hisoka.png", "/src/assets/Rectangle 6.png", "/public/icon.svg"]}
            />

            <Card
                color="#333C6C"
                link="/Killua"
                imgs={[
                    "/src/assets/kilal.png", "/src/assets/Rectangle 7.png"]}
            />
        </div>
    )
}
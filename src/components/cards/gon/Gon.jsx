import Styles from './Gon.module.css'

export const Gon = () => {
    return (
        <div className={Styles.Gon}>
            <div className={Styles.razm}>
                <div className={Styles.Main}>
                    <div className={Styles.txt}>
                        <div className={Styles.back}>
                            <a href="/">
                            <img src="src\assets\arrow_back_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" /></a>
                            <h1>Gon</h1>
                        </div>
                        <p>Gon Freecss (ゴン゠フリークス, Gon Furīkusu) is a Rookie Hunter and the son of Ging Freecss.
                            Finding his father is Gon's motivation in becoming a Hunter. He has been the main protagonist
                            for most of the series, having said role in the Hunter Exam, Zoldyck Family, Heavens Arena, Greed Island,
                            and Chimera Ant arcs. He was also the deuteragonist of the Yorknew City arc.</p>
                        <div className={Styles.battons}>
                            <button className={Styles.knp}>"I can't stand being on the losing end forever!!"</button>
                            <div className={Styles.knps}>
                                <button>read manga</button>
                                <button>watch anime</button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.img}>
                        <img src="src\assets\фотка гона.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}